const shareButton = document.getElementById("shareButton");
const shareMenu = document.getElementById("shareMenu");

shareButton.addEventListener("click", toggleShareMenu);
document.addEventListener("click", handleOutsideClick);
document.addEventListener("keydown", handleEscapeKey);

function toggleShareMenu() {
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

  function handleOutsideClick(event) {
    if (!shareMenu.contains(event.target) && event.target !== shareButton) {
      hideShareMenu();
    }
  }

  function handleEscapeKey(event) {
    if (event.key === "Escape") {
      hideShareMenu();
    }
  }