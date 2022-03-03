import React from 'react'
import { XOctagon} from 'react-bootstrap-icons';

const Todolist = (props) => {



  return (
    <div className='todoist'>

      <XOctagon 
        onClick={() =>{
            props.onSelect(props.id)
        }} 
        />
        <li key={props.i}>{props.text}</li>
    </div>
  )
}

export default Todolist
