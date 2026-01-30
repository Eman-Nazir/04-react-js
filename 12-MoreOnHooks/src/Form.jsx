import React, { useReducer } from "react";
const Form = () => {
  // Initialize form state with useReducer
  const [formData, dispatch] = useReducer(reducer, {
    username: "",
    email: "",
  });
  // Reducer function to update form state
  function reducer(state, action) {
    return {
      ...state, 
       // set old values as it only update the chaged one
      [action.name]: action.value, 
      // dynamic key update based on input name 
      //  name is form attribute that is name='username' name='email'

    };
  }
  // Handle input changes
  function handelChange(e) {
    dispatch({
      name: e.target.name,   
      // Which field is being updated (username / email)
      value: e.target.value, 
      // New value of that field
    });
  }
  return (
    <form className="max-w-md mx-auto p-6 bg-white rounded shadow-md space-y-4">
      {/* Username Input */}
      <input
        type="text"
        name="username"
        placeholder="Enter Your Name"
        value={formData.username}
        onChange={handelChange}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Email Input */}
      <input
        type="email"
        name="email"
        placeholder="Enter Your Email"
        value={formData.email}
        onChange={handelChange}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Display live form data */}
      <p className="text-gray-700 font-medium">
        <span className="font-semibold">Username:</span> {formData.username} <br />
        <span className="font-semibold">Email:</span> {formData.email}
      </p>
    </form>
  );
};

export default Form;
