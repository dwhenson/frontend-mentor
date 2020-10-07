/* ==========  Variables  ========== */

const sharePanel = document.querySelector("#share");

/* ==========  Functions  ========== */

function clickHandler(event) {
	if (!event.target.classList.contains("toggle-icon")) return;
	sharePanel.classList.toggle("is-visible");
}

/* ==========  Inits and Event Listeners  ========== */
document.addEventListener("click", clickHandler);
