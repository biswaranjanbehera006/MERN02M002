import React, { useEffect, useState } from 'react'

function Home() {

    let[data,setData]=useState([])

    useEffect(()=>{

        async function fetchdata() {
             let response=await fetch("");
             let data=await response.json();
             console.log(data);
             setData(data)

            
        }

       
    },[])
  return (
    <div>
      <h1>This is my Home Page</h1>
    </div>
  )
}

export default Home
