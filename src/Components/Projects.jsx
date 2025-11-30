function Projects() {
  return (
   <section id="projects" className="section3">
    <h2>Projects</h2>
    <p>Here is a portfolio of my work, illustrating my expertise and creativity.</p>
    <div className="projects-container">
    <div className="project-card">
      <img src="/resume.png" alt="Project 1" class="project-image" loading="lazy" />
       <h3>AI-Resume-Analyzer</h3>
       <p>An AI-powered resume analysis tool built with React, TypeScript, React Router v7, and Tailwind CSS. 
The app uses Puter.js for generating ATS insights, scoring resumes, and providing recommendations. 
Features template-based for AI,Puter.js , clean UI components, and smooth navigation for checking ATS 
compatibility in real-time.</p>
<p id="mobile">AI resume analyzer using React, TypeScript, Tailwind, and Puter.js to score resumes and generate ATS insights. Features template-based analysis and a clean, responsive UI.</p>
     <div class="project-buttons">
     <a href="#" target="_blank" class="site-link">View Site</a>
     <a href="https://github.com/ArunKumarWebDeveloper/AI-Resume-Analayser" target="_blank" class="github-link">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" class="github-icon" />
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
     <a href="#" target="_blank" class="site-link">View Site  </a>
     <a href="https://github.com/ArunKumarWebDeveloper/FlavorFind" target="_blank" class="github-link">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" class="github-icon" />
      </a>
      </div>
      </div>

      <div className="project-card">
        <img src="/landing.png" alt="Project 4" class="project-image" loading="lazy" />
        <h3>Digital-Library</h3>
        <p>A full-stack PERN (PostgreSQL, Express, React, Node.js) web application for browsing and Reading books. 
Uses Google Books API for fetching book data and features secure authentication using bcrypt hashing. 
Designed with a clean, modern UI and responsive layout while handling API requests, user login, and 
database operations.</p>
<p id="mobile">Recipe search app built with React and CSS, featuring a clean, responsive UI. Integrates the Spoonacular API to fetch recipes, ingredients, and instructions with dynamic search.</p>
       <div class="project-buttons">
      <a href="#" target="_blank" class="site-link">View Site</a>
      <a href="https://github.com/ArunKumarWebDeveloper/Book-Library" target="_blank" class="github-link">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" class="github-icon" />
    </a>
    </div>
     </div>
    </div>
  </section>
  );
}

export default Projects;
