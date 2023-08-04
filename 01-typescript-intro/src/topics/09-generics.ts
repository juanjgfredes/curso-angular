

export function whatsMyType<T>( argumen: T): T {
    return argumen;
}

const dato1 = whatsMyType<string>("Hola mundo")
const dato2 = whatsMyType(1) //lo infiere

console.log(dato1.toLowerCase())
console.log(dato2.toString())
