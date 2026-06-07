import React from 'react';

function Resume() {
  return (
    <section id="resume" className="ez-resume">
      {/* Header */}
      <div className="ez-resume__header">
        <span className="ez-dot-label">
          <span className="ez-dot" />
          Resume & Overview
        </span>
        <h2 className="ez-resume__title">
          Experience Recognized<br/>
          <span className="ez-resume__title--muted">Beyond the Certificate</span>
        </h2>
        <p className="ez-resume__subtitle">
          A journey of growth shaped by hands-on development, technical learning, and curiosity.
        </p>
      </div>

      {/* Bento awards-style grid */}
      <div className="ez-resume__bento">

        {/* Main left card */}
        <div className="ez-resume__bento-card ez-resume__bento-card--main">
          <div className="ez-resume__award-icon">🏆</div>
          <a
            href="/ArunKumarR_Resume.pdf"
            download
            className="ez-resume__expand-link"
            aria-label="Download resume"
          >↗</a>
          <h3 className="ez-resume__award-title">RHCSA Certified 2024</h3>
          <p className="ez-resume__award-desc">
            Certified by Red Hat — the globally recognized standard for Linux system administration excellence. Earned through hands-on lab exams covering storage, security, and network management.
          </p>
          <div className="ez-resume__award-badges">
            <span className="ez-resume__badge">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="4 8 7 11 12 5"/>
              </svg>
              1.8 yrs experience
            </span>
            <span className="ez-resume__badge">
              ⚡ Open to opportunities
            </span>
          </div>

          {/* Mini overview items — plain background only, no bars */}
          <div className="ez-resume__overview-items">
            <div className="ez-resume__ov-item">
              <strong>Technical Support</strong>
              <p>1.8 yrs · Jumbotail · 91% CSAT · 100+ daily issues resolved</p>
            </div>
            <div className="ez-resume__ov-item">
              <strong>Linux & Sysadmin</strong>
              <p>RHCSA · Apache · SELinux · LVM · Cron Automation</p>
            </div>
          </div>
        </div>

        {/* Web Stack card */}
        <div className="ez-resume__bento-card ez-resume__bento-card--sm">
          <h3 className="ez-resume__sm-title">Web Stack</h3>
          <p className="ez-resume__sm-desc">
            HTML5, CSS3, JavaScript, React, Vite, REST APIs, Git & GitHub. Built 3+ live projects including a recipe finder, portfolio, and Linux lab.
          </p>
          <a href="#projects" className="ez-resume__sm-link">
            View Projects
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Soft Skills card — plain, no green bar */}
        <div className="ez-resume__bento-card ez-resume__bento-card--sm2">
          <h3 className="ez-resume__sm-title">Soft Skills</h3>
          <p className="ez-resume__sm-desc">
            Technical troubleshooting, clear communication, incident management, fast learner, self-driven growth mindset.
          </p>
        </div>

        {/* Dark CTA card */}
        <div className="ez-resume__bento-card ez-resume__bento-card--img">
          <div className="ez-resume__img-overlay">
            <p className="ez-resume__img-quote">
              A technical mindset acknowledged through real-world experience — trusted to solve problems and build reliable systems
            </p>
          </div>
          <div className="ez-resume__download-wrap">
            <a
              href="/ArunKumarR_Resume.pdf"
              download
              className="ez-btn-dark"
            >
              Download Resume
            </a>
            <a
              href="/ArunKumarR_Resume.pdf"
              download
              className="ez-btn-red"
              aria-label="Download"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v9M4 8l4 4 4-4M3 14h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Resume;