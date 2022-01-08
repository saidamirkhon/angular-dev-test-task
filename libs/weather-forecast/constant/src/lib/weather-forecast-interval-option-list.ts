import {
	WeatherForecastInterval,
} from '@bp/weather-forecast/model';
import {
	WEATHER_FORECAST_INTERVAL_OPTION_LABEL_MAP,
	WEATHER_FORECAST_INTERVAL_OPTION_ORDER_MAP,
} from '@bp/weather-forecast/constant';
import { Option } from '@bp/shared/model';
import {
	getEnumValueList,
	getOptionList,
} from '@bp/shared/util';

export const WEATHER_FORECAST_INTERVAL_OPTION_LIST: Option<WeatherForecastInterval>[] = getOptionList(
	getEnumValueList(WeatherForecastInterval),
	WEATHER_FORECAST_INTERVAL_OPTION_LABEL_MAP,
	WEATHER_FORECAST_INTERVAL_OPTION_ORDER_MAP,
);
