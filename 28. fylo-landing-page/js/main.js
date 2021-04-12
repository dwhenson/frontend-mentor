/* =================== Variables ====================== */
/* ==================================================== */

const form = document.querySelector("form");
const submitForm = document.querySelector("button");
const emailField = document.querySelector("#email");
const errorField = document.querySelector(".error");

/* =================== Functions ====================== */
/* ==================================================== */

/**
 * Check if email address is valid
 * @param      {string}   The email
 * @return     {boolean}  The result of the test
 */
function emailIsValid(email) {
	return /\S+@\S+\.\S+/.test(email);
}

/**
 * Check input for valid email on key down
 */
function validateEmailKeydown(event) {
	if (!emailIsValid(event.target.value)) {
		errorField.style.visibility = "visible";
	} else {
		errorField.style.visibility = "hidden";
	}
}

/**
 * Check input for valid email on form submission
 */
function validateEmailSubmission(event) {
	if (!emailIsValid(event.target.value) || !emailField.value) {
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
