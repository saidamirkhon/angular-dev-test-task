import {
	createAction,
	props,
} from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const fetchFailActionFactory = (description: string) => createAction(
	description,
	props<{
		error: HttpErrorResponse;
	}>(),
);
