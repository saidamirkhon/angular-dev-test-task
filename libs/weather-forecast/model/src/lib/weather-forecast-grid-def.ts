import {
	WeatherForecastGridColumn,
	WeatherForecastGridRecordBase,
} from '@bp/weather-forecast/model';

export interface WeatherForecastGridDef<T extends WeatherForecastGridRecordBase> {
	columnList: WeatherForecastGridColumn<T>[];
	recordList: T[];
}
