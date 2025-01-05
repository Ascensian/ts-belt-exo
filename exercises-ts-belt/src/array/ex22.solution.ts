import { A } from "@mobily/ts-belt";
import { ProductExo22 } from "./type";

export const ArrayFn22Exo22 = (products: ProductExo22[]) => {
    return A.reduce(
        products,
        new Map<string, number>(),
        (acc, { category, price, quantity }) => {
            const totalValue = price * quantity;
            acc.set(category, (acc.get(category) || 0) + totalValue);
            return acc;
        }
    );
};