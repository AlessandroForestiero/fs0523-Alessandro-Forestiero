async function getPizze() {
  let response = await fetch(
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

async function getProdotto(id) {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product/${id}`,
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


  async function creaProdotto(prod){
  let b=  fetch("https://striveschool-api.herokuapp.com/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMDZiNjk1ZDRmNjAwMTg1NjI1ZTQiLCJpYXQiOjE2OTk2MTIzNDIsImV4cCI6MTcwMDgyMTk0Mn0.fZOwZJNn5JSucvO1ooTWVGNs-9KNKuZoeoedPV7t5vU",
      },
      body: JSON.stringify(prod),
    });
    return b;
  }

  async function aggiornaProdotto(prod){
    let b=  fetch(`https://striveschool-api.herokuapp.com/api/product/${prod._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMDZiNjk1ZDRmNjAwMTg1NjI1ZTQiLCJpYXQiOjE2OTk2MTIzNDIsImV4cCI6MTcwMDgyMTk0Mn0.fZOwZJNn5JSucvO1ooTWVGNs-9KNKuZoeoedPV7t5vU",
        },
        body: JSON.stringify(prod),
      });
      return b;
    }

