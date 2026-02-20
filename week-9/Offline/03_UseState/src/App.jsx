

import { useState } from "react";

function App() {

  const [count,setCount]=useState(0);

  
  return (
    <div className="counter">
      <p id="para">You have clicked {count}times</p>
      <button id="btn" onClick={()=>{setCount(count+1)}}>click here for increment</button>
      <button id="btn1" onClick={()=>{setCount(count-1)}}>click here for decrement</button>
    </div>
  );
}

export default App;
