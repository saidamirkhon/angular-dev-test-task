import { GridColumn } from './grid-column';

export interface GridDef<T> {
	columnList: GridColumn<T>[];
	recordList: T[];
	displayedColumnNameList: (keyof T)[];
}
