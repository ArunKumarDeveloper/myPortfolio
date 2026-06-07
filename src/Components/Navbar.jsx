
import React, { useState, useEffect } from 'react';
import useDarkMode from '../hooks/Darkmode.js';
import useMobileMenu from '../hooks/useMobileMenu.js';

function Navbar() {
  const {
  isMenuOpen,
  toggleMenu,
  closeMenu,
  hamburgerRef,
  navLinksRef
} = useMobileMenu();
  const [DarkMode, setDarkMode] = useDarkMode();
  const [scrolled, setScrolled] = useState(false);

  const handleToggleDarkMode = () => setDarkMode(!DarkMode);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`ez-nav ${scrolled ? 'ez-nav--scrolled' : ''} ${isMenuOpen ? 'ez-nav--open' : ''}`}>
        {/* Logo */}
        <div className="ez-nav__logo">
          <a href="#home">
            <span className="ez-nav__logo-text"><img src="./logo.png"></img></span>
          </a>
        </div>

        {/* Center Links */}
        <ul className={`ez-nav__links ${isMenuOpen ? 'ez-nav__links--open' : ''}`} ref={navLinksRef}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
<li><a href="#about" onClick={closeMenu}>About</a></li>
<li><a href="#projects" onClick={closeMenu}>Projects</a></li>
<li><a href="#skills" onClick={closeMenu}>Skills</a></li>
<li><a href="#resume" onClick={closeMenu}>Resume</a></li>
<li><a href="#certificates" onClick={closeMenu}>Certificates</a></li>
        </ul>

       <div className="ez-nav__actions">

  {/* Contact Buttons - Hidden on Mobile */}
  <a href="#contact" className="ez-nav__contact-btn">
    Contact Us
  </a>

  <a
    href="#contact"
    className="ez-nav__arrow-btn"
    aria-label="Contact"
  >
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 13L13 3M13 3H5M13 3V11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>

  {/* Dark Mode */}
  <button
    onClick={handleToggleDarkMode}
    className="ez-nav__theme-btn"
    aria-label="Toggle Theme"
  >
    {DarkMode ? (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
      </svg>
    ) : (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z" />
      </svg>
    )}
  </button>

  {/* Hamburger */}
  <button
    className={`ez-nav__hamburger ${
      isMenuOpen ? "ez-nav__hamburger--open" : ""
    }`}
    ref={hamburgerRef}
    onClick={toggleMenu}
    aria-label="Menu"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

</div>
      </nav>

      {/* Mobile overlay */}
      {isMenuOpen && <div className="ez-nav__overlay" onClick={toggleMenu} />}
    </>
  );
}

export default Navbar;