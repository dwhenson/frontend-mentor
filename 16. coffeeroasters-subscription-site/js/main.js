(function () {
	/* =================== Variables ====================== */
	/* ==================================================== */

	const modalNav = document.querySelector(".mobile-modal");
	const link = modalNav.querySelector("a");

	/* =================== Functions ====================== */
	/* ==================================================== */

	/**
	 * Hide and show the mobile navigation menu
	 * @param  {event} event The event object
	 */
	function clickHandler(event) {
		if (event.target.closest("#menu")) {
			modalNav.style.display = "block";
			// Move focus to first link
			link.focus();
		}
		if (event.target.closest("#close")) {
			modalNav.style.display = "none";
		}
	}

	/* ============  Inits and Event Listeners  =========== */
	/* ==================================================== */

	document.addEventListener("click", clickHandler);
})();
