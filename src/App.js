import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Classes from "./Components/Classes";
import Photo from "./Components/Photo";
import Events from "./Components/Events";
import Contact from "./Components/Contact";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Classes />
              <Photo />
              <Events />
              <Contact />
            </>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
