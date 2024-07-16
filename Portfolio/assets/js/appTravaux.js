document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  const date = document.querySelector("footer p");

  const dates = new Date();
  date.innerHTML = `Copyright © ${dates.getFullYear()} - Philippe DELENTE | Tous droits réservés`;

  const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slideActiveClass: "active",
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    pagination: {
      el: ".pagination",
      clickable: true,
    },
  });
});
