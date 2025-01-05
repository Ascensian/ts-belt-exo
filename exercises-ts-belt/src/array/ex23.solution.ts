import { A } from "@mobily/ts-belt";
import { Product } from "./type";

export const ArrayFn23Exo23 = (products: Product[]) => {
    const groupedProducts = A.reduce(
        products,
        { inStock: [] as Product[], outOfStock: [] as Product[] },
        (acc, product) => {
            if (product.inStock) {
                acc.inStock.push(product);
            } else {
                acc.outOfStock.push(product);
            }
            return acc;
        }
    );

    const sortedInStock = A.sort(groupedProducts.inStock, (a, b) => a.price - b.price);
    const sortedOutOfStock = A.sort(groupedProducts.outOfStock, (a, b) => a.price - b.price);

    return { inStock: sortedInStock, outOfStock: sortedOutOfStock };
};