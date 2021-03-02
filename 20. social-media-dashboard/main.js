const toggle = document.querySelector(".toggle");
const root = document.querySelector("html");

/**
 * Adds/removes a class based on checkbox status
 */
function changeHandler(event) {
	if (event.target.checked) {
		root.classList.add("dark-theme");
	} else {
		root.classList.remove("dark-theme");
	}
}

// Remove hidden attribute only if JS loads
toggle.removeAttribute("hidden");
document.addEventListener("change", changeHandler);
