const modal = document.querySelector(".modal");
const exitBtn = document.querySelector("modal_star");
const btn = document.querySelector(".thumb_first");

btn.addEventListener("click", () => {
    modal.classList.add("modal_active");
});

// exitBtn.addEventListener("click", () => {
//     modal.classList.remove("modal_active");
// });