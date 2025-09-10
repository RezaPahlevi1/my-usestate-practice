import React from "react";
import { useState } from "react";

function DateCounterV2() {
  const [count, setCount] = useState(null);

  function handleReset() {
    setCount(0);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen py-10 ">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Date Counter V2</h1>
      <form className="mb-5">
        <input
          type="range"
          min="0"
          max="100"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="w-full text-blue-600 accent-blue-600"
        />{" "}
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg"
        />
      </form>
      <span>
        Hari ini {count} hari dari {date.toDateString()}
      </span>

      {count !== 0 && (
        <button
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default DateCounterV2;
