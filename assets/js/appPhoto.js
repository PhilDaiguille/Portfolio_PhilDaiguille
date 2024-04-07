document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  let el, modal, closed, open_modal, closed_all;

  el = document.querySelectorAll(".grid-picture-large li");
  modal = document.querySelector(".parent-modale");
  closed = document.querySelector(".modale button");
  closed_all = document.querySelector(".modale img");

  /* property elements */

  open_modal = function () {
    /* les variables */
    const image = this.dataset.image;
    modal.classList.add("modale-active"); /* ajouter la classe active */
    /* sélectionner les sélecteurs html */
    document.querySelector(".modale img").setAttribute("src", image);
  };
  for (rows of el) {
    rows.addEventListener("click", open_modal);
  }
  closed.addEventListener("click", () => {
    modal.classList.remove("modale-active");
  });
  closed_all.addEventListener("click", () => {
    modal.classList.remove("modale-active");
  });
});
