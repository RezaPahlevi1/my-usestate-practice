import React from "react";
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 2,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 3,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 4,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 5,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 6,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(e) {
    setSelectedId(e !== selectedId ? e : null);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {questions.map((q) => (
        <div
          key={q.id}
          className={
            q.id === selectedId
              ? "p-10 bg-red-500 text-white font-semibold rounded-lg shadow-md cursor-pointer"
              : "p-10 h-42 bg-teal-300 cursor-pointer text-black font-semibold rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          }
          onClick={() => handleClick(q.id)}
        >
          {q.id === selectedId ? q.answer : q.question}
        </div>
      ))}
    </div>
  );
}

export default Flashcards;
