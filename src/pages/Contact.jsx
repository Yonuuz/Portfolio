import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const executeFormSubmit = (e) => {
    e.preventDefault();
    // Validate fields contain strings before resetting state maps
    if (formData.name && formData.email && formData.message) {
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Hide victory notification automatically after 4 seconds
      setTimeout(() => setIsSuccess(false), 4000);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '10px' }}>Contact Me</h1>
      <p style={{ marginBottom: '25px', opacity: 0.8 }}>Submit amessage below to open contact communications.</p>

      {isSuccess && (
        <div style={{
          backgroundColor: '#10b981',
          color: '#ffffff',
          padding: '15px',
          borderRadius: '6px',
          marginBottom: '25px',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          🎯 Transmission successful! Message received. I will follow up shortly.
        </div>
      )}

      <form onSubmit={executeFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontWeight: '600', fontSize: '14px' }}>Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{
              padding: '12px',
              borderRadius: '6px',
              border: '1px solid var(--card-border)',
              backgroundColor: 'var(--card-bg)',
              color: 'var(--text)',
              fontSize: '15px'
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontWeight: '600', fontSize: '14px' }}>Email Address</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{
              padding: '12px',
              borderRadius: '6px',
              border: '1px solid var(--card-border)',
              backgroundColor: 'var(--card-bg)',
              color: 'var(--text)',
              fontSize: '15px'
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontWeight: '600', fontSize: '14px' }}>Project Message</label>
          <textarea 
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleInputChange}
            required
            style={{
              padding: '12px',
              borderRadius: '6px',
              border: '1px solid var(--card-border)',
              backgroundColor: 'var(--card-bg)',
              color: 'var(--text)',
              fontSize: '15px',
              resize: 'vertical'
            }}
          />
        </div>

        <button 
          type="submit" 
          style={{
            backgroundColor: 'var(--primary)',
            color: '#ffffff',
            border: 'none',
            padding: '14px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
            transition: 'background-color 0.2s'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;