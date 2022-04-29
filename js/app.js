document.addEventListener("DOMContentLoaded", () => {
	console.log("loaded");
	let btn = document.querySelector(".burger");
	let el = document.querySelector("header div");
	let date = document.querySelector("footer p");
	let down = document.querySelector("nav ul");

	btn.addEventListener("click", () => {
		el.classList.toggle("open-menu");
		btn.innerHTML === "☰" ? (btn.innerHTML = "✕") : (btn.innerHTML = "☰");
	});

	down.addEventListener("click", () => {
		el.classList.toggle("open-menu");
		btn.innerHTML === "☰" ? (btn.innerHTML = "✕") : (btn.innerHTML = "☰");
	});

	let dates = new Date();
	date.innerHTML = `Copyright © ${dates.getFullYear()} - Philippe DELENTE | Tous droits réservés`;

	const sections = document.querySelectorAll("main section");
	let options = {
		rootMargin: "-10% 0px",
		threshold: 0.4,
	};
	function handleIntersect(entries) {
		console.log(entries);

		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = 1;
			}
		});
	}
	const observer = new IntersectionObserver(handleIntersect, options);

	sections.forEach((section) => {
		observer.observe(section);
	});
});
