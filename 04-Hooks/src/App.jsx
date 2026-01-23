// // 1...
// import React, { useState } from 'react'

// const App = () => {

//  const[num,setNum]= useState(0);
 
// function changeNum (){
// setNum(30)
// }

//   return (
//     <div>
//       <h1> Value of a is {num}</h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }


// export default App
                               



// 2.... 

import React, { useState } from 'react';
const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const incrementBy5 = () => {
    setCount(count + 5);
  };
  const decrementBy5 = () => {
    setCount(count - 5);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Simple Counter</h1>
        
        {/* Counter Display */}
        <div className="text-center mb-8">
          <div className="text-6xl font-bold mb-2 text-blue-600">{count}</div>
          <div className="text-gray-500">Current Value</div>
        </div>

        {/* Basic Controls */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold text-lg"
          >
            -1
          </button>
          
          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg"
          >
            +1
          </button>
        </div>
        {/* Step by 5 Controls */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={decrementBy5}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-lg"
          >
            -5
          </button>
          
          <button
            onClick={incrementBy5}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg"
          >
            +5
          </button>
        </div>

        {/* Reset Button */}
        <div className="text-center">
          <button
            onClick={reset}
            className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold text-lg"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;


// 3...


// import React, { useState } from 'react';

// const App = () => {
//   const [num, setNum] = useState({ user: 'Ayesha', age: 20 });

//   const btnClicked = () => {
//     setNum({ user: 'Huma', age: 29 });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 font-sans">
//       <h1 className="text-3xl text-gray-800 mb-6">
//         {num.user}, {num.age}
//       </h1>
//       <button
//         className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//         onClick={btnClicked}
//       >
//         Update Profile
//       </button>
//     </div>
//   );
// };

// export default App;


// 4....

// import React, { useState } from 'react';

// const App = () => {
//   const [num, setNum] = useState([10, 20, 30]); 

//   const btnClicked = () => {
//     const newNum =[...num]
//     newNum.push(99)
//     setNum(newNum); 
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-blue-50 font-sans">
//       <h1 className="text-3xl text-blue-800 mb-6">
//         {num.join(', ')}
//       </h1>
//       <button
//         className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//         onClick={btnClicked}
//       >
//         Add Item
//       </button>
//     </div>
//   );
// };

// export default App;


// 5...


// import React, { useState } from 'react';

// const App = () => {
//   const [num, setNum] = useState({ user: 'Rishi', age: 17 });

//   const btnClicked = () => {
//     setNum(prev => ({ ...prev, age: 50 }));
//   }

//   return (
//     <div>
//       <h1>{num.user}, {num.age}</h1>
//       <button onClick={btnClicked}>Update Age</button>
//     </div>
//   );
// }

// export default App;


// 6....

// import React, { useState } from 'react';

// const App = () => {
//   const [num, setNum] = useState(10);

//   const btnClicked = () => {
//     setNum(prev => prev + 1);
//     setNum(prev => prev + 1);
//     setNum(prev => prev + 1);
//     setNum(prev => prev + 1);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-blue-50 font-sans">
//       <h1 className="text-5xl text-blue-800 mb-6">{num}</h1>
//       <button
//         className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//         onClick={btnClicked}
//       >
//         Click
//       </button>
//     </div>
//   );
// };

// export default App;
