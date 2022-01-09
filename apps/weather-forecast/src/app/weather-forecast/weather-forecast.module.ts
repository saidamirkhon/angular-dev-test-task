import { NgModule } from '@angular/core';
import { WeatherForecastPageComponent } from './page/weather-forecast-page/weather-forecast-page.component';
import { WeatherForecastValidQueryParamGuard } from './guard/weather-forecast-valid-query-param.guard';
import { RouterModule } from '@angular/router';
import { UiAutoCompleteModule } from '@bp/ui/auto-complete';
import { UiFilterOptionListModule } from '@bp/ui/filter-option-list';
import { UiDataGridModule } from '@bp/ui/data-grid';
import { WeatherForecastStoreModule } from '@bp/weather-forecast/store';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(
			[
				{
					path: '',
					component: WeatherForecastPageComponent,
					canActivate: [
						WeatherForecastValidQueryParamGuard,
					],
					runGuardsAndResolvers: 'always',
				},
				{
					path: '**',
					redirectTo: '',
				},
			],
		),
		WeatherForecastStoreModule,
		UiAutoCompleteModule,
		UiFilterOptionListModule,
		UiDataGridModule,
	],
	declarations: [
		WeatherForecastPageComponent,
	],
	providers: [
		WeatherForecastValidQueryParamGuard,
	],

})
export class WeatherForecastModule {
}
