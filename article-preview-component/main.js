/* ==========  Variables  ========== */

const avatarIcon = document.querySelector("#avatar-icon");
const shareIcon = document.querySelector("#share-icon");
const sharePanel = document.querySelector("#share");
const avatarPanel = document.querySelector("#avatar");

/* ==========  Functions  ========== */

function clickHandler(event) {
	if (event.target === avatarIcon) {
		sharePanel.style.display = "flex";
	} else if (event.target === shareIcon) {
		sharePanel.style.display = "none";
	}
}

/* ==========  Inits and Event Listeners  ========== */
document.addEventListener("click", clickHandler);
