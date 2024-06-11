const login_main_body = document.querySelector(".login_main_body");

// switched between login and registration
const login_link = document.querySelector(".login_link");
const register_link = document.querySelector(".register_link");
register_link.addEventListener("click", () => {
    login_main_body.classList.add("switched");
});
login_link.addEventListener("click", () => {
    login_main_body.classList.remove("switched");
});