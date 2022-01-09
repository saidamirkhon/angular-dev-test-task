import {
	WeatherForecastInterval,
	WeatherForecastQueryParamKey,
	WeatherForecastQueryParams,
} from '@bp/weather-forecast/model';

export function getValidWeatherForecastQueryParams(
	params: WeatherForecastQueryParams,
): WeatherForecastQueryParams {
	return {
		[WeatherForecastQueryParamKey.CITY]: params.CITY || '',
		[WeatherForecastQueryParamKey.INTERVAL]: WeatherForecastInterval[params.INTERVAL]
			? params.INTERVAL
			: WeatherForecastInterval.DAY,
	};
}
