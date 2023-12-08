//Navbar
window.onscroll = function () {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600)
        document.getElementById("nav").classList.add("active");
    else
        document.getElementById("nav").classList.remove("active");
};

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