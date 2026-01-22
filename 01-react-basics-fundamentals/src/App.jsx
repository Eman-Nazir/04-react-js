import React from 'react'
import Card from './components/Card'
import Profile from './components/Profile'

const App = () => {
  return (
    <div>
      <h1 className='bg-red-600 text-white p-4 font-bold'>Reatc with tailwind CSS</h1>
      <h1 className='font-extrabold text-3xl'>Components Rendering</h1>
      <h1>Crad Component Render</h1>
      <Card/>
      <Card/>
      <h1>Profile Component Render</h1>
      <Profile/>
    </div>
  )
}

export default App
