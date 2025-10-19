// Находим элементы из HTML по их id
let titleInput = document.getElementById("taskTitle");
let descInput = document.getElementById("taskDesc");
let list = document.getElementById("todoList");

// Создаём пустой список задач (пока без сохранения)
let tasks = [];

// Функция добавления новой задачи
function addTask() {
  // Берём текст из полей
  let title = titleInput.value.trim();
  let desc = descInput.value.trim();

  // Проверяем: если пусто — предупреждаем и выходим
  if (!title || !desc) {
    alert("Please fill in both fields!");
    return;
  }

  // Создаём новый элемент списка <li>
  let li = document.createElement("li");

  // Добавляем в него текст
  let taskText = document.createElement("div");
  taskText.className = "task-content";
  taskText.innerHTML = `
    <span>${title}</span>
    <small>${desc}</small>
  `;

  // Создаём кнопки действий
  let doneBtn = document.createElement("button");
  doneBtn.className = "btn-action";
  doneBtn.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  doneBtn.title = "Mark as done";

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn-action btn-delete";
  deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  deleteBtn.title = "Delete task";

  // Когда нажимаем Done — перечёркиваем задачу
  doneBtn.onclick = function () {
    li.classList.toggle("completed");
  };

  // Когда нажимаем Delete — удаляем задачу из списка
  deleteBtn.onclick = function () {
    list.removeChild(li);
  };

  // Собираем всё в <li>
  li.appendChild(taskText);
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);

  // Добавляем <li> в общий список
  list.appendChild(li);

  // Добавляем задачу в массив (просто чтобы хранить в памяти)
  tasks.push({ title, desc });

  // Очищаем поля ввода
  titleInput.value = "";
  descInput.value = "";
}

// Теперь, если ты в HTML нажимаешь кнопку “Add Task” —
// вызовется эта функция addTask(), и задача появится слева.
