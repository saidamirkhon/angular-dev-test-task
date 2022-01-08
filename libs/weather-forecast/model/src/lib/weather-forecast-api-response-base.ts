import { LatLon } from '@bp/shared/model';

export interface WeatherForecastApiResponseBase extends LatLon {
	timezone_offset: number;
}
