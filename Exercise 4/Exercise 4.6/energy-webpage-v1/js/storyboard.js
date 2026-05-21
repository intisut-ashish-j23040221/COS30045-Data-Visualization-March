let currentBoard = 1;

function storyClick(page = 2) {
    if (currentBoard !== page)
        currentBoard = page;

    if (page === 1) {
        document.querySelector("div.placement").classList.remove("right");
        document.querySelector("#sb1").classList.remove("hidden");
        document.querySelector("#sb2").classList.add("hidden");
    } else {
        document.querySelector("div.placement").classList.add("right");
        document.querySelector("#sb2").classList.remove("hidden");
        document.querySelector("#sb1").classList.add("hidden");
    }

}

function showGraph(page = 1) {
    document.querySelector("dialog img").src = page === 1 ? "./images/TVManufacturingCountries.png" : "./images/PowerConsumedByScreenTechnology.png";
}