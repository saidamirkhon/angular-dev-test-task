export function getEnumValueList<T extends string | number>(
	enumObj: Record<string, T>,
): T[] {
	return Object
		.keys(enumObj)
		.reduce(
			(
				enumValueList: T[],
				enumKey: string,
			) => {
				if (isNaN(parseInt(enumKey))) {
					enumValueList.push(enumObj[enumKey]);
				}
				return enumValueList;
			},
			[],
		);
}
