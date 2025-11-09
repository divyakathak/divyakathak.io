import React from "react";
import Hero from "./Components/Hero";
import Classes from "./Components/Classes";
import Gallery from "./Components/Gallery";
import Events from "./Components/Events";
import Contact from "./Components/Contact";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
    <div>
      <Hero />
      <Classes />
      <Gallery />
      <Events />
      <Contact />
      
    </div>
  );
}

export default App;
