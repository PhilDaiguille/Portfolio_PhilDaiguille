document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  const date = document.querySelector("footer p");

  const dates = new Date();
  date.innerHTML = `Copyright © ${dates.getFullYear()} - Philippe DELENTE | Tous droits réservés`;
  const slider = document.getElementsByClassName("slider");

  let etape = 0;
  const nbimg = slider.length;
  const precedent = document.querySelector(".precedent");
  const suivant = document.querySelector(".suivant");

  const enleverActiveImages = () => {
    for (let i = 0; i < nbimg; i++) {
      slider[i].classList.remove("active");
    }
  };

  suivant.addEventListener("click", () => {
    etape++;
    if (etape >= nbimg) {
      etape = 0;
    }
    enleverActiveImages();
    slider[etape].classList.add("active");
  });

  precedent.addEventListener("click", () => {
    etape--;
    if (etape < 0) {
      etape = nbimg - 1;
    }
    enleverActiveImages();
    slider[etape].classList.add("active");
  });
});
