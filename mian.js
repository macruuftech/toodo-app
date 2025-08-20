let logout = document.querySelector("#logout");
let addBtn = document.querySelector("#add");
let modal = document.querySelector(".modal");
let close = document.querySelector("#close");

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
