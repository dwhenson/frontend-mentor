/* =================== Variables ====================== */
/* ==================================================== */

const KEYCODE = {
	ESC: 27,
};
// Main dialog variables
const body = document.querySelector("body");
const mainDialog = document.querySelector("#dialogMain");
const dialogMask = document.querySelector("#dialogMask");
const dialogWindow = document.querySelector("#dialogWindow");
const closeButton = document.querySelector("#close");
const mainTitle = document.querySelector("#dialog-title");
let previousActiveElementPage;
// Success dialog variables
const successDialog = document.querySelector("#dialogSuccess");
const dialogMaskSuccess = document.querySelector("#dialogMaskSuccess");
const clearButton = document.querySelector("#clear");
let previousActiveElementModal;

/* =================== Functions ====================== */
/* ==================================================== */

/* Helper Functions
/* ==================================================== */

function keyHandlerMain(event) {
	if (event.keyCode === KEYCODE.ESC) {
		closeDialogMain();
	}
}

function keyHandlerSuccess(event) {
	if (event.keyCode === KEYCODE.ESC) {
		closeDialogSuccess();
		closeDialogMain();
	}
}

/* =================== Functions ====================== */
/* ==================================================== */

/**
 * Closes the success dialog
 */
function closeDialogSuccess() {
	// Remove the event listeners
	successDialog.removeEventListener("keydown", keyHandlerSuccess);
	dialogMaskSuccess.removeEventListener("click", closeDialogSuccess);
	clearButton.removeEventListener("click", closeDialogSuccess);
	// Remove the inert setting from the main dialog
	Array.from(document.body.children).forEach((child) => {
		if (child === mainDialog) {
			child.inert = false;
		}
	});
	// Close the dialog
	successDialog.classList.remove("opened");
	// Restore focus to the previously focused element
	previousActiveElementModal.focus();
	closeDialogMain();
}

/**
 * Opens the success dialog
 */
function openDialogSuccess() {
	// Store the currently active element
	previousActiveElementModal = document.activeElement;
	// Set the main dialog as inert and active the success dialog
	Array.from(document.body.children).forEach((child) => {
		if (child === mainDialog) {
			child.inert = true;
		}
		if (child === successDialog) {
			child.inert = false;
		}
	});
	// Open the success dialog
	successDialog.classList.add("opened");
	// Move focus to the clear button
	clearButton.focus();
	// Add listeners to close the success dialog
	successDialog.addEventListener("keydown", keyHandlerSuccess);
	dialogMaskSuccess.addEventListener("click", closeDialogSuccess);
	clearButton.addEventListener("click", closeDialogSuccess);
}

/**
 * Closes the main dialog.
 */
function closeDialogMain() {
	// Remove the event listeners
	document.removeEventListener("keydown", keyHandlerMain);
	dialogMask.removeEventListener("click", closeDialogMain);
	closeButton.removeEventListener("click", closeDialogMain);
	// Remove the inert setting from all body children
	Array.from(document.body.children).forEach((child) => {
		if (child !== mainDialog) {
			child.inert = false;
		}
	});
	// Close the dialog
	mainDialog.classList.remove("opened");
	// Restore focus to the previously focused element
	previousActiveElementPage.focus();
}

/**
 * Opens a the main dialog.
 */
function openDialogMain() {
	// Store the currently focused element
	previousActiveElementPage = document.activeElement;
	// Get direct children of body and set all to inert except the main dialogue
	Array.from(document.body.children).forEach((child) => {
		if (child !== mainDialog) {
			child.inert = true;
		}
	});
	// Add the open class to show the dialog
	mainDialog.classList.add("opened");
	// Move focus to the close button
	mainTitle.focus();
	// Add listeners to the close the main dialog
	document.addEventListener("keydown", keyHandlerMain);
	dialogMask.addEventListener("click", closeDialogMain);
	closeButton.addEventListener("click", closeDialogMain);
	// Add listeners to the main dialog to open success dialog
	dialogWindow.addEventListener("click", function (event) {
		if (!event.target.closest(".continue")) return;
		event.preventDefault();
		openDialogSuccess();
	});
}

/**
 * Handle clicks on the main page to open the main dialog
 * @param      {Event}  event   The event object
 */
function clickHandler(event) {
	if (!event.target.closest(".dialog-button")) return;
	openDialogMain(event);
}

/* ============  Inits and Event Listeners  =========== */
/* ==================================================== */

document.addEventListener("click", clickHandler);
