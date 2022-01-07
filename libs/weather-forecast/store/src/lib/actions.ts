import {
	createAction,
	props,
} from '@ngrx/store';
import { fetchFailActionFactory } from '@bp/weather-forecast/util';
import {
	DailyWeatherForecastApiResponse,
	HourlyWeatherForecastApiResponse,
	LatLon,
	Option,
	WeatherForecastInterval,
} from '@bp/weather-forecast/model';

export module WeatherForecastActions {
	export const fetchCityLatLon = createAction(
		'[Weather Forecast] Fetch city lat lon',
		props<{
			city: string;
		}>(),
	);
	export const fetchCityLatLonSuccess = createAction(
		'[Weather Forecast] Fetch city lat lon success',
		props<{
			cityOptionList: Option<string>[];
		}>(),
	);
	export const fetchCityLatLonFail = fetchFailActionFactory(
		'[Weather Forecast] Fetch city lat lon fail',
	);
	export const fetchDailyWeatherForecast = createAction(
		'[Weather Forecast] Fetch daily',
		props<{
			latLon: LatLon;
		}>(),
	);
	export const fetchDailyWeatherForecastSuccess = createAction(
		'[Weather Forecast] Fetch daily success',
		props<{
			cityId: string;
			apiResponse: DailyWeatherForecastApiResponse;
		}>(),
	);
	export const fetchDailyWeatherForecastFail = fetchFailActionFactory(
		'[Weather Forecast] Fetch daily fail',
	);
	export const fetchHourlyWeatherForecast = createAction(
		'[Weather Forecast] Fetch hourly',
		props<{
			latLon: LatLon;
		}>(),
	);
	export const fetchHourlyWeatherForecastSuccess = createAction(
		'[Weather Forecast] Fetch hourly success',
		props<{
			cityId: string;
			apiResponse: HourlyWeatherForecastApiResponse;
		}>(),
	);
	export const fetchHourlyWeatherForecastFail = fetchFailActionFactory(
		'[Weather Forecast] Fetch hourly fail',
	);
	export const clearCitySearch = createAction(
		'[Weather Forecast] Clear city search',
	);
	export const setWeatherForecastInterval = createAction(
		'[Weather Forecast] Set interval',
		props<{
			weatherForecastInterval: WeatherForecastInterval;
		}>(),
	);
	export const selectSuggestedCityOption = createAction(
		'[Weather Forecast] Select suggested city option',
		props<{
			suggestedCityOption: Option<string>;
		}>(),
	);
}
