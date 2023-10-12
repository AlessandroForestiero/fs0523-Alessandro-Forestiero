//tabelone//
let tabellone = document.querySelector(".tabellone");
for (let i = 1; i < 77; i++) {
  let numero = document.createElement("span");
  numero.id = i;
  numero.classList.add("numero");
  numero.innerText = i;
  tabellone.append(numero);
}

let bottone = document.createElement("button");
bottone.classList.add("bottone");
bottone.innerText = "Pesca";
let spanRandom = document.createElement("span");
spanRandom.classList.add("casellaRandom");
document.body.prepend(spanRandom);
bottone.addEventListener("click", function () {
  let numeroRandom = Math.floor(Math.random() * 76);
  spanRandom.innerText = numeroRandom;
  let numeroTrovato = document.getElementById(`${numeroRandom}`);
  numeroTrovato.classList.add("numeroTrovato");
});
document.body.prepend(bottone);
