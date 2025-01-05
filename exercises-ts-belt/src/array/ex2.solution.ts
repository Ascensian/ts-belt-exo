import { pipe, A } from "@mobily/ts-belt";
import { Product } from "./type";

export const finalArrayExo2 = (
    products: Product[]
): {
    prepended: Product[];
    appended: Product[];
} => {
    const monitor: Product = { name: "Monitor", price: 200, inStock: true };
    const keyboard: Product = { name: "Keyboard", price: 75, inStock: true };

    return pipe(
        products,
        (arr) => ({
            prepended: pipe(arr, A.prepend(monitor), (immutableArray) => [...immutableArray]),
            appended: pipe(arr, A.append(keyboard), (immutableArray) => [...immutableArray]),
        })
    );
};

