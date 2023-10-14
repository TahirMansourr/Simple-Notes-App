import React from 'react'
import { Link } from 'react-router-dom'

// Here the name of the note in the page that shows all the notes and this name is linking to
//  the single notes page. 

const ListItem = ({pass}) => {
 
  return (
    <div className='firstList'>
        <Link to = {`/note/${pass.id}`} className='mylink'>
            <h2>{pass.name}</h2>
        </Link>  
    </div>
  )
}

export default ListItem