import React from 'react'
import { useState,useEffect } from 'react'


const withData = (WrapComponent,url) => {
  return function  EnhancedComponent (){
    const [data ,setData] = useState([])

    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=>setData(data))
    },[])

    return <WrapComponent data={data}/>
  }
}

export default withData
