import React from 'react'
import { useParams } from 'react-router'

function FetchID() {
    let {id}=useParams() // Fetch The Id
  return (
    <div>
      <h1>This Is My Fetch Id </h1>
      <h1>The Id Is {id}</h1>
    </div>
  )
}

export default FetchID
