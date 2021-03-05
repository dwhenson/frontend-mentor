/* =================== Variables ====================== */
/* ==================================================== */

const root = document.querySelector("html");
const toggle = document.querySelector(".toggle");
const checkbox = document.querySelector("#toggle-element");
let state;

/* =================== Functions ====================== */
/* ==================================================== */

/* Helper Functions
/* ==================================================== */

function getState(propKey, element = document.documentElement) {
	let response = getComputedStyle(element).getPropertyValue(propKey);
	if (response.length) {
		response = response.replace(/"/g, "").trim();
	}
	state = response;
}

/* App Functions
/* ==================================================== */

/**
 * Add and remove the dark-theme to the root element
 * @param      {Object}  event   The event object
 */
function changeHandler(event) {
	if (event.target.checked) {
		root.classList.add("dark-theme");
	} else {
		root.classList.remove("dark-theme");
	}
}

/**
 * Update CSS based on state variable
 */
function updateCSS() {
	if (state === "dark") {
		checkbox.click();
		root.classList.add("dark-theme");
	}
	if (state === "light") {
		root.classList.remove("dark-theme");
	}
}

/* ============  Inits and Event Listeners  =========== */
/* ==================================================== */

// Remove hidden attribute only if JS loads
toggle.removeAttribute("hidden");
// Update state variable from system theme
getState("--color-mode", root);
// Update toggle position and classes based on state
updateCSS();
// Listen for additional events on the toggle
toggle.addEventListener("change", changeHandler);
