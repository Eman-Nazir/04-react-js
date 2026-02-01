import React from 'react'
import Greeting from './Greeting.jsx'
import withStyle from './hoc/withStyle.jsx'


const GreetingWithStyle = withStyle(Greeting)


export default GreetingWithStyle