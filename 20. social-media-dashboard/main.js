const checkbox = document.querySelector("#dark-mode");
const root = document.querySelector("html");

function changeHandler() {
	if (checkbox.checked) {
		root.classList.add("dark-theme");
	} else {
		root.classList.remove("dark-theme");
	}
}

document.addEventListener("change", changeHandler);
