const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".error");

function noValidate() {
	form.setAttribute("noValidate", "");
}

function validateType() {
	if (form.checkValidity()) {
		errorMessage.style.display = "none";
		emailInput.style.border = "transparent";
	}
}

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

noValidate();
document.addEventListener("submit", validateSubmit);
