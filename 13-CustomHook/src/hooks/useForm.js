import React from 'react'
import { useState } from 'react'

const useForm = (intialValaues={},callback ) => {
    const [values,setValues] = useState(intialValaues)

//   Hnadel input Change   ---> Handel input fields 
// any field that is changed that will be store in e 
//  we take naem and value form the field that store in e
const handelChange = (e) =>{
const {name,value} = e.target
// set value as object 
setValues(prev=>({
   ...prev,
   [name]:value         
}))
}

//  Handel Form Submit  ==> when user submit form 
const handelSubmit = (e) => {
    e.preventDefault();
    if(callback) callback(values)
}

//   Reset Form 
const resetForm = ()=>setValues(intialValaues)

return {
 values,
 handelChange,
 handelSubmit,
 resetForm

}
}
export default useForm
