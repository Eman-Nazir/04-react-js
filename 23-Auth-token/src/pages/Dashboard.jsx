import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
        
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome {currentUser.username} 
        </h1>

        <div className="space-y-2 text-left bg-gray-100 p-4 rounded-lg">
          <p><strong>Username:</strong> {currentUser.username}</p>
          <p><strong>Age:</strong> {currentUser.age}</p>
          <p><strong>Email:</strong> {currentUser.email}</p>
        </div>

        <div className="mt-4 p-3 bg-black text-green-400 rounded-lg text-sm break-all">
          <strong>UUID Token:</strong>
          <p>{currentUser.token}</p>
        </div>

      </div>
    </div>
  );
}
