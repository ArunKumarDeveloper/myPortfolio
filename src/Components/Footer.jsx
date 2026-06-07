import React, { useState } from 'react';
 
function Footer() {
  const [email, setEmail] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:arunlokesh78@gmail.com?subject=Let's Connect&body=Hi Arun, I found your portfolio and wanted to reach out. My email: ${email}`;
      setEmail('');
    }
  };
 
  return (
    <footer id="contact" className="ez-footer">
      {/* Big name */}
      <div className="ez-footer__big-name" aria-hidden="true">ArunKumar R</div>
 
      {/* Main footer content */}
      <div className="ez-footer__body">
        {/* Left: CTA */}
        <div className="ez-footer__left">
          <span className="ez-dot-label ez-dot-label--light">
            <span className="ez-dot" />
            Let's work together
          </span>
          <h3 className="ez-footer__cta-text">
            Available for full-time roles<br/>and freelance collaborations
          </h3>
          <form className="ez-footer__email-form" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email*"
              className="ez-footer__email-input"
              required
            />
            <button type="submit" className="ez-footer__email-btn" aria-label="Send">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
 
        {/* Center: Quick Links */}
        <div className="ez-footer__col">
          <h4 className="ez-footer__col-title">Quick Links</h4>
          <ul className="ez-footer__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certificates">Certificates</a></li>
          </ul>
        </div>
 
        {/* Right: Contact */}
        <div className="ez-footer__col">
          <h4 className="ez-footer__col-title">arunlokesh78@gmail.com</h4>
          <ul className="ez-footer__links">
            <li><span>Bengaluru, India</span></li>
            <li>
              <a href="https://www.linkedin.com/in/arun-kumar-r-920841235" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/ArunKumarDeveloper" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
 
      {/* Divider */}
      <div className="ez-footer__divider" />
 
      {/* Bottom bar */}
      <div className="ez-footer__bottom">
        <p>© 2025 Arun Kumar R. All rights reserved.</p>
        <div className="ez-footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <span className="ez-footer__bottom-right">
            Images from{' '}
            <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">Freepik</a>
            {' · '}
            <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;