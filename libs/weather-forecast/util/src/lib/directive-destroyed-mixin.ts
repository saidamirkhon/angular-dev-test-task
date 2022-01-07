import { OnDestroy } from '@angular/core';
import { Constructor } from '@bp/weather-forecast/model';
import { Subject } from 'rxjs';

export function DirectiveDestroyedMixin<T extends Constructor<{}>>(Base = class {
} as T) {
	return class Mixin extends Base implements OnDestroy {
		_destroyed$: Subject<void> = new Subject<void>();
		get destroyed$(): Subject<void> {
			return this._destroyed$;
		}

		ngOnDestroy() {
			this._destroyed$.next();
			this._destroyed$.complete();
		}
	};
}
