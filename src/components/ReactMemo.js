import React, { useState } from "react";


const ReactMemo =()=>{
const [toDos, settoDos] = useState([]);
const [text , setText ] = useState("");


function AddToDo (){
    if (text.trim() !== '' && text.length>5) {
        settoDos([...toDos, text]);
        setText("");
      }
}

    return( 
        <div>
<h2>React Memo </h2>
<input type="text" value={text} placeholder="write your Skills" onChange={(e)=>setText(e.target.value)} />
<ul className="newTodoList">
  {
    toDos.map((item, index)=>(
        
        <li key={(index)}>{item}</li>
    ))
    
  }
</ul>


<button className="add-btn" onClick={AddToDo}>add</button>
        </div>
    )
}


export default ReactMemo;