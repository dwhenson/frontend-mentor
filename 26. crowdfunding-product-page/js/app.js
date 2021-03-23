const root = document.querySelector(":root");
const totalUsd = document.querySelector("#total-usd").textContent;
const totalUsdNumber = parseFloat(totalUsd.replace(/,/g, ""));
const totalBackers = document.querySelector("#total-backers").textContent;

function updateProgress() {
	root.style.setProperty("--width-bar", `${(totalUsdNumber * 100) / 100000}%`);
}

updateProgress();
