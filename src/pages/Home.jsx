import React from "react";
import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);
  //test change
  function handleLike() {
    setLike(!like);
  }
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div className="w-full flex flex-col items-center justify-start min-h-scree py-10">
        <button
          className="p-2 bg-green-400 shadow rounded-lg text-white mb-5 cursor-pointer hover:bg-green-500"
          onClick={handleClick}
        >
          Genap / Ganjil
        </button>
        <p className="p-4">
          Jumlah klik {count}. Angka ini adalah:{" "}
          {count % 2 == 0 ? "Genap" : "Ganjil"}
        </p>
        <div className="flex flex-row gap-5 justify-center items-center mt-10">
          <button
            onClick={handleLike}
            className={`${
              like ? "bg-pink-500" : "bg-gray-300"
            } text-white font-semibold px-4 py-2 rounded-lg shadow cursor-pointer hover:bg-pink-600`}
          >
            Like💓
          </button>
          <p>{like ? "Sudah Like" : "Belum Like"}</p>
        </div>
      </div>
    </>
  );
}

export default Home;
