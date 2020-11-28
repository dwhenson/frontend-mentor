const toggle = document.querySelector("#toggle-element");
const priceSwitches = Array.from(document.querySelectorAll(".switch"));

function togglePrice(event) {
	if (event.target.checked) {
		priceSwitches.forEach((priceSwitch) => {
			if (priceSwitch.classList.contains("annually")) return;
			priceSwitch.classList.add("annually");
		});
	}
	if (!event.target.checked) {
		priceSwitches.forEach((priceSwitch) => {
			if (!priceSwitch.classList.contains("annually")) return;
			priceSwitch.classList.remove("annually");
		});
	}
}

toggle.addEventListener("change", togglePrice);
