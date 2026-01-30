import React, { useState, useMemo } from 'react'
const Parent = () => {
    const [count, setCount] = useState(0)
    // useMemo memorizes the value of user
    // The object is created only once when the component mounts
    // Because dependency array is empty []
    const user = useMemo(() => ({ name: "eman", age: 19 }), [])

    console.log("Parent rendered");

    return (
        <div>
            <h2>ParentCount: {count}</h2>
            <button
                className="px-4 py-2 m-4 bg-white text-black border rounded cursor-pointer"
                onClick={() => setCount(count + 5)}
            >
                Increase Count
            </button>

            <p>Count: {count}</p>

            {/* Child component receives 'user' as props */}

            <Child user={user}/>
        </div>
    )
}

// ------------------------ Child Component Behavior ------------------------

// ------------------------ 1 Without React.memo ------------------------
// const Child = ({ user }) => {
//     console.log('Child Render');
//     return <h3>User: {user.name}</h3>
// }

// Behavior:
// - Every time Parent re-renders (e.g., when count changes), Child also re-renders.
// - Even though 'user' object has the same values, a new object reference is created without useMemo.
// - So Child sees props as "changed" and re-renders unnecessarily.

// ------------------------ 2 With React.memo ------------------------
// React.memo prevents unnecessary re-renders if props do not change.
// Combined with useMemo for the 'user' object, Child re-renders only when 'user' actually changes.

const Child = React.memo(({ user }) => {
    console.log('Child Render');
    return <h3>User: {user.name}</h3>
})

export default Parent
