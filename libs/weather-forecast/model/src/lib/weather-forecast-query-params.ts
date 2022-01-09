import {
	WeatherForecastInterval,
	WeatherForecastQueryParamKey,
} from '@bp/weather-forecast/model';

export interface WeatherForecastQueryParams {
	[WeatherForecastQueryParamKey.CITY]: string;
	[WeatherForecastQueryParamKey.INTERVAL]: WeatherForecastInterval;
}
