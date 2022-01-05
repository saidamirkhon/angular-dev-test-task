import { WeatherForecastGridRecordBase } from './weather-forecast-grid-record-base';

export interface WeatherForecastGridColumn<T extends WeatherForecastGridRecordBase> {
	recordField: keyof T;
	title: string;
}
