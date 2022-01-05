import { WeatherForecastGridRecordBase } from '@bp/weather-forecast/model';

export interface WeatherForecastDailyGridRecord extends WeatherForecastGridRecordBase {
	day1Temp: number;
	day2Temp: number;
	day3Temp: number;
	day4Temp: number;
	day5Temp: number;
	day6Temp: number;
	day7Temp: number;
}
