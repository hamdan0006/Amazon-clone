const imgs =document.querySelectorAll(".header-slider ul img");
const control_prev =document.querySelector(".control_prev");
const control_next =document.querySelector(".control_next");

let n=0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
        
    }
    imgs[n].style.display = 'block';

}
changeSlide();

control_prev.addEventListener("click",(e)=>{

    if(n>0){
        n--;
    }else{
        n=imgs.length-1;
    }
    changeSlide();
})

control_next.addEventListener("click",(e)=>{

    if(n<imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeSlide();

})

const scrollcontainer =document.querySelectorAll(".products");

for(const item of scrollcontainer ){
    item.addEventListener('wheel',(evt)=>{
   evt.preventDefault();
   item.scrollLeft +=evt.deltaY
    })
}