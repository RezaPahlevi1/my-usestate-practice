import React from "react";
import { useState, useReducer } from "react";
import { Button } from "../components/Button";

function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleAdd() {
    setCount(count + step);
  }
  function handleMinus() {
    setCount(count - step);
  }
  function handleStepAdd() {
    setStep(step + 1);
  }
  function handleStepMinus() {
    setStep(step - 1);
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
        <Button variant="decrement" onClick={handleMinus}>
          -
        </Button>
        <span className="text-2xl font-bold">{count}</span>
        <Button variant="increment" onClick={handleAdd}>
          +
        </Button>
      </div>
      <Button variant="reset" onClick={() => setCount(0)}>
        Reset
      </Button>
      <span>
        Hari ini {count} hari dari {date.toDateString()}
      </span>
    </div>
  );
}

export default DateCounter;
