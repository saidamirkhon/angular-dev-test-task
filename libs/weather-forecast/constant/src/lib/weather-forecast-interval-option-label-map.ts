import { WeatherForecastInterval } from '@bp/weather-forecast/model';

export const WEATHER_FORECAST_INTERVAL_OPTION_LABEL_MAP: Record<WeatherForecastInterval, string> = {
	[WeatherForecastInterval.DAY]: 'Daily',
	[WeatherForecastInterval.HOUR]: 'Hourly',
};
