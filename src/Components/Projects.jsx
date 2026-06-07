import React from 'react';
 
const projects = [
  {
    title: 'RHCSA Linux Server Lab',
    category: 'Linux / Sysadmin',
    img: '/rhcsaq.png',
    desc: 'Deployed a full Linux server environment simulating RHCSA enterprise tasks — Apache, systemd, SELinux, firewall-cmd, LVM, and shell script automation with cron logging.',
    github: 'https://github.com/ArunKumarDeveloper/RHCSA-Project-2-Production-Web-Server',
    live: null,
  },
  {
    title: 'Flavor-Find',
    category: 'Web / React',
    img: '/project2.png',
    desc: 'A modern recipe search app built with React. Integrated Spoonacular API for real-time recipe data, dynamic search, and step-by-step instructions.',
    github: 'https://github.com/ArunKumarWebDeveloper/FlavorFind',
    live: 'https://flavor-find-eosin.vercel.app/',
  },
];
 
function Projects() {
  return (
    <section id="projects" className="ez-projects">
      {/* Header */}
      <div className="ez-projects__header">
        <div className="ez-projects__header-left">
          <span className="ez-dot-label">
            <span className="ez-dot" />
            Selected Projects
          </span>
        </div>
        <div className="ez-projects__header-right">
          <h2 className="ez-projects__title">
            Every project is a dialogue between<br/>
            <span className="ez-projects__title--muted">code and purpose, turning vision<br/>into meaningful digital experiences</span>
          </h2>
        </div>
      </div>
 
      {/* CTA row */}
      <div className="ez-projects__cta-row">
        <a href="https://github.com/ArunKumarDeveloper" target="_blank" rel="noopener noreferrer" className="ez-btn-dark">
          View All Projects
        </a>
        <a href="https://github.com/ArunKumarDeveloper" target="_blank" rel="noopener noreferrer" className="ez-btn-red">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
 
      {/* 2x2 Grid */}
      <div className="ez-projects__grid">
        {projects.map((p, i) => (
          <div key={i} className="ez-project-card">
            <div className="ez-project-card__img-wrap">
              <img src={p.img} alt={p.title} className="ez-project-card__img" loading="lazy" />
            </div>
            <div className="ez-project-card__footer">
              <div className="ez-project-card__meta">
                <h3 className="ez-project-card__title">{p.title}</h3>
                <p className="ez-project-card__desc">{p.desc}</p>
              </div>
              <div className="ez-project-card__links">
                <span className="ez-project-card__category">{p.category}</span>
                <div className="ez-project-card__actions">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="ez-project-card__arrow" aria-label="Live site">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="ez-project-card__arrow ez-project-card__arrow--gh" aria-label="GitHub">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
 
export default Projects;