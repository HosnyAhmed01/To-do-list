/* 
 [] add function to delete task 
*/

let btn = document.querySelector(".add .btn");
let res = document.querySelector(".res");

let taskArray = [];

if (window.localStorage.getItem("Tasks")) {
  res.innerHTML = window.localStorage.getItem("Tasks");
}

btn.addEventListener("click", () => {
  // call creat task function

  let taskValue = document.querySelector(".add input").value;

  taskArray.push(taskValue);

  creatTask(taskArray);

  window.localStorage.setItem("Tasks", res.innerHTML);

  let deletes = document.querySelectorAll(".res .delete-btn");
  deleteParent(deletes);
});

// Creat Task div and append it in result
function creatTask(Array) {
  res.innerHTML += `<div><div class="Task"><p>${
    Array[Array.length - 1]
  }</p></div> 
      <div class='delete-btn'>Delete</div></div>
    `;
}

let deletes = document.querySelectorAll(".res .delete-btn");

deleteParent(deletes);

function deleteParent(list) {
  list.forEach((li) => {
    li.addEventListener("click", () => {
      li.parentElement.remove();
      window.localStorage.setItem("Tasks", res.innerHTML);
    });
  });
}
