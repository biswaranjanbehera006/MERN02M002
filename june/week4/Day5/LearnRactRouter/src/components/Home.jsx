import React from 'react'
import { useNavigate } from 'react-router'

function Home() {
    let navigate=useNavigate()

    function handelClick()
    {
        navigate('/about')
    }
  return (
    <div>
      <h1>This is my Home Page</h1>
      <button onClick={handelClick}>Go to about Page</button>
    </div>
  )
}

export default Home
