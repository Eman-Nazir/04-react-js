import React from "react";
const App = () => {
  // Simple key value
  localStorage.setItem("firstName", "Ayesha");
  //  Array
  const favoriteFruits = ["Mango", "Apple", "Banana"];
  localStorage.setItem("fruits", JSON.stringify(favoriteFruits));
  //  Object
  const userProfile = {
    name: "Zahra",
    age: 22,
    city: "Karachi",
  };
  localStorage.setItem("profile", JSON.stringify(userProfile));
  //  Remove a single key
  localStorage.removeItem("firstName"); 

  //  Clear all LocalStorage
  // localStorage.clear(); 
  const readData = {
    firstName: localStorage.getItem("firstName"),
    fruits: JSON.parse(localStorage.getItem("fruits")),
    profile: JSON.parse(localStorage.getItem("profile")),
  };
  console.log("Stored Data:", readData);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">LocalStorage</h1>
      <div className="mb-4 p-4 bg-white rounded shadow">
        <h2 className="font-semibold">Simple Key-Value</h2>
        <p>firstName: {readData.firstName || "Name removed from the local storage"}</p>
      </div>
      <div className="mb-4 p-4 bg-white rounded shadow">
        <h2 className="font-semibold">Array</h2>
        <p>Fruits: {readData.fruits.join(", ")}</p>
      </div>
      <div className="mb-4 p-4 bg-white rounded shadow">
        <h2 className="font-semibold">Object</h2>
        <p>Name: {readData.profile.name}</p>
        <p>Age: {readData.profile.age}</p>
        <p>City: {readData.profile.city}</p>
      </div>
    </div>
  );
};

export default App;