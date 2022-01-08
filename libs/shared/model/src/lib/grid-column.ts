export interface GridColumn<T> {
	recordField: keyof T;
	title: string;
	id: string;
}
