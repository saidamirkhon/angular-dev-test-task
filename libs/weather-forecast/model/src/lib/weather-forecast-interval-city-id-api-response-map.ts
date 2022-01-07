import {
	DailyWeatherForecastApiResponse,
	HourlyWeatherForecastApiResponse,
	WeatherForecastInterval,
} from '@bp/weather-forecast/model';

export interface WeatherForecastIntervalCityIdApiResponseMap {
	[WeatherForecastInterval.DAY]: Record<string, DailyWeatherForecastApiResponse>;
	[WeatherForecastInterval.HOUR]: Record<string, HourlyWeatherForecastApiResponse>;
}
