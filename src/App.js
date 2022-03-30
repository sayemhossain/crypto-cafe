import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import Coins from "./components/Coins/Coins";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
