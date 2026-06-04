import React from 'react';

function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '10px' }}>About Me</h1>
      <p style={{ fontSize: '16px', lineHeight: '1.7' }}>
        I am an adaptable web developer dedicated to building flexable and attractive websites.
      </p>
      
      <h2 style={{ marginTop: '40px', color: 'var(--primary)' }}>Core Technical Stack</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
        <div style={{ backgroundColor: 'var(--nav-bg)', padding: '20px', borderRadius: '6px' }}>
          <h3>Frontend Technologies</h3>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
            <li>JavaScript (ES6+)</li>
            <li>React (Hooks, Context, Router)</li>
            <li>HTML / CSS</li>
          </ul>
        </div>
        <div style={{ backgroundColor: 'var(--nav-bg)', padding: '20px', borderRadius: '6px' }}>
          <h3>Backend & Tools</h3>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
            <li>Node.js </li>
            <li>GitHub, Vite, npm</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;