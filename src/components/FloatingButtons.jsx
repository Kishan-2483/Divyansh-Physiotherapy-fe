import React from 'react';

const FloatingButtons = () => {
  return (
    <>
      <style>
        {`
          .side-btn {
            background-color: #d4a373;
            color: white;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            text-decoration: none;
            font-size: 1.2rem;
            box-shadow: -2px 2px 5px rgba(0,0,0,0.1);
            transition: width 0.3s ease;
            overflow: hidden;
            white-space: nowrap;
          }
          .side-btn:hover {
            width: 180px;
          }
          .side-btn-icon {
            min-width: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .side-btn-text {
            font-size: 1rem;
            font-weight: 600;
            margin-left: 5px;
            opacity: 0;
            transition: opacity 0.2s ease;
            transition-delay: 0.1s;
          }
          .side-btn:hover .side-btn-text {
            opacity: 1;
          }
        `}
      </style>

      {/* Right Side Vertical Buttons */}
      <div style={{
        position: 'fixed',
        right: '0',
        top: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '10px',
        zIndex: 1000,
        transform: 'translateY(-50%)'
      }}>
        {/* Call Button */}
        <a href="tel:+918318428997" className="side-btn">
          <span className="side-btn-icon">📞</span>
          <span className="side-btn-text">Call Us</span>
        </a>
        
        {/* Book Appointment Button */}
        <a href="#contact" className="side-btn">
          <span className="side-btn-icon">📅</span>
          <span className="side-btn-text">Book Now</span>
        </a>
      </div>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/918318428997" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '30px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1rem',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          zIndex: 1000,
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <span style={{ fontSize: '1.5rem' }}>💬</span> Chat With Us
      </a>
    </>
  );
};

export default FloatingButtons;
