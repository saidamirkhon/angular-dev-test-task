import { WeatherForecastGridDataBase } from './weather-forecast-grid-data-base';
import { WeatherForecastDailyGridRecord } from './weather-forecast-daily-grid-record';
import { WeatherForecastHourlyGridRecord } from './weather-forecast-hourly-grid-record';

export type WeatherForecastGridData =
	WeatherForecastGridDataBase<WeatherForecastDailyGridRecord>
	| WeatherForecastGridDataBase<WeatherForecastHourlyGridRecord>;
