const toggle = document.querySelector("#toggle-element");

function togglePrice(event) {
	console.log(event.target.checked);
}

toggle.addEventListener("change", togglePrice);
