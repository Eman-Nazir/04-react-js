import React from 'react'

const Card = () => {
  return (
    
    <div className="bg-white p-5 rounded-lg shadow-md mb-4">
      
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Card Component
      </h2>

      <p className="text-gray-600 text-sm mb-3">
        This card is a separate component created inside App.js
      </p>

      <button className="bg-blue-500 text-white px-4 py-2 rounded 
                         hover:bg-blue-600 transition">
        Click Me
      </button>

    </div>

  )
}

export default Card
