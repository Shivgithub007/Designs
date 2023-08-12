let quote=document.getElementById("text");
let author=document.getElementById("author");
function randomNo(value){
    let no=Math.floor(Math.random()*(value.length-1))
    return no
}

fetch("https://type.fit/api/quotes")
.then((data)=>{
    return data.json()
})
.then((value)=>{
    let newQuotebtn=document.getElementById("newQuote");
    newQuotebtn.addEventListener("click",()=>{
        
        let randomIndex = randomNo(value);
        let authorData = value[randomIndex].author.split(",");
        
        quote.innerText = value[randomIndex].text;
        author.innerText = `--${authorData[0]}--`;
    })
    
    
    
    
    
})
function Twitter(){
    let url=`https://twitter.com/intent/tweet?text=${quote.innerText}-${author.innerText}`;
    window.open(url,"_blank")
}
let twitter=document.getElementById("twitter");
twitter.addEventListener("click",()=>{
    Twitter()
})
