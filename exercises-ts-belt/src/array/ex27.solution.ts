import { pipe, A } from "@mobily/ts-belt";
import { Product } from "./type";

export const ArrayFn27 = (
    products: Product[],
    conditions: Array<(product: Product) => boolean>
): Product[] => {
    return pipe(
        products,
        A.reduce([] as Product[], (acc, product) => {
            const satisfiesAllConditions = conditions.every(condition => condition(product));
            return satisfiesAllConditions ? [...acc, product] : acc;
        })
    );
};
