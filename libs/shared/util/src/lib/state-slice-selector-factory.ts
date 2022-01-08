import {
	createFeatureSelector,
	createSelector,
} from '@ngrx/store';

export const stateSliceSelectorFactory = <T>(stateKey: string) => <K>(stateSliceKey: keyof T) => createSelector(
	createFeatureSelector(stateKey),
	// @ts-ignore
	(state: T): K => stateSliceKey
		? state[stateSliceKey]
		: state,
);
