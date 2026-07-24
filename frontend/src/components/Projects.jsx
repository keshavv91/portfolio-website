import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError('Failed to load projects.');
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        {loading && <p style={{ textAlign: 'center' }}>Loading projects...</p>}
        {error && <p style={{ textAlign: 'center', color: '#ef4444' }}>{error}</p>}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                <img 
                  src={project.imageUrl || 'https://via.placeholder.com/400x300'} 
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', flexGrow: 1 }}>{project.description}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.techStack.split(',').map((tech, i) => (
                    <span key={i} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', background: 'rgba(59, 130, 246, 0.2)', color: '#93c5fd', borderRadius: '9999px' }}>
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: 'var(--text-primary)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                    <Code size={16} /> Code
                  </a>
                  <a href={project.projectUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: 'var(--text-primary)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
