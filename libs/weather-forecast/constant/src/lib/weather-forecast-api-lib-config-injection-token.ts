import { InjectionToken } from '@angular/core';
import { WeatherForecastApiLibConfig } from '@bp/weather-forecast/model';

export const WEATHER_FORECAST_API_LIB_CONFIG_INJECTION_TOKEN = new InjectionToken<WeatherForecastApiLibConfig>(
	'weatherForecastApiLibConfigInjectionToken',
);
