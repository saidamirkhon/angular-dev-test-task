import { LatLon } from './lat-lon';

export interface WeatherForecastApiResponseBase extends LatLon {
	timezone_offset: number;
}
