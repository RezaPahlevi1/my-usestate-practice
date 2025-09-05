import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/navbar";
import ToDoList from "./pages/ToDoList";
import DateCounter from "./pages/DateCounter";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col min-h-screen pt-16">
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todolist" element={<ToDoList />} />
            <Route path="/datecounter" element={<DateCounter />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
