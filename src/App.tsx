import "./App.css";
import React from "react";
import Welcome from "./pages/Welcome";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
