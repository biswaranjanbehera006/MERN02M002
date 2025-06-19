console.log("Hey This is Fetch API Lession");



//call back hell problem
// function getData(userid,next)
// {
//     setTimeout(()=>
//     {
//          console.log("User Id :",userid);
//          next();

//     },2000)  
// }
// getData(12,()=>{
//     getData(2,()=>{
//         getData(3,()=>
    //         {
//             getData(4)
//         })
//     });
// })





//normal Promise obj
// let promise=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("Success")
//     },3000)
// })
 
// console.log(promise);

//promises

// function getData(userid)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>
//         {
//             console.log("User id : ",userid);
//             resolve("Resolve Ho Gaya");
//             reject("Something missing");
            
//         },2000)
//     })
// }

//handel promises 
// getData(1).then((res)=>{
//     console.log("result : ",res);
    
// }).catch((err)=>
// {
//     console.log("Error is : ",err);
    
// })

// getData(1).then(()=>
// {
//     return getData(2).then(()=>
//     {
//         return getData(3).then((res)=>
//         {
//             console.log("result is :",res);
            
//         })
//     }).catch((err)=>
//     {
//         console.log("Error is : ",err);
        
//     })
// })




//async and await 
async function getData(){

    
    let response=await fetch("https://jsonplaceholder.typicode.com/posts")
    let data= await response.json()
    // console.log(data);
    console.log(data[0].title);

    data?.forEach(element=>
    {
        console.log(element.title);
        
    })
}
getData()












