import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) navigate("/dashboard");
    else alert("Invalid credentials");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input type="email" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded" />

        <input type="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded" />

        <button className="bg-blue-500 w-full py-2 rounded text-white">
          Login
        </button>

        <p className="text-center text-sm">
          Don’t have account?
          <Link to="/signup" className="text-green-500 ml-1">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}
