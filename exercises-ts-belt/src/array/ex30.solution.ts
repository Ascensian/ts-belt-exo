import { pipe, A } from "@mobily/ts-belt";
import { Product } from "./type";

export const applyDiscount = (
    products: Product[],
    discountCriteria: (product: Product) => boolean,
    discountPercentage: number
): number => {
    return pipe(
        products,
        A.reduce(0, (acc, product) => {
            if (discountCriteria(product)) {
                const discountedPrice = product.price * (1 - discountPercentage / 100);
                return acc + discountedPrice;
            }
            return acc + product.price;
        })
    );
};