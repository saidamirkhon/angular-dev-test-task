import {
	getWeatherForecastGridColumnList,
	getWeatherForecastGridRecordList,
} from '@bp/weather-forecast/util';
import { WeatherForecastStore } from './store';
import {
	WeatherForecastDailyGridRecord,
	WeatherForecastGridData,
	WeatherForecastGridDataBase,
	WeatherForecastHourlyGridRecord,
	WeatherForecastInterval,
	WeatherForecastIntervalCityIdApiResponseMap,
} from '@bp/weather-forecast/model';
import { createSelector } from '@ngrx/store';
import { WEATHER_FORECAST_GRID_TITLE_MAP } from '@bp/weather-forecast/constant';
import {
	GridColumn,
	Option,
} from '@bp/shared/model';
import { stateSliceSelectorFactory } from '@bp/shared/util';

export module WeatherForecastSelectors {
	const selectSlice = stateSliceSelectorFactory<WeatherForecastStore.State>(WeatherForecastStore.key);
	export const selectWeatherForecastInterval = selectSlice<WeatherForecastInterval>('weatherForecastInterval');
	export const selectCity = selectSlice<string>('city');
	export const selectCityOptionList = selectSlice<Option<string>[]>('cityOptionList');
	export const selectFetchCityLatLonIsInProgress = selectSlice<boolean>('fetchCityLatLonIsInProgress');
	export const selectWeatherForecastGridData = createSelector(
		selectWeatherForecastInterval,
		selectSlice<boolean>('fetchWeatherForecastIsInProgress'),
		selectSlice<WeatherForecastIntervalCityIdApiResponseMap>('weatherForecastIntervalCityIdApiResponseMap'),
		selectSlice<Record<string, string>>('cityIdNameMap'),
		(
			weatherForecastInterval: WeatherForecastInterval,
			fetchWeatherForecastIsInProgress: boolean,
			weatherForecastIntervalCityIdApiResponseMap: WeatherForecastIntervalCityIdApiResponseMap,
			cityIdNameMap: Record<string, string>,
		): WeatherForecastGridData => {
			const columnList = getWeatherForecastGridColumnList(
				weatherForecastInterval,
				Object.values(weatherForecastIntervalCityIdApiResponseMap[weatherForecastInterval])[0],
			);
			return <WeatherForecastGridDataBase<WeatherForecastDailyGridRecord> | WeatherForecastGridDataBase<WeatherForecastHourlyGridRecord>> {
				title: WEATHER_FORECAST_GRID_TITLE_MAP[weatherForecastInterval],
				recordList: getWeatherForecastGridRecordList(
					weatherForecastInterval,
					weatherForecastIntervalCityIdApiResponseMap[weatherForecastInterval],
					cityIdNameMap,
				),
				columnList,
				displayedColumnNameList: columnList
					.map((column: GridColumn<WeatherForecastDailyGridRecord> | GridColumn<WeatherForecastHourlyGridRecord>) => column.recordField),
				loading: fetchWeatherForecastIsInProgress,
			};
		},
	);

}
