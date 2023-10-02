/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Stringa:il dato stringa può rappresentare un solo carattere o una sequenza finita di caratteri,i caratteri devono essere inseriti però all'interno di un singolo o di un doppio apice */
/*Numerico:un dato numerico può rappresentare uno o una sequenza di numeri,anche decimali,quest'ultimi preceduti da un . (punto) */
/*Booleano:il dato booleano può ammettere solo due valori: true o false(vero o falso),questo risultato dipenderà dal risultato dei controli conzionali che servono a far prendere decisioni
al codice */
/* ESERCIZIO 2
 
Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/*let nome='alessandro' variabile sovrascrivibile */

const nome ='alessandro' /*variabile non sovrascrivibile*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let x=12+20

console.log(x)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

x=12

console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
  
/* nome= 'forestiero' è impossibile riassegnare un valore ad una variabile dichiarata con il costrutto const*/
  
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

x+=-4

console.log(x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let nome1='john'
let nome2='John'
 console.log(nome1==nome2)

  nome1='john'
  nome2='John'
 console.log(nome1.toLowerCase==nome2.toLowerCase)


