const slide = document.querySelector(".carousel-slide");

function sizeHandler() {
	const params = slide.getBoundingClientRect();
	console.log(params);
}

window.addEventListener("resize", sizeHandler);
