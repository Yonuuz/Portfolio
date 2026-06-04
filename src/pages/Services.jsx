import React from 'react';

function Services() {
  const serviceItems = [
    { title: 'Custom Web Development', description: 'Full-stack web applications built with modern frameworks like React, Next.js, and Node.js. I deliver scalable, maintainable solutions tailored to your business needs.' },
    { title: 'Responsive UI/UX Design', 
      description: 'Mobile-first, responsive interfaces that provide an optimal viewing experience across all devices. I focus on accessibility, performance, and intuitive user flows.' 
    },
  ];

  return (
    <div>
      <h1 style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '10px' }}>Professional Services</h1>
      <p style={{ margin: '20px 0 40px 0', opacity: 0.8 }}>Here are the core development capabilities I offer:</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {serviceItems.map((service, idx) => (
          <div key={idx} style={{
            padding: '25px',
            borderRadius: '6px',
            backgroundColor: 'var(--nav-bg)',
            borderLeft: '5px solid var(--primary)',
            transition: 'background-color 0.3s'
          }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>{service.title}</h3>
            <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.6' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;