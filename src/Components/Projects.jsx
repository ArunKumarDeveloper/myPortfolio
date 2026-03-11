function Projects() {
  return (
   <section id="projects" className="section3">
    <h2>Projects</h2>
   <p>A mix of web development and Linux system administration projects — built, broken, and fixed hands-on.</p>
    <div className="projects-container">
    <div className="project-card">
      <img src="/rhcsaq.png" alt="Project 1" class="project-image" loading="lazy" />
        <h3>RHCSA Linux Server Administration Lab</h3>
          <p>Designed and deployed a full Linux server environment simulating real-world RHCSA enterprise tasks. Configured Apache HTTP Server, managed services with systemctl, applied SELinux contexts, set up firewall rules via firewall-cmd, managed LVM volumes and swap, and automated Apache monitoring using a shell script scheduled with cron — logging to /var/log/web_status.log every 2 minutes.</p>
          <p id="mobile">RHCSA lab: Apache, SELinux, firewalld, LVM, shell scripting, and cron automation on RHEL.</p>
          <div className="project-buttons">
            <a href="https://github.com/ArunKumarDeveloper/RHCSA-Project-2-Production-Web-Server" target="_blank" className="github-link">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="github-icon" />
            </a>
      </div>
      </div>

      <div className="project-card">
        <img src="/project2.png" alt="Project 2" class="project-image" loading="lazy" />
          <h3>Flavor-Find</h3>
        <p>A modern recipe search application built using React and CSS with a fully responsive UI. 
Integrated the Spoonacular API to fetch recipes, ingredients, and step-by-step instructions. 
Implements dynamic search, API data rendering, and clean component structure for a smooth user 
experience.</p>
<p id="mobile">Recipe search app built with React and CSS, featuring a clean, responsive UI. Integrates the Spoonacular API to fetch recipes, ingredients, and instructions with dynamic search.</p>
      <div class="project-buttons">
     <a href="https://flavor-find-phi.vercel.app/" target="_blank" class="site-link">View Site  </a>
     <a href="https://github.com/ArunKumarWebDeveloper/FlavorFind" target="_blank" class="github-link">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" class="github-icon" />
      </a>
      </div>
      </div>

    </div>
  </section>
  );
}

export default Projects;
