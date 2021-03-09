const plans = [
	{ views: "10K", price: 8, discount: 6 },
	{ views: "50K", price: 12, discount: 9 },
	{ views: "100K", price: 16, discount: 12 },
	{ views: "500K", price: 24, discount: 18 },
	{ views: "1M", price: 36, discount: 27 },
];
const input = document.querySelector("#range-input");
const views = document.querySelector("#views");
const price = document.querySelector("#price");
const annually = document.querySelector("#annually");
const min = input.min;
const max = input.max;
const value = input.value;

/**
 * Update HTML and slider styles based on slider position
 */
input.oninput = function () {
	views.innerHTML = plans[this.value].views;

	if (annually.checked) {
		price.innerHTML = plans[this.value].discount;
	} else {
		price.innerHTML = plans[this.value].price;
	}

	this.style.background = `linear-gradient(to right, var(--clr-primary-100) ${
		((this.value - this.min) / (this.max - this.min)) * 100
	}%, var(--clr-neutral-400) ${
		((this.value - this.min) / (this.max - this.min)) * 100
	}%, var(--clr-neutral-400) 100%)`;
};

/**
 * Change all prices according to monthly or annual selection
 * @param {Object}  event   The event object
 */
function changePrice(event) {
	if (!event.target.closest(".switch-container")) return;
	input.oninput();
}

/* ============  Inits and Event Listeners  =========== */
/* ==================================================== */

// Update the range slider styles on page load
input.style.background = `linear-gradient(to right,var(--clr-primary-100) ${
	((value - min) / (max - min)) * 100
}%, var(--clr-neutral-400) ${((value - min) / (max - min)) * 100}%, var(--clr-neutral-400) 100%)`;
input.oninput();

// Listen for changes on price toggle
document.addEventListener("change", changePrice);
