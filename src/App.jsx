import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Contact, Home, Register } from "./components/pages";
import videoBG from "../src/assets/videoBG.mp4";

function App() {
  return (
    <div className="App">
      <div className="overlay"></div>
      <video src={videoBG} autoPlay loop className="videobg"></video>
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
