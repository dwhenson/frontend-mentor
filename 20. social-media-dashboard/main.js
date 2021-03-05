const root = document.querySelector("html");
const toggle = document.querySelector(".toggle");
const checkbox = document.querySelector("#toggle-element");

let state;

function getState(propKey, element = document.documentElement) {
	let response = getComputedStyle(element).getPropertyValue(propKey);
	if (response.length) {
		response = response.replace(/"/g, "").trim();
	}
	state = response;
}

function changeHandler(event) {
	if (event.target.checked) {
		root.classList.add("dark-theme");
	} else {
		root.classList.remove("dark-theme");
	}
}

function updateCSS() {
	if (state === "dark") {
		checkbox.click();
		root.classList.add("dark-theme");
	}
	if (state === "light") {
		root.classList.remove("dark-theme");
	}
}

// Remove hidden attribute only if JS loads
toggle.removeAttribute("hidden");
getState("--color-mode", root);
updateCSS();
document.addEventListener("change", changeHandler);
