import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../Contexts/AppContext'
import Notepad from "../Components/Notepad"
import Navbar from "../Components/Navbar"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import NotFound from './NotFound'
function TaskList() {
const {user,refresh}=useContext(MainContext)
const {id}=useParams()
const [note,setNote]=useState([])
useEffect(()=>{
  const get=async()=>{
    try{
      const res=await axios.get(`/django/note/${user.username}/${id}`)
      setNote(res.data)
    }
    catch(e){
      console.log(e.message)
    }
  }
  get()
},[refresh])
if(user){
  return (
    <div className="background flex flex-col  items-center p-4 gap-y-4">
      <Navbar />
      {note?<Notepad title={note.title} note={note}  key={id} id={id}/>:<></>}
    </div>  )
}else{
  return(<NotFound />)
}
}

export default TaskList