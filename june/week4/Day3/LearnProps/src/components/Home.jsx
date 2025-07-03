import React from 'react'

function Home(props) {
  return (
    <div>
        value is :{props.a} <br />
        the string value is :{props.str}
      <h2>This is Home Page </h2>
      the obj value are <br />
      Name: {props.obj.name}
      <br />
      age:  {props.obj.age}
      <br />
      email :  {props.obj.email}

      <br />
      the array values are {props.arr}
      <br />
      index 0 : {props.arr[0]}
      <br />
      index 1 : {props.arr[1]}
      <br />
      index 2 : {props.arr[2]}
      <br />
      index 3 : {props.arr[3]}

      {
        console.log("Hello World")
      }
    </div>
  )
}

export default Home
