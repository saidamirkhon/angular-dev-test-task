import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDataGridComponent } from './ui-data-grid.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
	imports: [CommonModule, MatTableModule, MatProgressSpinnerModule],
	declarations: [
		UiDataGridComponent,
	],
	exports: [
		UiDataGridComponent,
	],
})
export class UiDataGridModule {
}
