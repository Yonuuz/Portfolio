import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const portfolioData = [
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio template with dark mode, smooth animations, and dynamic project filtering. Fully customizable for developers and creatives.',
      tags: ['React', 'CSS3', 'Responsive', 'Dark Mode'],
    },
    {
      title: 'Calculator',
      description: 'A fully functional calculator application with a clean user interface. Supports basic arithmetic operations including addition, subtraction, multiplication, and division.',
      tags: ['React', 'JavaScript', 'CSS3'],
    },
  ];

  return (
    <div>
      <h1 style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '10px' }}>My Projects</h1>
      <p style={{ margin: '20px 0 40px 0', opacity: 0.8 }}> Here are some of my recent works. Each project showcases different skills and technologies.</p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px'
      }}>
        {portfolioData.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;