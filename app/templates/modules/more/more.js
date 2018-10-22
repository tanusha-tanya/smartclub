let more = document.querySelector(".more__link");


if(more != null){  
    more.onclick = function(event){
        let spoilerItem = document.querySelectorAll(".spoiler__item");
        event.preventDefault(); 
        console.log(spoilerItem.length)    
        if(spoilerItem.length>1){
            spoilerOpen();
        }
        else if (spoilerItem.length==1){
            spoilerOpen();
            more.textContent = "Скрыть";  
        }
        else{                    
            spoilerClose();
        }
    } 
}
function spoilerOpen(){
    let spoilerItem = document.querySelectorAll(".spoiler__item");
    let openItem = spoilerItem[0];
    openItem.classList.remove("spoiler__item");
    openItem.classList.add("spoiler__item-open");
    window.scrollBy(50, 0)
} 

function spoilerClose(){
   let spoilerItem = document.querySelectorAll(".spoiler__item-open");
   for(let i = 0; i < spoilerItem.length; i++){
        spoilerItem[i].classList.remove("spoiler__item-open");
        spoilerItem[i].classList.add("spoiler__item");
   }
    more.textContent = "Загрузить еще";
}