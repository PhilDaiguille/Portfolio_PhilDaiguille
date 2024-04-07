document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".burger");
  const el = document.querySelector("header div");
  const date = document.querySelector("footer p");
  const down = document.querySelector("nav ul");

  const toggleMenu = () => {
    el.classList.toggle("open-menu");
    btn.innerHTML =
      btn.innerHTML === '<i class="fa-solid fa-bars"></i>'
        ? '<i class="fa-solid fa-x"></i>'
        : '<i class="fa-solid fa-bars"></i>';
  };

  btn.addEventListener("click", toggleMenu);
  down.addEventListener("click", toggleMenu);

  const dates = new Date();
  date.innerHTML = `Copyright © ${dates.getFullYear()} - Philippe DELENTE | Tous droits réservés`;

  const sr = ScrollReveal();

  sr.reveal("header h1, header h2", {
    duration: 1000,
    origin: "top",
    distance: "10rem",
    delay: 100,
  });

  sr.reveal("main section", {
    duration: 1000,
    origin: "top",
    distance: "5rem",
    delay: 1,
  });

  const carousel = document.querySelector(".carrousel");
  let isDragging = false;
  let startPosX = 0;
  let scrollLeft = 0;

  carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startPosX = e.clientX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.style.cursor = "pointer";
    carousel.style.userSelect = "none";
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const x = e.clientX - carousel.offsetLeft;
    const walk = (x - startPosX) * 3;
    carousel.scrollLeft = scrollLeft - walk;
  });

  carousel.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.style.cursor = "pointer";
    carousel.style.userSelect = "auto";
  });

  skillsEvents();
});

function skillsEvents() {
  function events() {
    const categories = document.querySelectorAll(
      "#skills_section .box .menu .category",
    );
    const skillsLists = document.querySelectorAll(
      "#skills_section .box .box_content .skills_list",
    );

    function choose(i) {
      const skillSelector = document.querySelector(
        "#skills_section .box .menu .selector",
      );
      skillSelector.style.top = (100 / categories.length) * i + "%";

      categories.forEach((category, index) => {
        category.style.cursor = index === i ? "default" : "pointer";
        skillsLists[index].style.display = index === i ? "grid" : "none";
      });
    }

    categories.forEach((category, index) => {
      category.addEventListener("click", () => choose(index));
    });

    choose(0);
  }

  function generateSkills(myData) {
    const box = document.querySelector("#skills_section .box");
    box.innerHTML = "";

    const isWideScreen = window.innerWidth > 930;
    let menu = "";
    let boxContent = "";

    if (isWideScreen) {
      menu += `<div class="selector" style="height: calc(100% / ${myData.skills_categories.length})"></div>`;
    }

    myData.skills_categories.forEach((category) => {
      if (!isWideScreen) {
        box.innerHTML += `<div class="category_title">${category.name}</div>`;
      } else {
        menu += `<div class="category">${category.name}</div>`;
      }

      let skills = "";

      category.skills.forEach((skill) => {
        const style = skill.invert
          ? `style="filter: invert(${skill.invert});"`
          : "";
        skills += `<a class="skill" href="${skill.link}" target="_blank">
          <img src="${
            skill.logo
          }" alt="${skill.name.toLowerCase()}" ${style} width="190px" height="190px"/>
          <span>${skill.name}</span>
        </a>`;
      });

      boxContent += `<div class="skills_list">${skills}</div>`;
    });

    if (isWideScreen) {
      box.innerHTML = `<div class="menu">${menu}</div><div class="box_content">${boxContent}</div>`;
      events();
    } else {
      box.innerHTML += `<div class="box_content">${boxContent}</div>`;
    }
  }

  let prevWidth = window.innerWidth;

  fetch("../assets/data/skills.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      generateSkills(data);
    })
    .catch((error) => {
      console.log("Error pJS - File config not found", error);
    });

  window.addEventListener("resize", () => {
    if (
      (prevWidth >= 930 && window.innerWidth <= 930) ||
      (prevWidth <= 930 && window.innerWidth >= 930)
    ) {
      fetch("../assets/data/skills.json")
        .then((response) => response.json())
        .then((data) => {
          generateSkills(data);
          prevWidth = window.innerWidth;
        })
        .catch((error) => {
          console.log("Error pJS - File config not found", error);
        });
    }
  });
}
