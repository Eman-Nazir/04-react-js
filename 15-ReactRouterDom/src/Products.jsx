import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Products = () => {
  return (
    <div>
      <h1>Prdouct Page</h1>
<nav className="flex items-center gap-6 p-4 bg-gray-100">
  <Link
    to="makeupkit"
    className="text-black hover:text-blue-400 transition duration-200 font-medium">
    MakeUp Kit
  </Link>
  <span className="text-gray-500">|</span>
  <Link
    to="foundation"
    className="text-black hover:text-blue-400 transition duration-200 font-medium">
    Foundations
  </Link>
  <span className="text-gray-500">|</span>
  <Link
    to="toner"
    className="text-black hover:text-blue-400 transition duration-200 font-medium">
    Toner
  </Link>
  <span className="text-gray-500">|</span>

   <Link
    to="cleanser"
    className="text-black hover:text-blue-400 transition duration-200 font-medium">
    Cleanser
  </Link>
  </nav>
  <Outlet/>
    </div>
  )
}
export default Products
