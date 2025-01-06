import { finalArrayExo2 } from "./array/ex2.solution";
import { allArrayConcatExo3 } from "./array/ex3.solution";
import { findDuplicatesExo4 } from "./array/ex4.solution";
import { ArrayFn5 } from "./array/ex5.solution";
import { ArrayFn6Exo6 } from "./array/ex6.solution";
import { ArrayFn7Exo7 } from "./array/ex7.solution";
import { ArrayFn11Exo11 } from "./array/ex11.solution";
import { ArrayFn12Exo12 } from "./array/ex12.solution";
import { ArrayFn13Exo13 } from "./array/ex13.solution";
import { ArrayFn14Exo14 } from "./array/ex14.solution";
import { ArrayFn16Exo16 } from "./array/ex16.solution";
import { ArrayFn19Exo19 } from "./array/ex19.solution";
import { ArrayFn20Exo20 } from "./array/ex20.solution";
import { ArrayFn22Exo22 } from "./array/ex22.solution";
import { ArrayFn23Exo23 } from "./array/ex23.solution";
import { ArrayFn26 } from "./array/ex26.solution";
import { ArrayFn27 } from "./array/ex27.solution";
import { ArrayFn28 } from "./array/ex28.solution";
import { ArrayFn30 } from "./array/ex30.solution";
import { createCounter } from "./closure/ex1.solution";
import { DictFn1 } from "./dict/ex1.solution";
import { DictFn3 } from "./dict/ex3.solution";
import { DictFn4 } from "./dict/ex4.solution";
import { functionFn1 } from "./function/ex1.solution";
import { functionFn2 } from "./function/ex2.solution";
import { resultFn1 } from "./result/ex1.solution";
import { Product, ProductExo22, ProductExo28 } from "./array/type";

// ARRAY 

// exo 2

const productsExo2: Product[] = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Mouse", price: 25, inStock: false },
    { name: "Headphones", price: 50, inStock: true },
];

const result = finalArrayExo2(productsExo2);

console.log("Prepended Array (Exo2):", result.prepended);
console.log("Appended Array (Exo2):", result.appended);

// exo 3

const productsExo3: Product[] = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Mouse", price: 25, inStock: false },
];
const accessoriesExo3: Product[] = [
    { name: "Keyboard", price: 75, inStock: true },
    { name: "Monitor", price: 200, inStock: true },
];

const resultExo3 = allArrayConcatExo3(productsExo3, accessoriesExo3);
console.log("Merged Array (Exo3):", resultExo3);

// exo 4

const inventoryExo4_1: Product[] = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Mouse", price: 25, inStock: false },
    { name: "Keyboard", price: 75, inStock: true },
];
const inventoryExo4_2: Product[] = [
    { name: "Keyboard", price: 75, inStock: true },
    { name: "Monitor", price: 200, inStock: false },
];

const duplicatesExo4 = findDuplicatesExo4(inventoryExo4_1, inventoryExo4_2);
console.log("Duplicates (Exo4):", duplicatesExo4);

// exo 5

const productsExo5: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Monitor', price: 200, inStock: true },
];

const resultExo5 = ArrayFn5(productsExo5);
console.log("Dropped First Product (Exo5):", resultExo5.droppedFirst);
console.log("Dropped Exactly Two Products (Exo5):", resultExo5.droppedTwo);
console.log("Dropped While In Stock (Exo5):", resultExo5.droppedWhileInStock);

// exo 6

const products1Exo6: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
];
const products2Exo6: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Keyboard', price: 75, inStock: true },
];

const productToCheckExo6: Product = { name: 'Laptop', price: 1000, inStock: true };

const resultExo6 = ArrayFn6Exo6(products1Exo6, productToCheckExo6);
console.log("Is product in the list (Exo6):", resultExo6);


// exo 7

const productsExo7: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Monitor', price: 200, inStock: true },
    { name: 'Headphones', price: 50, inStock: false },
];

const resultExo7 = ArrayFn7Exo7(productsExo7);
console.log("Filtered Products (Exo7):", resultExo7);

// exo 11

const productsExo11: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Monitor', price: 200, inStock: true },
];

const resultExo11 = ArrayFn11Exo11(productsExo11);
console.log("Processed List (Exo11):", resultExo11);


// exo 12

const productsExo12: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Monitor', price: 200, inStock: true },
];

const resultExo12 = ArrayFn12Exo12(productsExo12);
console.log("Grouped Products (Exo12):", resultExo12);

// exo 13

const productsExo13: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Monitor', price: 200, inStock: true },
];

