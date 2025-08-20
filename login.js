let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = {
    email: email.value,
    password: password.value,
  };

  let user = JSON.parse(localStorage.getItem("user")) || [];
  let check = user.find((item) => item.email === formData.email);

  if (check) {
    if (check.password === formData.password) {
      localStorage.setItem("session", JSON.stringify(check));
      window.location.href = "index.html";
    } else {
      alert("Incorrect password");
    }
  } else {
    alert("User does not exist");
  }
});
