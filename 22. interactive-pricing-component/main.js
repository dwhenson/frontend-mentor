const plans = [
	{ views: "10K", price: 8, discount: 6 },
	{ views: "50K", price: 12, discount: 9 },
	{ views: "100K", price: 16, discount: 12 },
	{ views: "500K", price: 24, discount: 18 },
	{ views: "1M", price: 36, discount: 27 },
];
const planSection = document.querySelector("#plans");
const table = document.querySelector("#table");
const input = document.querySelector("#input");
const views = document.querySelector("#views");
const price = document.querySelector("#price");

input.oninput = function () {
	views.innerHTML = plans[this.value].views;
	price.innerHTML = plans[this.value].price;
};

table.setAttribute("hidden", "true");
planSection.removeAttribute("hidden");
input.oninput();
