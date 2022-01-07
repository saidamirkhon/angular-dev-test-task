import { LatLon } from './lat-lon';

export interface CityLatLonApiResponse extends LatLon {
	name: string;
	country: string;
}
