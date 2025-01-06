import axios from 'axios'
import React, { useContext } from 'react'
import { MainContext } from '../Contexts/AppContext'

function Checkbox(props) {
    const {refresh,setRefresh}=useContext(MainContext)
    async function toggle(){
        try{
            const res=await axios.put(`/django/task/${props.username}/${props.note}/${props.id}`,{"checked":!props.param},{headers:{"Content-Type":'application/json'}})
            props.func(!props.param)
            setRefresh(refresh+1)
        }catch(e){
            console.log(e.message)
        }
    }
  return (
        <div className='checkbox-bg' onClick={toggle} >
            {props.param?<div className='w-full h-full bg-neutral-300 rounded-full'></div>:<></>}
        </div> 
    )
}

export default Checkbox