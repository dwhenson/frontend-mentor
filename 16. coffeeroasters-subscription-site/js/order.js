(function () {
	/* =================== Variables ====================== */
	/* ==================================================== */

	const order = document.querySelector("#submit");
	const dialog = document.querySelector("#dialog");
	const checkout = document.querySelector("#checkout");
	const price = document.querySelector(".price");

	/* =================== Functions ====================== */
	/* ==================================================== */

	function submitHandler(event) {
		if (event.target !== order) return;
		dialog.innerHTML = `
		<div class="[ flow-content ] [ summary checkout content ]">
			<h2>Thanks for your order.</h2>
			<p class="check">
				Order received. Your coffee will be with soon.
			</p>
		</div>
	`;
	}

	function addESC(e) {
		if (e.keyCode == 27) {
			closeDialog();
		}
	}

	function addClick(event) {
		if (event.target.closest(".content")) return;
		closeDialog();
	}

	function closeDialog() {
		dialog.removeAttribute("data-open");
		order.focus();
		document.removeEventListener("keydown", addESC);
	}

	function openDialog(event) {
		if (event.target !== checkout) return;
		dialog.setAttribute("data-open", "");
		order.focus();
		order.addEventListener("keydown", function (event) {
			if (event.keyCode == 9) {
				event.preventDefault();
			}
		});
		document.addEventListener("keydown", addESC);
		document.addEventListener("click", addClick, {
			once: true,
		});
		dialog.addEventListener("click", submitHandler);
	}

	/* ============  Inits and Event Listeners  =========== */
	/* ==================================================== */
	document.addEventListener("click", openDialog);
})();
