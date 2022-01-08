import { GridDef } from '@bp/shared/model';

export interface GridData<T> extends GridDef<T> {
	title: string;
	loading: boolean;
}
