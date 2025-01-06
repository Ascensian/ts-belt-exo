import { O } from "@mobily/ts-belt";

export const optionFn1 = () => {
    const item: string | null = 'Laptop'; // 'Laptop' ou 'null' à tester

    const result = O.fromNullable(item) // Crée une Option
        .map(i => (i === 'Laptop' ? `${i} - Suffix` : i)) // Applique la transformation si 'Laptop'
        .getWithDefault('Inconnu'); // Si l'option est None, retourne 'Inconnu'

    console.log(result); // Affiche : 'Laptop - Suffix'
};
