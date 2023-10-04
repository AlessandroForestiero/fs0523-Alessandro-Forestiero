/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.

   
   let x=10,
   let y=20
  if(x>y){
    console.log(x);
  }
  else{
    console.log(y);
  }
*/



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.

let numero = x;

  if(x!=5)
  {
    console.log('not equal');
  }
*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)

let a 

let x = a%5

if (x==0)

{

  console.log('divisivile per 5');

} 
*/

/*ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.


let x = 12
let y = 4
let z=8
if(x==z || y==z || (x+y)==z || (x-y)==z ){
  console.log('l 8 è presente');
}
 
*/


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.

totalShoppingCart='prodotto1+prodotto2+prodotto3'
if(totalShoppingCart>50){
  console.log('spedizione gratuita');
  }
else{console.log('costo spedizione 10 euro');}

*/
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* 
prodotto1scontato=(20/100)*proddotto1;
prodotto2scontato=(20/100)*proddotto2;
prodotto3scontato=(20/100)*proddotto3;
*/


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.

let a=8
let b=9
let c=10

if(a>b && a>c){
  console.log(a);
}
else if (b>a && b>c){
console.log(b)}

else {console.log(c);}
*/


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/*

let x=10
if(typeof x == 'number'){
  console.log('è un numero')
}else{
  console.log('non è un numero');
}

*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/



/*   let num
let resto=num%2
if(resto==0){
  console.log('il numero è pari');
}
else {
  console.log('il numero è dispari');
}
  */

/*ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 3
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
 /*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  }
  me.city='Toronto'
console.log(me)
*/



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/


/* delete me.lastName */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  }
  me.city='Toronto'

  console.log(me);

  me.skills.pop()
  console.log(me); */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

 /*let x = []

x.push(1,2,3,4,5,6,8,9,10)
*/
/*
console.log(x);
*/


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/


/*x.pop()
x.push(100)
console.log(x);*/
