import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        {user && <Link to="/dashboard">Dashboard</Link>}
        {user?.role === "admin" && <Link to="/admin">Admin</Link>}
      </div>

      <div className="flex gap-4">
        {user ? (
          <>
            <span>{user.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
