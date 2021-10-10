document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    let btn = document.querySelector(".material-icons");
    let el = document.querySelector("nav");
    btn.addEventListener("click", () => {
        el.classList.toggle("open-menu");
    });
});