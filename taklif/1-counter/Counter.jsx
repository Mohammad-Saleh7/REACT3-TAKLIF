import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }

  function decrease() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <div>
      <h1 className="d-flex justify-content-center mt-4">{counter}</h1>
      <div className="d-flex justify-content-center mt-3 gap-2">
        <button onClick={increase}>INCREASE</button>
        <button onClick={decrease}>DECREASE</button>
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
}
