import React from "react";
// import image from "../assets/image.png";

const Card = (props) => {
    console.log(props);
    console.log(props.user,props.age);
    console.log(props.user);
    console.log(props.age);
    
  return (
    <div className="bg-[#454545] w-[300px] border-2 border-white p-[20px] text-center rounded-2xl text-white">
      <img
        // src={image}
        src={props.image}
        alt="Profile Picture"
        className="h-[200px] w-[200px] mx-auto rounded-full object-cover"
      />

      <h1 className="text-2xl mt-4">I am {props.user} and I am {props.age} year old </h1>
      <h1 className="text-2xl mt-4"> {props.user},{props.age}  </h1>

      <p className="my-[20px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic
        quod corporis earum amet architecto.
      </p>

      <button className="py-[10px] px-[20px] bg-black rounded-[5px]">
        View Profile
      </button>
    </div>
  );
};

export default Card;
