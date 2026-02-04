import React from 'react'

const UserProfile = ({userData}) => {
    const username = userData.name;
    const age = userData.age;
  return (
    <div className='border-black border-2 p-4 m-2'>
      <h4>USER PROFILE</h4>
      <p>Name:{username}</p>
      <p>Age:{age}</p>
    </div>
  )
}

export default UserProfile
