import React, { useContext, useEffect, useState } from 'react'
import Checkbox from './Checkbox'
import axios from 'axios'
import { MainContext } from '../Contexts/AppContext'
function Task(props) {
    const [checked,setChecked]=useState(props.data.checked)
    const [content,setContent]=useState(props.data.content)
    const {refresh,setRefresh}=useContext(MainContext)
    async function handleUpdate(e){
      if(e.key=='Enter'){
          try{
            const res=await axios.put(`/django/task/${props.data.user}/${props.data.note}/${props.data.id}`,{"content":content},{headers:{"Content-Type":'application/json'}})
            setRefresh(refresh+1)
          }
            catch(e){
            console.log(e.message)
          }
      }
  }
  useEffect(()=>{
    const del=async()=>{
      try{
        if(content.length==0){
          const res=await axios.delete(`/django/task/${props.data.user}/${props.data.note}/${props.data.id}`)
          setRefresh(refresh+1)
        }
      }catch(e){
        console.log(e)
      }
    }
    del()
  },[content])
  return (
    <div className='task'>
        <Checkbox func={setChecked} param={checked} username={props.data.user} note={props.data.note} id={props.data.id}/>
        <input type='text' onKeyDown={handleUpdate} value={content} className={checked?'line-through overflow-hidden truncate text-neutral-300 w-[100%] flex outline-none':'flex w-[100%]  outline-none'} onChange={(e)=>{setContent(e.target.value)}} readOnly={checked?'true':''} />
    </div>
  )
}

export default Task