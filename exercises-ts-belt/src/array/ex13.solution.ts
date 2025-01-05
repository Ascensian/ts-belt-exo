import { A } from "@mobily/ts-belt";
import { Product } from "./type";

export const ArrayFn13Exo13 = (products: Product[]) => {
    const reversed = A.reverse(products);
    const shuffled = A.shuffle(products);

    return {
        reversed,
        shuffled,
    };
};
