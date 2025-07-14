import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router'

const Register = () => {


  const [fullName, setfullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading,setLoading]=useState(false)

  const navigate=useNavigate()

  const baseurl=import.meta.env.VITE_BASE_URL;


  const handelregister = async () => {
    setLoading(true)
    try{
      const res= await axios.post(`${baseurl}/user/resgistration`,{

        fullName,
        email,
        password
      })

      console.log(res)

      if(res?.data?.status)
      {
        alert(res?.data?.message)
        setfullName(""),
        setEmail(""),
        setPassword("")
        navigate("/login")

      }
      else{
         alert(res?.data?.message)
      }


    }catch(err){

    }
    finally{
      setLoading(false)
    }
  }


  return (
    <div className='border grid grid-col-1 w-1/2 p-6 rounded shadow-xl m-auto gap-3 mt-16  '>
      <input type="text" placeholder='Enter Full Name  ' value={fullName} onChange={(e) => setfullName(e.target.value)}  className='border outline-none p-2' />
      <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} className='border outline-none p-2'/>
      <input type="text" placeholder='Enter Password ' value={password} onChange={(e) => setPassword(e.target.value)} className='border outline-none p-2' />

      <button onClick={handelregister} className='border bg-teal-600 text-white p-2 cursor-pointer hover:bg-teal-500 transition-all duration-700 '>{loading ? 'loading':'Register'}</button>
    </div>
  ) 
}

export default Register
