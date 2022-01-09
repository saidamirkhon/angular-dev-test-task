import {
	ChangeDetectionStrategy,
	Component,
	Input,
} from '@angular/core';
import { GridData } from '@bp/shared/model';

@Component({
	selector: 'ui-data-grid',
	templateUrl: './ui-data-grid.component.html',
	styleUrls: [
		'./ui-data-grid.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiDataGridComponent {
	@Input() gridData: GridData<any> | null = null;
}
