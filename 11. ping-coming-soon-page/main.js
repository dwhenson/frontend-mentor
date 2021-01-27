/* =================== Variables ====================== */
/* ==================================================== */

const form = document.querySelector("form");
const submitForm = document.querySelector("button");
const emailField = document.querySelector("#email");
const errorField = document.querySelector(".error");

/* =================== Functions ====================== */
/* ==================================================== */

/**
 * Check input for valid email on key down
 */
function validateEmailKeydown() {
	if (!form.checkValidity()) {
		errorField.textContent = `Please provide a valid email address`;
		emailField.classList.add("error");
	} else {
		errorField.textContent = ``;
		emailField.classList.remove("error");
	}
}

/**
 * Check input for valid email on form submission
 */
function validateEmailSubmission() {
	if (!form.checkValidity() || !emailField.value) {
		errorField.textContent = `Please provide a valid email address`;
		emailField.classList.add("error");
	} else {
		form.submit();
	}
	emailField.addEventListener("keydown", validateEmailKeydown);
}

/* ============  Inits and Event Listeners  =========== */
/* ==================================================== */

submitForm.addEventListener("click", function (event) {
	event.preventDefault();
	form.setAttribute("novalidate", "");
	validateEmailSubmission(event);
});
