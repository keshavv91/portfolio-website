import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" style={{ textAlign: 'center' }}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <motion.div 
          className="glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem 2rem' }}
        >
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:hello@example.com" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
