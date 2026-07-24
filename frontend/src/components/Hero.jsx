import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Briefcase, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span style={{ color: 'var(--accent-color)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Welcome to my portfolio
            </span>
            <h1 style={{ fontSize: '4rem', margin: '1rem 0', lineHeight: '1.1' }}>
              Hi, I'm Keshav, a <span style={{ color: 'var(--accent-color)' }}>Full-Stack</span> Developer
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              I build modern, responsive, and scalable web applications using the latest technologies. 
              Let's turn your ideas into reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}
          >
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
          >
            <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <Code size={24} />
            </a>
            <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = '#0077b5'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <Briefcase size={24} />
            </a>
            <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = '#ea4335'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
