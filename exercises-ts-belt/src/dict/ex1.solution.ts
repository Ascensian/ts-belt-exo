export const DictFn1 = <T extends object>(obj: T, key: keyof T): T => {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
};