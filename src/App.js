import React from "react";
import Hero from "./Components/Hero";
import Events from "./Components/Events";
import Classes from "./Components/Classes";
import Photo from "./Components/Photo"; // Photos from src/Assets
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="bg-black text-white py-4 text-center text-3xl font-bold">
        Dance Studio
      </header>

      {/* Sections */}
      <main>
        <section id="hero"><Hero /></section>
        <section id="events"><Events /></section>
        <section id="classes"><Classes /></section>
        <section id="photo"><Photo /></section>
        <section id="contact"><Contact /></section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 mt-8">
        © 2025 Dance Studio. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
