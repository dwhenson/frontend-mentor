/* =================== Variables ====================== */
/* ==================================================== */

const KEYCODE = {
	ESC: 27,
};
// Main dialog
const mainDialog = document.querySelector(".main-dialog");
const dialogMask = document.querySelector(".dialog-mask");
const dialogWindow = document.querySelector(".dialog__window");
const closeButton = document.querySelector("#close");
let previousActiveElementPage;
// Success dialog
const successDialog = document.querySelector(".success-dialog");
const dialogMaskSuccess = document.querySelector(".dialog-mask-success");
const clearButton = document.querySelector(".clear");
let previousActiveElementModal;

/* =================== Functions ====================== */
/* ==================================================== */

/* Helper Functions
/* ==================================================== */

// NOTE can this be refactored?
function keyHandlerMain(event) {
	if (event.keyCode === KEYCODE.ESC) {
		closeDialog();
	}
}

function keyHandlerSuccess(event) {
	if (event.keyCode === KEYCODE.ESC) {
		closeDialogSuccess();
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
}

/**
 * Opens the success dialog
 */
function openSuccess() {
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
function closeDialog() {
	// Remove the event listeners
	mainDialog.removeEventListener("keydown", keyHandlerMain);
	dialogMask.removeEventListener("click", closeDialog);
	closeButton.removeEventListener("click", closeDialog);
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
function openDialog() {
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
	closeButton.focus();
	// Add listeners to the close the main dialog
	mainDialog.addEventListener("keydown", keyHandlerMain);
	dialogMask.addEventListener("click", closeDialog);
	closeButton.addEventListener("click", closeDialog);
	// Add listeners to the main dialog to open success dialog
	dialogWindow.addEventListener("click", function (event) {
		if (!event.target.closest(".continue")) return;
		event.preventDefault();
		openSuccess();
	});
}

/**
 * Handle clicks on the main page to open the main dialog
 * @param      {Event}  event   The event object
 */
function clickHandler(event) {
	if (!event.target.closest(".dialog-button")) return;
	openDialog(event);
}

/* ============  Inits and Event Listeners  =========== */
/* ==================================================== */

document.addEventListener("click", clickHandler);
