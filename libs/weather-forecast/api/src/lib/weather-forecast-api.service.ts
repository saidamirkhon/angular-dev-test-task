import {
	Inject,
	Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
	CityLatLonApiResponse,
	DailyWeatherForecastApiResponse,
	HourlyWeatherForecastApiResponse,
	LatLon,
	WeatherForecastApiLibConfig,
} from '@bp/weather-forecast/model';
import { WEATHER_FORECAST_API_LIB_CONFIG_INJECTION_TOKEN } from '@bp/weather-forecast/constant';

@Injectable()
export class WeatherForecastApiService {
	private readonly API_BASE_URL = 'https://api.openweathermap.org';

	constructor(
		private http: HttpClient,
		@Inject(WEATHER_FORECAST_API_LIB_CONFIG_INJECTION_TOKEN) private config: WeatherForecastApiLibConfig,
	) {
	}

	fetchCityLatLon(
		city: string,
	): Observable<CityLatLonApiResponse[]> {
		return this.http
			.get<CityLatLonApiResponse[]>(
				`${this.API_BASE_URL}/geo/1.0/direct`,
				{
					params: {
						limit: 1,
						appid: this.config.apiKey,
						q: city,
					},
				},
			);
	}

	fetchDailyWeatherForecast(
		latLon: LatLon,
	): Observable<DailyWeatherForecastApiResponse> {
		return this.http
			.get<DailyWeatherForecastApiResponse>(
				`${this.API_BASE_URL}/data/2.5/onecall`,
				{
					params: {
						...latLon,
						units: 'metric',
						exclude: [
							'current',
							'minutely',
							'hourly',
							'alerts',
						]
							.join(),
						appid: this.config.apiKey,
					},
				},
			);
	}

	fetchHourlyWeatherForecast(
		latLon: LatLon,
	): Observable<HourlyWeatherForecastApiResponse> {
		return this.http
			.get<HourlyWeatherForecastApiResponse>(
				`${this.API_BASE_URL}/data/2.5/onecall`,
				{
					params: {
						...latLon,
						units: 'metric',
						exclude: [
							'current',
							'minutely',
							'daily',
							'alerts',
						]
							.join(),
						appid: this.config.apiKey,
					},
				},
			);
	}

}
