// // UseRef 
// // 1.. 
// import React, { useState, useRef } from "react";
// function App() {
//   const [stateCount, setStateCount] = useState(0); 
//   const refCount = useRef(0); 
//   console.log("Component rendered");
//   return (
//     <div className="p-10 space-y-5 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold">useState count: {stateCount}</h2>
//       <h2 className="text-2xl font-bold">useRef count: {refCount.current}</h2>

//       <div className="space-x-4">
//         {/* Update state */}
//         <button
//           onClick={() => setStateCount(stateCount + 1)}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//         >
//           Increment useState
//         </button>
//         {/* Update ref */}
//         <button
//           onClick={() => {
//             refCount.current += 1;
//             console.log("Ref updated:", refCount.current);
//           }}
//           className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
//         >
//           Increment useRef
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;


// 2.....


// import React, { useState, useRef, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef(0);

//   useEffect(() => {
//     prevCount.current = count; 
//   }, [count]);

//   return (
//     <div className="p-10 space-y-3">
//       <h2 className="text-xl font-bold">Current: {count}</h2>
//       <h2 className="text-xl font-bold">Previous: {prevCount.current}</h2>
//       <button
//         onClick={() => setCount(count + 1)}
//         className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
//       >
//         Increment
//       </button>
//     </div>
//   );
// }

// export default App;

// 3........


import React, { useRef } from "react";

function App() {
  const inputRef = useRef();

  const handleClick = () => {
    // Interacting with the DOM directly
    inputRef.current.focus();          
    inputRef.current.value = "Hello";  
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">useRef DOM Interaction</h1>

      <input
        ref={inputRef}
        placeholder="Type here..."
        className="border-2 border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:border-blue-500 shadow-sm mb-4"
      />

      <button
        onClick={handleClick}
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition-all"
      >
        Focus & Fill
      </button>
    </div>
  );
}

export default App;






// UseContext 

// import React from 'react'
// import { AuthProvider } from './Context/AuthContext.jsx'
// import Navbar from './components/AuthExample/Navbar.jsx'

// const App = () => {
//   return (
//     <AuthProvider>
//       <Navbar/>
//     </AuthProvider>
//   )
// }

// export default App






// import React from 'react'
// import { createContext,useContext,useState} from 'react'
// import ThemeContext from "./Context/ThemeContext.jsx";
// import ToolBar from './components/ThemeExample/ToolBar.jsx';


// const App = () => {
//   const[theme,setTheme] = useState("light")
//   return (
//     <>
//     {/*  we send the state in value  */}
//       <ThemeContext.Provider value={{theme,setTheme}}>
//            <ToolBar/>
//       </ThemeContext.Provider>
//     </>
//   )
// }


// export default App






// import React from 'react'
// import { createContext,useContext } from 'react';

// // use context => gloabal stae mangement 
// // we use in multiple components 
// // avoid prop drilling                            
// const NameContext = createContext();
// const App = () => {
//   // const user ='Hina Fatima';  // for single value 
//   const user = {name:"Hina Fatima" , role:"Admin "}
//   return (
//     <div>
//          {/* provider method  */}
//          <NameContext.Provider value={user}>
//              <Parent/>
//          </NameContext.Provider>
//     </div>
//   )
// }
// function Parent (){
//   return  <Child/>
// }

// function Child (){
//   // const user = useContext(NameContext)
//   return (

//     <div>
//       {/* <h1>Nmae:{user}</h1> */}
//     <GrandChild/>
//     </div>
// )}

// function GrandChild (){
//   //  now wher ewe have to use use context we use this there 
//   // const user = useContext(NameContext)
//   // return  <h3>My name is {user}</h3>
//   // when multiple values 
//   const {name,role } = useContext(NameContext)
//   return <h3>Welcome:{name} - Your role is :{role}</h3>
// }

// export default App



//   const user = {name:"Hina Fatima" , role:"Admin "}
//   const {name,role } = useContext(NameContext)
// when we desrtucture (2nd line ) it  we can change the name and role no need to be same 
// we can  use alias there like this 
// const { name, role } = useContext(NameContext);
// const { name: userName, role: userRole } = useContext(NameContext);
// return <h3>Welcome: {userName} - Your role is: {userRole}</h3>

