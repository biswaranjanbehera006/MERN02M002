console.log("Hey This is Function Tutorial");

// //This is normal function declration
// function print()
// {
//     console.log("Hey this is My Function");
    
// }

// //this is function invocation
// print();

// console.log(print)


// //expression funcntion
// let printQlith=function()
// {
//     console.log("this is my expression function");
    
// }
// console.log(printQlith);
// printQlith();

// //function with parameter
// let add=function(a,b)
// {
//     return a+b;
// }
// let sum=add(10,20);
// console.log(sum);

// // This is arrow function
// let sub=()=>
// {
// console.log("This is my arrow Function");

// }
// sub();


//higher ordered function
// function higherOrderFun(a,b,task)
// {
//  return task(a,b)
// }

// let addNum= higherOrderFun(10,20,(x,y)=>
// {
//     return x+y;
// })

// console.log(addNum);

// let newStr=prompt("Enter A String to count the number of vowel")

// function checkvowel(str)
// {
//     let newStr=str.toLowerCase();
//     let count=0;



    //using simple for loop
    // for (const e of newStr) {
        
    //     if(e==="a" || e==="e" ||e==="i" ||e==="o" ||e==="u")
    //     {
    //         count++;
    //     }
    // }




    //using include methord
    // for(let e of newStr)
    // {
    //     if("aeiou".includes(e))
    //     {
    //         count++
    //     }
    // }
//     return count;
    
// }
// console.log("Number of vowel is : ",checkvowel(newStr));



//call back function
    // let arr=[1,2,3,4,5]
    // count=0;

    // arr.forEach((v,idx,ar)=>
    // {
    //     console.log(`In index ${idx} value is : ${v} and array is ${ar}`);    
    // })


    //  arr.forEach((v,idx,ar)=>
    // {
    //   if(v%2==0)
    //     {
    //         count++;
    //     }     
    // })

    // console.log(count);
    

// let strArr=["Soumya","Suchismita","Suman","Chenta","Pradeep"]
// let strcount=0;

// strArr.forEach((v)=>{
//     if(v.startsWith("S"))
//     {
//         strcount++;
//     }
// })

// console.log("Ans is :",strcount);


// this is map function
let numArray=[1,2,3,4,5]
// let modifiedArray=numArray.map((v)=>
// {
//     return v*2;
// })
// console.log(modifiedArray);


//filter methord
// let filterData=numArray.filter((v)=>
// {
//     return v%2===0;
// })
// console.log(filterData);



//Hey This Reduce Methord
let sumofNum=numArray.reduce((accum,curr)=>
{
   return accum+curr;
},0)

console.log("Sum is :",sumofNum);










