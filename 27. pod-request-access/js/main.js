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
		errorField.style.visibility = "visible";
	} else {
		errorField.style.visibility = "hidden";
	}
}

/**
 * Check input for valid email on form submission
 */
function validateEmailSubmission() {
	if (!form.checkValidity() || !emailField.value) {
		errorField.style.visibility = "visible";
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
