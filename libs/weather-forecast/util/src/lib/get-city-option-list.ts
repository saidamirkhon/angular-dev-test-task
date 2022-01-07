import {
	CityLatLonApiResponse,
	Option,
} from '@bp/weather-forecast/model';
import { latLonToCityId } from './lat-lon-to-city-id';

export function getCityOptionList(
	cityLatLonApiResponse: CityLatLonApiResponse[],
): Option<string>[] {
	return cityLatLonApiResponse
		.map((response: CityLatLonApiResponse) => (
				{
					value: latLonToCityId(response),
					label: `${response.name}, ${response.country}`,
				}
			),
		);
}
