import React from "react";
import { useReducer } from "react";
import { Button } from "../components/Button";

const initialState = { count: 0, step: 1 };
function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "incStep":
      return { ...state, step: state.step + 1 };
    case "decStep":
      return { ...state, step: state.step - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  function handleInc() {
    dispatch({ type: "inc" });
  }
  function handleDec() {
    dispatch({ type: "dec" });
  }
  function handleStepAdd() {
    dispatch({ type: "incStep" });
  }
  function handleStepMinus() {
    dispatch({ type: "decStep" });
  }

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen py-10 ">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Date Counter</h1>
      <div className="p-5">
        <p className="font-semibold">Step: {step}</p>
        <div className="p-5 flex flex-row gap-5">
          <Button variant="decrement" onClick={handleStepMinus}>
            -
          </Button>
          <span className="text-2xl font-bold">{step}</span>
          <Button variant="increment" onClick={handleStepAdd}>
            +
          </Button>
        </div>
      </div>
      <div className="p-5 flex flex-row gap-5">
        <Button variant="decrement" onClick={handleDec}>
          -
        </Button>
        <span className="text-2xl font-bold">{count}</span>
        <Button variant="increment" onClick={handleInc}>
          +
        </Button>
      </div>
      <Button variant="reset" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </Button>
      <span>
        Hari ini {count} hari dari {date.toDateString()}
      </span>
    </div>
  );
}

export default DateCounter;
