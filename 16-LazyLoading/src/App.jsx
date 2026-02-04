import React from 'react'
import {BrowserRouter,Routes,Route} from 
"react-router-dom"
import { Link } from 'react-router-dom'
import { Suspense,lazy } from 'react'
const Home = lazy(()=>import("./Home"))
const About = lazy(()=>import("./About"))
const Contact = lazy(()=>import("./Contact"))
const User = lazy(()=>import("./User"))
const PageNotFound = lazy(()=>import("./PageNotFound"))
const Products = lazy(()=>import("./Products"))
const Foundation = lazy(()=>import("./Foundation"))
const MakeupKit = lazy(()=>import("./MakeupKit"))
const Toner = lazy(()=>import("./Toner"))
const Cleanser = lazy(()=>import("./Cleanser"))
// import Home from "./Home.jsx"
// import About from "./About.jsx"
// import Contact from './Contact.jsx'
// import User from './User.jsx'
// import PageNotFound from './PageNotFound.jsx'
// import Products from './Products.jsx'
// import Foundation from './Foundation.jsx'
// import MakeupKit from './MakeupKit.jsx'
// import Toner from './Toner.jsx'
// import Cleanser from './Cleanser.jsx'


const App = () => {
  return (
    <BrowserRouter>
    <h1>React Router Dom</h1>
  
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


    <Suspense fallback={<p>Loading Page.....</p>}>
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
    </Suspense>
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