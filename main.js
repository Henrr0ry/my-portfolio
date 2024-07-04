const banner = document.getElementById("top-header");
const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
var sidevisible = false;

window.onscroll = function () {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600)
        banner.classList.add("active");
    else
        banner.classList.remove("active");
};

function update() {
    if (window.innerWidth <= 1125)
    {
        nav.classList.add("sidebar");
        menu.classList.add("show");
    }
    else
    {
        nav.classList.remove("sidebar");
        menu.classList.remove("show");
    }

window.onresize = function () {
    update();
}
}

function sidebar()
{
    if (sidevisible)
    {
        nav.classList.remove("show");
        nav.classList.add("noshow");
        sidevisible = false;
    }
    else{
        nav.classList.add("show");
        nav.classList.remove("noshow")
        sidevisible = true;
    }
};

update();