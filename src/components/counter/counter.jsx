import "./counter.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../redux/store";
import { increamentCount, decreamentCount } from "../../redux/counterSlice";

function Counter() {
  const globalValue = useSelector((state) => state.counter.counter);
  console.log(globalValue);
  const dispatch = useDispatch();

  const increament = () => {
    dispatch(increamentCount());
  };
  const decreament = () => {
    dispatch(decreamentCount());
  };

  return (
    <div className="container">
      <h1> {globalValue}</h1>

      <button className="bt" onClick={decreament}>
        -
      </button>
      <button className="bt" onClick={increament}>
        +
      </button>
    </div>
  );
}
export default Counter;
