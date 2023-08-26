let count=10;
let apiKey="6_VzKb5zoMjwmU0tyLiXCwXp8aezG7LCQ3SGzsJyey8"

let url=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
async function getPhotos(){
    try{
        const fet=await fetch(apiKey);
        const data=await fet.json()
        console.log(data);
    }catch (error){
        console.log("Not able to retrive the data");
    }
}

getPhotos();