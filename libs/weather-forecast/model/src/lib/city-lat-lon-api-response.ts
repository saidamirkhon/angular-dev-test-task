import { LatLon } from '@bp/shared/model';

export interface CityLatLonApiResponse extends LatLon {
	name: string;
	country: string;
}
