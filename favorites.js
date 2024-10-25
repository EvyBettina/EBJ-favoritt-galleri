let favorites = loadFavorites();
let favoritesList = document.querySelector("#favorites");

for (let image of favorites) {
    let imageCard = document.createElement("li");
    imageCard.textContent = image.name;

    favoritesList.append(imageCard);
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
