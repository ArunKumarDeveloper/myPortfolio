import React from 'react';
// Make sure to import your CSS file here if needed

function Resume() {
  return (
    <section id="resume" className="section5">
      <h2>Resume</h2>
      
      <div className="resume-container">
        
        {/* Left Side / Top Card on Mobile */}
        <div className="resume-card">
          <img src="/resume (2).png" alt="Resume Preview" id="resume-image" />
          <div className="resume-content">
            <p>Hire Me.</p>
            <div className="resume-actions">
              <a href="/Arun Kumar R - Resume.pdf" download className="resume-btn">
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Side / Bottom Card on Mobile */}
        <div className="resume-overview">
          <h3>Overview</h3>
          
           <div className="overview-item">
            <span className="overview-label">Experience</span>
            <p className="overview-text">1.8 years of technical support at Jumbotail — 100+ daily issues resolved across chat and voice, 91% customer satisfaction score, full end-to-end incident ownership.</p>
          </div>

          <div className="overview-item">
            <span className="overview-label">Linux & Sysadmin</span>
            <p className="overview-text">RHCSA-certified. Hands-on with RHEL, Apache, systemd, SELinux, firewalld, LVM, cron automation, and User and Storage Management.</p>
          </div>

          <div className="overview-item">
            <span className="overview-label">Web Stack</span>
            <p className="overview-text">HTML5, CSS3,JavaScript, React, Node.js, REST APIs, Git & GitHub. Built 2+ projects including a portfolio , recipe finder, Todo App.</p>
          </div>

          <div className="overview-item">
            <span className="overview-label">Currently</span>
            <p className="overview-text">Pursuing BCA at Jain University (Online). Seeking IT Helpdesk, Junior Linux/Sysadmin, or Junior Web Developer roles in Bangalore.</p>
          </div>

          <div className="overview-item">
            <span className="overview-label">Soft Skills</span>
            <p className="overview-text">Technical troubleshooting, clear communication, incident management, fast learner, self-driven growth mindset.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Resume;
