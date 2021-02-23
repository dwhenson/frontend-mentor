const form = document.querySelector("form");
const emailInput = document.querySelector("#emailInput");
const errorIcon = document.querySelector("#errorIcon");
const errorMessage = document.querySelector("#errorMessage");

function noValidate() {
	form.setAttribute("noValidate", "");
}

function validateType() {
	if (form.checkValidity()) {
		emailInput.classList.remove("error");
		errorIcon.style.display = "none";
		errorMessage.style.display = "none";
	}
}

function validateSubmit(event) {
	event.preventDefault();
	if (!form.checkValidity()) {
		emailInput.classList.add("error");
		errorIcon.style.display = "block";
		errorMessage.style.display = "block";
		emailInput.focus();
		document.addEventListener("keyup", validateType);
	} else {
		form.submit();
	}
}

noValidate();
document.addEventListener("submit", validateSubmit);
