import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Signup() {
  const [form, setForm] = useState({ username: "", age: "", email: "", password: "" });
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signup(form)) {
      toast.success("Signup successful! Please login.");
      navigate("/login");
    } else {
      toast.error("Email already exists.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <input placeholder="Username" required onChange={e => setForm({ ...form, username: e.target.value })} className="w-full p-2 mb-2 border rounded" />
        <input placeholder="Age" type="number" required onChange={e => setForm({ ...form, age: e.target.value })} className="w-full p-2 mb-2 border rounded" />
        <input placeholder="Email" type="email" required onChange={e => setForm({ ...form, email: e.target.value })} className="w-full p-2 mb-2 border rounded" />
        <input placeholder="Password" type="password" required onChange={e => setForm({ ...form, password: e.target.value })} className="w-full p-2 mb-4 border rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Sign Up</button>
      </form>
    </div>
  );
}
