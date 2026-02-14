import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-2">
          Welcome, {currentUser.username}
        </h1>
        <p className="mb-2 text-gray-600">Age: {currentUser.age}</p>
        <p className="mb-6 text-gray-600">Email: {currentUser.email}</p>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
