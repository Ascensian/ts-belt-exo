import { A, pipe } from "@mobily/ts-belt";
import { Product } from "./type";

export const ArrayFn11Exo11 = (products: Product[]) => {
    return pipe(
        products,
        A.slice(1, 3),
        A.take(2),
        A.takeWhile((product) => product.price > 5)
    );
};