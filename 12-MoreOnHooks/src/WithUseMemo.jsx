import React from 'react'
import { useState,useMemo} from 'react'

const WithUseMemo = () => {
    const [count,setCount] = useState(0)
    const [text,setText] = useState('')


   const  expensiveCalculation = (num) => {
    console.log('Function run');
    let total = 0
    for (let i=0; i< 1000000000 ; i++){
        total = i++
    }
     return total + num ;
   }

   const result = useMemo(()=>expensiveCalculation(count),[count])
   

//    when ever we change the text this function will not run it will give a value  
// useMemo store the
//    that process is called Caching 


  return (
    <div>
        <h5>Result:{result}</h5>
        <button
        className=" px-4 py-2 m-4  bg-white text-black border rounded cursor-pointer"
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
        onChange={(e) => setText(e.target.value)}
        className="m-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <p>{text}</p>
    </div>
  )
}

export default WithUseMemo
