"use strict";

flag = 0;

//Render HTML
if (currentUser.length > 0) {
  RenderContent(
    getNewsFromAPi(
      currentUser[0].setting.category,
      currentUser[0].setting.pagesize,
      num,
      flag
    )
  );
}

//XỬ LÝ CÁC SỰ KIỆN
//Nút Prev
btnPrev.addEventListener("click", async () => await processEventPrev(flag));

//Nút Next
btnNext.addEventListener("click", async () => await processEventNext(flag));
 