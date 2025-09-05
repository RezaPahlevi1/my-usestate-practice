import React from "react";
import { useState } from "react";

function ToDoList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
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
      <div className="w-full flex flex-col items-center justify-start min-h-scree py-10">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">To Do List</h1>
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

export default ToDoList;
