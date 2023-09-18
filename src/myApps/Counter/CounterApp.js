import React, { useState } from "react";
import { Title } from "../Components/App-Component";
import "../../style.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header>
        <Title level={1} text="Counter App" />
      </header>
      <h2> The current value is {count}</h2>

      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset Counter
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Counter
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease Counter
      </button>
    </div>
  );
};
export default Counter;
