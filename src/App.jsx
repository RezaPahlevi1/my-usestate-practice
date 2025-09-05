import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/navbar";
import ToDoList from "./pages/ToDoList";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col min-h-screen pt-16">
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todolist" element={<ToDoList />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
