let lastScrollTop = 0;
let header = document.querySelector(".header")
window.onscroll = onScroll;
function onScroll (e) {
let top = window.pageYOffset;
 if (lastScrollTop > top) {
        if(header.classList.contains("fixed")){
            header.classList.remove("fixed")
        }
    } else if (lastScrollTop < top) {
        if(!header.classList.contains("fixed")){
            header.classList.add("fixed")
        }
    }
    lastScrollTop = top;
}
