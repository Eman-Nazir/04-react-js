import React from 'react'
import {BrowserRouter,Routes,Route} from 
"react-router-dom"
import { Link } from 'react-router-dom'
import Home from "./Home.jsx"
import About from "./About.jsx"
import Contact from './Contact.jsx'
import User from './User.jsx'
import PageNotFound from './PageNotFound.jsx'
import Products from './Products.jsx'
import Foundation from './Foundation.jsx'
import MakeupKit from './MakeupKit.jsx'
import Toner from './Toner.jsx'
import Cleanser from './Cleanser.jsx'
const App = () => {
  return (
    <BrowserRouter>
    <h1>React Router Dom</h1>
   {/* <div className="flex items-center gap-4 p-4 bg-gray-900">
  <a
    href="/"
    className="text-white hover:text-blue-400 transition duration-200 font-medium"> Home</a>
  <span className="text-gray-500">|</span>
  <a href="/about" className="text-white hover:text-blue-400 transition duration-200 font-medium"
  >About</a>
  <span className="text-gray-500">|</span>
  <a href="/contact" className="text-white hover:text-blue-400 transition duration-200 font-medium"> Contact </a>
</div> */}
  <nav className="flex items-center gap-6 p-4 bg-gray-900">
  <Link to="/"  className="text-white hover:text-blue-400 transition duration-200 font-medium">Home </Link>
  <span className="text-gray-500">|</span>
  <Link to="/about" className="text-white hover:text-blue-400 transition duration-200 font-medium"
  > About</Link>
  <span className="text-gray-500">|</span>
  <Link  to="/contact" className="text-white hover:text-blue-400 transition duration-200 font-medium">  Contact</Link>
  <span className="text-gray-500">|</span>
   <Link to="/user/10" className="text-white hover:text-blue-400 transition duration-200 font-medium"> User</Link>
   <span className="text-gray-500">|</span>
   <Link to="/products" className="text-white hover:text-blue-400 transition duration-200 font-medium" >Products </Link>
  </nav>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/user/:id' element={<User/>} />
      {/* parent route */}
      <Route path='/products' element={<Products/>} >   /
          <Route path='makeupkit' element={<MakeupKit/>}/>
          <Route path='foundation' element={<Foundation/>}/>
          <Route path='toner' element={<Toner/>}/>
          <Route path='cleanser' element={<Cleanser/>}/>
      </Route>
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    </BrowserRouter>
  )
}
export default App




// with js to redirect 
{/* <button onClick={() => window.location.href = "/about"}>
  About
</button> */}


// in react we use  useNavigate
// useNavigate = Go to another page using JavaScript with reload

//  If the browser handles navigation ===> page reloads
//  If React Router handles navigation ===> no reload