const thumbnails = [
   "assets/media/media0.webp",
   "assets/media/media1.jpg",
   "assets/media/media2.webp",
   "assets/media/media3.webp",
   "assets/media/media4.jpg",
   "assets/media/media5.webp",
   "assets/media/media6.jpg",
   "assets/media/media7.webp",
   "assets/media/media8.webp",
   "assets/media/media9.jpg",
   "assets/media/media10.jpg",
   "assets/media/media11.jpg",
   "assets/media/media12.jpg",
   "assets/media/media13.jpg",
   "assets/media/media14.webp",
   "assets/media/media15.jpg",
   "assets/media/media16.webp",
   "assets/media/media17.jpg",
   "assets/media/media18.jpg",
   "assets/media/media19.webp",
   "assets/media/media20.jpg",
   "assets/media/media21.webp",
   "assets/media/media22.webp",
   "assets/media/media23.webp",
   "assets/media/media24.jpg",
   "assets/media/media25.webp",
   "assets/media/media26.webp",
   "assets/media/media27.jpg",
   "assets/media/media28.jpg",
   "assets/media/media29.jpg",
   "assets/media/media30.jpg",
   "assets/media/media31.webp",
   "assets/media/media32.jpg",

];
let carouselImg = {
    "trending" : thumbnails.slice(),
    "watch" : thumbnails.slice(),
    "new" : thumbnails.slice()
}

// distribuisci le icone in modo random ai tre carousel
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(carouselImg.trending);
shuffleArray(carouselImg.watch);
shuffleArray(carouselImg.new);

function getMediaBreakpoints() {
    let imgHeight = window.innerWidth / 11;
    let spacing = 10; // spazio fra le immagini (in pixels)
    
    if (window.innerWidth < 800) {
        imgHeight = window.innerWidth / 9; 
        spacing = 5;
    }
    
    return {
        "imgHeight" : imgHeight,
        "imgWidth" : imgHeight * 2, // semplifichiamo: le immagini originali sono sempre in rapporto 2 a 1
        "spacing" : spacing
    }
}

// crea una 'slide' del carousel
function creaCarouselItem(carouselInner, images, imgFirst, imgLast, isActiveItem) {
    const item = document.createElement("div");
    item.classList.add("carousel-item");
    if (isActiveItem) {
        item.classList.add("active");
    }

    for (let i=imgFirst; i<imgLast;++i) {
        const img = document.createElement("img");
        img.src = images[i];
        item.appendChild(img);
    }

    carouselInner.appendChild(item);
}

function svuotaCarousel(section) {
    const carouselInner = document.querySelector("." + section + " .carousel-inner");

    while (carouselInner.firstChild) {
        carouselInner.removeChild(carouselInner.firstChild);
    }
}

function popolaCarousel(section) { // section = 'trending' etc.
    svuotaCarousel(section);

    const carouselInner = document.querySelector("." + section + " .carousel-inner");

    const sz = getMediaBreakpoints();

    const totalImages = thumbnails.length;
    const imagesPerSlide = Math.ceil(carouselInner.clientWidth / (sz.imgWidth + sz.spacing));
    const numItems = Math.ceil(totalImages / imagesPerSlide);

    for (let i=0;i<numItems;++i) {
        let imgFirst = i * imagesPerSlide;
        let imgLast = Math.min(totalImages, imgFirst + imagesPerSlide);
        creaCarouselItem(carouselInner, carouselImg[section], imgFirst, imgLast, i==0)
    }
}

function popolaAllCarousel() {
    popolaCarousel("trending");
    popolaCarousel("watch");
    popolaCarousel("new");
}


window.addEventListener('load', function(event) {popolaAllCarousel();}, true);
window.addEventListener('resize', function(event) {popolaAllCarousel();}, true);
