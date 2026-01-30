import React from "react";
import { useState, useCallback } from "react";
import CallBackChild from "./CallBackChild";

const CallBackParent = () => {
  const [count, setCount] = useState(0);

  const handelClick = useCallback(() => {
    console.log("Button Clicked ");
    
  }, [count]);

//   []  ==> create (or redefine) this function only once, when the component mounts
  return (
    <div>
      <h2>Count:{count}</h2>
      <button
        className="px-4 py-2 mr-2 bg-white text-black border rounded cursor-pointer"
        onClick={()=>setCount(count+3)}
      >
         Parent Increment
      </button>                      

      <CallBackChild click={handelClick}/>
    </div>
  );
};

export default CallBackParent;
