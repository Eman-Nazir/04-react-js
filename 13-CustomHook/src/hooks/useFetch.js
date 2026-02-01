import { useState,useEffect } from "react";


import React from 'react'

const useFetch = (url) => {
  const[data,setData]=useState(null)
  const[error,setError]=useState(null)
  const[loading,setLoading]=useState(true)

  useEffect(()=>{
    async function fetchData() {
        
        try {
            const result = await fetch(url)
            const json = await result.json()
            setData(json)
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false)
        }
    }
fetchData()
  },[url])

  return {data,loading,error }
}

export default useFetch
