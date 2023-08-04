import './style.css'
import { setupCounter } from './counter.ts'

//import './topics/02-object-interface.ts'
//import './topics/03-functions.ts'
//import './topics/06-functions.destructuring.ts'
import './topics/08-classes.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <p>Hola mundo</p>
`;

console.log("hola mundo")

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
