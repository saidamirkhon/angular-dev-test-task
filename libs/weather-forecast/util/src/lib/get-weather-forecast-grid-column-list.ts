import {
	DailyWeatherForecastApiResponse,
	HourlyWeatherForecastApiResponse,
	WeatherForecastDailyGridRecord,
	WeatherForecastGridColumn,
	WeatherForecastGridRecordBase,
	WeatherForecastHourlyGridRecord,
	WeatherForecastInterval,
} from '@bp/weather-forecast/model';
import { formatDate } from '@angular/common';

export function getWeatherForecastGridColumnList(
	weatherForecastInterval: WeatherForecastInterval,
	apiResponse: DailyWeatherForecastApiResponse
		| HourlyWeatherForecastApiResponse,
): WeatherForecastGridColumn<WeatherForecastDailyGridRecord>[]
	| WeatherForecastGridColumn<WeatherForecastHourlyGridRecord>[] {
	const commonColumnList: WeatherForecastGridColumn<WeatherForecastGridRecordBase>[] = [
		{
			title: 'City Name',
			recordField: 'cityName',
		},
	];
	switch (weatherForecastInterval) {
		case WeatherForecastInterval.DAY:
			const dailyRecordList = (<DailyWeatherForecastApiResponse> apiResponse).daily;
			return (commonColumnList as WeatherForecastGridColumn<WeatherForecastDailyGridRecord>[])
				.concat(
					dailyRecordList
						.slice(0, 6)
						.map(
							(
								{ dt },
								index: number,
							) => (
								{
									title: formatDate(
										dt * 1000,
										'MMM L',
										'en-US',
									),
									recordField: `day${index + 1}Temp` as keyof WeatherForecastDailyGridRecord,
								}
							)),
				);
		case WeatherForecastInterval.HOUR:
			const hourlyRecordList = (<HourlyWeatherForecastApiResponse> apiResponse).hourly;
			return (commonColumnList as WeatherForecastGridColumn<WeatherForecastHourlyGridRecord>[])
				.concat(
					hourlyRecordList
						.reduce(
							(
								columnList: WeatherForecastGridColumn<WeatherForecastHourlyGridRecord>[],
								{ dt },
								index: number,
							) => {
								if (index % 3 === 0 && columnList.length < 8) {
									columnList
										.push(
											{
												title: formatDate(
													dt * 1000,
													'H mm',
													'en-US',
												),
												recordField: `hour${columnList.length + 1}Temp` as keyof WeatherForecastHourlyGridRecord,
											},
										);
								}
								return columnList;
							},
							[],
						),
				);
		default:
			return [];
	}
}
