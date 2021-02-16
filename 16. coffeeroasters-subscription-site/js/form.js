const fields = [...document.querySelectorAll(".value")];
const button = document.querySelector("#checkout");
const modal = document.querySelector(".checkout.modal");

function changeHandler(event) {
	const category = event.target.closest("details").id;
	fields.forEach((field) => {
		if (category === field.dataset.value) {
			field.textContent = event.target.value;
		}
	});
}

function openModal(event) {
	if (event.target !== button) return;
	event.preventDefault();
	modal.style.display = "block";
}

document.addEventListener("change", changeHandler);
document.addEventListener("click", openModal);
