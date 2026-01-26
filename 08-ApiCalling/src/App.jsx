import axios from "axios";
import { useState } from "react";
const App = () => {
  const [dataAxios, setDataAxios] = useState([]);
  const [dataFetch, setDataFetch] = useState([]);
  const getDataAxios = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log("Axios Response (already JSON):", response.data);
      response.data.forEach((item, index) => console.log(`${index + 1}:`, item));
      setDataAxios(response.data);
    } catch (error) {
      console.log("Axios Error:", error);
    }
  };
  const getDataFetch = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      console.log("Fetch Response BEFORE JSON:", response); 
      const result = await response.json(); // convert to JSON
      console.log("Fetch Response AFTER JSON:", result); // now we can use 
      result.forEach((item, index) => console.log(`${index + 1}:`, item));
      setDataFetch(result);
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6">
        <div className="flex gap-4">
          <button
            onClick={getDataAxios}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" >
            Get Data (Axios)
          </button>
          <button
            onClick={getDataFetch}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Get Data (Fetch)
          </button>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Axios Data</h2>
          <div className="space-y-2">
            {dataAxios.map((item) => (
              <div
                key={item.id}
                className="p-3 bg-gray-50 border rounded shadow-sm" >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Fetch Data</h2>
          <div className="space-y-2">
            {dataFetch.map((item) => (
              <div
                key={item.id}
                className="p-3 bg-gray-50 border rounded shadow-sm"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
