import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function SignUp() {
    const [username,setUsername]=useState('')
    const [name,setName]=useState('')
    const [password1,setPassword1]=useState('')
    const [password2,setPassword2]=useState('')

    const[submit,setSubmit]=useState(false)
    const[alert,setAlert]=useState('')
    const post=async()=>{
        if(name.length==0){
            setAlert('Name cannot be empty')
            return
        }
        if(username.length==0){
            setAlert('Username cannot be empty')
            return
        }if(password1.length<8){
            setAlert('Password has to be atleast 8 characters')
            return
        }
        if(password1!=password2){
            setAlert('Passwords do not match')
            return
        }
        const res=await axios.post('/nodejs/signup',{'username':username,'password':password1,'name':name},{headers:{'Content-type':'application/x-www-form-urlencoded'}})
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
            <h1 className='note-title'>SignUp</h1>
            <div className='login_fields'>
                <label htmlFor="username">Username</label>
                <input type="text" id='username' placeholder='Enter Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className='login_fields'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
            </div>
            <div className='login_fields'>
                <label htmlFor="password1">Password</label>
                <input type="password" id='password1' value={password1} onChange={(e)=>setPassword1(e.target.value)} placeholder='Enter Password'/>
            </div>
            <div className='login_fields'>
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" id='password2' value={password2} onChange={(e)=>setPassword2(e.target.value)} placeholder='Confirm your Password'/>
            </div>
            <h1>{alert}</h1>
            <button className='p-2 bg-blue-400 text-white font-bold text-[20px] rounded-md' onClick={()=>setSubmit(true)}>
                SignUp
            </button>
            <Link to='/login' className='underline'>Already have an account? Login</Link>
        </div>
    </div>
    )
}

export default SignUp