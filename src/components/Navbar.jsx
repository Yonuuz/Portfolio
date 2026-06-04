import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar({ darkMode, toggleDarkMode }) {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'var(--primary)' : 'var(--text)',
    textDecoration: 'none',
    fontWeight: isActive ? '700' : '500',
    fontSize: '16px',
    borderBottom: isActive ? '2px solid var(--primary)' : 'none',
    paddingBottom: '4px'
  });

  return (
    <nav style={{
      backgroundColor: 'var(--nav-bg)',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid var(--card-border)',
      transition: 'background-color 0.3s ease'
    }}>
      <Link to="/" style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--text)', textDecoration: 'none' }}>
        Eyob Portfolio
      </Link>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/services" style={linkStyle}>Services</NavLink>
        <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
        
        <button 
          onClick={toggleDarkMode} 
          style={{
            backgroundColor: 'var(--primary)',
            color: '#ffffff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.2s'
          }}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;