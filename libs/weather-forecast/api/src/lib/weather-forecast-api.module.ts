import {
	ModuleWithProviders,
	NgModule,
} from '@angular/core';
import { WeatherForecastApiService } from './weather-forecast-api.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherForecastApiLibConfig } from '@bp/weather-forecast/model';
import { WEATHER_FORECAST_API_LIB_CONFIG_INJECTION_TOKEN } from '@bp/weather-forecast/constant';

@NgModule({
	imports: [
		HttpClientModule,
	],
	providers: [WeatherForecastApiService],
})
export class WeatherForecastApiModule {
	static forRoot(
		config: WeatherForecastApiLibConfig,
	): ModuleWithProviders<WeatherForecastApiModule> {
		return {
			ngModule: WeatherForecastApiModule,
			providers: [
				{
					provide: WEATHER_FORECAST_API_LIB_CONFIG_INJECTION_TOKEN,
					useValue: config,
				},
			],
		};
	}
}
