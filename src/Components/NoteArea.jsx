import React from 'react'

function NoteArea() {
  return (
    <div className="background flex flex-col  items-center p-4 gap-y-4">
        <Navbar />
        {!add?<div className='max-w-[20rem] max-h-[50rem] p-4 rounded-md shadow-md bg-white w-full h-full flex flex-col '>
            <div className='note-title border-b-4'>
                Notes
                <button className='text-[15px] text-white bg-blue-400 p-2 rounded-md ' onClick={()=>setAdd(!add)}>Add note</button>
            </div>
            <div className='w-full h-full '>
                {notes.length!=0?
                notes.map((note)=>{
                    return(
                        <NoteCard note={note} key={note.id}/>
                    )
                }):<EmptyGraphic />}
            </div>
        </div>:
        <Notepad title='' user={user.username} go_back={setAdd}/>}
    </div> 
  )
}

export default NoteArea