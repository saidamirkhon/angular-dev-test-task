import {
	ChangeDetectionStrategy,
	Component,
} from '@angular/core';
import { WeatherForecastStoreService } from '@bp/weather-forecast/store';
import {
	ActivatedRoute,
	Router,
} from '@angular/router';
import {
	WeatherForecastInterval,
	WeatherForecastQueryParamKey,
	WeatherForecastQueryParams,
} from '@bp/weather-forecast/model';

@Component({
	selector: 'app-weather-forecast-page',
	templateUrl: './weather-forecast-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherForecastPageComponent {
	constructor(
		public weatherForecastStoreService: WeatherForecastStoreService,
		private router: Router,
		private route: ActivatedRoute,
	) {
	}

	fetchCityLatLon(city: string): void {
		const queryParams: WeatherForecastQueryParams = {
			[WeatherForecastQueryParamKey.CITY]: city,
		} as WeatherForecastQueryParams;
		this.router
			.navigate(
				[],
				{
					queryParams,
					relativeTo: this.route,
					queryParamsHandling: 'merge',
				},
			);
	}

	setWeatherForecastInterval(
		weatherForecastInterval: WeatherForecastInterval,
	): void {
		const queryParams: WeatherForecastQueryParams = {
			[WeatherForecastQueryParamKey.INTERVAL]: weatherForecastInterval,
		} as WeatherForecastQueryParams;
		this.router
			.navigate(
				[],
				{
					queryParams,
					relativeTo: this.route,
					queryParamsHandling: 'merge',
				},
			);
	}

	clearCitySearch(): void {
		const queryParams: WeatherForecastQueryParams = {
			[WeatherForecastQueryParamKey.CITY]: '',
		} as WeatherForecastQueryParams;
		this.router
			.navigate(
				[],
				{
					queryParams,
					relativeTo: this.route,
					queryParamsHandling: 'merge',
				},
			);
	}

}
