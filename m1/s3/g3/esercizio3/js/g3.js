let ul = document.getElementById("ul");

let createNewTask = document.getElementById("createNewTask");
createNewTask.addEventListener("click", function (e) {
  e.preventDefault();
  let liNewTask = document.createElement("li");
  let taskInput = document.querySelector("#taskInput");
  liNewTask.addEventListener("click", function () {
    //liNewTask.style="text-decoration:line-through"
    liNewTask.classList.add("testo-barrato");
  });
  liNewTask.innerHTML = taskInput.value;
  taskInput.value = "";
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "elimina";
  deleteButton.addEventListener("click", function (e) {
    e.preventDefault();
    liNewTask.remove();
  });
  liNewTask.append(deleteButton);
  ul.append(liNewTask);
});
