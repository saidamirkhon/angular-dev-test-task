import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { WeatherForecastStore } from './store';
import { EffectsModule } from '@ngrx/effects';
import { WeatherForecastEffects } from './effects';
import { WeatherForecastApiModule } from '@bp/weather-forecast/api';
import { WEATHER_FORECAST_API_LIB_CONFIG } from '@bp/weather-forecast/constant';
import { WeatherForecastStoreService } from './service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
	imports: [
		WeatherForecastApiModule
			.forRoot(
				WEATHER_FORECAST_API_LIB_CONFIG,
			),
		StoreModule.forFeature(
			WeatherForecastStore.key,
			WeatherForecastStore.reducerFactory(),
		),
		EffectsModule.forFeature(
			[
				WeatherForecastEffects,
			],
		),
		MatSnackBarModule,
	],
	providers: [
		WeatherForecastStoreService,
	],
})
export class WeatherForecastStoreModule {
}
