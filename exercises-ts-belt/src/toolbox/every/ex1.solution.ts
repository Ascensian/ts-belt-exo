import { A, pipe } from '@mobily/ts-belt';

type Person = { name: string; age: number };

export const areAllAdults = (people: Person[]): boolean =>
    pipe(
        people,
        A.every((person) => person.age >= 18)
    );
