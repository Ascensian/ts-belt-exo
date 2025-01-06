export const DictFn4 = (obj: Record<string, any>, prefix: string): Record<string, any> => {
    const filteredObj = Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => key.startsWith(prefix))
    );

    return filteredObj;
};
