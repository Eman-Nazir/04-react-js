import React from 'react'
import Greeting from './Greeting'
import GreetingWithStyle from './GreetingWithStyle.jsx'
import PostListWithData from './PostListWithData.jsx'
import Dashboard from './Dashboard.jsx'
import withAuth from './hoc/withAuth.jsx'

const ProtectedDashboard =  withAuth(Dashboard)
const App = () => {
  return (
    <div>
      <Greeting name="eman"/>
      <GreetingWithStyle name ="AIza"/>
      <PostListWithData/>
      <ProtectedDashboard/>
    </div>
  )
}

export default App
