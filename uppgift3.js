document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menuContent = document.getElementById("menuContent");
  
    menuButton.addEventListener("click", function () {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", !isExpanded);
      menuContent.setAttribute("aria-hidden", isExpanded);
    });
  });
  