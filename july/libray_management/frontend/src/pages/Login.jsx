import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router'

const Login = () => {


 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const baseurl=import.meta.env.VITE_BASE_URL;

const navigate=useNavigate()


  const handellogin = async () => {
    try{
      const res= await axios.post(`${baseurl}/user/login`,{

      
        email,
        password
      })

      console.log(res)

      if(res?.data?.status)
      {
        // alert(res?.data?.message)


        const user=res?.data?.user;
        const token=res?.data?.token;
        const role=res?.data?.user?.role;

        // console.log(role)


        if(role=="admin")
          {
            navigate("/admin")
          }
          else if(role=="user"){

            navigate("/user")

          }
          else
          {
            navigate("/")
          }
        

        localStorage.setItem("user",JSON.stringify(user))
        localStorage.setItem("token",token)


      console.log(res.data);
        setEmail(""),
        setPassword("")

      }
      else{
         alert(res?.data?.message)
      }


    }catch(err){

    }
  }


  return (
    <div className='border grid grid-col-1 w-1/2 p-6 rounded shadow-xl m-auto gap-3 mt-16  '>
     
      <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} className='border outline-none p-2'/>
      <input type="text" placeholder='Enter Password ' value={password} onChange={(e) => setPassword(e.target.value)} className='border outline-none p-2' />

      <button onClick={handellogin} className='border bg-teal-600 text-white p-2 cursor-pointer hover:bg-teal-500 transition-all duration-700 '>Login</button>
    </div>
  ) 
}

export default Login
