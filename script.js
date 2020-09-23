const arrow = document.querySelector(".arrow");
const mainContainer = document.querySelector(".main_container-items");

const mainMenu = document.querySelector(".main_menu");


arrow.addEventListener("click", () => {
    arrow.classList.toggle("rotation");
    mainContainer.classList.toggle("animate");
})

