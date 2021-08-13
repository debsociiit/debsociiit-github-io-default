function cardButton(season) {
    let seasonElement = document.getElementById(season);
    seasonElement.classList.toggle('card__button--active');

    if (seasonElement.classList.contains('card__button--active')) {
        seasonElement.children[0].style.position = "absolute";
        seasonElement.children[1].style.position = "relative";
        seasonElement.children[0].style.visibility = "hidden";
        seasonElement.children[1].style.visibility = "visible";
    } else {
        seasonElement.children[1].style.position = "absolute";
        seasonElement.children[0].style.position = "relative";
        seasonElement.children[1].style.visibility = "hidden";
        seasonElement.children[0].style.visibility = "visible";
    }
    
}