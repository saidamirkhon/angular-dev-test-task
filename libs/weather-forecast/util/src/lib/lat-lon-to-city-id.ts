import { LAT_LON_DELIMITER } from '@bp/weather-forecast/constant';
import { LatLon } from '@bp/shared/model';

export function latLonToCityId(latLon: LatLon): string {
	return `${latLon.lat}${LAT_LON_DELIMITER}${latLon.lon}`;
}
