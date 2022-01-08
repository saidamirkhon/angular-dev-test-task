import { Option } from '@bp/shared/model';

export function getOptionList<T extends string | number>(
	optionValueList: T[],
	optionLabelMap: Record<T, string>,
	optionOrderMap: Record<T, number>,
): Option<T>[] {
	return optionValueList
		.map(
			(value: T) => (
				{
					value,
					label: optionLabelMap[value],
				}
			),
		)
		.sort(
			(
				optionA: Option<T>,
				optionB: Option<T>,
			) => optionOrderMap[optionA.value] - optionOrderMap[optionB.value],
		);
}
