import { A } from "@mobily/ts-belt";
import { Product } from "./type";

export const ArrayFn6Exo6 = (products: Product[], productToCheck: Product) => {
    return A.includes(products, productToCheck);
};


