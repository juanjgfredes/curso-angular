interface Super{
    nombre: string;
    poder: string;
    nivelPoder: number;
    muerto: boolean;
    anios? : number
}

const superUno: Super = {
    nombre: "IronMan",
    poder: "Robot",
    nivelPoder: 10000,
    muerto: true
}

console.table(superUno)

export {};