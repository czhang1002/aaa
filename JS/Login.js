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

// login group selection
const groups = document.querySelectorAll(".group_selected input");
groups.forEach((group) => {
    group.addEventListener("click", () => {
        cleared();
        group.classList.add("selected");
    })

    function cleared() {
        groups.forEach((group) => {
            group.classList.remove("selected");
        })
    }
})
