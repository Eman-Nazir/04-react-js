import React from "react";
import useForm from "./hooks/useForm";
const LoginForm = () => {
    const intialValues  = {
        email:"",
        password:""
    }
    const onSubmit = (values) =>{
        console.log("Form Submitted",values);
    }
  const { values, handelChange, handelSubmit, resetForm } = useForm(intialValues,onSubmit);
  return <div>
    <form onSubmit={handelSubmit}>
        <h2>  Login </h2>
         <input type="email" name="email" placeholder="Enter Your Email" value={values.email}
        onChange={handelChange}
        className="m-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
       <input type="password" name="password" placeholder="Enter Your Passworrd" value={values.password}
        onChange={handelChange}
        className="m-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
  <button 
       type="submit"
        className=" m-4 px-4 py-2 mr-2 bg-white text-black border rounded cursor-pointer  ">Submit</button>
 <button 
        onClick={resetForm}
        className=" m-4 px-4 py-2 mr-2 bg-white text-black border rounded cursor-pointer  ">Reset</button>
    </form>
  </div>;
};
export default LoginForm;
