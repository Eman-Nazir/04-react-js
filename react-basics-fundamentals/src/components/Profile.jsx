import React from 'react'

const Profile = () => {
    // Variables for easy change
  const name = "Esha Fatima";
  const age = 25;
  const city = "Lahore";
  return (
      <div className="bg-pink-500 p-6 text-center rounded shadow-md">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <p className="font-bold mb-1">Age: {age}</p>
      <p className='font-bold'>City: {city}</p>
    </div>
  )
}

export default Profile
