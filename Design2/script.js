// let cursor=document.getElementById("cursor");
let cursorBlur=document.getElementById("cursorBlur");
document.addEventListener("mousemove",function(event){
    // cursor.style.left=event.x+"px";
    // cursor.style.top =event.y+"px";
    cursorBlur.style.left=event.x + "px"
    cursorBlur.style.top =event.y+"px";
})


gsap.to("#nav",{
    backgroundColor:"black",
    height:"18%",
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -20%",
        end:"top -11%",
        scrub:3,
    }
})
gsap.to("main",{
    backgroundColor:"black",
    duration:1,
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        markers:true,
        start:"top -30%",
        end:"top -60%",
        scrub:2,
    }
})