let queryInput = document.getElementById('input-query')
let searchButton = document.getElementById('search-button')

searchButton.addEventListener('click', function(){

    const apiKey = 'VhJufOmKPQ1wuW2ZHQ9MHFkjyijMnxZCED3P8pcLSilqRs03WY1ES2vH'
    let query = queryInput.value
    const photoContainer = document.getElementById("photos");

    if(query.trim() === ''){

        queryInput.classList.add('error');
        return;
    } else {
        queryInput.classList.remove('error');
    }

    // Funzione per renderizzare le photo
    function renderPhoto(photos) {
        photoContainer.innerHTML = "";
        const photoTemplate = document.getElementById("photo-template");

        photos.photos.forEach((photo, index) => {
            const card = photoTemplate.content.cloneNode(true).firstElementChild;
            const div = document.createElement("div");
            div.classList.add("card", "col-3",  "mb-4")
            div.append(card)
            card.querySelector('img').src = photo.src.original;
            card.querySelector("img").alt = "";
            card.querySelector(".card-title").textContent = "";
            card.querySelector(".card-text").textContent = "";

            const removeButton = card.querySelector(".removePhoto");
            removeButton.addEventListener("click", () => {
                div.remove();
            });

            photoContainer.append(div);
        });
    }

    fetch(`https:api.pexels.com/v1/search?query=${query}`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': apiKey
        }
    })
    .then(response => response.json())
    .then((data) => {
        renderPhoto(data);
    })

})