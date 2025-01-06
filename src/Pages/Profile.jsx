import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import { MainContext } from '../Contexts/AppContext'
import NotFound from './NotFound';

function Profile() {
  

  const clearCookies = () => {
    const cookies = document.cookie.split(";");
    cookies.forEach((cookie) => {
      const cookieName = cookie.split("=")[0].trim();
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    })
    alert('Signing you out')
    setTimeout(()=>{
      window.location='http://localhost:5173/'
    },2000)
  }
  const {user}=useContext(MainContext)
  if(user){
  return (
    <div className="background flex flex-col  items-center p-4 gap-y-4">
      <Navbar />
      <div className='max-w-[20rem] max-h-[50rem] p-4 rounded-md shadow-md gap-y-2 bg-white w-full h-full flex flex-col font-bold text-center text-[20px] justify-center items-center  '>
        <h1>@{user.username}</h1>
        <h1>{user.name}</h1>
        <button className='bg-red-500 p-2 text-white rounded-md drop-shadow-md' onClick={clearCookies}>Signout</button>
      </div>
    </div>
  )}else{
    return(<NotFound />)
  }
}

export default Profile