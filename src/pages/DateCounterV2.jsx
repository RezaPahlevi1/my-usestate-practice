import React, { useReducer } from "react";
import { Button } from "../components/Button";

function reducer(state, action) {
  if (action.type === "inc") return state + 1;
  if (action.type === "dec") return state - 1;
  if (action.type === "reset") return 0;
  if (action.type === "setCount") return action.payload;
  return state;
}

function DateCounterV2() {
  const [count, dispatch] = useReducer(reducer, 0);

  function handleInc() {
    dispatch({ type: "inc" });
  }

  function handleDec() {
    dispatch({ type: "dec" });
  }

  function handleReset() {
    dispatch({ type: "reset" });
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen py-10 ">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Date Counter V2</h1>
      <form className="mb-5" onSubmit={(e) => e.preventDefault()}>
        <input
          type="range"
          min="0"
          max="100"
          value={count}
          onChange={(e) =>
            dispatch({ type: "setCount", payload: Number(e.target.value) })
          }
          className="w-full text-blue-600 accent-blue-600"
        />{" "}
        <div className="flex flex-row gap-2">
          <Button onClick={handleDec} variant="decrement">
            -
          </Button>
          <input
            type="number"
            value={count === 0 ? "" : count}
            onChange={(e) => {
              const val = e.target.value;
              dispatch({
                type: "setCount",
                payload: val === "" ? 0 : Number(val),
              });
            }}
            className="border border-gray-300 p-2 rounded-lg"
          />
          <Button onClick={handleInc} variant="increment">
            +
          </Button>
        </div>
      </form>
      <span>
        Hari ini {count} hari dari {date.toDateString()}
      </span>

      {count !== 0 && (
        // <button
        //   className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg cursor-pointer"
        //   onClick={handleReset}
        // >
        //   Reset
        // </button>
        <Button onClick={handleReset} variant="reset">
          Reset
        </Button>
      )}
    </div>
  );
}

export default DateCounterV2;
