import React from 'react'
import { useContext } from 'react'
import { AuthConText } from '../../Context/AuthContext.jsx'



const Navbar = () => {
  const {isLoggedIn,login,logout} = useContext(AuthConText)
  return (
    <nav>
{
    isLoggedIn ? (
        <button
        className='bg-black text-white m-5 p-4 rounded cursor-pointer'
         onClick={logout}>Logout</button>
    ):(
        <button
        className='bg-black text-white m-5 p-4 rounded cursor-pointer'
        onClick={login}>Login</button>
    )
}

    </nav>
  )
}

export default Navbar
