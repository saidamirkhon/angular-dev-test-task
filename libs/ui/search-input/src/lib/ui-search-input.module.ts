import { NgModule } from '@angular/core';
import { UiSearchInputDirective } from './ui-search-input-directive';

@NgModule({
	declarations: [
		UiSearchInputDirective,
	],
	exports: [
		UiSearchInputDirective,
	],
})
export class UiSearchInputModule {
}
