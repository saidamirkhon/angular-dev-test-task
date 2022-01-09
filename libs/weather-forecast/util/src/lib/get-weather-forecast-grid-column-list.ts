import {
	DailyWeatherForecastApiResponse,
	HourlyWeatherForecastApiResponse,
	WeatherForecastDailyGridRecord,
	WeatherForecastGridRecordBase,
	WeatherForecastHourlyGridRecord,
	WeatherForecastInterval,
} from '@bp/weather-forecast/model';
import { formatDate } from '@angular/common';
import { GridColumn } from '@bp/shared/model';

export function getWeatherForecastGridColumnList(
	weatherForecastInterval: WeatherForecastInterval,
	apiResponse: DailyWeatherForecastApiResponse
		| HourlyWeatherForecastApiResponse,
): GridColumn<WeatherForecastDailyGridRecord>[]
	| GridColumn<WeatherForecastHourlyGridRecord>[] {
	if (!apiResponse) {
		return [];
	}
	const commonColumnList: GridColumn<WeatherForecastGridRecordBase>[] = [
		{
			title: 'City Name',
			recordField: 'cityName',
			id: 'cityName',
		},
	];
	switch (weatherForecastInterval) {
		case WeatherForecastInterval.DAY:
			const dailyRecordList = (<DailyWeatherForecastApiResponse> apiResponse).daily;
			return (commonColumnList as GridColumn<WeatherForecastDailyGridRecord>[])
				.concat(
					dailyRecordList
						.slice(0, 7)
						.map(
							(
								{ dt },
								index: number,
							) => (
								{
									title: formatDate(
										dt * 1000,
										'MMM d',
										'en-US',
									),
									recordField: `day${index + 1}Temp` as keyof WeatherForecastDailyGridRecord,
									id: `day${index + 1}Temp`,
								}
							)),
				);
		case WeatherForecastInterval.HOUR:
			const hourlyRecordList = (<HourlyWeatherForecastApiResponse> apiResponse).hourly;
			return (commonColumnList as GridColumn<WeatherForecastHourlyGridRecord>[])
				.concat(
					hourlyRecordList
						.reduce(
							(
								columnList: GridColumn<WeatherForecastHourlyGridRecord>[],
								{ dt },
								index: number,
							) => {
								if (index % 3 === 0 && columnList.length < 8) {
									columnList
										.push(
											{
												title: formatDate(
													dt * 1000,
													'H:mm',
													'en-US',
												),
												recordField: `hour${columnList.length + 1}Temp` as keyof WeatherForecastHourlyGridRecord,
												id: `hour${columnList.length + 1}Temp`,
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
