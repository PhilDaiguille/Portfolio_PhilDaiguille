document.addEventListener("DOMContentLoaded", () => {
	console.log("loaded");
	let btn = document.querySelector(".burger");
	let el = document.querySelector("header div");
	let date = document.querySelector("footer p");
	let down = document.querySelector("nav ul");

	btn.addEventListener("click", () => {
		el.classList.toggle("open-menu");
		btn.innerHTML === "☰" ? btn.innerHTML = "✕" : btn.innerHTML = "☰";
	});

	down.addEventListener("click", () => {
		el.classList.toggle("open-menu");
		btn.innerHTML === "☰" ? btn.innerHTML = "✕" : btn.innerHTML = "☰";
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
});