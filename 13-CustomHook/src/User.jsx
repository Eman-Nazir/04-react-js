import React from 'react'
import useFetch from './hooks/useFetch'

const User = () => {
    const {data,loading,error} = useFetch("https://jsonplaceholder.typicode.com/users")
    // data loading error return in useFecth hook 

    if(loading) return <h3>Loaidng....</h3>
    if(error) return <h3>Error Occured!</h3>
  return (
       <ul>
  {data.map(user => (
    <li key={user.id}>
      <strong>{user.name}</strong> <br />
      Username: {user.username} <br />
      Email: {user.email}
    </li>
  ))}
</ul>

  )    
}

export default User
