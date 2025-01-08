import { R } from "@mobily/ts-belt";

export const resultFn1 = (riskyFunction: () => number) => {
    const result = R.fromExecution(riskyFunction);

    const finalResult = R.match(
        result,
        (value) => `Succès: ${value}`,
        (error) => `Erreur: ${error.message}`
    );

    return finalResult;
};