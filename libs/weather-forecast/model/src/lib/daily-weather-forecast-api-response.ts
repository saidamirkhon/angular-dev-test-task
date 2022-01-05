import { WeatherForecastApiResponseBase } from './weather-forecast-api-response-base';

export interface DailyWeatherForecastApiResponse extends WeatherForecastApiResponseBase {
	daily: {
		dt: number;
		temp: {
			day: number;
			min: number;
			max: number;
			night: number;
			eve: number;
			morn: number;
		}
	}[];
}
