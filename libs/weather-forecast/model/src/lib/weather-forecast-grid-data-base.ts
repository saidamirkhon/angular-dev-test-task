import {
	WeatherForecastGridColumn,
	WeatherForecastGridRecordBase,
} from '@bp/weather-forecast/model';

export interface WeatherForecastGridDataBase<T extends WeatherForecastGridRecordBase> {
	title: string;
	columnList: WeatherForecastGridColumn<T>[];
	recordList: T[];
	loading: boolean;
}
