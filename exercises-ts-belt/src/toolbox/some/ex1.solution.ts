import { A } from '@mobily/ts-belt';

export const hasEvenNumber = (nums: ReadonlyArray<number>): boolean =>
    A.some(nums, (n) => n % 2 === 0);