import { LatLon } from './lat-lon';

export type CityLatLonApiResponse = (LatLon & {
	name: string;
	country: string;
})[];
