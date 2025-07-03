
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

// let nameContext=createContext();
// let colorContext=createContext();

let countContext=createContext();


 
function App() {
  
// to create  a contesxt object 
// step 1 - create a context object by using a methord createContext()
//step 2 - give provider to the context object
// step 3- give the value to the context object provider 
// step 4 - export the context object


// How to access inside the child componenets
//by using useContext() hook we can get the value from the context object 





// let obj={
//   name : "Biswa",
//   age : 22,
//   phone : 2345
// }

// let arr=[1,3,4,5,6];

// let color="red";


// let a=0;


// function handeling(){
//   a++;
//   console.log("Click Button",a);
// }




let {count}=useContext


// let count

  return (
    <>
    {/* <nameContext.Provider value={arr}>
       <ChildA />
      <h1>This App.jsx</h1>

    </nameContext.Provider>

    <colorContext.Provider value={color}>

    <ChildA />
    </colorContext.Provider> */}

<h1>count : {count}</h1>

   <button onClick={()=>setCount(count+1)}>click me</button>
    
   
    </>
  )
}

// export {nameContext ,colorContext}
export {countContext}
export default App
