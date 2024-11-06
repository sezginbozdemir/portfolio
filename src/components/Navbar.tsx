import React, { useState } from "react";
import sez from "../assets/sez.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo-container">
          <img src={sez} alt="Logo" className="logo" />
        </div>

        <div className="links">
          <a className="link" href="#about">
            ABOUT
          </a>
          <a className="link" href="#skills">
            SKILLS
          </a>
          <a className="link" href="#contact">
            CONTACT
          </a>
        </div>

        <div className="socials">
          <a
            className="social"
            href="https://github.com/sezginbozdemir"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            className="social"
            href="https://linkedin.com/in/sezginbozdemir"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            className="social"
            href="mailto:bozdemirsezgin1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <MdOutlineAlternateEmail />
          </a>
        </div>

        <div className="burger-icon" onClick={toggleSidebar}>
          <GiHamburgerMenu />
        </div>
      </div>

      {isSidebarOpen && (
        <div className="sidebar">
          <a className="close-button" onClick={toggleSidebar}>
            X
          </a>
          <div className="sidebar-links">
            <a href="#about" onClick={toggleSidebar}>
              ABOUT
            </a>
            <a href="#skills" onClick={toggleSidebar}>
              SKILLS
            </a>
            <a href="#contact" onClick={toggleSidebar}>
              CONTACT
            </a>
          </div>
          <div className="sidebar-socials">
            <a
              href="https://github.com/sezginbozdemir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/sezginbozdemir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:bozdemirsezgin1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <MdOutlineAlternateEmail />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
