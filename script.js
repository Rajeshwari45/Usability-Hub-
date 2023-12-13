const wrapper = document.querySelector(".wrapper");
const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerlink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginlink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

function loginForm() {
  const login = document.getElementById("login");
  login.showModal();
}

function registerForm() {
  const register = document.getElementById("register");
  register.showModal();
}

function onRegisterClose() {
  const register = document.getElementById("register");
  register.close();
}

function onLoginClose() {
  const login = document.getElementById("login");
  login.close();
}

function openRegistraonFromLogin() {
  onLoginClose();
  registerForm();
}

function openLoginFromRegistraon() {
  onRegisterClose();
  loginForm();
}


