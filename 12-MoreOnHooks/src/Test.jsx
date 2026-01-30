import React, { useReducer } from "react";
const Test = () => {
  // useReducer to toggle the checkbox state
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow-md text-center">
      {/* Checkbox with Tailwind styling */}
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={toggle}
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
        />
        <span className="text-gray-700 font-medium">
          {checked ? "Checked " : "Not checked "}
        </span>
      </label>
    </div>
  );
};
export default Test;
