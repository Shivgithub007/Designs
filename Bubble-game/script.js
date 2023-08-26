let button = document.getElementById("btn");
button.addEventListener("click", () => {
    gameStart();
  });

  function gameStart(){
    let btn = document.getElementById("btn");
    let btnBox = document.getElementById("btnBox");
    
        btnBox.style.display = "none";
        getBubble();
    }

  let bottomArea = document.getElementById("bottomArea");

  function getBubble() {
    for (let i = 1; i < 300; i++) {
      let randomNo = Math.floor(Math.random() * 10) + 1;
      bottomArea.innerHTML += `<div class="bubble">${randomNo}</div>`;
    }
    let bubbles = document.querySelectorAll(".bubble");
    let hit=document.getElementById('hit');
    let score=document.getElementById('score');
    let sum=0;
    let count=0;
    let timerBox=document.getElementById("timer");
    let time=60;
    var timer=setInterval(()=>{
        if(time>=0){
            timerBox.innerText=time;
            time--;
        }else{
            clearInterval(timer);
            Finish();
        }
    },1000);
    bubbles.forEach((bubble) => {
      bubble.addEventListener("click", () => {
        let data=bubble.innerText;
        sum+=parseInt(data);
        score.innerText=sum;
        count++;
        hit.innerText=count;
        bubble.style.visibility= 'hidden';
      });
    });
    
  }


function Finish(){
    let btnBox = document.getElementById("btnBox");
    let btn=document.getElementById("btn");
    btnBox.style.display = "flex";
    btn.innerText='New game';
    btn.addEventListener('click',()=>{
        let hit=document.getElementById('hit').innerText="0";
        let score=document.getElementById('score').innerText="0";
        let timerBox=document.getElementById("timer").innerText="60";
        location.reload();

        gameStart();
    })
}
