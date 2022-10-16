import "./counterActioons.css";

function CounterActions(props) {
  return (
    <>
      <button className="btn" onClick={props.decreaseNum}>
        -
      </button>
      <button className="btn" onClick={props.increaseNum}>
        +
      </button>
    </>
  );
}

export default CounterActions;
