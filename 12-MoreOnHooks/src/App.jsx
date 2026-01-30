import React from "react";
import Test from "./Test";
import Counter from "./Counter";
import Form from "./Form";
import WithoutUseMemo from "./WithoutUseMemo";
import WithUseMemo from "./WithUseMemo";
import Parent from "./Parent.jsx";
import CallBackCounter from "./CallBackCounter.jsx";
import CallBackParent from "./CallBackParent.jsx";
const App = () => {
  return (
    <div>
      {/* useReducer */}
      <h1 className="text-center">Use Reducer</h1>
      <div className="text-center">
        <Test />
        <Counter />
        <Form />
      </div>
      <h1 className="text-center">Use Memo</h1>
      {/* useMemo */}
      <div className="text-center">
        <h6>Without UseMemo </h6>
        <WithoutUseMemo />
        <h6>With UseMemo </h6>
        <WithUseMemo />
        <Parent />
      </div>
      {/* useCallback */}

      <h1 className="text-center">Use CallBack </h1>
      <div className="text-center">
        <CallBackCounter />
        <CallBackParent />
      </div>
    </div>
  );
};
export default App;
