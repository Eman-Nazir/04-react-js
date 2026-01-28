import React from "react";
import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";

const ThemeButton = () => {
    //  here we use the  useContext
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      className={`p-4 rounded text-xl m-5 border-2 border-black-100 cursor-pointer
            
            ${theme === "light" ? "bg-white" : "bg-black"} ${theme === "dark" ? "text-white" : "text-black"} `}
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      Current Theme : {theme}{" "}
    </button>
  );
};

export default ThemeButton;
