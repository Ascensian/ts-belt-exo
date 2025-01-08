import { A } from '@mobily/ts-belt';

export const filterEvenNumbers = (nums: ReadonlyArray<number>): ReadonlyArray<number> =>
    A.filter(nums, (n) => n % 2 === 0);
