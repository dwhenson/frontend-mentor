const right = document.querySelector(".right");
const left = document.querySelector(".left");

function showLeft() {
	left.style.left = "0";
	right.style.left = "100%";
}

function showRight() {
	left.style.left = "-100%";
	right.style.left = "0";
}

function clickHandler(event) {
	if (!event.target.closest(".button-container")) return;
	if (event.target.closest(".next")) {
		showRight();
	}
	if (event.target.closest(".previous")) {
		showLeft();
	}
}

document.addEventListener("click", clickHandler);
