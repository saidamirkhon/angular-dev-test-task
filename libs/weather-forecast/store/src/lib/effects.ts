import { Injectable } from '@angular/core';
import {
	Actions,
	createEffect,
	ofType,
} from '@ngrx/effects';
import {
	Action,
	select,
	Store,
} from '@ngrx/store';
import { WeatherForecastActions } from './actions';
import {
	catchError,
	switchMap,
	withLatestFrom,
} from 'rxjs/operators';
import { WeatherForecastApiService } from '@bp/weather-forecast/api';
import { of } from 'rxjs';
import {
	cityIdToLatLon,
	getCityOptionList,
	latLonToCityId,
	noopNgrxAction,
} from '@bp/weather-forecast/util';
import {
	CityLatLonApiResponse,
	DailyWeatherForecastApiResponse,
	HourlyWeatherForecastApiResponse,
	Option,
	WeatherForecastInterval,
} from '@bp/weather-forecast/model';
import { HttpErrorResponse } from '@angular/common/http';
import { WeatherForecastSelectors } from './selectors';

@Injectable()
export class WeatherForecastEffects {
	fetchCityLatLon$ = createEffect(
		() => this.actions$
			.pipe(
				ofType(WeatherForecastActions.fetchCityLatLon),
				switchMap(({ city }) => {
					if (city.trim().length > 0) {
						return this.weatherForecastApiService
							.fetchCityLatLon(city)
							.pipe(
								switchMap((response: CityLatLonApiResponse[]) => of(
									WeatherForecastActions.fetchCityLatLonSuccess(
										{
											cityOptionList: getCityOptionList(response),
										},
									),
								)),
								catchError((error: HttpErrorResponse) => of(
									WeatherForecastActions.fetchCityLatLonFail({ error }),
									),
								),
							);
					}
					return of(noopNgrxAction);
				}),
			),
	);

	fetchWeatherForecast$ = createEffect(
		() => this.actions$
			.pipe(
				ofType(WeatherForecastActions.selectSuggestedCityOption),
				withLatestFrom(
					this.store$
						.pipe(
							select(WeatherForecastSelectors.selectWeatherForecastInterval),
						),
				),
				switchMap(
					(
						[
							{ suggestedCityOption },
							weatherForecastInterval,
						]: [
							Action & { suggestedCityOption: Option<string> },
							WeatherForecastInterval,
						],
					) => {
						const latLon = cityIdToLatLon(suggestedCityOption.value);
						if (latLon === null) {
							return of(noopNgrxAction());
						}
						switch (weatherForecastInterval) {
							case WeatherForecastInterval.DAY:
								return of(WeatherForecastActions.fetchDailyWeatherForecast({ latLon }));
							case WeatherForecastInterval.HOUR:
								return of(WeatherForecastActions.fetchHourlyWeatherForecast({ latLon }));
							default:
								return of(noopNgrxAction());
						}
					},
				),
			),
	);

	fetchDailyWeatherForecast$ = createEffect(
		() => this.actions$
			.pipe(
				ofType(WeatherForecastActions.fetchDailyWeatherForecast),
				switchMap(({ latLon }) => this.weatherForecastApiService
					.fetchDailyWeatherForecast(latLon)
					.pipe(
						switchMap(
							(apiResponse: DailyWeatherForecastApiResponse) => of(
								WeatherForecastActions.fetchDailyWeatherForecastSuccess(
									{
										cityId: latLonToCityId(latLon),
										apiResponse,
									},
								),
							),
						),
						catchError((error: HttpErrorResponse) => of(
							WeatherForecastActions.fetchDailyWeatherForecastFail({ error })),
						),
					),
				),
			),
	);

	fetchHourlyWeatherForecast$ = createEffect(
		() => this.actions$
			.pipe(
				ofType(WeatherForecastActions.fetchHourlyWeatherForecast),
				switchMap(({ latLon }) => this.weatherForecastApiService
					.fetchHourlyWeatherForecast(latLon)
					.pipe(
						switchMap(
							(apiResponse: HourlyWeatherForecastApiResponse) => of(
								WeatherForecastActions.fetchHourlyWeatherForecastSuccess(
									{
										cityId: latLonToCityId(latLon),
										apiResponse,
									},
								),
							),
						),
						catchError((error: HttpErrorResponse) => of(
							WeatherForecastActions.fetchHourlyWeatherForecastFail({ error })),
						),
					),
				),
			),
	);

	constructor(
		private actions$: Actions,
		private store$: Store,
		private weatherForecastApiService: WeatherForecastApiService,
	) {
	}
}
