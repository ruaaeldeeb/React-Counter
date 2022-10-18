import "./counter.css";
import { useState } from "react";

function Counter() {
  let [number, setNum] = useState(0);
  const decreaseNum = () => {
    if (number > 0) {
      setNum(--number);
    }
  };
  const increaseNum = () => {
    setNum(++number);
  };
  return (
    <>
      <h1> {number}</h1>

      <button className="btn" onClick={decreaseNum}>
        -
      </button>
      <button className="btn" onClick={increaseNum}>
        +
      </button>
    </>
  );
}
export default Counter;
