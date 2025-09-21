const form = document.getElementById("todoForm");
    const input = document.getElementById("todoInput");
    const todoList = document.getElementById("todoList");

    // localStorage-dən yüklə və ya boş array yarat
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    // Səhifə yüklənəndə əvvəlki to-do-ları göstər
    window.addEventListener("load", () => {
      todos.forEach(task => addTodoToDOM(task));
    });

    // Form submit
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const task = input.value.trim();
      if (task === "") return;

      todos.push(task);
      localStorage.setItem("todos", JSON.stringify(todos));

      addTodoToDOM(task);

      input.value = "";
    });

    // Funksiya: DOM-a li əlavə et
    function addTodoToDOM(task) {
      const li = document.createElement("li");
      li.textContent = task;

      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = '<i class="material-icons">delete</i>';
      deleteBtn.classList.add("delete-btn");

      deleteBtn.addEventListener("click", () => {
        li.remove();
        const index = todos.indexOf(task);
        if (index > -1) {
          todos.splice(index, 1);
          localStorage.setItem("todos", JSON.stringify(todos));
        }
      });

      li.appendChild(deleteBtn);
      todoList.appendChild(li);
    }