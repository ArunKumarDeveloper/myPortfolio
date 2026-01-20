import { motion } from 'framer-motion';

function About() {

  return (
    <section id="about" className="section2">
      
      {/* Top Section: What I Do / About Me Header */}
      <div className="about-header-container">
        <p className="section-pre-title">What I Do as a Developer</p>
        <h2>I enjoy creating delightful, responsive web experiences.</h2>
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
            <p>Building responsive and accessible user interfaces using modern React frameworks.</p>
        </motion.div>

        {/* Card 2: Adapted from Main Description/Skills */}
        <motion.div className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <img src="/node.js (2).png" alt="NodeJS Icon" className="service-icon" />
            <h3>Backend/API Integration</h3>
            <p>Designing and connecting robust REST APIs and databases (Node.js/Express/PostgreSQL).</p>
        </motion.div>

        {/* Card 3: Adapted from Tools Section */}
        <motion.div className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <img src="/git.png" alt="Git Icon" className="service-icon" />
            <h3>Code Workflow & Tools</h3>
            <p>Leveraging Git, VS Code, and Postman for efficient, version-controlled development.</p>
        </motion.div>
        
        {/* Original profile image and long P text are removed for the new design's focus */}

      </div>

    </section>
  );
}

export default About;


