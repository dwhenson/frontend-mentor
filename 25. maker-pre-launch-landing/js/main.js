/* =================== Variables ====================== */
/* ==================================================== */

const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".error");

/* =================== Functions ====================== */
/* ==================================================== */

/**
 * Set novalidate class to allow JS validation
 */
function noValidate() {
	form.setAttribute("noValidate", "");
}

/**
 * Validate form on keyup following failed submission
 */
function validateType() {
	if (form.checkValidity()) {
		errorMessage.style.display = "none";
		emailInput.style.border = "transparent";
	}
}

/**
 * On submit validate the form, if fails add listener for immediate validation
 * @param   {Event}  event  The event object
 */
function validateSubmit(event) {
	event.preventDefault();
	if (!form.checkValidity()) {
		errorMessage.style.display = "block";
		emailInput.style.border = "1px solid var(--clr-primary-300)";
		emailInput.focus();
		document.addEventListener("keyup", validateType);
	} else {
		form.submit();
	}
}

/* ============  Inits and Event Listeners  =========== */
/* ==================================================== */

noValidate();
document.addEventListener("submit", validateSubmit);
