import { WeatherForecastGridRecordBase } from '@bp/weather-forecast/model';

export interface WeatherForecastHourlyGridRecord extends WeatherForecastGridRecordBase {
	hour1Temp: number;
	hour2Temp: number;
	hour3Temp: number;
	hour4Temp: number;
	hour5Temp: number;
	hour6Temp: number;
	hour7Temp: number;
	hour8Temp: number;
}
