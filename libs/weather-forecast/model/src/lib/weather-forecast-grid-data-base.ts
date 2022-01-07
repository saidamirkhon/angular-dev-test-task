import {
	WeatherForecastGridDef,
	WeatherForecastGridRecordBase,
} from '@bp/weather-forecast/model';

export interface WeatherForecastGridDataBase<T extends WeatherForecastGridRecordBase> extends WeatherForecastGridDef<T> {
	title: string;
	loading: boolean;
}
