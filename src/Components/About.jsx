import React from 'react';
 
const services = [
  {
    number: '01',
    title: 'Frontend Development',
    desc: 'Building responsive, accessible interfaces using HTML5, CSS3, JavaScript, and React. Focused on clean architecture, performance, and real-world usability.',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive', 'REST APIs'],
    img: '/react.png',
  },
  {
    number: '02',
    title: 'Linux & Sysadmin',
    desc: 'RHCSA-certified with hands-on RHEL experience — systemd, SELinux, firewalld, LVM, shell scripting, Apache deployment, and cron automation.',
    tags: ['RHCSA', 'SELinux', 'firewalld', 'LVM', 'Apache', 'Cron Jobs'],
    img: '/redhat.png',
  },
  {
    number: '03',
    title: 'Technical Support',
    desc: '1.8 years at Jumbotail — resolving 100+ daily issues, 91% satisfaction score, end-to-end incident ownership using Freshworks CRM.',
    tags: ['Troubleshooting', 'Freshworks CRM', 'Incident Mgmt', 'Communication'],
    img: '/jumbo.png',
  },
  {
    number: '04',
    title: 'Dev Tools & Workflow',
    desc: 'Git, GitHub, VS Code, Linux CLI, and Vite-powered React projects — efficient version-controlled development and operations workflow.',
    tags: ['Git', 'GitHub', 'VS Code', 'Vite', 'Linux CLI'],
    img: '/git.png',
  },
];
 
function About() {
  return (
    <section id="about" className="ez-services">
      {/* Header */}
      <div className="ez-services__header">
        <div className="ez-services__header-left">
          <span className="ez-dot-label">
            <span className="ez-dot" />
            About Me
          </span>
          <h2 className="ez-services__title">
            Minimalist, functional, and reliable<br/>
            <span className="ez-services__title--muted">Growing as a developer through code, projects, and curiosity.</span>
          </h2>
        </div>
        <a href="#resume" className="ez-services__explore-btn">
          Hire Me
          <span className="ez-btn-arrow">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </a>
      </div>
 
      {/* Services list */}
      <div className="ez-services__list">
        {services.map((svc, i) => (
          <div key={i} className="ez-services__item">
            <div className="ez-services__item-inner">
              <span className="ez-services__num">{svc.number}</span>
 
              <div className="ez-services__name-col">
                <h3 className="ez-services__name">{svc.title}</h3>
              </div>
 
              <div className="ez-services__desc-col">
                <p className="ez-services__desc">{svc.desc}</p>
                <div className="ez-services__tags">
                  {svc.tags.map((t, j) => (
                    <span key={j} className="ez-services__tag">{t}</span>
                  ))}
                </div>
              </div>
 
              <div className="ez-services__img-col">
                <img src={svc.img} alt={svc.title} className="ez-services__img" />
              </div>
            </div>
            {i < services.length - 1 && <div className="ez-services__divider" />}
          </div>
        ))}
      </div>
    </section>
  );
}
 
export default About;