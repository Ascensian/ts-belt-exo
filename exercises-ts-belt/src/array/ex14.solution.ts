import { A } from "@mobily/ts-belt";
import { Product } from "./type";

export const ArrayFn14Exo14 = (products: Product[]) => {
    const uniqueProducts = A.uniqBy(products, (product) => product.price);
    return uniqueProducts;
};