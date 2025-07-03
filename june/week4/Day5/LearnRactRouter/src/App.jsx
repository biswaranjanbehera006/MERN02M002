

import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import FetchID from './components/FetchID'

function App() {
  

  return (
    <>
   
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/about' element={<About/>}> </Route>
      <Route path='/service' element={<Service/>}> </Route>
      <Route path='/contact' element={<Contact/>}> </Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/byId/:id' element={<FetchID/>}></Route>
    </Routes>
    <h1>Welcome to React Router </h1>
    <Navbar/>
     

    </>
  )
}

export default App
