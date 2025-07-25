const URL = "https://dog.ceo/api/breeds/image/random";


const getpic = async () =>{
    console.log("getting data");
    let pr = await fetch(URL);
    console.log(pr);
    let final = await pr.json();
    return final.message;
}

let pic = document.querySelector("img");
let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{
pic.src = await getpic();
});


 