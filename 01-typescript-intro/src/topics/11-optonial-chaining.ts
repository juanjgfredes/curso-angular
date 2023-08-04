import { Passenger } from './11-optonial-chaining';

export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Juan"
}

const passenger2: Passenger = {
    name: "Keli",
    children: ["Samantha", "Bruno"]
}

const returChildrenNumber = ( passenger: Passenger ): number => {

    //const totalChildren = passenger.children?.length; con ? indico que puede ser undefined y en caso de q lo sea no ejecutar el lenght
    const totalChildren = passenger.children?.length || 0; //Si es undefined retornar 0
    //const totalChildren = passenger.children!.length el ! significa q si o si va venir algo denifinido no null

    return totalChildren;
}