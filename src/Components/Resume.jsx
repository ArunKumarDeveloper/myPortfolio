import React from 'react';
// Make sure to import your CSS file here if needed

function Resume() {
  return (
    <section id="resume" className="section5">
      <h2>Resume</h2>
      
      <div className="resume-container">
        
        {/* Left Side / Top Card on Mobile */}
        <div className="resume-card">
          <img src="/resume (2).jpg" alt="Resume Preview" id="resume-image" />
          <div className="resume-content">
            <p>Hire Me.</p>
            <div className="resume-actions">
              <a href="/White and Black Simple Resume.pdf" download className="resume-btn">
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Side / Bottom Card on Mobile */}
        <div className="resume-overview">
          <h3>Overview</h3>
          
          <div className="overview-item">
            <span className="overview-label">Projects</span>
            <p className="overview-text">
              Built 5+ responsive apps including a Personal Portfolio, Task Manager, and a Blog with PostgreSQL backend. Focus on clean UI/UX.
            </p>
          </div>

          <div className="overview-item">
            <span className="overview-label">Tech Stack</span>
            <p className="overview-text">
              JavaScript (ES6+), React.js, HTML5, CSS3, PostgreSQL, REST APIs, Git & Responsive Design.
            </p>
          </div>

          <div className="overview-item">
            <span className="overview-label">Soft Skills</span>
            <p className="overview-text">
              Fast learner, deadline-oriented problem solver, and effective team player.
            </p>
          </div>

          <div className="overview-item">
            <span className="overview-label">Freelance</span>
            <p className="overview-text">
              Open for Freelancing. Building responsive websites and web apps using the React ecosystem.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Resume;
