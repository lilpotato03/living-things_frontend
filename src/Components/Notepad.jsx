import React, { useContext, useEffect } from 'react'
import Task from './Task'
import { useState } from 'react'
import axios from 'axios'
import { MainContext } from '../Contexts/AppContext'

const tasks=[
    {task:'Do the dishes'},
    {task:'Take dog for  Walk'},
    {task:'Study'},
]

function Notepad(props) {
    const [title,setTitle]=useState(props.title)
    const[note,setNote]=useState(props.note)
    const[add,setAdd]=useState(false)
    const[task,setTask]=useState('')
    const{user,refresh,setRefresh}=useContext(MainContext)
    async function handleCreate(e){
        try{
            if(e.key=='Enter'){
                if(note){
                    const res=await axios.put(`/django/note/${user.username}/${props.id}`,{"title":title},{headers:{"Content-Type":'application/json'}})
                }else{            
                    const res=await axios.post(`/django/${props.user}`,{"title":title},{headers:{"Content-Type":'application/json'}})
                    props.go_back(false)
                }
            }

        }catch(e){
            console.log(e.message)
        }
    }
    async function handleAdd(e){
        if(e.key=='Enter'){
            const res=await axios.post(`/django/task/${user.username}/${props.id}`,{"content":task},{headers:{"Content-Type":'application/json'}})
            console.log(`task:${task} added`)
            setTask('')
            setRefresh(refresh+1)
            setAdd(false)
        }else if(e.key=='Escape'){
            console.log('task aborted')
            setTask('')
            setAdd(false)
        }
    }
    useEffect(()=>{
        setTitle(props.title)
        setNote(props.note)
    },[props])
  return (
    <div className='max-w-[20rem] max-h-[50rem] p-4 rounded-md shadow-md bg-white w-full h-full flex flex-col '>
        <div className='note-title justify-start border-b-4'>
            {props.go_back?
            <div className='size-8 rounded-full shrink-0 bg-red-500 p-1 text-white' onClick={()=>props.go_back(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-full w-full">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clip-rule="evenodd" />
                </svg>
            </div>:<></>}
            <input type="text" className='w-full outline-none mx-2 truncate' value={title} onChange={(e)=>{setTitle(e.target.value)}} onKeyDown={handleCreate}/>
            {props.note?<div className='flex gap-x-2 items-center'>
                <button className='size-9 text-blue-400' onClick={()=>{setAdd(true)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-max w-max">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>:<></>}
        </div>
        {note?<div className='w-full h-full flex  overflow-y-scroll flex-col'>
        {add?<input type='text' className='bg-neutral-100 text-[20px] outline-none m-1 rounded-md p-2' value={task} onChange={(e)=>{setTask(e.target.value)}} onKeyDown={handleAdd}/>:<></>}
        {note.tasks?note.tasks.map((task,id)=>{
            return <Task data={task} key={`task_${task.id}`} id={task.id}/>
        }):<></>}
        </div>:<></>}
    </div>
  )
}

export default Notepad