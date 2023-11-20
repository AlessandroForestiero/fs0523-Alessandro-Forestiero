let max: number = 100;
let min: number = 1;
let random: number = Math.floor(Math.random() * (max - min) + min);
let player1: number = 5;
let player2: number = 10;
console.log(random);

function trovaNumero(player1: number, player2: number, random: number) {
  if (random === player1) {
    console.log("il giocatore uno ha indovinato il numero");
  } else if (random === player2) {
    console.log("il giocatore due ha indovinato il numero");
  } else {
    let diff1: number = Math.abs(random - player1);
    let diff2: number = Math.abs(random - player2);
    if (diff1 < diff2) {
      console.log("il giocatore 1 si è avvicinato di più");
    } else {
      console.log("il giocatore 2 si è avvicinato di più");
    }
  }
}
//trovaNumero(10, 10, random)//

function trovaNumeroDue(player1: number, player2: number, random: number) {
  let diff1: number = Math.abs(random - player1);
  let diff2: number = Math.abs(random - player2);
  if (diff1 === diff2) {
    if (diff1 === 0) {
      console.log("entrambi i player hanno indovinato il numero");
    } else {
      console.log("entrambi i player si sono avvicinati al numero in egual modo");
    }
  } else {
    let diff3: number = diff1 - diff2;
    if (diff3 > 0) {
      if (diff2 === 0) {
        console.log("il giocare due ha indovinato");
      } else {
        console.log("il giocatore due ci è andato piu vicino");
      }
    } else {
      if (diff1 === 0) {
        console.log("il giocare uno ha indovinato");
      } else {
        console.log("il giocatore uno ci è andato piu vicino");
      }
    }
  }
}
trovaNumeroDue(5, 10, 6);
