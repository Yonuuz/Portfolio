import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 0' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '10px' }}>Hi, I'm Eyob, i'm a Web Developer.</h1>
      <h2 style={{ fontSize: '24px', color: 'var(--primary)', fontWeight: '400', margin: '0 0 30px 0' }}>
        Building Clean, and Responsive, Websites.
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Link to="/projects" style={{
          backgroundColor: 'var(--primary)',
          color: '#ffffff',
          padding: '12px 28px',
          borderRadius: '6px',
          fontWeight: 'bold'
        }}>
          Explore Work
        </Link>
        <Link to="/contact" style={{
          border: '2px solid var(--primary)',
          color: 'var(--text)',
          padding: '10px 26px',
          borderRadius: '6px',
          fontWeight: 'bold'
        }}>
          Let's Talk
        </Link>
      </div>
    </div>
  );
}

export default Home;