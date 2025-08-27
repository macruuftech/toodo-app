let logout = document.querySelector("#logout");
let addBtn = document.querySelector("#add");
let modal = document.querySelector(".modal");
let close = document.querySelector("#close");
let form = document.querySelector("#form");
let title = document.querySelector("#title");
let description = document.querySelector("#description");
let box = document.querySelector(".boxs");

let session = JSON.parse(localStorage.getItem("session")) || null;

if (session == null) {
  window.location.href = "login.html";
}

logout.addEventListener("click", () => {
  localStorage.removeItem("session");
  window.location.href = "login.html";
});

addBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

close.addEventListener("click", () => {
  modal.classList.remove("active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  if (todos.length === 0) {
    let data = {
      id: 1,
      title: title.value,
      description: description.value,
      userId: session.id,
    };

    localStorage.setItem("todos", JSON.stringify([data]));
    window.location.href = "index.html";
  } else {
    let data = {
      id: todos.length + 1,
      title: title.value,
      description: description.value,
      userId: session.id,
    };

    todos.push(data);
    localStorage.setItem("todos", JSON.stringify(todos));
    window.location.href = "index.html";
  }
});

const getAllTodos = () => {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  // filter todos by user id
  let filteredTodos = todos.filter((todo) => todo.userId === session.id);

  let html = ``;

  filteredTodos.map((todo) => {
    html += `
    <div class="box">
          <h2>${todo.title}</h2>
          <p>${todo.description}</p>
          <div class="box-footer">
            <i class="fa-solid fa-trash"></i>
          </div>
        </div>
    `;
  });

  box.innerHTML = html;
};

getAllTodos();
