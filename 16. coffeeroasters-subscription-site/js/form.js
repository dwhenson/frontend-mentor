(function () {
	/* =================== Variables ====================== */
	/* ==================================================== */

	// All radio buttons
	const fields = [...document.querySelectorAll(".value")];
	// Detail elements
	const grind = document.querySelector("#grind");
	const preferences = document.querySelector("#preferences");
	// Span elements to hide or change
	const grindText = document.querySelectorAll("#grind-text");
	const method = document.querySelector("#method");
	// Only grind radio buttons
	const grinds = [...document.querySelectorAll("[name='grind']")];

	/* =================== Functions ====================== */
	/* ==================================================== */

	/**
	 * Revert styles and content if capsules is deselected
	 */
	function deSelectCapsules() {
		// Revert grind details to original styles
		grind.style.pointerEvents = "revert";
		grind.removeAttribute("tabindex");
		grind.style.color = "revert";
		method.textContent = "as";
		// Revert order summary text
		grindText.forEach((span) => {
			span.style.display = "inline";
		});
		// If a grind type has been selected open the grind details element
		grinds.forEach((item) => {
			if (item.checked) {
				grind.setAttribute("open", "");
			}
		});
	}

	/**
	 * Check if capsules is selected and remove necessary functionality
	 * @param  {event} event The event object
	 */
	function selectCapsules(event) {
		if (event.target.value === "capsules") {
			// Deactivate grind details element
			grind.style.pointerEvents = "none";
			grind.setAttribute("tabindex", "-1");
			grind.style.color = "var(--clr-neutral-200)";
			grind.removeAttribute("open");
			// Adjust order summary text
			method.textContent = "using";
			grindText.forEach((span) => {
				span.style.display = "none";
			});
			// Add listener to check if capsules is deselected
			preferences.addEventListener("change", deSelectCapsules, {
				once: true,
			});
		}
	}

	/**
	 * Handle change events on the form inputs and render value to summary
	 * @param  {event} event The event object
	 */
	function changeHandler(event) {
		const category = event.target.closest("details").id;
		fields.forEach((field) => {
			if (category === field.dataset.value) {
				field.textContent = event.target.value;
				if (event.target.value === "capsules") {
					selectCapsules(event);
				}
			}
		});
	}

	/* ============  Inits and Event Listeners  =========== */
	/* ==================================================== */

	document.addEventListener("change", changeHandler);
})();
