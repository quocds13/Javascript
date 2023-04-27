"use strict";

//KHAI BÁO BIẾN BỘ CHỌN
const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");
const btnSubmit = document.getElementById("btn-submit");

//KHAI BÁO CÁC PHƯƠNG THỨC

function saveSettingCurrentUser() {
  try {
    if (currentUser.length > 0) {
      if (inputPageSize.value !== "") {
        currentUser[0].setting.pagesize = parseInt(inputPageSize.value);
        currentUser[0].setting.category = inputCategory.value
          .toLowerCase()
          .trim();
        saveToStorage("CURRENT_USER", currentUser);
        userArr.forEach((user) => {
          if (user.id === currentUser[0].id) {
            user.setting.pagesize = parseInt(inputPageSize.value);
            user.setting.category = inputCategory.value.toLowerCase().trim();
          }
        });
      }
      saveToStorage("USER_ARRAY", userArr);
      alert("Lưu thành công");
    } else alert("Bạn phải đăng nhập trước");
  } catch (err) {
    alert(`Có lỗi trong khi lưu : ${err.message}`);
  }
}
//XỬ LÝ SỰ KIỆN
btnSubmit.addEventListener("click", saveSettingCurrentUser);
