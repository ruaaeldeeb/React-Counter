import { useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import "./components/counterActioons";
import CounterActions from "./components/counterActioons";

function App() {
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
    <div className="app">
      <div className="container">
        <Counter num={number}></Counter>
        <CounterActions
          decreaseNum={decreaseNum}
          increaseNum={increaseNum}
        ></CounterActions>
      </div>
    </div>
  );
}

export default App;
