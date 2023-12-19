const modal = document.querySelector("#modal");
const openModal = document.querySelector("#openModalBtn");
const closeModal = document.querySelector("#closeModalBtn");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
