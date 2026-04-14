import  Loader  from './Components/Loader';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import Certificates from './Components/Certificates'
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);
 window.addEventListener('scroll', () => {
     document.getElementById('custom-navbar')
       .classList.toggle('scrolled', window.scrollY > 60);
   });
  return (
    <div className="portfolio-viewport"> 
<Loader>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Certificates />
      </Loader>
    </div>
  );
}

export default App;

