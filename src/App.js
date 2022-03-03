import { useState,useEffect } from "react";
import Todolist from "./Todolist";

function App() {

  const[inputtext, setInputtext] = useState("")
  const[username, setUsername] = useState("")
  const[inpuerr, setInpuerr] = useState("")
  const[item, setItem] = useState([])

  let handleChange = (e)=>{
    setInputtext(e.target.value);
  }
  let handleClick = (e) =>{
    e.preventDefault();
    if(username == ""){
      setInpuerr("fill Up form")
    }else{
      
    }
    setItem((olditem)=>(
      [...olditem, inputtext]
    ))
    setInputtext('')
    
  }

  let handleDelete = (id) =>{
    setItem((olditem)=>{
        return olditem.filter((arr,i)=>{
          return i !== id;
        })
    })
  }
  
  return (
    <div className="main">
        <div className="main_inner">
            <h2>ToDo List</h2>
            <div className="form_inn">
            <form>
              <input type={"text"} name="username" onChange={handleChange} placeholder={"Add a Item"} value={inputtext}/>
              <button className="button" type="button" onClick={handleClick}>+</button>
            </form>
            <ul>
              {item.map((itemval,i)=>{
              return <Todolist 
                text = {itemval}
                key= {i}
                id = {i}
                onSelect = {handleDelete}
              />
              })}
            </ul>
            <button className="remove">Remove All</button>
            {inpuerr ?
              <p>{inpuerr}</p>
               : 
               
               ""}
            </div>
        </div>
       
    </div>
  );
}

export default App;
