let allImageCards = document.querySelectorAll(".card");

for (let imageCard of allImageCards) {
    let favoritButton = imageCard.querySelector("button");

    favoritButton.addEventListener("click", () => {
    toggleFavorited(imageCard);
});
    
    console.log(imageCard);
}



function toggleFavorited(card){
    console.log(card);
}