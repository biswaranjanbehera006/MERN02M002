console.log("Hey This is Event handelling ");


let btn=document.getElementById("btn");

// btn.onclick=()=>{
//     alert("Button was Clicked");
//     btn.style.background="aqua";
// }


btn.onkeyup=()=>{
    console.log("Key Pressed");
}


//evenet Listener
// btn.addEventListener("click",()=>{
//     console.log("Button was clicked")
//     btn.style.background="aqua";
// })


// add and remove event listener 

let callback=()=>{
    console.log("Button was clicked")
}

btn.addEventListener("click",callback);
btn.removeEventListener("click",callback)


let color="light";

let mode=document.getElementById("mode");
mode.addEventListener("click",()=>
{
        if(color==="light"){
            console.log(color)
            document.body.style.background="black"
            color="dark"

        }
        else
        {
            console.log(color);
             document.body.style.background="white"
             color="light"  
        }
})



