import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'

export const MainContext=createContext()

function AppContext({children}) {

const [user,setUser]=useState(null)
const [notes,setNotes]=useState([])
const [refresh,setRefresh]=useState(1)
useEffect(()=>{
    const auth=async()=>{
      try{
        const res=await axios.get('/nodejs/auth')
        if(res.status==200){
            await setUser(res.data)
        }
      }catch(e){
        console.log(e.message)
      }
        
    }
    if(!user){
      auth()
    }
},[])
  return (
    <MainContext.Provider value={{user,setUser,notes,setNotes,refresh,setRefresh}}>
        {children}
    </MainContext.Provider>
  )
}

export default AppContext