import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="bg-gradient"></div>
      
      {/* Simple Navigation */}
      <nav style={{ padding: '1.5rem 0', position: 'fixed', top: 0, width: '100%', zIndex: 50, backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-primary)' }}>
            Portfolio<span style={{ color: 'var(--accent-color)' }}>.</span>
          </a>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: '500' }}>
            <a href="#projects" style={{ transition: 'color 0.3s' }} onMouseOver={e=>e.currentTarget.style.color='var(--accent-color)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-primary)'}>Projects</a>
            <a href="#skills" style={{ transition: 'color 0.3s' }} onMouseOver={e=>e.currentTarget.style.color='var(--accent-color)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-primary)'}>Skills</a>
            <a href="#contact" style={{ transition: 'color 0.3s' }} onMouseOver={e=>e.currentTarget.style.color='var(--accent-color)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-primary)'}>Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '4rem' }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Personal Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
