import { A } from "@mobily/ts-belt";
import { Product } from "./type";

export const ArrayFn5 = (products: Product[]) => {
    const droppedFirst = A.drop(products, 1);
    const droppedTwo = A.dropExactly(products, 2);
    const droppedWhileInStock = A.dropWhile(products, (product) => product.inStock);

    return {
        droppedFirst,
        droppedTwo,
        droppedWhileInStock
    };
};
