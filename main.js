//Navbar
window.onscroll = function () {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("nav").classList.add("active");
        document.getElementById("menu").classList.add("active");
    } else {
        document.getElementById("nav").classList.remove("active");
        document.getElementById("menu").classList.remove("active");
    }

    /*if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
        document.getElementById("header-shadow").classList.add("active");
    else
        document.getElementById("header-shadow").classList.remove("active");*/
};

let navVisible = false;
function nav_update() {
    if (navVisible) {
        document.getElementById("nav").classList.remove("show");
        navVisible = false;
    } else {
        document.getElementById("nav").classList.add("show");
        navVisible = true;
    }
}

function update() {
    if (window.innerWidth <= 1025)
    {
        nav.classList.add("sidebar");
        menu.classList.add("show");
    }
    else
    {
        nav.classList.remove("sidebar");
        menu.classList.remove("show");
    }
}

window.onresize = function () {
    update();
}
window.onload = function () {
    update();
}

//Slider
let slide = 0;
const Viewer = document.getElementById("viewer");

function leftSlide() {
    if (slide > 0)
        slide--;
    updateSlider()
}
function rigthSlide() {
    if (slide <= (document.getElementById("viewer").childElementCount - 2))
        slide++;
    updateSlider()
    }
function updateSlider() {
    for (let i = 0; i < document.getElementById("viewer").childElementCount; i++){
        if (i == slide)
            document.getElementById("viewer").children[i].style.display = "inline";
        else
            document.getElementById("viewer").children[i].style.display = "none";
        console.log(i);
        }
}