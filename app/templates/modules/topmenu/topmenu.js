let hamburger = document.querySelector(".hamburger");
let topmenu = document.querySelector(".header__top");

function mobileMenu(){
    hamburger.onclick = function(){
        if(this.classList.contains("openHamburger")){
            this.classList.remove("openHamburger");
            topmenu.classList.remove("topmenuOpen");
        }
        else{
            this.classList.add("openHamburger");
            topmenu.classList.add("topmenuOpen");
        }
    }
}

let width= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; 
if(width<1300){
   mobileMenu();
}
window.addEventListener('resize', function(){    
    width= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; 
    if(width<1300){
         mobileMenu();
    }
    else{
        if(topmenu.classList.contains("topmenuOpen")){
            hamburger.classList.remove("openHamburger");
            topmenu.classList.remove("topmenuOpen");
        }
    }
});