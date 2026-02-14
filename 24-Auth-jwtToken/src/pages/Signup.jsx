import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Signup() {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    role: "user"
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = signup(form);
    if (success) navigate("/login");
    else alert("User already exists");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Create Account</h2>

        <input name="name" placeholder="Name" onChange={handleChange}
          className="w-full border p-2 rounded" />

        <input name="email" type="email" placeholder="Email"
          onChange={handleChange}
          className="w-full border p-2 rounded" />

        <input name="password" type="password" placeholder="Password"
          onChange={handleChange}
          className="w-full border p-2 rounded" />

        <input name="age" type="number" placeholder="Age"
          onChange={handleChange}
          className="w-full border p-2 rounded" />

        <select name="role" onChange={handleChange}
          className="w-full border p-2 rounded">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button className="bg-green-500 w-full py-2 rounded text-white">
          Signup
        </button>

        <p className="text-center text-sm">
          Already have account?
          <Link to="/login" className="text-blue-500 ml-1">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
