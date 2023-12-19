function openModal() {
  const modal = document.getElementById("accessibleModal");
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
}

// Funktion för att stänga modalfönstret
function closeModal() {
  var modal = document.getElementById("accessibleModal");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}
