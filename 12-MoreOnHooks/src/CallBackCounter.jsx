import React from 'react'
import { useState,useCallback } from 'react'

const CallBackCounter = () => {
    const [count,setCount] = useState(0)



    // const increment = () => {
    //     setCount(prev=>prev+1)
    
    // }


const increment = useCallback( () => {
        setCount(prev=>prev+1)
    },[])

  return (
    <div>
      <h2>Count:{count}</h2>
       <button
        className="px-4 py-2 mr-2 bg-white text-black border rounded cursor-pointer"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  )
}

export default CallBackCounter
