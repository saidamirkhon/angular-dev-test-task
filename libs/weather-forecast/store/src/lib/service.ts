import { Injectable } from '@angular/core';
import {
	select,
	Store,
} from '@ngrx/store';
import { WeatherForecastActions } from './actions';
import {
	WeatherForecastGridData,
	WeatherForecastInterval,
} from '@bp/weather-forecast/model';
import {
	Observable,
	of,
} from 'rxjs';
import { WEATHER_FORECAST_INTERVAL_OPTION_LIST } from '@bp/weather-forecast/constant';
import { WeatherForecastSelectors } from './selectors';
import { Option } from '@bp/shared/model';

@Injectable()
export class WeatherForecastStoreService {
	weatherForecastIntervalOptionList$: Observable<Option<WeatherForecastInterval>[]> = of(WEATHER_FORECAST_INTERVAL_OPTION_LIST);
	weatherForecastInterval$: Observable<WeatherForecastInterval> = this.store$
		.pipe(
			select(WeatherForecastSelectors.selectWeatherForecastInterval),
		);
	city$: Observable<string> = this.store$
		.pipe(
			select(WeatherForecastSelectors.selectCity),
		);
	cityOptionList$: Observable<Option<string>[]> = this.store$
		.pipe(
			select(WeatherForecastSelectors.selectCityOptionList),
		);
	fetchCityLatLonIsInProgress$: Observable<boolean> = this.store$
		.pipe(
			select(WeatherForecastSelectors.selectFetchCityLatLonIsInProgress),
		);
	weatherForecastGridData$: Observable<WeatherForecastGridData> = this.store$
		.pipe(
			select(WeatherForecastSelectors.selectWeatherForecastGridData),
		);

	constructor(
		private store$: Store,
	) {
	}

	fetchCityLatLon(
		city: string,
	): void {
		this.store$
			.dispatch(
				WeatherForecastActions.fetchCityLatLon({ city }),
			);
	}

	setWeatherForecastInterval(
		weatherForecastInterval: WeatherForecastInterval,
	): void {
		this.store$
			.dispatch(
				WeatherForecastActions.setWeatherForecastInterval({ weatherForecastInterval }),
			);
	}

	selectSuggestedCityOption(
		suggestedCityOption: Option<string>,
	): void {
		this.store$
			.dispatch(
				WeatherForecastActions.selectSuggestedCityOption({ suggestedCityOption }),
			);
	}

	clearCitySearch(): void {
		this.store$
			.dispatch(
				WeatherForecastActions.clearCitySearch(),
			);
	}

}
