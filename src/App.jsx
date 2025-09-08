import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import ToDoList from "./pages/ToDoList";
import DateCounter from "./pages/DateCounter";
import Flashcards from "./pages/Flashcards";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 ml-64 min-h-screen p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="/datecounter" element={<DateCounter />} />
          <Route path="/flashcards" element={<Flashcards />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
