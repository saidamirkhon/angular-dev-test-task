import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import {
	forkJoin,
	Observable,
	of,
} from 'rxjs';
import {
	WeatherForecastInterval,
	WeatherForecastQueryParamKey,
	WeatherForecastQueryParams,
} from '@bp/weather-forecast/model';
import { getValidWeatherForecastQueryParams } from '@bp/weather-forecast/util';
import { isEqual } from 'lodash';
import { WeatherForecastStoreService } from '@bp/weather-forecast/store';
import {
	first,
	switchMap,
} from 'rxjs/operators';

@Injectable()
export class WeatherForecastValidQueryParamGuard implements CanActivate {
	constructor(
		private router: Router,
		private weatherForecastStoreService: WeatherForecastStoreService,
	) {
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): Observable<boolean | UrlTree> {
		const queryParams: WeatherForecastQueryParams = {
			[WeatherForecastQueryParamKey.CITY]: route.queryParamMap.get(WeatherForecastQueryParamKey.CITY),
			[WeatherForecastQueryParamKey.INTERVAL]: route.queryParamMap.get(WeatherForecastQueryParamKey.INTERVAL),
		} as WeatherForecastQueryParams;
		const validQueryParams = getValidWeatherForecastQueryParams(
			queryParams,
		);
		if (isEqual(queryParams, validQueryParams)) {
			return forkJoin(
				[
					this.weatherForecastStoreService.city$
						.pipe(
							first(),
						),
					this.weatherForecastStoreService.weatherForecastInterval$
						.pipe(
							first(),
						),
				],
			)
				.pipe(
					switchMap((
						[
							city,
							weatherForecastInterval,
						]: [
							string,
							WeatherForecastInterval
						],
					) => {
						if (validQueryParams[WeatherForecastQueryParamKey.INTERVAL] !== weatherForecastInterval) {
							this.weatherForecastStoreService.setWeatherForecastInterval(validQueryParams[WeatherForecastQueryParamKey.INTERVAL]);
						}

						if (validQueryParams[WeatherForecastQueryParamKey.CITY] !== city) {
							this.weatherForecastStoreService.fetchCityLatLon(validQueryParams[WeatherForecastQueryParamKey.CITY]);
						}
						return of(true);
					}),
				);
		}
		return of(null)
			.pipe(
				switchMap(() => {
					this.weatherForecastStoreService.setWeatherForecastInterval(validQueryParams[WeatherForecastQueryParamKey.INTERVAL]);
					this.weatherForecastStoreService.fetchCityLatLon(validQueryParams[WeatherForecastQueryParamKey.CITY]);
					return of(
						this.router
							.createUrlTree(
								route.url,
								{
									queryParams: validQueryParams,
								},
							),
					);
				}),
			);
	}

}
