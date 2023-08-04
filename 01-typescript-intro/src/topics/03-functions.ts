
// function sumar(nUno: number, nDos: number): number {
//     return nUno + nDos;
// }

// const restar = (nUno: number, nDos: number): number => {
//     return nUno - nDos;
// }

// function multiplicar(nUno: number, nOptonial?: number, nDefecto: number = 2): number {
//     return nUno * nDefecto; 
// } 

// console.log(`La suma es: ${sumar(1,2)}`)
// console.log(`La resta es: ${restar(10, 9)}`)
// console.log(`La multiplicacion es: ${multiplicar(1, undefined ,3)}`)

interface Character {
    name: string;
    hp: number;
    showPoints: ()=> void;
}

const asignarPuntos = (character: Character, amount: number): void => {
    character.hp = amount
}

const personaje: Character = {
    name: "Lolo",
    hp: 0,
    showPoints: function (): void {
        console.log(`Puntos de vida: ${ this.hp }`)
    }
}

asignarPuntos(personaje, 10);
personaje.showPoints();

export {};
