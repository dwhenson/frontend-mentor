const values = [
	{ views: "10K", price: 8, discount: 6 },
	{ views: "50K", price: 12, discount: 9 },
	{ views: "100K", price: 16, discount: 12 },
	{ views: "500K", price: 24, discount: 18 },
	{ views: "1M", price: 36, discount: 27 },
];
const priceSlider = document.querySelector("#price-slider");
const table = document.querySelector("#table");
const input = document.querySelector("#input");
const views = document.querySelector("#views");
const price = document.querySelector("#price");

input.oninput = function () {
	views.innerHTML = values[this.value].views;
	price.innerHTML = values[this.value].price;
};

// table.setAttribute("hidden", "true");
priceSlider.removeAttribute("hidden");
input.oninput();
