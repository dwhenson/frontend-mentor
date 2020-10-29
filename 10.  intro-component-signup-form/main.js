// Avoid global scope
(function () {
	/* ==========  Variables  ========== */
	const form = new Bouncer("form");

	/* ==========  Functions  ========== */
	// Show the error icon on error
	function showIcon(event) {
		const icon = event.target.nextElementSibling;
		icon.style.visibility = "visible";
	}

	// Hide the error icon on resolved error
	function hideIcon(event) {
		const icon = event.target.nextElementSibling;
		icon.style.visibility = "hidden";
	}

	/* ==========  Inits and Event Listeners  ========== */
	document.addEventListener("bouncerShowError", showIcon);
	document.addEventListener("bouncerRemoveError", hideIcon);
})();
