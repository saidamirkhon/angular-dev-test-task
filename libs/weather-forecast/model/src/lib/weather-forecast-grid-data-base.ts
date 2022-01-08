import {
	WeatherForecastGridRecordBase,
} from '@bp/weather-forecast/model';
import { GridData } from '@bp/shared/model';

export interface WeatherForecastGridDataBase<T extends WeatherForecastGridRecordBase> extends GridData<T> {
}
