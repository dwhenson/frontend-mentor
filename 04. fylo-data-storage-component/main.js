const slider = document.querySelector(".slider");
const amountLarge = document.querySelector(".amount-large");
const amountSmall = document.querySelector(".amount-small");
const max = slider.getAttribute("max");

function inputHandler() {
	amountLarge.textContent = max - slider.value;
	amountSmall.textContent = max - slider.value;
}

inputHandler();
document.addEventListener("input", inputHandler);
