import React from 'react';

const Hero = () => (
  <section id="home" className="hero">
    <div
      className="container"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '3rem',
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="hero-content animate-fade-in" style={{ flex: '1 1 300px' }}>
        <h1>
          Expert Physiotherapy <br />
          <span className="gradient-text">At Your Convenience</span>
        </h1>
        <p>
          Bringing wellness and mobility back to your life. Specialized care for Cervical
          Spondylosis, Neuro, Ortho, and more.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn">
            Book Appointment
          </a>
          <a href="#services" className="btn btn-outline">
            Our Services
          </a>
        </div>
      </div>

      <div
        className="hero-image animate-fade-in"
        style={{ flex: '1 1 280px', display: 'flex', justifyContent: 'center', animationDelay: '0.2s' }}
      >
        <div className="hero-image-wrapper">
          <img
            src="https://www.physiovillage.ca/wp-content/uploads/2025/05/24237736_6911127.webp"
            alt="Physiotherapy Treatment"
            className="hero-image-img"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
