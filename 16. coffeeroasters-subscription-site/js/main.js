const modalNav = document.querySelector(".mobile-modal");

function clickHandler(event) {
	if (event.target.closest("#menu")) {
		modalNav.style.display = "block";
	}
	if (event.target.closest("#close")) {
		modalNav.style.display = "none";
	}
}

document.addEventListener("click", clickHandler);
