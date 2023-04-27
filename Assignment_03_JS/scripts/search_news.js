"use strict";

//KHAI BÁO CÁC BIẾN BỘ CHỌN HTML
const newsContainer = document.getElementById("news-container");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const pageNum = document.getElementById("page-num");

//KHAI BÁO CÁC BIẾN
let num = parseInt(pageNum.textContent);
let flag;
//KHAI BÁO CÁC PHƯƠNG THỨC
//Phương thức Get News API từ class User
const getNewsFromAPi = async function (category, pageSize, numPage, flag) {
    try {
      return await User.getNews("us", category, pageSize, numPage, flag);
    } catch (err) {
      console.log(err.message);
    }
};
async function RenderContent(res) {
  if (currentUser.length > 0) {
    try {
      if (num <= 1) btnPrev.classList.add("container-hide");
      const result = await res;
      if (result.status === "ok") {
        const data = result.articles;
        if (data.length > 0) {
          newsContainer.innerHTML = "";
          data.forEach((objNew) => {
            const cardContainer = document.createElement("div");
            cardContainer.className = "card flex-row flex-wrap";
            cardContainer.innerHTML = `
      <div class="card mb-3" style="">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${objNew.urlToImage}"
                  class="card-img"
                  alt="${objNew.title}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${objNew.title}</h5>
                  <p class="card-text">${objNew.content}</p>
                  <a href="${objNew.url}">View</a>
                </div>
              </div>
            </div>
          </div>
      `;
            newsContainer.appendChild(cardContainer);
          });
        }
      } else alert(`${result.message}`);
    } catch (err) {
      alert(`${err.message}`);
    }
  } else alert("Bạn phải đăng nhập trước!");
}
async function processEventPrev(flag) {
  if (currentUser.length > 0) {
    try {
      num--;
      let result;
      if (btnNext.classList.contains("container-hide"))
        btnNext.classList.remove("container-hide");
      switch (flag) {
        case 0:
          result = await getNewsFromAPi(
            currentUser[0].setting.category,
            currentUser[0].setting.pagesize,
            num,
            flag
          );
          break;
        case 1:
          result = await getNewsFromAPi(
            "javascript",
            currentUser[0].setting.pagesize,
            num,
            flag
          );
          break;
      }
      RenderContent(result);
      pageNum.textContent = num;
      if (num <= 1) btnPrev.classList.add("container-hide");
    } catch (err) {
      alert(`${err.message}`);
    }
  } else alert("Bạn phải đăng nhập trước!");
}
async function processEventNext(flag) {
  if (currentUser.length > 0) {
    try {
      let totalNews = 0;
      let result;
      num++;
      if (btnPrev.classList.contains("container-hide"))
        btnPrev.classList.remove("container-hide");
      switch (flag) {
        case 0:
          result = await getNewsFromAPi(
            currentUser[0].setting.category,
            currentUser[0].setting.pagesize,
            num,
            flag
          );
          break;
        case 1:
          result = await getNewsFromAPi(
            "javascript",
            currentUser[0].setting.pagesize,
            num,
            flag
          );
          break;
      }
      RenderContent(result);
      result.totalResults > 100
        ? (totalNews = 100)
        : (totalNews = result.totalResults);
      if (num === Math.trunc(totalNews / currentUser[0].setting.pagesize))
        btnNext.classList.add("container-hide");
      pageNum.textContent = num;
    } catch {
      alert(`${err.message}`);
    }
  } else alert("Bạn phải đăng nhập trước!");
}
