import { LatLon } from '@bp/weather-forecast/model';
import { LAT_LON_DELIMITER } from '@bp/weather-forecast/constant';

export function latLonToCityId(latLon: LatLon): string {
	return `${latLon.lat}${LAT_LON_DELIMITER}${latLon.lon}`;
}
