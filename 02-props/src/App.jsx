import React from "react";
import Card from "./components/Card.jsx";
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'

const App = () => {
  return (
    <div className="min-h-screen bg-black flex gap-6 flex-wrap justify-center items-start p-10">
      <Card user='Yashfa'  age={18} image={image1}/>
      <Card user='Hina'  age={21} image={image2}/>
      <Card user='Ayesha'  age={19} image={image3}/>
      
    </div>
  );
};

export default App;
