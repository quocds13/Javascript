"use strict";

//KHAI BÁO BIẾN BỘ CHỌN

const inputFirstname = document.getElementById("input-firstname");
const inputLastname = document.getElementById("input-lastname");
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPasswordConfirm = document.getElementById("input-password-confirm");
const btnSubmit = document.getElementById("btn-submit");


//KHAI BÁO CÁC PHƯƠNG THỨC

//Kiểm tra dữ liệu đầu vào
async function ValidateInput(object = new User()) {
  return await new Promise((resolve) => {
    let strErr = "";
    if (object.FirstName === "") strErr += "FirstName is not empty! \n";
    if (object.LastName === "") strErr += "LastName is not empty! \n";
    if (object.Username === "") {
      strErr += "Username is not empty! \n";
    } else {
      if (userArr.length > 0) {
        const checkUserName = userArr.filter(
          (user) => user.username === object.Username
        );
        if (checkUserName.length > 0)
          strErr += "UserName is already exist!! \n";
      }
    }
    if (object.Password === "") strErr += "Password is not empty! \n";
    if (inputPasswordConfirm.value === "") {
      strErr += "Password Confirm is not empty! \n";
    } else {
      if (inputPasswordConfirm.value.length <= 7) {
        strErr += "Password is not enough 8 characters \n";
      } else {
        if (!(inputPasswordConfirm.value === object.Password))
          strErr += "Password and Password Confirm not match!!!\n";
      }
    }
    resolve(strErr.trimEnd());
  });
}

//Lưu 1 acccount
async function saveAccount(object = new User()) {
  return await new Promise(async (resolve, reject) => {
    try {
      userArr.push(object);
      // const result = await new Promise(resolve=>resolve(saveToStorage("USER_ARRAY", strUserArr)));
      const result = saveToStorage("USER_ARRAY", userArr);
      resolve(result);
      alert("Register successfully! 🎉🎉");
    } catch {
      reject("Error while saving ✨✨");
    }
  });
}
//KHAI BÁO SỰ KIỆN
/*Nút Submit*/
btnSubmit.addEventListener("click", async () => {
  try {
    // Khởi tạo User với tham số setting mặc định
    const getDataInput = new User(
      userArr.length + 1,
      inputFirstname.value,
      inputLastname.value,
      inputUsername.value,
      inputPassword.value,
      new SettingMode(10, 'general')
    );
    if ((await ValidateInput(getDataInput)) === "") {
      (async function () {
        await saveAccount(getDataInput);
        window.location.href = "../pages/login.html";
      })();
    } else {
      alert(await ValidateInput(getDataInput));
    }
  } catch {}
});
console.log(userArr);
