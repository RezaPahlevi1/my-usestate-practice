import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col min-h-screen bg-gray-900 pt-16">
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
