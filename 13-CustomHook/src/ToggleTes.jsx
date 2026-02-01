import React from 'react'
import useToggle from "./hooks/useToggle";
const ToggleTes = () => {
    const[isOpen,toggleOpne] = useToggle()
    const[isTest,toggleTest] = useToggle()
    // isOpen ==> value and toggleOpne ==> toggle (function)
  return (
    <div>

     <div>
       <button 
        className=" m-4 px-4 py-2 mr-2 bg-white text-black border rounded cursor-pointer "
       onClick={toggleOpne}>Toggle</button>
       {isOpen && <p>This content is now visible.</p> }
    </div>

     <div>
       <button 
        className=" m-4 px-4 py-2 mr-2 bg-white text-black border rounded cursor-pointer "
       onClick={toggleTest}>Toggle Test</button>
       {isTest && <p>Hello! This message is controlled by a reusable custom hook.</p>}
    </div>

    </div>
  )
}

export default ToggleTes
