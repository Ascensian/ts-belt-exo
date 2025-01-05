import { pipe, A } from "@mobily/ts-belt";
import { Product } from "./type";

export const findDuplicatesExo4 = (inventory1: Product[], inventory2: Product[]): Product[] => {
  return pipe(
    inventory1,
    A.filter((productExo4) => A.includes(inventory2, productExo4)),
    (immutableArrayExo4) => [...immutableArrayExo4]
  );
};