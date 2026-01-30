import React, { useReducer } from 'react'
const Counter = () => {
  // action => dispatch sends object and it passes in action
  // this is state default value state = { count: 0 }
  // state => reducer's old value accept and return new value
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 }
      case "decrement":
        return { count: state.count - 1 }
      case "reset":
        return { count: 0 }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Count: {state.count}
      </h1>
      <button
        className="px-4 py-2 mr-2 bg-white text-black border rounded cursor-pointer"
        onClick={() => dispatch({ type: "increment" })} >+</button>
      <button
        className="px-4 py-2 mr-2 bg-white text-black border rounded cursor-pointer"
        onClick={() => dispatch({ type: "decrement" })} > -</button>
      <button className="px-4 py-2 bg-gray-400 text-white rounded cursor-pointer"onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  )
}
export default Counter
