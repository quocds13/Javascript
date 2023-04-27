"use strict";

const btnSubmit = document.getElementById("btn-submit");
const inputQuery = document.getElementById("input-query");
flag = 1;

function joinString(keyword = "") {
  let strArr = keyword.split(" ").join("").toLowerCase();
  return strArr;
}

btnSubmit.addEventListener("click", () => {
  let keyword = joinString(inputQuery.value);
  if (currentUser.length > 0) {
    if (keyword !== "") {
      RenderContent(
        getNewsFromAPi(keyword, currentUser[0].setting.pagesize, num, flag)
      );
    }else alert("Từ khóa chưa nhập. Mời nhập từ khóa!!!");
  } else alert("Bạn phải đăng nhập trước");
});

//Nút Prev
btnPrev.addEventListener("click", async () => await processEventPrev(flag));

//Nút Next
btnNext.addEventListener("click", async () => await processEventNext(flag));
