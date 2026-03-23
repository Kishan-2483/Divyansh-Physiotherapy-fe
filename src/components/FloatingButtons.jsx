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
          .whatsapp-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #25D366;
            color: white;
            padding: 10px 20px;
            border-radius: 30px;
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            font-weight: bold;
            font-size: 1rem;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            z-index: 1000;
            transition: transform 0.3s ease;
          }
          .whatsapp-btn:hover {
            transform: scale(1.05);
          }
          .whatsapp-label {
            display: inline;
          }
          @media (max-width: 480px) {
            .side-btn {
              width: 38px;
              height: 38px;
              font-size: 1rem;
            }
            .side-btn-icon {
              min-width: 38px;
            }
            .side-btn:hover {
              width: 150px;
            }
            .whatsapp-btn {
              padding: 10px 14px;
              border-radius: 50%;
              width: 52px;
              height: 52px;
              justify-content: center;
              bottom: 16px;
              right: 16px;
            }
            .whatsapp-label {
              display: none;
            }
          }
        `}
      </style>

      {/* Right Side Vertical Buttons */}
      <div
        style={{
          position: 'fixed',
          right: '0',
          top: '30%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '10px',
          zIndex: 1000,
          transform: 'translateY(-50%)',
        }}
      >
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
        className="whatsapp-btn"
      >
        <span style={{ fontSize: '1.5rem' }}>💬</span>
        <span className="whatsapp-label">Chat With Us</span>
      </a>
    </>
  );
};

export default FloatingButtons;
