import React, { useContext } from 'react'
import { nameContext,colorContext } from '../App'

function ChildB() {
    // let obj=useContext(nameContext)
    let arr=useContext(nameContext)

    let color=useContext(colorContext)
    
  return (
    <div>
      <h2>This is My Child B</h2><br />
      {/* Name is : {name } */}
      {/* obj is name is : {obj.name} <br /> {obj.age} <br /> {obj.phone} <br /> */}

      The Are is {arr} <br />
      the index1 value is - {arr[1]}
      the index2 value is - {arr[3]} <br />

      the index3 value is - {arr[3]}


      color is {color}




    </div>
  )
}

export default ChildB
