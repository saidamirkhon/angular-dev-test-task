import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Constructor } from '@bp/shared/model';

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
