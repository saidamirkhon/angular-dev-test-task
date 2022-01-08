import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { UiAutoCompleteComponent } from './ui-auto-complete.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UiSearchInputModule } from '@bp/ui/search-input';

@NgModule({
	imports: [
		CommonModule,
		MatAutocompleteModule,
		MatInputModule,
		MatOptionModule,
		MatFormFieldModule,
		MatButtonModule,
		MatIconModule,
		MatProgressSpinnerModule,
		UiSearchInputModule,
	],
	declarations: [
		UiAutoCompleteComponent,
	],
	exports: [
		UiAutoCompleteComponent,
	],
})
export class UiAutoCompleteModule {
}
