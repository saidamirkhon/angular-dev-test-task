import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		StoreModule.forRoot(
			{},
			{
				metaReducers: !environment.production ? [] : [],
				runtimeChecks: {
					strictActionImmutability: true,
					strictStateImmutability: true,
				},
			},
		),
		EffectsModule.forRoot([]),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		BrowserAnimationsModule,
		RouterModule.forRoot([
			{
				path: 'weather-forecast',
				loadChildren: () => import('./weather-forecast/weather-forecast.module').then(m => m.WeatherForecastModule),
			},
			{
				path: '**',
				redirectTo: 'weather-forecast',
			},
		]),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
