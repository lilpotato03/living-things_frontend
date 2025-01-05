import React, { useState } from 'react'
import Checkbox from './Checkbox'
function Task(props) {
    const [checked,setChecked]=useState(false)
  return (
    <div className='task'>
        <Checkbox func={setChecked} param={checked}/>
        <p className={checked?'line-through text-neutral-300':''}>
        {props.data.task}
        </p>
    </div>
  )
}

export default Task