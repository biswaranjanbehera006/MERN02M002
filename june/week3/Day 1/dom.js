console.log("This is DOM Tutorial");
// window.document.writeln("Qlith")
// console.error("This an Error")

let heading1=document.getElementById("heading1");

console.log(heading1);
heading1.innerText="Bye Bye";

let box=document.getElementsByClassName("box");
console.log(box);

let seconddiv=document.getElementsByClassName("box")[1];
console.log(seconddiv);


let h2coll=seconddiv.children;
console.log(h2coll[0]);

h2coll[0].innerHTML="<i>Hey This is Ittalic</i>";
console.log(h2coll[0]);

let para=document.getElementsByTagName("p");
console.log(para);
console.log(para[0]);
console.log(para[1]);



let h1=document.querySelector("#heading1");
console.log(h1);

let box1=document.querySelector(".box");
console.log(box1);

let allbox1=document.querySelectorAll(".box");
console.log(allbox1[1]);

let tagallbox1=document.querySelectorAll(".box");
console.log(tagallbox1[1].tagName);



let box1Data=box[1].children;
console.log(box1Data[0].textContent);

let getatt=box[1].children;
console.log(getatt[0].getAttribute("style"));

getatt[0].setAttribute("style","visiblity:none");
console.log(getatt[0]);


getatt[0].style="background:aqua;color:red";






// form data

let inputs=document.querySelectorAll("input");



//Important
let btn=document.querySelector("button");
// console.log(btn);
btn.addEventListener('click',()=>{
    console.log(inputs[0].value);
    console.log(inputs[1].value);

let userobj={
    fullname:inputs[0].value,
    age:inputs[1].value
}
localStorage.setItem("user",JSON.stringify(userobj))
})



let form=document.querySelector("form");
form.addEventListener("submit",(e)=>
{
    e.preventDefault();
})


let div=document.querySelector("#createEle");
console.log(div);

let p=document.createElement("p");
p.innerText="this is my Biswa paragarph"
div.appendChild(p)
console.log(div);

