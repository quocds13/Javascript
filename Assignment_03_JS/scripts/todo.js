"use strict";

//KHAI BÁO BIẾN BỘ CHỌN
const inputTask = document.getElementById("input-task");
const btnAdd = document.getElementById("btn-add");
const todoList = document.getElementById("todo-list");

//KHAI BÁO CÁC PHƯƠNG THỨC
function getListTodoOfCurrentUser() {
  if (currentUser.length > 0) {
    const todoList = todoArr.filter(
      (todo) => todo.owner === currentUser[0].username
    );
    return todoList;
  }
}
renderContent(getListTodoOfCurrentUser());
function renderContent(arrTodo) {
  todoList.innerHTML = "";
  if (currentUser.length > 0) {
    arrTodo.forEach((todo, index) => {
      let liEl = document.createElement("li");
      liEl.id = `liItem--${index}`;
      if (todo.isDone) liEl.classList.add("checked");
      liEl.innerHTML = `${todo.task}
        <span class="close" id="btn-close--${index}">×</span>`;
      todoList.appendChild(liEl);

      //Đánh dấu Task đã hoàn thành
      document
        .getElementById(`liItem--${index}`)
        .addEventListener("click", () => {
          document
            .getElementById(`liItem--${index}`)
            .classList.toggle("checked");
          todoArr.forEach((value) => {
            if (value.id === todo.id) {
              document
                .getElementById(`liItem--${index}`)
                .classList.contains("checked")
                ? (value.isDone = true)
                : (value.isDone = false);
            }
          });
          saveToStorage("TODO_ARRAY", todoArr);
        });

      //xóa Task
      document
        .getElementById(`btn-close--${index}`)
        .addEventListener("click", (e) => {
          todoArr.forEach((value, index) => {
            if (value.id === todo.id) todoArr.splice(index, 1);
          });
          saveToStorage("TODO_ARRAY", todoArr);
          renderContent(getListTodoOfCurrentUser());
          //Dừng sự kiện click lên phần tử cha <liItem>
          e.stopPropagation();
        });
    });
  }
}
//XỬ LÝ XỰ KIỆN
//Nút add todo
btnAdd.addEventListener("click", () => {
  try {
    if (currentUser.length > 0) {
      if (inputTask.value !== "") {
        const todo = new TaskTodo(
          todoArr.length + 1,
          inputTask.value,
          currentUser[0].username,
          false
        );
        todoArr.push(todo);
        console.log(todoArr);
        saveToStorage("TODO_ARRAY", todoArr);
        renderContent(getListTodoOfCurrentUser());
      } else alert("Tác vụ không được để trống");
    } else alert("Bạn phải đăng nhập trước");
  } catch (error) {
    alert(error.message);
  }
});
