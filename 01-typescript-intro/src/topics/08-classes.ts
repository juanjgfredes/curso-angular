

// export class Person {
//     public name: string;
//     private place: string;

//     constructor() {
//         this.name = "Juan";
//         this.place = "Mendoza"
//     }
// }

export class Person {
    //public name: string;
    //private place: string;

    constructor(
        public name: string,
        private place: string = 'No tiene'
    ) {}
}

// export class Hero extends Person{

//     constructor(
//         public realName: string,
//         public age: number,
//         public alterEgo: string 
//     ){
//         super(realName, "New York")
//     }

// }

//Composiccion: 

export class Hero{
    constructor(
        public realName: string,
        public age: number,
        public alterEgo: string,
        public persona: Person 
    ){}
} 

const persona = new Person("lolo", "Mundo");

const juan = new Hero("Tony", 45, "IronMan", persona);

console.log(juan)