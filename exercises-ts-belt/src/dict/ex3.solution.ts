export const DictFn3 = <T extends object>(obj: T): Partial<Record<keyof T, number>> => {
    const filteredObj = Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => typeof value === 'number')
    );

    return filteredObj as Partial<Record<keyof T, number>>;
};
