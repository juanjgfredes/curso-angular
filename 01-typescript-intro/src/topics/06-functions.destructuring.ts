
// interface Product{
//     description: string;
//     price: number
// }

// const phone: Product = {
//     description: "Nokia A1",
//     price: 150.0
// }

// const table: Product = {
//     description: "iPad Air",
//     price: 250.0
// }

// interface TaxCalculationsOptions{
//     products: Product[];
//     tax: number;
// }


// function taxCalculator( options: TaxCalculationsOptions ): number[]{

//     let total = 0;

//     options.products.forEach( products => {
//         total += products.price
//     });

//     return [total, total * options.tax]
// }


// const shoppingCard: Product[] = [phone, table];
// const tax = 0.15;


// const result = taxCalculator({
//     products: shoppingCard,
//     tax //hace refecrecia a la constante tax, como es el mismo nombre se puedo poner asi y no hace falra esto = tax: tax 
// });

// console.log(`Total: ${ result[0] }`)
// console.log(`Tax: ${ result[1] }`)



export interface Product{
    description: string;
    price: number
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const table: Product = {
    description: "iPad Air",
    price: 250.0
}

interface TaxCalculationsOptions{
    products: Product[];
    tax: number;
}


export function taxCalculator( {products, tax}: TaxCalculationsOptions ): [number, number]{

    let total = 0;

    products.forEach( ({ price }) => {
        total += price
    });

    return [total, total * tax]
}


const shoppingCard: Product[] = [phone, table];
const tax = 0.15;


const [total, impuesto] = taxCalculator({
    products: shoppingCard,
    tax //hace refecrecia a la constante tax, como es el mismo nombre se puedo poner asi y no hace falra esto = tax: tax 
});

console.log(`Total: ${ total }`)
console.log(`Tax: ${ impuesto }`)
