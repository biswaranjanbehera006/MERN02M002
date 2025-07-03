import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {



  // let [count,setCount]=useState(0)

  //use effect


  // useEffect(() =>   {
  //   // first
  //   // set of code
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  

  //useEffect
  //case 1
  //use effect will execute at every render
  // useEffect(()=>{
  //   alert('use effect trigerd')
  // })

  // case 2
  // it will execute at the first render

//   useEffect(()=>{
// alert('use effect trigerd')
//   },[])



// case 3
//it will give the return when the componets is unmounted

// useEffect(()=>{
//   alert("Value Updated")
//   return()=>{
//     alert("Value unmounted")
//   }
// })


// case 4
// it will excute based on the dependency 

// useEffect(()=>{
//   alert("Based on dependency ")
// },[count])
  



  return (
    <>
      {/* <h1>Hey This is Biswa</h1>
      <br />
      <h1>The Number is {count}</h1>
      <button onClick={()=>setCount(count+1)}>increment</button> */}
    <Home />
    

    </>
  )
}

export default App
