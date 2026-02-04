import React from 'react'
import { useState,useEffect } from 'react'
const Post = () => {
     const[posts,setPost] = useState([])
     useEffect(()=>{
        const fetchPost  = async()=>{
          const repsonse = await fetch("https://jsonplaceholder.typicode.com/posts")
          const data = await repsonse.json()
          setPost(data)
        }
        fetchPost()
     },[])

  return (
    <div>
        <h1>POSTS</h1>
        <ul>
            {posts.map((post)=>(
            <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>


            </li>
            ))}
        </ul>
      
    </div>
  )
}

export default Post
