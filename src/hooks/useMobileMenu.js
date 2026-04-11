import { useState, useEffect, useRef } from 'react';
window.addEventListener('scroll', () => {
  document.getElementById('custom-navbar')
    .classList.toggle('scrolled', window.scrollY > 60);
});
           
const obs = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));

const useMobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const navLinksElement = navLinksRef.current;
    if (!navLinksElement) return;

    const handleNavLinkClick = () => setIsMenuOpen(false);

    const links = navLinksElement.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', handleNavLinkClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []);

  return {
    isMenuOpen,
    toggleMenu: () => setIsMenuOpen(prev => !prev),
    hamburgerRef,
    navLinksRef,
  };
};


export default useMobileMenu;
