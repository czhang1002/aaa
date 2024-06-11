// profile_information action
const default_container = document.querySelector(".default_container");
const profile_image = document.querySelector(".profile_image");
const profile_information = document.querySelector(".profile_information");
const body_main_container = document.querySelector(".body_main_container");

// body_main_container.style.width = window.innerWidth - 20 + "px";

// profile_information pop-up
profile_image.addEventListener("mouseover", () => {
    profile_image.classList.add("active");
    profile_information.classList.add("active");
});
// profile_information disable
profile_information.addEventListener("mouseleave", () => {
    profile_image.classList.remove("active");
    profile_information.classList.remove("active");
});

// courses_list actions
const courses_list = document.querySelector(".courses_list");
const nav_courses_list = document.querySelector(".nav_courses_list");
// courses_list display
nav_courses_list.addEventListener("mouseover", () => {
    courses_list.classList.add("active");
});
// course_list disable
nav_courses_list.addEventListener("mouseout", () => {
    courses_list.classList.remove("active");
});

// contacts_list selected
const contacts = document.querySelectorAll(".contacts_list .contacts")
contacts.forEach((contact) => {
    contact.addEventListener("click", () => {
        cleared();
        contact.classList.add("active");
    });

    function cleared() {
        contacts.forEach((contact) => {
            contact.classList.remove("active");
        })
    }
})