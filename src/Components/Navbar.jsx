import React, { useState, useEffect } from 'react';
import useDarkMode from '../hooks/Darkmode.js'; 
import useMobileMenu from '../hooks/useMobileMenu.js'; 
import DarkModeToast from '../Components/DarkMode.jsx';


function Navbar() {
  const { isMenuOpen, toggleMenu, hamburgerRef, navLinksRef } = useMobileMenu();
  const [DarkMode, setDarkMode] = useDarkMode();
  const [toastMessage, setToastMessage] = useState('');


  const handleToggleDarkMode = () => {
    const newMode = !DarkMode;
    setDarkMode(newMode);
  
  };


  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage('');
      }, 2000); // Message stays for 3 seconds

      return () => clearTimeout(timer);
    }
  }, [toastMessage]); 

  return (

    <nav id="custom-navbar" className={isMenuOpen ? "open" : ""} aria-label="Main Navigation">
      
      <div className="logo-container">
        <a href="#">
          <img src="/logo.png" alt="Arun Kumar R Logo" className="logo" />
        </a>
      </div>

      <ul
        className={`nav-links ${isMenuOpen ? "open" : ""}`}
        id="navLinks"
        ref={navLinksRef}
      >
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#certificates">Certificates</a></li>
      </ul>

      <div className="nav-actions">
        <a href="#contact" className="contact-btn">Contact Me</a>
        
        {/* 8. This button now uses the new handler */}
        <button onClick={handleToggleDarkMode} id="darkMode">
          <img
            className="dark-mode-icon"
            src={DarkMode ? "/moon.png" : "/sun1.png" }
            alt="Toggle Dark Mode"
          />
        </button>

        <div
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          id="hamburgerMenu"
          ref={hamburgerRef}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* 9. Conditionally render the toast when there's a message */}
      {toastMessage && <DarkModeToast message={toastMessage} />}
    </nav>
  );
}

export default Navbar;


