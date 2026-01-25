import React, { useState } from "react";
const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault(); 
    console.log("Form Submitted:", formData);

    setFormData({
      name: "",
      email: "",
      age: "",
      password: "",
    });
  };
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h2 className="text-lg mb-4">User Form</h2>
      <form onSubmit={submitHandler}>
        {/* Name */}
        <label className="block mb-1" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="block mb-3 p-2 w-full border border-gray-400 rounded text-white bg-gray-800 placeholder-gray-400"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        {/* Email */}
        <label className="block mb-1" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="block mb-3 p-2 w-full border border-gray-400 rounded text-white bg-gray-800 placeholder-gray-400"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        {/* Age */}
        <label className="block mb-1" htmlFor="age">
          Age:
        </label>
        <input
          type="number"
          id="age"
          placeholder="Enter your age"
          className="block mb-3 p-2 w-full border border-gray-400 rounded text-white bg-gray-800 placeholder-gray-400"
          value={formData.age}
          onChange={(e) =>
            setFormData({ ...formData, age: e.target.value })
          }
        />
        {/* Password */}
        <label className="block mb-1" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="block mb-4 p-2 w-full border border-gray-400 rounded text-white bg-gray-800 placeholder-gray-400"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <button
          type="submit"
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;





