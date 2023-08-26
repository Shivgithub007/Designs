// 
let videoElement=document.getElementById("videoElement");
let btn=document.getElementById("btn");
async function selectMedia(){
    try{
        const mediaStream=await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadedmetadata=()=>{
            videoElement.play();
        }
    }catch(error){
        console.log("This is the error:"+error)
    }
}

btn.addEventListener("click",async ()=>{
    btn.disabled=true;
    await videoElement.requestPictureInPicture();
    btn.disabled=false; 
})