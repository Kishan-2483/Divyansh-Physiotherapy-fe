import React from 'react';

const Hero = () => (
  <section id="home" className="hero">
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem' }}>
      <div className="hero-content animate-fade-in" style={{ flex: '1 1 400px' }}>
        <h1 style={{ fontSize: '3.8rem', fontWeight: '800', marginBottom: '1.2rem', color: 'var(--primary-dark)', lineHeight: '1.1' }}>
          Expert Physiotherapy <br /> <span style={{ color: 'var(--primary)' }}>At Your Convenience</span>
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2.5rem', color: '#4b5563' }}>
          Bringing wellness and mobility back to your life. Specialized care for Cervical Spondylosis, Neuro, Ortho, and more.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Book Appointment</a>
          <a href="#services" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: 'transparent', color: 'var(--primary)', border: '2px solid var(--primary)', boxShadow: 'none' }}>Our Services</a>
        </div>
      </div>
      <div className="hero-image animate-fade-in" style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', animationDelay: '0.2s' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
          <div style={{ position: 'absolute', top: '-5%', right: '-5%', width: '100%', height: '100%', background: 'linear-gradient(135deg, var(--primary) 0%, transparent 100%)', borderRadius: '30px', zIndex: 0, opacity: 0.15 }}></div>
          <div style={{ position: 'absolute', bottom: '-5%', left: '-5%', width: '100%', height: '100%', background: 'linear-gradient(135deg, transparent 0%, var(--primary-dark) 100%)', borderRadius: '30px', zIndex: 0, opacity: 0.15 }}></div>
          <img
            src="https://www.physiovillage.ca/wp-content/uploads/2025/05/24237736_6911127.webp"
            alt="Physiotherapy Treatment"
            style={{ position: 'relative', width: '100%', height: 'auto', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', zIndex: 1, objectFit: 'cover', border: '8px solid white' }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
