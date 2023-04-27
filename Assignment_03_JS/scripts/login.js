"use strict";

//KHAI BÁO BIẾN BỘ CHỌN
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const btnSubmit = document.getElementById("btn-submit");

//KHAI BÁO CÁc PHƯƠNG THỨC
async function Login(username, password) {
  let result = false;
  return await new Promise((resolve) => {
    currentUser = [];
    const checkUser = userArr.filter(
      (user) => user.username === username && user.password === password
    );
    if (checkUser.length > 0) {
      currentUser.push(checkUser[0]);
      saveToStorage("CURRENT_USER", currentUser);
      result = true;
    }
    resolve(result);
  });
}
//KHAI BÁO SỰ KIỆN
//Nút Submit
btnSubmit.addEventListener("click", async () => {
  try {
    if (inputUsername.value !== "" && inputPassword.value !== "") {
      const result = await Login(inputUsername.value, inputPassword.value);
      if (result) {
        alert("Login Succeess!");
        window.location.href = "../index.html";
      } else {
        alert("UserName or Password is wrong!");
      }
    } else {
        alert('UserName or Password is empty!')
    }
  } catch (err) {
    alert(`${err.message}`);
  }
});
