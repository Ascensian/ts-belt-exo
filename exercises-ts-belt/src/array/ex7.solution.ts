import { A } from "@mobily/ts-belt";
import { Product } from "./type";

// Fonction pour garder les produits avec un prix supérieur à 74€
export const ArrayFn7Exo7 = (products: Product[]) => {
    return A.filter(products, (product) => product.price > 74);
};