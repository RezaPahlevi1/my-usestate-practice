import React from "react";
import { useState } from "react";

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
        <button
          className="bg-red-400 p-2 rounded-lg text-white mr-5 cursor-pointer"
          onClick={handleStepMinus}
        >
          Kurang
        </button>
        <span className="text-2xl font-bold">{step}</span>
        <button
          className="bg-green-400 p-2 rounded-lg text-white ml-5 cursor-pointer"
          onClick={handleStepAdd}
        >
          Tambah
        </button>
      </div>
      <div className="p-5">
        <button
          className="bg-red-400 p-2 rounded-lg text-white mr-5 cursor-pointer"
          onClick={handleMinus}
        >
          Kurang
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          className="bg-green-400 p-2 rounded-lg text-white ml-5 cursor-pointer"
          onClick={handleAdd}
        >
          Tambah
        </button>
      </div>
      <button
        className="bg-blue-400 p-2 rounded-lg text-white cursor-pointer"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
      <span>
        Hari ini {count} hari dari {date.toDateString()}
      </span>
    </div>
  );
}

export default DateCounter;
