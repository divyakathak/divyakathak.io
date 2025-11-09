import React from "react";
import Hero from "./Components/Hero";
import Events from "./Components/Events";
import Classes from "./Components/Classes";
import Photo from "./Components/Photo"; // Photos from src/Assets
import Contact from "./Components/Contact";
<<<<<<< HEAD

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="bg-black text-white py-4 text-center text-3xl font-bold">
        Dance Studio
      </header>

      {/* Sections */}
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="events">
          <Events />
        </section>

        <section id="classes">
          <Classes />
        </section>

        <section id="photo">
          <Photo />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 mt-8">
        © 2025 Dance Studio. All rights reserved.
      </footer>
    </div>
=======
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

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
              <Gallery />
              <Events />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
>>>>>>> f72057bcccbfe95be52e9ce98c0630a111824742
  );
}

export default App;
