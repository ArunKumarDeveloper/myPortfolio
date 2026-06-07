import React from 'react';
 
const certs = [
  {
    id: '01',
    label: 'Linux Certification',
    title: 'RHCSA',
    subtitle: 'Red Hat Certified System Administrator',
    img: '/rhcsa.png',
    link: 'https://www.credly.com/badges/e466889c-35b1-4eee-b1b8-881c4c472f70/public_url',
    featured: true,
  },
  {
    id: '02',
    label: 'Web Development',
    title: 'Full Stack Bootcamp',
    subtitle: 'Angela Yu · Udemy',
    img: '/Screenshot 2025-07-23 170248.png',
    link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-bdfb3cc2-4926-4098-879e-3a139dbcd9a5.pdf',
    featured: false,
  },
  {
    id: '03',
    label: 'Meta · Coursera',
    title: 'Frontend Development',
    subtitle: 'Introduction to Frontend — Meta',
    img: '/front.png',
    link: 'https://coursera.org/share/d6872cd5b154af1edbdf13ea72f513a3',
    featured: false,
  },
];
 
function Certificates() {
  return (
    <section id="certificates" className="ez-certs">
      {/* Header */}
      <div className="ez-certs__header">
        <div className="ez-certs__header-left">
          <span className="ez-dot-label">
            <span className="ez-dot" />
            Certifications
          </span>
        </div>
        <div className="ez-certs__header-right">
          <h2 className="ez-certs__title">
            A curated collection of credentials across<br/>
            web, Linux, and identity —{' '}
            <span className="ez-certs__title--muted">verified, purposeful</span>
          </h2>
        </div>
      </div>
 
      {/* Grid layout matching image 5 */}
      <div className="ez-certs__grid">
        {/* Featured center card */}
        <div className="ez-certs__featured">
          <div className="ez-certs__featured-header">
            <span className="ez-skills__bento-num">01</span>
            <div>
              <p className="ez-skills__bento-label">Linux Certification</p>
              <h3 className="ez-certs__card-title">RHCSA</h3>
            </div>
            <a href={certs[0].link} target="_blank" rel="noopener noreferrer" className="ez-certs__arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <img src={certs[0].img} alt="RHCSA" className="ez-certs__featured-img" loading="lazy" />
          <p className="ez-certs__featured-sub">Red Hat Certified System Administrator</p>
        </div>
 
        {/* Side cards column */}
        <div className="ez-certs__side">
          {certs.slice(1).map((cert) => (
            <div key={cert.id} className="ez-certs__side-card">
              <div className="ez-certs__side-card-header">
                <span className="ez-skills__bento-num">{cert.id}</span>
                <div>
                  <p className="ez-skills__bento-label">{cert.label}</p>
                  <h3 className="ez-certs__card-title">{cert.title}</h3>
                </div>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="ez-certs__arrow">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <img src={cert.img} alt={cert.title} className="ez-certs__side-img" loading="lazy" />
              <p className="ez-certs__side-sub">{cert.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default Certificates;