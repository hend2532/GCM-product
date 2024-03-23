// Start header
let nav = document.querySelector("nav");
let list = document.querySelector(".list");
let open = document.querySelector(".open");
let close = document.querySelector("header .list .close");

    open.addEventListener("click", () => {
        nav.classList.add("change");
        nav.style.display = "flex";
        open.style.display = "none";
        close.style.display = "flex";
    });

    close.addEventListener("click", () => {
        nav.classList.remove("change");
        nav.style.display = "none";
        open.style.display = "flex";
        close.style.display = "none";
    });

