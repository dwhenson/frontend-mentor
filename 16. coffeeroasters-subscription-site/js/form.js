(function () {
	/* =================== Variables ====================== */
	/* ==================================================== */

	const fields = [...document.querySelectorAll(".value")];
	const button = document.querySelector("#checkout");
	const modal = document.querySelector(".checkout.modal");
	const submit = document.querySelector("#submit");

	/* =================== Functions ====================== */
	/* ==================================================== */

	/**
	 * Handle change events on the form inputs and render value to summary
	 * @param  {event} event The event object
	 */
	function changeHandler(event) {
		const category = event.target.closest("details").id;
		fields.forEach((field) => {
			if (category === field.dataset.value) {
				field.textContent = event.target.value;
			}
		});
	}

	/**
	 * Handle the submit event on the order modal
	 * @param  {event} event The event object
	 */
	function submitHandler(event) {
		if (event.target !== submit) return;
		modal.innerHTML = `
	<div class="[ flow-content ] [ summary checkout content ]">
		<h2>Thanks for your order.</h2>
		<p class="check">
			Order received. Your coffee will be with soon.
		</p>
	</div>
`;
	}

	/**
	 * Close the model if the escape key is pressed
	 * @param  {event} event The event object
	 */
	function closeModalKey(event) {
		if (event.key !== "Escape") return;
		modal.style.display = "none";
		document.removeEventListener("keydown", closeModalKey);
	}

	/**
	 * Close the modal if clicked outside the modal
	 * @param  {event} event The event object
	 */
	function closeModalClick(event) {
		if (event.target.closest(".content")) return;
		modal.style.display = "none";
		document.removeEventListener("click", closeModalClick);
	}

	/**
	 * Open the modal when the form is submitted
	 * @param  {event} event The event object
	 */
	function openModal(event) {
		if (event.target !== button) return;
		event.preventDefault();
		modal.style.display = "block";
		submit.focus();
		document.addEventListener("click", closeModalClick);
		document.addEventListener("keydown", closeModalKey);
		modal.addEventListener("click", submitHandler);
	}

	/* ============  Inits and Event Listeners  =========== */
	/* ==================================================== */

	document.addEventListener("change", changeHandler);
	document.addEventListener("click", openModal);
})();
