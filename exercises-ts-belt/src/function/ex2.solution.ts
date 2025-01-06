export const functionFn2 = (number: number, predicates: ((n: number) => boolean)[]): boolean => {
    return predicates.every(predicate => predicate(number));
};