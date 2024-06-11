
// document.querySelector(".course_home_nav_container").style.width = window.innerWidth + "px";

const navs = document.querySelectorAll(".course_home_nav_container .nav");

navs.forEach((nav) => {
    nav.addEventListener("click", () => {
        cleared();
        nav.classList.add("active");
    });

    function cleared() {
        navs.forEach((nav) => {
            nav.classList.remove("active");
        })
    }
})
