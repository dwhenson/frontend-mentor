import getFocusableElements from "./get-focusable-elements.js";

const KEYCODE = {
	ESC: 27,
};

const dialog = document.querySelector(".dialog");
const dialogMask = document.querySelector(".dialog-mask");
const dialogWindow = document.querySelector(".dialog__window");
let previousActiveElement;

function closeDialog() {
	dialogMask.removeEventListener("click", closeDialog);
	dialogWindow.removeEventListener("click", function (event) {
		if (!event.target.closest(".dialog-button")) return;
		closeDialog();
	});
	document.removeEventListener("keydown", keyHandler);

	Array.from(document.body.children).forEach((child) => {
		if (child !== dialog) {
			child.inert = false;
		}
	});

	dialog.classList.remove("opened");

	previousActiveElement.focus();
}

function keyHandler(event) {
	if (event.keyCode === 27) {
		closeDialog();
	}
}

function openDialog() {
	previousActiveElement = document.activeElement;

	Array.from(document.body.children).forEach((child) => {
		if (child !== dialog) {
			child.inert = true;
		}
	});

	dialog.classList.add("opened");

	dialogMask.addEventListener("click", closeDialog);
	dialogWindow.addEventListener("click", function (event) {
		if (!event.target.closest(".dialog-button")) return;
		closeDialog();
	});

	document.addEventListener("keydown", keyHandler);

	const firstFocus = dialog.querySelector("[aria-label='Close Dialog']");
	firstFocus.focus();
}

function clickHandler(event) {
	if (!event.target.closest(".dialog-button")) return;
	openDialog(event);
}

document.addEventListener("click", clickHandler);
