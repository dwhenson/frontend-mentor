const root = document.querySelector(":root");
const totalUsd = document.querySelector("#total-usd");
let totalUsdNumber = Number(totalUsd.textContent.replace(/,/g, ""));
const totalBackers = document.querySelector("#total-backers");
let totalBackersNumber = Number(totalBackers.textContent.replace(/,/g, ""));
const pledgeButtons = document.querySelectorAll(".continue");
const remainingModal = document.querySelectorAll(".remaining-modal");
const remainingPage = document.querySelectorAll(".remaining-page");
const pledgeAmounts = document.querySelectorAll("input[name='commit']");
const mainDialog = document.querySelector("#dialogMain");

function updateProgress() {
	root.style.setProperty("--width-bar", `${(totalUsdNumber * 100) / 100000}%`);
}

function renderHTML(index) {
	totalUsd.textContent = `${totalUsdNumber.toLocaleString("en")}`;
	totalBackers.textContent = `${totalBackersNumber.toLocaleString("en")}`;
	remainingPage[index].textContent = `${
		Number(remainingPage[index].textContent) - 1
	}`;
	remainingModal[index].textContent = `${
		Number(remainingModal[index].textContent) - 1
	}`;
	updateProgress();
}

function clickHandler(event) {
	if (!event.target.closest(".continue")) return;
	pledgeButtons.forEach(function (pledge, index) {
		if (event.target === pledge) {
			totalUsdNumber += Number(pledgeAmounts[index].value);
			totalBackersNumber += 1;
			// checkStock(index);
			renderHTML(index);
		}
	});
}

updateProgress();
mainDialog.addEventListener("click", clickHandler);

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
