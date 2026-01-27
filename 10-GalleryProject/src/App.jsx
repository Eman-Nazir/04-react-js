import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from './components/Card';
const App = () => {
const[userData,setUserData] =useState([])
const[index , setIndex] = useState(1)
const getData = async() => {
  // console.log('data is coming ');
  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
  console.log(response);
  console.log(response.data);
  setUserData(response.data)};
useEffect(function(){
   getData()
},[index])
let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2'>Loading......</h3>
if(userData.length>0){
 printUserData = userData.map(function(elem,id){
return (
  <div key={id}>
    <Card elem={elem}/>
  </div>
 )})}
  return (
    <div className='p-4 overflow-auto bg-black h-screen text-white'>
     <h1 className='fixed text-6xl '>{index}</h1>
    <div className='flex flex-wrap h-[82%] gap-4 p-2 w-[1100px]'>
      
           {printUserData}
    </div>

           <div className='flex justify-center items-center p-4 gap-6'>
            <button 
            style={{opacity:index==1 ? 0.5 : 1}}
            className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'
            onClick={()=>{
              if(index>1){
              setIndex(index-1)
              setUserData([])
              } 
            }}
            >Prev</button>

            <h4>Page{index}</h4>
            <button className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'
             onClick={()=>{
              setUserData([])

              setIndex(index+1)
            }}
            >Next </button>
           </div>

    </div>
  )

}
export default App
