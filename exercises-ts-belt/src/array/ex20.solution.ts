import { A } from "@mobily/ts-belt";
import { Product } from "./type";

export const ArrayFn20Exo20 = (product: Product, times: number): Product[] => {
    return Array.from({ length: times }, () => ({ ...product }));
};