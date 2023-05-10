const bttn = document.getElementById("btn")

const randomColor = () =>{
    let val = "0123456ABCDEF"
    let cons = "#"
    for(let i =0;i<6;i++){
        cons = cons + val[Math.floor(Math.random()*16)]
    }
    return cons
};

function changeColor(){
 document.body.style.backgroundColor = randomColor();
}

bttn.addEventListener("click" , changeColor)