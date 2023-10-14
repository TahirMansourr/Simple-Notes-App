import React , { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleNote = () => {
    const [singlenote , setSinglenote] = useState([])
    const params = useParams()
  
    //Here whe the useEffect is triggered it fires the getSinglenote() which gets the single note.
    useEffect(()=>{ 
        GetSinglenote()
    },[])

    //Fetch api was used here to fetch the single note from the backend.
    //Then setting the state of the single note to that response which is the singlenote.
    const GetSinglenote = async () =>{
         const request = await fetch( `/notes/${params.id}/` )
         const data = await request.json()
        setSinglenote(data)
       
    }

    //Sending the required fields to the bakend to update the note.
    const submit = async()=>{
        fetch(
            `/notes/${params.id}/update` ,
           { 
            method : "PUT",
            headers: {"content-type":"application/json"},
            body : JSON.stringify(singlenote)
           }
        )
    }

    //Sending the required feilds to delete note for the backend.
    const ondelete = async()=>{
        fetch(
            `/notes/${params.id}/delete` ,
           { 
            method : "Delete",
            headers: {"content-type":"application/json"},
           }
        );
        
    }

    //Sending the required fields to add a note for the backend.
    const addNote = ()=>{
        
        fetch(
            `/notes/create` ,
           { 
            method : "POST",
            headers: {"content-type":"application/json"},
            body : JSON.stringify(singlenote)
           }
        );
    }

  return (
    <div className='spcontainer'>
    <div className='singlepage'>
        <div>
            <textarea className='thetext'
            defaultValue={singlenote.name} 
            onChange={(e)=>{setSinglenote(
                {...singlenote , 'name' : e.target.value}
                )
                }}/>
        </div>
            <textarea className='thetextarea'
            defaultValue={singlenote?.body} 
            onChange={(e)=>{setSinglenote(
                {...singlenote ,"body": e.target.value}
                )
                }} />
        <div>
       
        <Link to = {"/"}>  <button onClick={submit}>Update Note</button></Link>
        <br/>
        <Link to = {"/"}> <button onClick={ondelete}>Delete Note</button></Link>

         {/* creating a new button to appear only if a new note is being created,
            otherwise it will not appear*/}
        <br/>
          { params.id === 'new'?
          <Link to = {"/"}> <button onClick={addNote}>create new note</button></Link> 
          : null }
       
        </div>
    </div>
   </div>
  )
}

export default SingleNote