import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';
import { Option } from '@bp/shared/model';

@Component({
	selector: 'ui-auto-complete',
	templateUrl: './ui-auto-complete.component.html',
	styleUrls: [
		'./ui-auto-complete.component.scss',
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAutoCompleteComponent {
	@Input() loading: boolean | null = false;
	@Input() label = '';
	@Input() placeholder = '';
	@Input() optionList: Option<any>[] | null = null;
	@Input() value: string | null = '';
	@Output() onOptionSelect: EventEmitter<Option<any>> = new EventEmitter();
	@Output() onClearSearch: EventEmitter<void> = new EventEmitter();
	@Output() onSearch: EventEmitter<string> = new EventEmitter();
}
