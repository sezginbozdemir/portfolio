import React from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";

function Welcome() {
  return (
    <div id="about" className="welcome-page">
      <Navbar />
      <About />
    </div>
  );
}

export default Welcome;
