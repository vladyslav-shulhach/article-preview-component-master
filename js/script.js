const shareButton = document.getElementById("shareButton");
const shareMenu = document.getElementById("shareMenu");

shareButton.addEventListener("click", toggleShareMenu);
document.addEventListener("click", handleOutsideClick);
document.addEventListener("keydown", handleEscapeKey);

function toggleShareMenu() {
  // event.stopPropagation();
  const isVisible = shareMenu.classList.contains("active");
  
    if (isVisible) {
      hideShareMenu();
    } else {
      showShareMenu();
    }
  }

function showShareMenu() {
    shareMenu.classList.add("active");
  }
  
function hideShareMenu() {
    shareMenu.classList.remove("active");
  }

// Close the share menu if clicked outside
function handleOutsideClick(event) {
  if (!shareMenu.contains(event.target) && !shareButton.contains(event.target)) {
    hideShareMenu();
  }
}

// Close the share menu when pressing the Escape key
function handleEscapeKey(event) {
  if (event.key === "Escape") {
    hideShareMenu();
  }
}