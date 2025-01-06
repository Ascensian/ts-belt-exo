import { pipe, O } from "@mobily/ts-belt";

export const optionFn2 = () => {
    const value = 75;

    const result = pipe(
        O.fromNullable(value), // Créer l'Option à partir de la valeur
        O.map(v => v * 2), // Doubler la valeur
        O.map(v => v + 1), // Ajouter 1
        O.tap(v => console.log('Current value after operations:', v)), // Log avant la soustraction
        O.map(v => v - 8), // Soustraire 8
        O.chain(v => {
            // Vérifier si le dernier chiffre est 4 ou 7
            const lastDigit = v % 10;
            return (lastDigit === 4 || lastDigit === 7) ? O.none : O.some(v);
        }),
        O.getWithDefault(0) // Si None, retourner 0
    );

    console.log('Final Result:', result); // Affiche le résultat final
};
