import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    if (!currentUser) {
      toast.error("⚠ Please login first!");
      navigate("/login");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center shadow-lg">
      
      {/* Left Links */}
      <div className="space-x-6 font-semibold">
        <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
        <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
        <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>

        {/* Always Visible Dashboard */}
        <button
          onClick={handleDashboardClick}
          className="hover:text-yellow-300 transition"
        >
          Dashboard
        </button>
      </div>

      {/* Right Side Auth Buttons */}
      <div>
        {!currentUser ? (
          <>
            <Link
              to="/login"
              className="bg-white text-blue-600 px-4 py-1 rounded-full mr-2 hover:bg-gray-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-yellow-400 text-black px-4 py-1 rounded-full hover:bg-yellow-300"
            >
              Signup
            </Link>
          </>
        ) : (
          <button
            onClick={logout}
            className="bg-red-500 px-4 py-1 rounded-full hover:bg-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
