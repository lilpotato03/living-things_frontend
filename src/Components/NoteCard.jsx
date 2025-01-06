import React, { useContext } from 'react'
import { MainContext } from '../Contexts/AppContext'
import axios from 'axios'
import { Link } from 'react-router-dom'

function NoteCard(props) {
  const {refresh,setRefresh}=useContext(MainContext)
  async function handleDel(){
    const res=await axios.delete(`django/note/${props.note.user}/${props.note.id}`)
    setRefresh(refresh+1)
  }
  return (
    <div className='w-full flex p-2 border-b-2 border-neutral-200 justify-between items-center '>
    <Link to={`/note/${props.note.id}`}>
      <h1>{props.note.title}</h1>
    </Link>
    {props.update==true?
    <button className='size-5 z-10 text-white bg-red-500 rounded-full p-[2px]' onClick={handleDel}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>

    </button>:<></>}
    </div>
  )
}

export default NoteCard