function salva() {
  let prod;
  if (prodotto) {
    prod = prodotto;
  } else {
    prod = {
      name: "",
      description: "",
      brand: "",
      imageUrl: "",
      price: "",
    };
  }
  let form = document.getElementById("add-pizza-form");
  prod.name = form.elements["nome-pizza"].value;
  prod.description = form.elements["descrizione-pizza"].value;
  prod.brand = form.elements["brand-pizza"].value;
  prod.imageUrl = form.elements["immagine-pizza"].value;
  prod.price = form.elements["prezzo-pizza"].value;
  if (
    prod.name === "" ||
    prod.description === "" ||
    prod.brand === "" ||
    prod.imageUrl === "" ||
    prod.price === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Hello???",
      text: "Compila tutti i campi!!",
    });
    return;
  }
  if (prodotto) {
    let promise = aggiornaProdotto(prod);
    promise.then((response) => {
      if (response.status == "200") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "La tua pizza è stata modificata con successo!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  } else {
    let promise = creaProdotto(prod);
    promise.then((response) => {
      if (response.status == "200") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "La tua pizza è stata creata con successo!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
}

let idProdotto;
let prodotto;

async function initPagina() {
  const queryString = window.location.search;
  if (queryString) {
    const parametri = new URLSearchParams(queryString);
    let id = parametri.get("id");
    if (id) {
      idProdotto = id;
      prodotto = await getProdotto(id);
      popolaCampi(prodotto);
    }
  }
  let modificaButton = document.getElementById("add-pizza");
  if (idProdotto) {
    modificaButton.textContent = "Salva Modifiche";
  } else {
    modificaButton.textContent = "Crea Nuovo Prodotto";
  }
  let salvaButton = document.querySelector("#add-pizza");
  salvaButton.addEventListener("click", function (e) {
    e.preventDefault();
    salva();
  });
}

function popolaCampi(prod) {
  let form = document.getElementById("add-pizza-form");
  form.elements["nome-pizza"].value = prod.name;
  form.elements["descrizione-pizza"].value = prod.description;
  form.elements["brand-pizza"].value = prod.brand;
  form.elements["immagine-pizza"].value = prod.imageUrl;
  form.elements["prezzo-pizza"].value = prod.price;
}
