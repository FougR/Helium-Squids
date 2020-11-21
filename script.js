window.addEventListener("scroll", function(){
                var header = document.querySelector("header");
                header.classList.toggle("sticky", window.scrollY > 0)
            })
            
const menu = document.getElementById("open-menu");
var Visible = false;
var menuOpen = document.getElementById("menu");
menu.addEventListener("click", function(){
    if(Visible == false){
        menuOpen.classList.replace("hidden","visible");
        Visible = true;
        console.log(Visible)
    } else{
        menuOpen.classList.replace("visible","hidden");
        Visible = false;
    }
});

const HeliumSquids = document.getElementById("noCursor");
const Presentation = document.getElementById("presentation");
HeliumSquids.addEventListener("mouseover", function(){
    Presentation.classList.replace("hidden", "visible");
})
HeliumSquids.addEventListener("mouseout", function(){
    Presentation.classList.replace("visible", "hidden");
})