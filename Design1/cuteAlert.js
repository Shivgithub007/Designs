
let btn=document.getElementById("cute");
let ques=document.getElementById("ques");
let toast=document.getElementById("toast");


btn.addEventListener("click",()=>{
    cuteAlert({
        type:"warning",
        title:"Congratulations",
        message:"You won the text",
        buttonText:"Yayy"
    })
})

ques.addEventListener("click",()=>{
    cuteAlert({
        type:"question",
        title:"Quick Reminder",
        message:"Are you sure?",
        confirmText:"Confirm",
        cancelText:"Cancel"
    }).then((e)=>{
        if(e=="confirm"){
            cuteToast({
                type:"success",
                message:"You won the match",
                timer:5000
            })
        }else{
            alert(":-(")
        }
    })
})


toast.addEventListener("click",()=>{
    cuteToast({
        type:"success",
        message:"You won the match",
        timer:5000
    })
})