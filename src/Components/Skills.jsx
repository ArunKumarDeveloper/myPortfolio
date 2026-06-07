import React from 'react';
 
const skillGroups = [
  {
    id: '01',
    label: 'Frontend',
    title: 'Web Development',
    skills: [
      { name: 'HTML5', img: '/HTML (2).png' },
      { name: 'CSS3', img: '/icons8-css-512.png' },
      { name: 'JavaScript', img: '/JavaScript (2).png' },
      { name: 'React', img: '/react.png' },
      { name: 'REST APIs', img: '/api.png' },
    ],
  },
  {
    id: '02',
    label: 'DevOps / Linux',
    title: 'Linux Sysadmin',
    skills: [
      { name: 'SELinux', img: '/redhat.png' },
      { name: 'firewalld', img: '/redhat.png' },
      { name: 'LVM & Swap', img: '/redhat.png' },
      { name: 'Apache HTTPD', img: '/redhat.png' },
      { name: 'Cron Jobs', img: '/redhat.png' },
      { name: 'DNF / RPM', img: '/redhat.png' },
      { name: 'User & Group', img: '/redhat.png' },
      { name: 'TCP/IP', img: '/redhat.png' },
    ],
  },
  {
    id: '03',
    label: 'Tools',
    title: 'Developer Tools',
    skills: [
      { name: 'Git', img: '/git.png' },
      { name: 'GitHub', img: '/git.png' },
      { name: 'VS Code', img: '/git.png' },
      { name: 'Vite', img: '/react.png' },
    ],
  },
];
 
function Skills() {
  return (
    <section id="skills" className="ez-skills">
      {/* Header */}
      <div className="ez-skills__header">
        <div className="ez-skills__header-left">
          <span className="ez-dot-label">
            <span className="ez-dot" />
            Works & Gallery
          </span>
        </div>
        <div className="ez-skills__header-right">
          <h2 className="ez-skills__title">
            A curated collection of skills across web,<br/>
            identity, and systems —{' '}
            <span className="ez-skills__title--muted">built hands-on, proven in practice</span>
          </h2>
        </div>
      </div>
 
      {/* Bento Grid */}
      <div className="ez-skills__bento">
        {skillGroups.map((group) => (
          <div key={group.id} className={`ez-skills__bento-card ez-skills__bento-card--${group.id}`}>
            <div className="ez-skills__bento-card-header">
              <span className="ez-skills__bento-num">{group.id}</span>
              <div>
                <p className="ez-skills__bento-label">{group.label}</p>
                <h3 className="ez-skills__bento-title">{group.title}</h3>
              </div>
            </div>
            <div className="ez-skills__bento-tags">
              {group.skills.map((skill, j) => (
                <div key={j} className="ez-skills__skill-pill">
                  <img src={skill.img} alt={skill.name} className="ez-skills__skill-icon" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
 
        {/* RHCSA badge card */}
        <div className="ez-skills__bento-card ez-skills__bento-card--rhcsa">
          <div className="ez-skills__rhcsa-inner">
            <img src="/redhat.png" alt="RHCSA" className="ez-skills__rhcsa-img" />
            <h3 className="ez-skills__rhcsa-title">RHCSA Certified</h3>
            <p className="ez-skills__rhcsa-sub">Red Hat Certified System Administrator</p>
            <a
              href="https://www.credly.com/badges/e466889c-35b1-4eee-b1b8-881c4c472f70/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="ez-skills__rhcsa-link"
            >
              Verify Badge
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
 
      {/* Bottom CTA */}
      <div className="ez-skills__cta">
        <a href="#projects" className="ez-btn-dark">View Projects</a>
        <a href="#projects" className="ez-btn-red">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
 
export default Skills;