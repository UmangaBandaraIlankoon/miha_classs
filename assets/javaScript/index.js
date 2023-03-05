let objuser = [
  {
    username: "Umanga",
    password: "12345",
  },
];

const welcomeElement = document.getElementById("welcome");
if (welcomeElement) {
  welcomeElement.innerHTML = "Hi! " + objuser[0].username;
}

function getuser() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  for (let i = 0; i < objuser.length; i++) {
    if (username == objuser[i].username && password == objuser[i].password) {
      console.log(username + "is logged in!");
      window.location.href = "home.html";
      return;
    } else
      document.getElementById("error").innerText =
        "Please enter valid username or password";
  }
}

function signin() {
  window.location.href = "log-in.html";
}

const logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", () => {
  console.log("Logout button clicked!");
  window.location.href = "index.html";
});

document.getElementById("uname").innerHTML = objuser[0].username;
document.getElementById("email").innerHTML =
  objuser[0].username.toLowerCase() + "@gmail.com";

function signup() {
  window.location.href = "sign-up.html";
}
