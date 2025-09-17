const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;


  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="material-icons">delete</i>';
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
  input.value = "";
});
