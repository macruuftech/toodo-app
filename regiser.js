let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userData = {
    email: email.value,
    password: password.value,
  };

  let user = JSON.parse(localStorage.getItem("user")) || [];

  if (user.length === 0) {
    let data = {
      id: 1,
      ...userData,
    };

    localStorage.setItem("user", JSON.stringify([data]));
    window.location.href = "login.html";
  } else {
    let check = user.find((item) => item.email === userData.email);

    if (check) {
      alert("User already exist");
    } else {
      let data = {
        id: user.length + 1,
        ...userData,
      };

      user.push(data);
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "login.html";
    }
  }
});
