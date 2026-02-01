import React from "react";

const withStyle = (WrapComponent) => {
  return function NewComponent(props) {
    return (
    <div className="border-red-400 border-2 p-5">
      <WrapComponent {...props} />
    </div>
  )};
};

export default withStyle;
