import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Contact, Home, Register } from "./components/pages";
import gifBG from "../src/assets/gifBG.gif";

function App() {
  return (
    <div className="App impostograph">
      <div className="overlay"></div>
      <img src={gifBG} autoPlay loop className="gifbg"></img>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
