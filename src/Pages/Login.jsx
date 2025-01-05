import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const[submit,setSubmit]=useState(false)
    const[alert,setAlert]=useState('')
    const post=async()=>{
        if(username.length==0){
            console.log('username cannot be empty')
            return
        }if(password.length<8){
            console.log('password has to be atleast 8 characters')
            return
        }
        const res=await axios.post('/nodejs/login',{'username':username,'password':password},{headers:{'Content-type':'application/x-www-form-urlencoded'}})
        await setAlert(res.data)
        console.log(res.data)
    }
    useEffect(
        ()=>{
            if(submit){
                try{
                    post()
                    setSubmit(!submit)
                }catch(e){
                    console.log(e.message)
                }
            }
        },[submit]
    )


  return (
    <div className='background flex flex-col  items-center p-4 gap-y-4 justify-center'>
        <div className='max-w-[20rem] max-h-[50rem] p-4 rounded-md shadow-md bg-white w-full gap-y-4  flex flex-col justify-center'>
            <h1 className='note-title'>Login</h1>
            <div className='login_fields'>
                <label htmlFor="login">Login</label>
                <input type="text" id='login' placeholder='Enter username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className='login_fields'>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <h1>{alert}</h1>
            <button className='p-2 bg-blue-400 text-white font-bold text-[20px] rounded-md' onClick={()=>setSubmit(true)}>
                Login
            </button>
            <Link to='/signup' className='underline'>Don't have an account? Singup</Link>
        </div>
    </div>
  )
}

export default Login