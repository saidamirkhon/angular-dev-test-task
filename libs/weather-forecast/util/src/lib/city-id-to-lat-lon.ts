import { LatLon } from '@bp/weather-forecast/model';
import { LAT_LON_DELIMITER } from '@bp/weather-forecast/constant';

export function cityIdToLatLon(cityId: string): LatLon | null {
	const [latValue, lonValue] = cityId.split(LAT_LON_DELIMITER);
	const lat = parseFloat(latValue);
	const lon = parseFloat(lonValue);
	if (
		isNaN(lat)
		|| isNaN(lon)
	) {
		console.error('cannot parse LatLon from cityId');
		return null;
	}
	return {
		lat,
		lon,
	};
}
