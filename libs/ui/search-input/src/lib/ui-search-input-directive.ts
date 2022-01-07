import {
	AfterViewInit,
	Directive,
	ElementRef,
	EventEmitter,
	Output,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {
	debounceTime,
	distinctUntilChanged,
	map,
	takeUntil,
	tap,
} from 'rxjs/operators';
import { DirectiveDestroyedMixin } from '@bp/weather-forecast/util';

@Directive({
	selector: '[appSearch]',
})
export class UiSearchInputDirective extends DirectiveDestroyedMixin() implements AfterViewInit {
	@Output('appSearch') search: EventEmitter<string> = new EventEmitter<string>();

	constructor(private elementRef: ElementRef<HTMLInputElement>) {
		super();
	}

	ngAfterViewInit(): void {
		if (this.elementRef) {
			const inputElement = this.elementRef.nativeElement;
			if (inputElement) {
				this.listenToElementKeyUp(inputElement);
			}
		}
	}

	private listenToElementKeyUp(element: HTMLInputElement): void {
		fromEvent(element, 'keyup')
			.pipe(
				debounceTime(300),
				map((event: any) => event.target.value),
				distinctUntilChanged(),
				tap((value: string) => this.search.emit(value)),
				takeUntil(this.destroyed$),
			)
			.subscribe();
	}
}
