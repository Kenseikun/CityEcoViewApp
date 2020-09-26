const modal = document.querySelector(".modal");
const exitBtn = document.querySelector("modal_star");
const btn = document.querySelector(".thumb_first");

btn.addEventListener("click", () => {
    modal.classList.add("modal_active");
});

const wrong = document.querySelector(".wrong");
const btnWrong = document.querySelector(".thumb_third");

btnWrong.addEventListener("click", () => {
    wrong.classList.add("wrong_active");
});
