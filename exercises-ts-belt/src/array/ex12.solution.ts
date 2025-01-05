import { A } from "@mobily/ts-belt";
import { Product } from "./type";

export const ArrayFn12Exo12 = (products: Product[]) => {
    const groupByPrice = {
        "0-100": A.filter(products, (product) => product.price >= 0 && product.price <= 100),
        "100-1000": A.filter(products, (product) => product.price > 100 && product.price <= 1000),
    };
    return groupByPrice;
};