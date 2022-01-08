import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFilterOptionListComponent } from './ui-filter-option-list.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
	imports: [CommonModule, MatButtonToggleModule],
	declarations: [
		UiFilterOptionListComponent,
	],
	exports: [
		UiFilterOptionListComponent,
	],
})
export class UiFilterOptionListModule {
}
