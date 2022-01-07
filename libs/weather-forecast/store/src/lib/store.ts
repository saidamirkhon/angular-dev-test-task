import {
	ActionReducer,
	createReducer,
	on,
} from '@ngrx/store';
import {
	Option,
	WeatherForecastInterval,
	WeatherForecastIntervalCityIdApiResponseMap,
} from '@bp/weather-forecast/model';
import { WeatherForecastActions } from './actions';

export module WeatherForecastStore {
	export const key = 'weather-forecast';

	export interface State {
		cityIdNameMap: Record<string, string>;
		cityOptionList: Option<string>[];
		city: string;
		weatherForecastInterval: WeatherForecastInterval;
		weatherForecastIntervalCityIdApiResponseMap: WeatherForecastIntervalCityIdApiResponseMap;
		fetchCityLatLonIsInProgress: boolean;
		fetchWeatherForecastIsInProgress: boolean;
	}

	export const initialState: State = {
		cityIdNameMap: {},
		cityOptionList: [],
		city: '',
		weatherForecastInterval: WeatherForecastInterval.DAY,
		weatherForecastIntervalCityIdApiResponseMap: {
			[WeatherForecastInterval.DAY]: {},
			[WeatherForecastInterval.HOUR]: {},
		},
		fetchCityLatLonIsInProgress: false,
		fetchWeatherForecastIsInProgress: false,
	};

	export function reducerFactory(): ActionReducer<State> {
		return createReducer(
			initialState,
			on(
				WeatherForecastActions.fetchCityLatLon,
				(
					state: State,
					{ city },
				): State => (
					{
						...state,
						fetchCityLatLonIsInProgress: true,
						city,
					}
				),
			),
			on(
				WeatherForecastActions.fetchCityLatLonSuccess,
				(
					state: State,
					{ cityOptionList },
				): State => (
					{
						...state,
						cityOptionList,
						cityIdNameMap: {
							...cityOptionList
								.reduce(
									(
										newCityIdNameMap: Record<string, string>,
										cityOption: Option<string>,
									) => {
										newCityIdNameMap[cityOption.value] = cityOption.label;
										return newCityIdNameMap;
									},
									{},
								),
						},
						fetchCityLatLonIsInProgress: false,
					}
				),
			),
			on(
				WeatherForecastActions.fetchCityLatLonFail,
				(
					state: State,
				): State => (
					{
						...state,
						fetchCityLatLonIsInProgress: false,
					}
				),
			),
			on(
				WeatherForecastActions.fetchDailyWeatherForecast,
				WeatherForecastActions.fetchHourlyWeatherForecast,
				(
					state: State,
				): State => (
					{
						...state,
						fetchWeatherForecastIsInProgress: true,
					}
				),
			),
			on(
				WeatherForecastActions.fetchDailyWeatherForecastSuccess,
				WeatherForecastActions.fetchHourlyWeatherForecastSuccess,
				(
					state: State,
					{ cityId, apiResponse },
				): State => (
					{
						...state,
						weatherForecastIntervalCityIdApiResponseMap: {
							...state.weatherForecastIntervalCityIdApiResponseMap,
							[state.weatherForecastInterval]: {
								...state.weatherForecastIntervalCityIdApiResponseMap[state.weatherForecastInterval] || {},
								[cityId]: apiResponse,
							},
						},
						fetchWeatherForecastIsInProgress: false,
					}
				),
			),
			on(
				WeatherForecastActions.fetchDailyWeatherForecastFail,
				WeatherForecastActions.fetchHourlyWeatherForecastFail,
				(
					state: State,
				): State => (
					{
						...state,
						fetchWeatherForecastIsInProgress: false,
					}
				),
			),
			on(
				WeatherForecastActions.clearCitySearch,
				(
					state: State,
				): State => (
					{
						...state,
						city: '',
					}
				),
			),
			on(
				WeatherForecastActions.setWeatherForecastInterval,
				(
					state: State,
					{ weatherForecastInterval },
				): State => (
					{
						...state,
						weatherForecastInterval,
					}
				),
			),
			on(
				WeatherForecastActions.selectSuggestedCityOption,
				(
					state: State,
				): State => (
					{
						...state,
						cityOptionList: [],
					}
				),
			),
		);
	}
}
