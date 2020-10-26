/* ==========  Variables  ========== */

const form = document.querySelector("form");
const input = document.querySelector("input");
const status = document.querySelector(".status");
const icon = document.querySelector(".error");

/* ==========  Functions  ========== */

/**
 * Adds no validate attribute (allows fallback if Javascript fails)
 */
function addValidate() {
	form.setAttribute("novalidate", "");
}

/**
 * Renders successful email validation to the page
 * @param   {Object}  element  The element to insert the message
 * @param   {String}  message  The message to render
 */
function showSuccess(element, message) {
	element.textContent = message;
}

/**
 * Renders the email error message
 * @param   {Object}  element  The element to insert the message
 * @param   {String}  message  The message to render
 */
function showError(element, message) {
	element.textContent = message;
}

/**
 * Check the validity of the email address entered
 * @param   {Object}  element  The element with the value being checked
 */
function checkEmail() {
	const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (regex.test(input.value.trim())) {
		showSuccess(status, "Email valid");
		status.style.color = "var(--grayishRed)";
		input.style.border = "1px solid var(--desaturatedRed)";
		icon.style.display = "none";
	} else {
		showError(status, "Please provide a valid email");
		status.style.color = "var(--softRed)";
		input.style.border = "solid 2px var(--softRed)";
		icon.style.display = "block";
	}
}

/**
 * Calls the checkEmail function on input change event
 */
function inputHandler() {
	checkEmail();
}

/* ==========  Inits and Event Listeners  ========== */
// Adds validation on page load
addValidate();
// Adds event listener on form submit on page load
form.addEventListener("submit", function (event) {
	// If validation fails, prevents submission and runs checkEmail function
	// Returns focus to the input, and adds listener on input for instant verification
	if (!form.checkValidity()) {
		event.preventDefault();
		checkEmail();
		input.focus();
		form.addEventListener("input", inputHandler);
		// If form is valid, allow submit and clear values
	} else {
		form.submit();
		input.value = "";
		status.textContent = "";
	}
});
