import React from 'react';

function ProjectCard({ title, description, tags, repoLink }) {
  return (
    <div style={{
      backgroundColor: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 0.2s, background-color 0.3s'
    }}>
      <div>
        <h3 style={{ marginTop: 0, color: 'var(--text)' }}>{title}</h3>
        <p style={{ color: 'var(--text)', opacity: 0.8, fontSize: '14px', lineHeight: '1.5' }}>{description}</p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', margin: '15px 0' }}>
          {tags.map((tag, idx) => (
            <span key={idx} style={{
              backgroundColor: 'var(--nav-bg)',
              color: 'var(--primary)',
              fontSize: '12px',
              padding: '4px 8px',
              borderRadius: '4px',
              border: '1px solid var(--card-border)'
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;