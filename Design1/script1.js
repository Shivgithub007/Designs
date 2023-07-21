
const icon=document.querySelector("#icon");
const background=document.querySelector("#background")
const sidenav=document.querySelector("#sidenav");
icon.addEventListener("click",function(){
    background.style.transform="translateX(200px) scale(.8)";
    background.style.filter="blur(2px)";
    sidenav.style.left="15px";
})


const close=document.querySelector(".ri-close-line");
close.addEventListener("click",()=>{
    background.style.transform="translateX(0px) scale(1)";
    background.style.filter="blur(0px)";
    sidenav.style.left="-100px";
})