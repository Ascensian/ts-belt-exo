import { pipe, A } from "@mobily/ts-belt";

export const allArrayConcatExo3 = <T>(...listArr: T[][]): T[] => {
    return pipe(
        listArr,
        A.flat,
        (immutableArray) => [...immutableArray]
    );
};


