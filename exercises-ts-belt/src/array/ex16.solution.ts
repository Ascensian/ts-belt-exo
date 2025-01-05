import { A } from "@mobily/ts-belt";
import { Product } from "./type";

export const ArrayFn16Exo16 = (products: Product[]) => {
    const totalPrice = A.reduce(
        products,
        0,
        (acc, product) => acc + product.price
    );
    return totalPrice;
};
