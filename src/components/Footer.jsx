import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--footer-bg)',
      color: 'var(--footer-text)',
      textAlign: 'center',
      padding: '20px',
      marginTop: 'auto',
      fontSize: '14px',
      borderTop: '1px solid var(--card-border)',
      transition: 'background-color 0.3s'
    }}>
      <p>&copy; {new Date().getFullYear()} Web Developer Portfolio. Built with React Components.</p>
    </footer>
  );
}

export default Footer;