/* ==========  Variables  ========== */

const toggle = document.querySelector(".switch-container");
const basic = document.querySelector("#basic");
const professional = document.querySelector("#professional");
const master = document.querySelector("#master");

/* ==========  Functions  ========== */

function togglePrice(event) {
	if (event.target.id === "monthly") {
		basic.textContent = "19.99";
		professional.textContent = "24.99";
		master.textContent = "39.99";
	}
	if (event.target.id === "annually") {
		basic.textContent = "199.99";
		professional.textContent = "224.99";
		master.textContent = "339.99";
	}
}

/* ==========  Inits and Event Listeners  ========== */

toggle.addEventListener("change", togglePrice);
