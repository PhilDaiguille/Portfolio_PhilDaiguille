document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    let btn = document.querySelector(".material-icons");
    let el = document.querySelector("nav");
    let date = document.querySelector("footer address ul li span");
    btn.addEventListener("click", () => {
        el.classList.toggle("open-menu");
    });

    dates = new Date(), date.innerHTML = `${dates.getFullYear()}`;
});