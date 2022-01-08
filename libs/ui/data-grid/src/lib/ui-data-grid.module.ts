import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDataGridComponent } from './ui-data-grid.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
	imports: [CommonModule, MatTableModule],
	declarations: [
		UiDataGridComponent,
	],
	exports: [
		UiDataGridComponent,
	],
})
export class UiDataGridModule {
}
