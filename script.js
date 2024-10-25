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

    // Last inn favorit listen fra local storage
    let favorites = loadFavorites();

    // Anta at vi ikke har lagt den til i favoritter enda
       favorites.push(imageObject);

    // Lagre den oppdaterte listen i local storage
    let updatedFavoritesString = JSON.stringify(favorites)
    localStorage.setItem("favorites", updatedFavoritesString)

    console.log(favorites);
}

function loadFavorites() {
      // Last inn favorit listen fra local storage
      let favoritesString = localStorage.getItem("favorites");

      let favorites;
      if (favoritesString === null) {
           //Hvis første gang på siden, lag et nytt array (liste)
          favorites = [];
      } else {
          // Hvis vi har vært her før, konverter fra tekst streng til et array (liste)
          favorites = JSON.parse(favoritesString);
      }

      return favorites;
}