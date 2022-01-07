import {
	DailyWeatherForecastApiResponse,
	HourlyWeatherForecastApiResponse,
	WeatherForecastDailyGridRecord,
	WeatherForecastHourlyGridRecord,
	WeatherForecastInterval,
} from '@bp/weather-forecast/model';

export function getWeatherForecastGridRecordList(
	weatherForecastInterval: WeatherForecastInterval,
	cityIdApiResponseMap: Record<string, DailyWeatherForecastApiResponse | HourlyWeatherForecastApiResponse>,
	cityIdNameMap: Record<string, string>,
): WeatherForecastDailyGridRecord[] | WeatherForecastHourlyGridRecord[] {
	switch (weatherForecastInterval) {
		case WeatherForecastInterval.DAY:
			return Object
				.keys(cityIdApiResponseMap)
				.reduce(
					(
						recordList: WeatherForecastDailyGridRecord[],
						cityId: string,
					) => {
						const dailyRecordList = (<DailyWeatherForecastApiResponse> cityIdApiResponseMap[cityId]).daily;
						recordList
							.push(
								dailyRecordList
									.slice(0, 6)
									.reduce(
										(
											record: WeatherForecastDailyGridRecord,
											dailyRecord,
											index: number,
										) => {

											return {
												...record,
												[`day${index + 1}Temp`]: dailyRecord.temp,
											};
										},
										{
											cityName: cityIdNameMap[cityId],
										} as WeatherForecastDailyGridRecord,
									),
							);
						return recordList;
					},
					[],
				);
		case WeatherForecastInterval.HOUR:
			return Object
				.keys(cityIdApiResponseMap)
				.reduce(
					(
						recordList: WeatherForecastHourlyGridRecord[],
						cityId: string,
					) => {
						const hourlyRecordList = (<HourlyWeatherForecastApiResponse> cityIdApiResponseMap[cityId]).hourly;
						recordList
							.push(
								hourlyRecordList
									.reduce(
										(
											res: {
												record: WeatherForecastHourlyGridRecord;
												numFields: number;
											},
											hourlyRecord,
											index: number,
										) => {
											if (
												index % 3 === 0
												&& res.numFields < 8
											) {
												return {
													...res,
													record: {
														...res.record,
														[`hour${res.numFields + 1}Temp`]: hourlyRecord.temp,
													},
													numFields: res.numFields + 1,
												};
											}
											return res;
										},
										{
											record: {
												cityName: cityIdNameMap[cityId],
											} as WeatherForecastHourlyGridRecord,
											numFields: 0,
										},
									).record,
							);
						return recordList;
					},
					[],
				);
	}
}
