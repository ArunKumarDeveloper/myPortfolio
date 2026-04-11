import { motion } from 'framer-motion';

function About() {

  return (
    <section id="about" className="section2">
      
      {/* Top Section: What I Do / About Me Header */}
      <div className="about-header-container">
        <p className="section-pre-title">Who I Am & What I Do</p>
        <h2>RHCSA-certified Linux professional & frontend developer — building reliable systems and clean web experiences from Bangalore.</h2>
      </div>

      {/* Main Content: Adapted to match the three-card layout's energy */}
      <div className="about-container">
        
        {/* Card 1: Adapted from Profile Image */}
        <motion.div className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <img src="/react.png" alt="React Icon" className="service-icon" />
            <h3>Frontend Development</h3>
            <p>Building responsive, accessible UIs using HTML5, CSS3, JavaScript, and React. Focused on clean architecture and real-world usability.</p>
        </motion.div>

        {/* Card 2: Adapted from Main Description/Skills */}
        <motion.div className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <img src="/redhat.png" alt="NodeJS Icon" className="service-icon" />
            <h3>Linux </h3>
          <p>RHCSA-certified with hands-on experience in RHEL — systemd, SELinux, firewalld, LVM, shell scripting, Apache deployment, and cron automation.</p>
        </motion.div>

        {/* Card 3: Adapted from Tools Section */}
        <motion.div className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <img src="/jumbo.png" alt="Git Icon" className="service-icon" />
             <h3>Customer/Technical Support</h3>
          <p>1.8 years at Jumbotail — resolving 100+ daily issues, 91% satisfaction score, end-to-end incident ownership using Freshworks CRM.</p>
        </motion.div>

        <motion.div className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <img src="/git.png" alt="Git Icon" className="service-icon" />
            <h3>Dev Tools & Workflow</h3>
          <p>Git, GitHub, VS Code, Linux CLI, and Freshworks Support Platform for efficient version-controlled development and operations.</p>
        </motion.div>
        
        {/* Original profile image and long P text are removed for the new design's focus */}

      </div>

    </section>
  );
}

export default About;


