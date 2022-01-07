import { WeatherForecastInterval } from '@bp/weather-forecast/model';

export const WEATHER_FORECAST_GRID_TITLE_MAP: Record<WeatherForecastInterval, string> = {
	[WeatherForecastInterval.DAY]: '7 day forecast',
	[WeatherForecastInterval.HOUR]: 'Hourly forecast',
};
