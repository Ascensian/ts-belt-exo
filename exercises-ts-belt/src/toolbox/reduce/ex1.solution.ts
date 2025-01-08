import { A } from '@mobily/ts-belt';

export const sumNumbers = (nums: ReadonlyArray<number>): number =>
    A.reduce(nums, 0, (acc, n) => acc + n);

