import React from "react";
import Navbar from "../components/navbar";
import { useState } from "react";

function Home() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);
  //test change
  function handleLike() {
    setLike(!like);
  }
  function handleClick() {
    setCount(count + 1);
  }

  function handlerDelete(index) {
    const newList = list.filter((item, i) => i !== index);
    setList(newList);
  }

  function handlerAdd() {
    if (input === "") {
      setShowModal(true);
      return;
    }
    setList([...list, input]);
    setInput("");
  }
  return (
    <>
      <div className="flex flex-col items-center justify-start h-full bg-gray-100 py-10">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">To Do List</h1>
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

        {/* Input & Button */}
        <div className="flex w-full max-w-md bg-white rounded-xl shadow-md p-5 gap-2">
          <input
            type="text"
            placeholder="Input List"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handlerAdd}
            className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer font-semibold px-4 py-2 rounded-lg shadow"
          >
            Add
          </button>
        </div>

        {/* List Section */}
        <div className="w-full max-w-md mt-8 bg-white rounded-xl shadow-md p-5">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Your List:
          </h2>
          <div className="flex flex-col gap-3">
            {list.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-50 rounded-lg px-4 py-2 shadow-sm"
              >
                <p className="text-gray-800">{item}</p>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-md cursor-pointer shadow"
                  onClick={() => handlerDelete(index)}
                >
                  Delete
                </button>
              </div>
            ))}
            {list.length === 0 && (
              <p className="text-gray-500 italic text-sm">Belum ada item...</p>
            )}
          </div>
        </div>
      </div>

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

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center">
            <h3 className="text-lg font-semibold text-red-600 mb-2">
              Input Kosong
            </h3>
            <p className="text-gray-700 mb-4">
              Tidak boleh menambahkan item kosong.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
