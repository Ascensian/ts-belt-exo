import { A } from '@mobily/ts-belt';
import { Product } from './type';

export const getInStockProducts = (items: ReadonlyArray<Product>): ReadonlyArray<Product> =>
    A.filter(items, (p) => p.inStock);
