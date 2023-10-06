/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

/*
  pets.sort()
  for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);}

      

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

/*pets.reverse()
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);}


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

/*
let petuno=pets.shift();
pets.push(petuno);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 2020 + i;
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let car = {
  brand: "Toyota",
  model: "yaris",
  color: "dark-blue",
  trims: ["GT", "ibrida"],
};
cars.push(car);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  let trim = cars[i].trims[0];
  justTrims.push(trim);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] == "b") {
    console.log("fizz");
  } else {
    console.log("buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let i = 0;
while (numericArray[i] != 32) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
let posizioni = [];
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      posizioni[i] = 1;
      break;
    case "b":
      posizioni[i] = 2;
      break;
    case "c":
      posizioni[i] = 3;
      break;
    case "d":
      posizioni[i] = 4;
      break;
    case "e":
      posizioni[i] = 5;
      break;
    case "f":
      posizioni[i] = 6;
      break;
    case "g":
      posizioni[i] = 7;
      break;
    case "h":
      posizioni[i] = 8;
      break;
    case "i":
      posizioni[i] = 9;
      break;
    case "l":
      posizioni[i] = 10;
      break;
    case "m":
      posizioni[i] = 11;
      break;
    case "n":
      posizioni[i] = 12;
      break;
    case "o":
      posizioni[i] = 13;
      break;
    case "p":
      posizioni[i] = 14;
      break;
    case "q":
      posizioni[i] = 15;
      break;
    case "r":
      posizioni[i] = 16;
      break;
    case "s":
      posizioni[i] = 17;
      break;
    case "t":
      posizioni[i] = 18;
      break;
    case "u":
      posizioni[i] = 19;
      break;
    case "v":
      posizioni[i] = 20;
      break;
    case "z":
      posizioni[i] = 21;
      break;
    default:
      break;
  }
}
console.log(posizioni);
