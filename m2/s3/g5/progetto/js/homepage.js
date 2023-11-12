






async function displayPizze() {
  let pizze = await getPizze();
  console.log(pizze);
  let cardPizza = document.getElementById("card-pizza");
  let row=document.getElementById('main-row')
  pizze.forEach((pizza) => {
    let pizzaId = pizza._id;
    let clone = cardPizza.content.cloneNode(true);
    clone.querySelector(".card-img").src = pizza.imageUrl;
    clone.querySelector(".card-title").innerText = pizza.name;
    clone.querySelector(".card-description").innerText = pizza.description;
    clone.querySelector(".pizza-brand").innerText = pizza.brand;
    clone.querySelector(".pizza-price").innerText = pizza.price;
    let deleteButton=clone.getElementById('delete-pizza')
    deleteButton.addEventListener('click',function(){
      eliminaPizza(pizzaId)
      
    })
    row.append(clone);
  });
}



async function eliminaPizza(pizzaId){

  let response = await fetch(
    `https://striveschool-api.herokuapp.com/api/product/${pizzaId}`,
    {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMDZiNjk1ZDRmNjAwMTg1NjI1ZTQiLCJpYXQiOjE2OTk2MTIzNDIsImV4cCI6MTcwMDgyMTk0Mn0.fZOwZJNn5JSucvO1ooTWVGNs-9KNKuZoeoedPV7t5vU",
      },
    }
  );
  return response.json();
}


async function fetchProdotti() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMDZiNjk1ZDRmNjAwMTg1NjI1ZTQiLCJpYXQiOjE2OTk2MTIzNDIsImV4cCI6MTcwMDgyMTk0Mn0.fZOwZJNn5JSucvO1ooTWVGNs-9KNKuZoeoedPV7t5vU",
      },
    }
  );
  return response.json();
}

// VARIABILE GLOBALE: il prodotto da eliminare
let idProdottoDaEliminare;

function eliminaProdottoSelezionato() {
  if (idProdottoDaEliminare) {
    eliminaProdotto(idProdottoDaEliminare);
    $('#modalConfermaElimina').modal('hide');
  }
}

async function eliminaProdotto(idProdotto){
  await fetch(
    `https://striveschool-api.herokuapp.com/api/product/${idProdotto}`,
    {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMDZiNjk1ZDRmNjAwMTg1NjI1ZTQiLCJpYXQiOjE2OTk2MTIzNDIsImV4cCI6MTcwMDgyMTk0Mn0.fZOwZJNn5JSucvO1ooTWVGNs-9KNKuZoeoedPV7t5vU",
      },
    }
  ).then(() => {
    refreshListaProdotti();
  });
}

function popolaTableProdotti() {
  fetchProdotti()
    .then(
      prodotti => {
        prodotti.forEach(
          (prodotto) => aggiungiRigaProdotto(prodotto));
      });
}

function aggiungiRigaProdotto(prodotto) {
  let idProdotto = prodotto._id;

  const table = document.getElementById("table-prodotti");
  const riga = document.getElementsByClassName('template-riga')[0];
  const clone = riga.cloneNode(true);
  clone.querySelector(".prodotto-img").src = prodotto.imageUrl;
  clone.querySelector(".prodotto-brand").innerText = prodotto.brand;
  clone.querySelector(".prodotto-nome").innerText = prodotto.name;
  clone.querySelector(".prodotto-descr").innerText = prodotto.description;
  clone.querySelector(".prodotto-prezzo").innerText = prodotto.price;
  clone.querySelector(".btn-modifica").addEventListener('click',function(){
    window.open(`modifica-crea-prodotto.html?id=${idProdotto}`, "_blank");
  });
  clone.querySelector(".btn-elimina")
    .addEventListener('click',function(){
      // salva l'id in una variabile globale in modo che la funzione che gestisce il bottone OK della dialog
      // lo possa recuoperare
      idProdottoDaEliminare = idProdotto;
      $('#modalConfermaElimina').modal('show');

      //eliminaProdotto(idProdotto);
      //refreshListaProdotti();
    });

  // rimuoviamo la classe d-none di template-riga e sostituiamola con row-prodotto (che useremo per cancellare la riga in refreshListaProdotti)
  clone.className="row-prodotto"; 
  // aggiungimo la riga alla tabella
  table.appendChild(clone);
}

/*
*/
function refreshListaProdotti() {
  // rimuovi le righe della tabella che abbiamo creato dinamicamente
  // (esclusa la prima che ci serve come template)
  const table = document.getElementById("table-prodotti");
  const rows = table.getElementsByClassName("row-prodotto");

  for (var i = rows.length - 1; i >= 0; i--) {
    table.removeChild(rows[i]);
  }

  // carica i prodotti e visualizzali nella lista
  popolaTableProdotti();
}





async function modificaPizza(pizzaId){

  let response = await fetch(
    `https://striveschool-api.herokuapp.com/api/product/${pizzaId}`,
    {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMDZiNjk1ZDRmNjAwMTg1NjI1ZTQiLCJpYXQiOjE2OTk2MTIzNDIsImV4cCI6MTcwMDgyMTk0Mn0.fZOwZJNn5JSucvO1ooTWVGNs-9KNKuZoeoedPV7t5vU",
      },
    }
  );
  return response.json();
}