import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../Contexts/AppContext'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import Notepad from '../Components/Notepad'
import NoteCard from '../Components/NoteCard'
import EmptyGraphic from '../Components/EmptyGraphic'
import Landing from './Landing'
import { Link } from 'react-router-dom'

function Notes() {

    const {user,notes,setNotes,refresh}=useContext(MainContext)
    const[add,setAdd]=useState(false)
    const [update,setUpdate]=useState(false)
    useEffect(()=>{
        const get=async()=>{
            try{
                if(user){
                    const res=await axios.get(`/django/${user.username}`)
                    if(res.data.length>0){
                        await setNotes(res.data)
                    }else{
                        await setNotes([])
                    }
                }
            }catch(e){
                console.log(e.message)
            }
        }
        get()   
    },[user,add,refresh])
    if(user){
    return (
        <div className="background flex flex-col  items-center p-4 gap-y-4">
            <Navbar />
            {!add?<div className='max-w-[20rem] max-h-[50rem] p-4 rounded-md shadow-md bg-white w-full h-full flex flex-col '>
                <div className='note-title border-b-4'>
                    Notes
                    <div className='flex gap-x-2 items-center'>
                        {update?
                        <button className='size-7 text-white bg-green-400 rounded-full p-1' onClick={()=>{setUpdate(false)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                        </svg>
                        </button>:
                        <button className='size-7 text-white bg-neutral-400 rounded-full p-1' onClick={()=>{setUpdate(true)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
                        <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd" />
                        </svg>
                        </button>}
                    {update?<></>:<button className='size-9 text-blue-400' onClick={()=>{setAdd(!add)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-max w-max">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
                    </svg>
                    </button>}
                    </div>
                    
                </div>
                <div className='w-full h-full '>
                    {notes.length!=0?
                    notes.map((note)=>{
                        return(
                            <NoteCard note={note} key={note.id} update={update}/>
                        )
                    }):<EmptyGraphic />}
                </div>
            </div>:
            <Notepad title='' user={user.username} go_back={setAdd}/>}

        </div>)
    }else{
        return(
            <Landing />
        )
    }
}

export default Notes