document.addEventListener("DOMContentLoaded", () => {
    const home_page = document.querySelector(".header-home");
    const header_slider = document.querySelector(".header-slider");
    const header_title_main = document.querySelector(".header-title-main");
    const header_title_sub = document.querySelector(".header-title-sub");
    const plank = document.querySelector(".plank");
    const header_info = document.querySelector(".header-info");
    const site_header = document.querySelector(".site-header");
    const scroll = document.querySelector('.scroll');

    home_page.classList.add("move");
    header_slider.classList.add("move");

    header_title_main.classList.add("move");
    header_title_sub.classList.add("move");
    plank.classList.add("move");
    header_info.classList.add("move");

    scroll.addEventListener("click", () => {
        document.documentElement.scrollTop = site_header.scrollHeight / 3 * 2;
    })

    document.addEventListener("scroll", () => {
        document.documentElement.scrollTop > site_header.scrollHeight / 3 ? home_page.classList.remove("move") : home_page.classList.add("move");
    })

})