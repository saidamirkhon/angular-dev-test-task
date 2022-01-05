import { WeatherForecastApiResponseBase } from './weather-forecast-api-response-base';

export interface HourlyWeatherForecastApiResponse extends WeatherForecastApiResponseBase {
	hourly: {
		dt: number;
		temp: number;
		feels_like: number;
	}[];
}
