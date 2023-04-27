"use strict";

//KHAI BÁO BIẾN BỘ CHỌN
const containerLoginModal = document.getElementById("login-modal");
const containerMainContent = document.getElementById("main-content");
const wellcomeMessage = document.getElementById("welcome-message");
const btnLogout = document.getElementById("btn-logout");

//KHAI BÁO CÁC PHƯƠNG THỨC
CheckLogin();
function CheckLogin() {
  if (currentUser.length > 0) {
    if (!containerLoginModal.classList.contains(".container-hide")) {
      containerLoginModal.classList.add("container-hide");
      containerMainContent.classList.remove("container-hide");
      wellcomeMessage.textContent = `WellCome ${currentUser[0].firstName} ${currentUser[0].lastName}`;
    }
  } else {
    containerLoginModal.classList.remove("container-hide");
    containerMainContent.classList.add("container-hide");
  }
}

//KHAI BÁO CÁC SỰ KIỆN
btnLogout.addEventListener("click", () => {
  removeFromStorage("CURRENT_USER");
  //   currentUser = [];
  //   saveToStorage("CURRENT_USER", []);
  containerLoginModal.classList.remove("container-hide");
  containerMainContent.classList.add("container-hide");
});
