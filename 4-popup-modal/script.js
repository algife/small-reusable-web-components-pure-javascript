const modalContainerElement = document.querySelector(".modal-container");
const toggleModal = () => {
  // Remove it from the DOM with: elem.remove(); or ... just hide It if we want to re-use it

  modalContainerElement.classList.toggle("modal-displayed");
};

// backdrop dismissal

modalContainerElement.addEventListener("click", (event) => {
  const isBackdropClicked = event.path.every(
    (p) => p.className !== "modal-content"
  );

  if (isBackdropClicked) toggleModal();
});
