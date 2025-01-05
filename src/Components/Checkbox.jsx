import React from 'react'

function Checkbox(props) {
    function toggle(){
        props.func(!props.param)
    }
  return (
        <div className='checkbox-bg' onClick={toggle} >
            {props.param?<div className='w-full h-full bg-neutral-300 rounded-full'></div>:<></>}
        </div> 
    )
}

export default Checkbox