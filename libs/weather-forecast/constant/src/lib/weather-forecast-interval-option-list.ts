import {
	Option,
	WeatherForecastInterval,
} from '@bp/weather-forecast/model';
import {
	getEnumValueList,
	getOptionList,
} from '@bp/weather-forecast/util';
import {
	WEATHER_FORECAST_INTERVAL_OPTION_LABEL_MAP,
	WEATHER_FORECAST_INTERVAL_OPTION_ORDER_MAP,
} from '@bp/weather-forecast/constant';

export const WEATHER_FORECAST_INTERVAL_OPTION_LIST: Option<WeatherForecastInterval>[] = getOptionList(
	getEnumValueList(WeatherForecastInterval),
	WEATHER_FORECAST_INTERVAL_OPTION_LABEL_MAP,
	WEATHER_FORECAST_INTERVAL_OPTION_ORDER_MAP,
);
