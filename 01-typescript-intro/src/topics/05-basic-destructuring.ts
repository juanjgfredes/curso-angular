
interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const cancion: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 60,
    song: "Mess",
    details: {
        author: "Edd Sheran",
        year: 2015
    }
}

const { song, audioVolumen:volumen, details:{author}} = cancion 
// o mas limpio:
const { details } = cancion
const { author:autor } = details

// console.log(`Cancion: ${ song }`)
// console.log(`Duracion: ${ volumen }`)
// console.log(`Autor: ${ author }`)

const [ , , trucks = "No existe" ] : string[] = ["Goku", "Vegeta", "Truncks"];




export {};

