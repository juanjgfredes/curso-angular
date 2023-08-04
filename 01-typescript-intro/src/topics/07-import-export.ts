import {Product, taxCalculator} from "./06-functions.destructuring";

const shoppingCarg : Product[] = [{
    description: "Nokia",
    price: 150
},{
    description: "Samsung",
    price: 200
}]


const [total, tax] = taxCalculator({products: shoppingCarg, tax: 150});

console.log(`Total: ${ total }`)
console.log(`Impuesto: ${ tax }`)