import { WeatherForecastInterval } from '@bp/weather-forecast/model';

export const WEATHER_FORECAST_INTERVAL_OPTION_ORDER_MAP: Record<WeatherForecastInterval, number> = {
	[WeatherForecastInterval.DAY]: 1,
	[WeatherForecastInterval.HOUR]: 2,
};
