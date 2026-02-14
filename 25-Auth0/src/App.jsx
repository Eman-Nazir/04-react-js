import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { loginWithRedirect, user, logout, isAuthenticated, isLoading } = useAuth0();
  console.log("User", user, "IsAuthenticated", isAuthenticated, "IsLoading", isLoading);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {isLoading && (
        <h2 className="text-xl font-semibold text-gray-600">Loading.....</h2>
      )}

      {!isLoading && (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          {isAuthenticated ? (
            <>
              <h2 className="text-2xl font-bold mb-4">Welcome</h2>
              <p className="text-gray-700 mb-6">Hello, <span className="font-semibold">{user.name}</span></p>
              
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="bg-red-500 text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-red-600 transition duration-200 w-full"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6">Login to Your Account</h2>
              
              <button
                onClick={() => loginWithRedirect()}
                className="flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-blue-600 transition duration-200 w-full mb-4"
              >
                {/* Optional: Add a Google icon here */}
                Log In
              </button>

              <p className="text-gray-500 text-sm">
                Don’t have an account? Sign up with Auth0 login
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
