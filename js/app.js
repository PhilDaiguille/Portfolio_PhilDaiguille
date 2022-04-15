document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    let btn = document.querySelector(".burger");
    let el = document.querySelector("header div");
    let date = document.querySelector("footer p");

    btn.addEventListener("click", () => {
        el.classList.toggle("open-menu");
        btn.innerHTML === "☰" ? btn.innerHTML = "✕" : btn.innerHTML = "☰";
        
    });
    
    let dates = new Date();
    date.innerHTML = `Copyright © ${dates.getFullYear()} - Philippe DELENTE | Tous droits réservés`;

});