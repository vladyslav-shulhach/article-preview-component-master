const shareButton = document.getElementById("shareButton");
const shareMenu = document.getElementById("shareMenu");

shareButton.addEventListener("click", toggleShareMenu);

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