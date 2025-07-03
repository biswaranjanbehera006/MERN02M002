
import './App.css'
import Card from './components/Card';
import Home from './components/Home'

function App() {

  let a=10;
  let str="Biswa"
  let obj={
    name:"Biswa",
    age:20,
    email:"xyz@gmail.com"
  }
   let arr=[1,2,3,4,5]

  return (
    <>
    <h1>Hello Welcome to react</h1>
    {/* <Home a={a} str={str} obj={obj}  arr={arr}/> */}
    <Card />
    </>
    
  )
}

export default App
