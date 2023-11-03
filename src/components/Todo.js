import React, { useState } from "react";


const Todo =()=>{
const [toDos, settoDos] = useState([]);
const [text , setText ] = useState("");



function handleDelete(index){
 const newTodo=   toDos.filter((todo, id )=>id!==index)
settoDos(newTodo);
}

function AddToDo (){
    if (text.trim() !== '') {
        settoDos([...toDos, text]);
        setText("");
      }
}


    return(
        <div>
<h2>My Todo </h2>
<input type="text" value={text} placeholder="write your task" onChange={(e)=>setText(e.target.value)} />
<ul className="newTodoList">
  {
    toDos.map((item, index)=>(
        
        <li key={(index)}>{item}    <button onClick={()=>handleDelete(index)}>Delete</button></li>
      
    ))
    
  }
</ul>


<button className="add-btn" onClick={AddToDo}>add</button>
        </div>
    )
}


export default Todo;