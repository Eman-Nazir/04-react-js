import React, { useEffect, useState } from 'react';
const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  function aChanging() {
    console.log('A value is changing');
  }
  function bChanging() {
    console.log('B value is changing');
  }
  useEffect(() => {
    aChanging();
  }, [a]);
  useEffect(() => {
    bChanging();
  }, [b]);
  return (
    <div className="flex justify-center items-start gap-16 mt-20">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">A Count: {a}</h2>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={() => setA(a + 1)}>
          Change A
        </button>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">B Count: {b}</h2>
        <button
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
          onClick={() => setB(b - 1)}
        >
          Change B
        </button>
      </div>

    </div>
  );
};

export default App;
