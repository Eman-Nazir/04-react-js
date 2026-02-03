import React from 'react' 
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate  = useNavigate()
  return (
    <div>
      <h1>HOME PAGE</h1>
         <button
      onClick={() => navigate("/about")}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      About
    </button>
    </div>
  )
}

export default Home
