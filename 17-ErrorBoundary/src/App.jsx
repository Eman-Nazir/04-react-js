import React from 'react'
import UserProfile from './UserProfile'
import ErrorBoundary from './ErrorBoundary'
const App = () => {
  const userData  = {
    name:"Hina",
    age:25,
  };
   const userData1  = null
  return (
    <>
    <ErrorBoundary>
      <UserProfile userData={userData}/>
    </ErrorBoundary>
    <ErrorBoundary fallback= {<p>Error in user profile</p>}>
      <UserProfile userData={userData1}/>
    </ErrorBoundary>
    </>
  )
}
export default App
