import React from 'react'
import { useState,useCallback } from 'react'
const CallBackChild = ({click}) => {
    console.log("Child Rerender");
  return (
    <div>
     <button
        className="mt-2 px-2 py-2 mr-2 bg-white text-black border rounded cursor-pointer"
        onClick={click}
     >
        Child Button
      </button>
    </div>
  )
}

export default React.memo(CallBackChild)
