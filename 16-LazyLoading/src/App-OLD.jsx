import React from 'react'
// import Post from '.16-LazyLoading/src/Post'
import { useState,lazy,Suspense } from 'react'
const Post = lazy(()=>import("./Post"))

const App = () => {
  const[showPost , setShowPost] = useState(false)

  return (
    <> 
    <button
     className=" m-4 px-4 py-2 mr-2 bg-gray-200 text-black border rounded cursor-pointer  "
     onClick={()=>setShowPost(true)}>Show Post</button>
    {showPost && (
      <Suspense fallback={<p>Loading Psot.....</p>}>
                <Post/> 
      </Suspense>
       

    )}
    </>
  )
}

export default App



// Lazy loading USES chunking.