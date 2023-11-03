import {React ,useState} from "react";

const Count =()=>{

    const[count, setCount] = useState(0);

    function increaseCount(){
        setCount(count+1);
    }
    return (
        <div>
<p  >Count {count}</p>
<button onClick={increaseCount}>+</button>
        </div>
    )
}

export default Count;

