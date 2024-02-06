
import {useState} from "react";
function Counter() {
  let [counter,setCounter] = useState(0);
   const addValue = () => 
   {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    // setCounter(counter + 1)
   }
   const removeValue = () => 
   {
    if(counter > 0)
    {
      setCounter(counter - 1)
    }
   }

  return (
    <>
     <h1 className="p-4">React Hooks</h1>
     <p>Counter Value : {counter}</p>
     <button className="btn" onClick={addValue} >Add</button>
     <button onClick={removeValue}>Remove</button>
    </>
  );
}

export default Counter;
