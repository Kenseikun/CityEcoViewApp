const modal = document.querySelector(".modal");
const exitBtn = document.querySelector("modal_star");
const btn = document.querySelector(".thumb_first");

btn.addEventListener("click", () => {
    modal.classList.add("modal_active");
});

// exitBtn.addEventListener("click", () => {
//     modal.classList.remove("modal_active");
// });

const wrong = document.querySelector(".wrong");
// const exitBtn = document.querySelector("modal_star");
const btnWrong = document.querySelector(".thumb_third");

btnWrong.addEventListener("click", () => {
    console.log("ok");
    console.log(wrong);
    wrong.classList.add("wrong_active");
});
