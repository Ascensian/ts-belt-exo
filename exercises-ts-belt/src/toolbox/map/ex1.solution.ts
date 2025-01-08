import { A } from '@mobily/ts-belt';

export const convertToKilometers = (distances: ReadonlyArray<number>): ReadonlyArray<number> =>
    A.map(distances, (miles) => miles * 1.60934);

