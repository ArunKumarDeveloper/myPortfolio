import BlurText from "./BlurText";
 
function Home() {
  const handleAnimationComplete = () => {
    console.log('Text animation completed!');
  };
 
  return (
    <section id="home">
 
      {/* Social Handles */}
      <div className="handle">
        <a href="https://github.com/ArunKumarDeveloper" target="_blank" aria-label="GitHub">
          <img src="handle (1).png" />
        </a>
        <a href="https://www.linkedin.com/in/arun-kumar-r-920841235" target="_blank" aria-label="LinkedIn">
          <img src="handle (2).png" />
        </a>
      </div>
 
      {/* Left content */}
      <div className="home-overlay">
        <BlurText
          className="home-subtitle"
          text="Hey, I'm Arun Kumar R"
          delay={80}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
        />
 
        <BlurText
          className="text-p"
          text="Turning ideas into clean & modern code, RHCSA-certified Linux professional and front-end developer skilled in JavaScript, HTML, CSS, and Red Hat Enterprise Linux. Passionate about building responsive web applications, solving technical problems, and creating reliable digital experiences."
          delay={80}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
        />
 
        <div className="hero-cta-group">
          <button className="btn-primary"><a href="#projects">View Work</a></button>
          
        </div>
      </div>
 
      {/* Glass Profile Card - Right Side */}
      <div className="glass-card-wrap">
        <div className="glass-card">
 
          {/* Avatar */}
          <div className="glass-avatar">
            {/* Replace src with your actual photo path e.g. src="arun.jpg" */}
            <img src="arun (1).png" alt="Arun Kumar R" className="glass-avatar-img" />
          </div>
 
          {/* Name & Role */}
          <p className="glass-role">Linux Sysadmin · Frontend Dev</p>
 
          {/* Divider */}
          <div className="glass-divider" />
 
          {/* Stats row */}
          <div className="glass-stats">
            <div className="glass-stat">
              <span className="glass-stat-num">1.8<span className="glass-stat-unit">yr</span></span>
              <span className="glass-stat-label">Experience</span>
            </div>
            <div className="glass-stat-sep" />
            <div className="glass-stat">
              <span className="glass-stat-num">RHCSA</span>
              <span className="glass-stat-label">Certified</span>
            </div>
            <div className="glass-stat-sep" />
            <div className="glass-stat">
              <span className="glass-stat-num">5+</span>
              <span className="glass-stat-label">Projects</span>
            </div>
          </div>
 
          {/* Divider */}
          <div className="glass-divider" />
 
          {/* Skill badges */}
          <div className="glass-badges">
            <span className="glass-badge">RHCSA</span>
            <span className="glass-badge">HTML</span>
            <span className="glass-badge">CSS</span>
            <span className="glass-badge">JAVASCRIPT</span>
            <span className="glass-badge">LINUX</span>
          </div>
 
          {/* Status pill */}
          <div className="glass-status">
            <span className="glass-status-dot" />
            Available for opportunities
          </div>
 
        </div>
      </div>
 
      {/* Scroll hint */}
      <div className="scroll-hint">Scroll</div>
 
    </section>
  );
}
 
export default Home;