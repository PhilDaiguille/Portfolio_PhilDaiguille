document.addEventListener("DOMContentLoaded", () => {
	console.log("loaded");
	let date = document.querySelector("footer p");

	let dates = new Date();
	date.innerHTML = `Copyright © ${dates.getFullYear()} - Philippe DELENTE | Tous droits réservés`;

	// slider
	let slider = document.getElementsByClassName("slider");
	let page = document.querySelector(".page");
	let etape = 0;
	let nbimg = slider.length;
	page.innerHTML = `Page ${etape + 1}/${nbimg}`;
	let precedent = document.querySelector(".precedent");
	let suivant = document.querySelector(".suivant");

	let enleverActiveImages = () => {
		for (let i = 0; i < nbimg; i++) {
			slider[i].classList.remove("active");
		}
		page.innerHTML = `Page ${etape + 1}/${nbimg}`;
	};

	suivant.addEventListener("click", () => {
		etape++;
		etape = etape >= nbimg ? 0 : etape;
		enleverActiveImages();
		slider[etape].classList.add("active");
	});

	precedent.addEventListener("click", () => {
		etape--;
		etape = etape < 0 ? nbimg - 1 : etape;
		enleverActiveImages();
		slider[etape].classList.add("active");
	});
});
