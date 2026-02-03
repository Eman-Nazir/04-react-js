import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    console.log(useParams);
    const{ id } = useParams()
    
  return (
    <h2>User Profile for id : {id}</h2>
  )
}

export default User
