// Hent ut alle "kortene" fra HTML
let allImageCards = document.querySelectorAll(".card");

// For hvert av kortene, legg til en favoritt funksjon
for (let imageCard of allImageCards) {
    let favoritButton = imageCard.querySelector("button");

// Så legger vi til en egen fuksjon, arrow funksjon "() => {};

favoritButton.addEventListener("click", () => {
    toggleFavorited(imageCard);
});
    
    console.log(imageCard);
}


// Favoritt funksjonen
function toggleFavorited(card) {
    console.log(card);
}