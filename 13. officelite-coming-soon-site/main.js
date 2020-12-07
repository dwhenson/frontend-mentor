/* ============ Countdown timer and date ======== */
/* ============================================== */

// Avoid global scope
(function () {
	/* ============ Variables ========== */

	// HTML elements to render values
	const today = document.querySelector("#date");
	const days = document.querySelector("#days");
	const hours = document.querySelector("#hours");
	const mins = document.querySelector("#mins");
	const secs = document.querySelector("#secs");

	// Date now and 30 days from now
	const now = new Date();
	const plus30 = now.setDate(now.getDate() + 30);

	/* ==========  Functions  ========== */

	/**
	 * Renders today's date in long form to the HTML
	 */
	function renderToday() {
		const date = now.getDate();
		const month = now.toLocaleString("default", { month: "long" });
		const year = now.getFullYear();
		today.innerHTML = `${date} ${month} ${year}`;
	}

	/**
	 * Creates a new Date and minuses it from the time now plus 30 days
	 */
	function countdownTimer() {
		const newTime = new Date();
		const countdown = plus30 - newTime;

		// Converts ms to human readable values
		const day = Math.floor(countdown / 1000 / 60 / 60 / 24);
		const hour = Math.floor(countdown / 1000 / 60 / 60) % 24;
		const min = Math.floor(countdown / 1000 / 60) % 60;
		const sec = Math.floor(countdown / 1000) % 60;

		// Renders the human readable values to HTML
		days.textContent = day.toString().padStart(2, "0");
		hours.textContent = hour.toString().padStart(2, "0");
		mins.textContent = min.toString().padStart(2, "0");
		secs.textContent = sec.toString().padStart(2, "0");
	}

	/* ==========  Inits and Event Listeners  ========== */
	renderToday();

	setInterval(() => {
		countdownTimer();
	}, 1000);
})();

/* ============ Form validation ======== */
/* ===================================== */
// Avoid global scope
(function () {
	/* =============== Variables ============ */
	const form = document.querySelector("form");

	/* ============== Functions ============= */

	function checkCorrections(event) {
		if (!event.target.classList.contains("invalid")) return;
		if (event.target.checkValidity()) {
			event.target.classList.remove("invalid");
		}
	}

	function checkValid(event) {
		if (!event.target.checkValidity()) {
			event.target.classList.add("invalid");
		}
	}

	/* ==== Inits and Event Listeners  ===== */
	form.setAttribute("novalidate", "");
	form.addEventListener("focusout", checkValid);
	form.addEventListener("input", checkCorrections);
})();
