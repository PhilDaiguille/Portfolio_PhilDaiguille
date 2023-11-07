import { skills } from '../data/skills.js';
document.addEventListener("DOMContentLoaded", () => {
	console.log("loaded");
	let btn = document.querySelector(".burger");
	let el = document.querySelector("header div");
	let date = document.querySelector("footer p");
	let down = document.querySelector("nav ul");

	btn.addEventListener("click", () => {
		el.classList.toggle("open-menu");
		btn.innerHTML === `<i class="fa-solid fa-bars"></i>` ? btn.innerHTML = `<i class="fa-solid fa-x"></i>` : btn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
	});

	down.addEventListener("click", () => {
		el.classList.toggle("open-menu");
		btn.innerHTML === `<i class="fa-solid fa-bars"></i>` ? btn.innerHTML = `<i class="fa-solid fa-x"></i>` : btn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
	});

	let dates = new Date();
	date.innerHTML = `Copyright © ${dates.getFullYear()} - Philippe DELENTE | Tous droits réservés`;

	const sr = ScrollReveal();

	sr.reveal("header h1, header h2", {
		duration: 1000,
		origin: "top",
		distance: "10rem",
		delay: 100
	});

	sr.reveal("main section", {
		duration: 1000,
		origin: "top",
		distance: "5rem",
		delay: 1
	});
	/*
	const createHTMLFromJSON = (skills) => {
		return skills.skills_categories[0].skills_categories.map((category) => {
			const categorySkills = category.skills.map((skill) => {
				let skillHTML = `<li><figure><img src="${skill.logo}" alt="${skill.name}"><figcaption>${skill.name}</figcaption></figure></li>`;
				if (skill.invert) {
					skillHTML = `<li><figure><img src="${skill.logo}" style="filter: invert(${skill.invert}); alt="${skill.name}"><figcaption>${skill.name}</figcaption></figure></li>`;
				}
				return skillHTML;
			}).join('');

			return `<h3>${category.name}</h3><ul>${categorySkills}</ul>`;
		}).join('');
	}

	const generatedHTML = createHTMLFromJSON(skills);
	document.getElementById('skills-container').innerHTML = generatedHTML;
	*/

	const carousel = document.querySelector('.carrousel');
	let isDragging = false;
	let startPosX = 0;
	let scrollLeft = 0;

	carousel.addEventListener('mousedown', (e) => {
		isDragging = true;
		startPosX = e.clientX - carousel.offsetLeft;
		scrollLeft = carousel.scrollLeft;
		carousel.style.cursor = 'pointer';
		carousel.style.userSelect = 'none';
	});

	carousel.addEventListener('mousemove', (e) => {
		if (!isDragging) return;
		const x = e.clientX - carousel.offsetLeft;
		const walk = (x - startPosX) * 3;
		carousel.scrollLeft = scrollLeft - walk;
	});

	carousel.addEventListener('mouseup', () => {
		isDragging = false;
		carousel.style.cursor = 'pointer';
		carousel.style.userSelect = 'auto';
	});


	skills_events();
});