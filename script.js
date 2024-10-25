// Hent ut alle "kortene" fra HTML
let allImageCards = document.querySelectorAll(".card");

// For hvert av kortene, legg til en favoritt funksjon
for (let imageCard of allImageCards) {
    let favoritButton = imageCard.querySelector("button");

// Så legger vi til en egen fuksjon, arrow funksjon "() => {};
favoritButton.addEventListener("click", () => {
    toggleFavorited(imageCard);
});
}

/**
 * Favoritt funksjonen
 * @param {Element} card 
 */
function toggleFavorited(card) {
    // Hent ut bilde url og bilde navn
    let image = card.querySelector("img");

    let imageObject = {
    url: image.src,
    name: image.alt,
    };
    
    console.log(imageObject);
}