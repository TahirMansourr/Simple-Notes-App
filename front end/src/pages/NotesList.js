import React , {useState , useEffect} from 'react'
import ListItem from '../components/ListItem'
import '../App.css'
import { Link } from 'react-router-dom'


const NotesList = () => {

    const[note , setNote] = useState([])
   
    //First function fired and in it we are going to call the getnotes() function 
    useEffect(()=>{
        getnotes()
    },[])

    //Fetching the list of notes from the backend. And setting the note's state to that list
    const getnotes = async () =>{

        const request = await fetch('/notes/')
        const data = await request.json()
        setNote(data)
    }

    

  return (

    <div className='main'>
        
            <h1>Notes</h1>
                 
      {note.map((item , id)=>(
      <ListItem  pass = {item} key={id}/>
       ))}

       <Link to= '/note/new'>
                    <button>+</button>
       </Link>  
    </div>
  )

}

export default NotesList