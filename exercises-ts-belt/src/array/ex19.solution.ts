import { pipe, A } from "@mobily/ts-belt";
import { Product } from "./type";

export const ArrayFn19Exo19 = (products1: Product[], products2: Product[]) => {
    return pipe(
        A.concat(products1, products2),
        (merged) => A.uniqBy(merged, (product) => product.price)
    );
};