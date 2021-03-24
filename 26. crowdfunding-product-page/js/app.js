const root = document.querySelector(":root");
const totalUsd = document.querySelector("#total-usd");
// let totalUsdNumber = Number(totalUsd.textContent.replace(/,/g, ""));
const totalBackers = document.querySelector("#total-backers");
// let totalBackersNumber = Number(totalBackers.textContent.replace(/,/g, ""));
const pledgeButtons = document.querySelectorAll(".continue");
const remainingModal = document.querySelectorAll(".remaining-modal");
const remainingPage = document.querySelectorAll(".remaining-page");
const pledgeAmounts = document.querySelectorAll("input[name='commit']");
const remaining = document.querySelectorAll("[data-type]");
// const mainDialog = document.querySelector("#dialogMain");

let pledged = 89914;
let backers = 5007;
const stock = {
	bamboo: 101,
	black: 64,
	mahogany: 0,
};

function updateProgress() {
	root.style.setProperty("--width-bar", `${(pledged * 100) / 100000}%`);
}

function disableNotAvailible(remainder) {
	remainder.closest(".box").classList.add("js-out-of-stock");
	const button = remainder.closest(".box").querySelector(".cta");
	button.textContent = `Out of stock`;
	button.disabled = true;
	if (remainder.classList.contains("remaining-modal")) {
		const input = remainder.closest(".box").querySelector("input");
		input.setAttribute("disabled", "disabled");
	}
}

function renderHTML() {
	totalUsd.textContent = `${pledged.toLocaleString("en")}`;
	totalBackers.textContent = `${backers.toLocaleString("en")}`;
	remaining.forEach(function (remainder) {
		remainder.textContent = stock[remainder.dataset.type];
		if (stock[remainder.dataset.type] <= 0) {
			remainder.textContent = 0;
			disableNotAvailible(remainder);
		}
	});
	updateProgress();
}

function updateStock(index) {
	stock[remainingModal[index].dataset.type] -= 1;
	renderHTML(index);
}

function clickHandler(event) {
	if (!event.target.closest(".continue")) return;
	pledgeButtons.forEach(function (pledge, index) {
		if (event.target === pledge) {
			pledged += Number(pledgeAmounts[index].value);
			backers += 1;
			updateStock(index);
			renderHTML(index);
		}
	});
}

renderHTML();
document.addEventListener("click", clickHandler);

// remainingPage.forEach(function (page, index) {
// 	checkStock(index);
// });
// remainingModal.forEach(function (page, index) {
// 	checkStock(index);
// });

// function checkStock(index) {
// 	const page =
// 	const modal = Number(remainingModal[index].textContent) - 1;
// 	// if (page <= 0) {
// 	// 	remainingPage[index].closest(".box").classList.add("js-out-of-stock");
// 	// 	const button = remainingPage[index].closest(".box").querySelector(".cta");
// 	// 	button.textContent = `Out of stock`;
// 	// 	button.disabled = true;
// 	// 	page.textContent = 0;
// 	// } else {
// 	// 	page.textContent = `${Number(remainingPage[index].textContent) - 1}`;
// 	// }

// 	// if (modal <= 0) {
// 	// 	remainingModal[index].closest(".box").classList.add("js-out-of-stock");
// 	// 	const radioButton = remainingModal[index]
// 	// 		.closest(".box")
// 	// 		.querySelector("input[name='commit']");
// 	// 	radioButton.disabled = true;
// 	// 	modal.textContent = 0;
// 	// } else {
// 	// 	modal.textContent = `${Number(remainingModal[index].textContent) - 1}`;
// 	// }
// }