const resultExo13 = ArrayFn13Exo13(productsExo13);
console.log("Reversed Products (Exo13):", resultExo13.reversed);
console.log("Shuffled Products (Exo13):", resultExo13.shuffled);

// exo 14

const productsExo14: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
];

const resultExo14 = ArrayFn14Exo14(productsExo14);
console.log("Unique Products (Exo14):", resultExo14);

// exo 16

const productsExo16: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
];

const resultExo16 = ArrayFn16Exo16(productsExo16);
console.log("Total Price (Exo16):", resultExo16);

// exo 19

const products1Exo19: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
];
const products2Exo19: Product[] = [
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Laptop', price: 1000, inStock: true },
];

const resultExo19 = ArrayFn19Exo19(products1Exo19, products2Exo19);
console.log("Merged and Unique Products (Exo19):", resultExo19);


// exo 20

const productExo20: Product = { name: 'Mouse', price: 25, inStock: true };

const resultExo20 = ArrayFn20Exo20(productExo20, 5);
console.log("Repeated Products (Exo20):", resultExo20);

// exo 22

const productsExo22: ProductExo22[] = [
    { name: 'Laptop', price: 1000, category: 'Electronics', quantity: 2 },
    { name: 'Mouse', price: 25, category: 'Accessories', quantity: 5 },
    { name: 'Monitor', price: 200, category: 'Electronics', quantity: 1 },
    { name: 'Keyboard', price: 75, category: 'Accessories', quantity: 3 },
];

const resultExo22 = ArrayFn22Exo22(productsExo22);
console.log("Total value per category (Exo22):", resultExo22);

// exo 23

const productsExo23: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
    { name: 'Monitor', price: 200, inStock: false },
];

const reportExo23 = ArrayFn23Exo23(productsExo23);
console.log("Products Report (Exo23):", reportExo23);

// exo 26

const productsExo26: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
];

const filterInStock = (product: Product) => product.inStock;

const totalPriceInStock = ArrayFn26(productsExo26, filterInStock);
console.log("Total price of in-stock products:", totalPriceInStock);


// exo 27

const productsExo27: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
];

const conditionsExo27 = [
    (product: Product) => product.price > 50,
    (product: Product) => product.inStock,
];

const filteredProducts = ArrayFn27(productsExo27, conditionsExo27);
console.log("Filtered Products (Exo27):", filteredProducts);

// exo 28

const productsExo28: ProductExo28[] = [
    { name: 'Laptop', price: 1000, inStock: true, quantity: 2 },
    { name: 'Mouse', price: 25, inStock: false, quantity: 5 },
    { name: 'Keyboard', price: 75, inStock: true, quantity: 3 },
];

const accumulateTotalQuantity = (acc: number, product: ProductExo28) => acc + product.quantity;

const totalQuantity = ArrayFn28(productsExo28, accumulateTotalQuantity, 0);
console.log("Total Quantity (Exo28):", totalQuantity, "\n");

// exo 30

const productsExo30: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true },
];

const discountCriteria = (product: Product) => product.price > 100;
const totalAfterDiscount = ArrayFn30(productsExo30, discountCriteria, 10);

console.log("Total After Discount (Exo30):", totalAfterDiscount, "\n");

// CLOSURE

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// DICT

// exo 1

const objExo1 = { name: "Laptop", price: 1000, stock: true };
const updatedObj = DictFn1(objExo1, "price");

console.log("Objet après suppression de la clé 'price' (Exo1):", updatedObj, "\n");

// exo 3

const obExo3 = { name: 'Laptop', price: 1000, stock: true, category: 'Electronics' };
const numberPropertiesObj = DictFn3(obExo3);

console.log("Objet avec les propriétés numériques (Exo3):", numberPropertiesObj, "\n");

// exo 4

const objExo4 = { price: 1000, stock: true, brand: 'Dell', processor: 'Intel' };
const filteredObjExo4 = DictFn4(objExo4, 'p');

console.log("Objet filtré (Exo4):", filteredObjExo4, "\n");

// FUNCTION 

// exo 1

const resultFuncExo1 = functionFn1(5);
console.log("Retour de la fonction:", resultFuncExo1); // Affichera 5

// exo 2

const number = 12;
const predicates = [
    (n: number) => n > 10,
    (n: number) => n % 2 === 0,
];

console.log(functionFn2(number, predicates));

// RESULT

const riskyFunction = () => {
    if (Math.random() > 0.5) {
        return 100;
    }
    throw new Error('Erreur');
};

resultFn1(riskyFunction);