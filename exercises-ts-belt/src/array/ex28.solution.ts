import { pipe, A } from "@mobily/ts-belt";


export const ArrayFn28 = <T, R>(
    products: T[],
    reducer: (acc: R, product: T) => R,
    initialValue: R
): R => {
    return pipe(products, A.reduce(initialValue, reducer));
};
