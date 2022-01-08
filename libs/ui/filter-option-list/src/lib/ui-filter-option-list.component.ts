import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';
import {
	Layout,
	Option,
} from '@bp/shared/model';

@Component({
	selector: 'ui-filter-option-list',
	templateUrl: './ui-filter-option-list.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFilterOptionListComponent {
	@Input() layout = Layout.HORIZONTAL;
	@Input() optionList: Option<any>[] = [];
	@Input() activeOption: Option<any> = { value: null, label: '' };
	@Input() label = '';
	@Output() onOptionSelect: EventEmitter<any> = new EventEmitter();
	Layout = Layout;
}
