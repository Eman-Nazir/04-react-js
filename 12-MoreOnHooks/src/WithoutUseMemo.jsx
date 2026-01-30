import React from 'react'
import { useState } from 'react'

const WithoutUseMemo = () => {
    const [count,setCount] = useState(0)
    const [text,setText] = useState('')


   const  expensiveCalculation = () => {
    console.log('Function run');
    let total = 0
    for (let i=0; i< 1000000000 ; i++){
        total = i++
    }
     return total 
   }

   const result = expensiveCalculation()
   

  return (
    <div>
        <h5>Result:{result}</h5>
        <button
        className=" px-4 py- mr-2 bg-white text-black border rounded cursor-pointer"
        onClick={()=>setCount(count+5)}
      >
        Increase Count
      </button>
       
       <p>Count:{count}</p>

       <input
        type="text"
        name="username"
        placeholder="Enter Your Name"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        className=" px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <p>{text}</p>
    </div>
  )
}

export default WithoutUseMemo
