import {
	CityLatLonApiResponse,
} from '@bp/weather-forecast/model';
import { latLonToCityId } from './lat-lon-to-city-id';
import { Option } from '@bp/shared/model';

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
