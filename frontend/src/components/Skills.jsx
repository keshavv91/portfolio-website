import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: 'Frontend', items: ['React.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs'] },
  { category: 'Database & Cloud', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'AWS', 'Docker'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman'] },
];

const Skills = () => {
  return (
    <section id="skills" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="glass"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ padding: '2rem' }}
            >
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--accent-color)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>
                {skillGroup.category}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {skillGroup.items.map((skill, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-color)' }}></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
