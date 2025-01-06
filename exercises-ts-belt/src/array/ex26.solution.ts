import { pipe, A } from "@mobily/ts-belt";
import { Product } from "./type";


export const ArrayFn26 = (products: Product[], filterFn: (product: Product) => boolean): number => {
    return pipe(
        products,
        A.filter(filterFn),
        A.map((product) => product.price),
        A.reduce(0, (acc, price) => acc + price)
    );
};