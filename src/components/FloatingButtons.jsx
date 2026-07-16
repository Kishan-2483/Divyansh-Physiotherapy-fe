import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <>
      <style>
        {`
          .floating-container {
            position: fixed;
            right: 0;
            top: 50%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
            transform: translateY(-50%);
            z-index: 1000;
          }
          .side-btn {
            color: white;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-top-left-radius: 24px;
            border-bottom-left-radius: 24px;
            text-decoration: none;
            transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            overflow: hidden;
            white-space: nowrap;
            border: none;
            box-shadow:
              -4px 4px 12px rgba(15, 23, 42, 0.1),
              inset 2px 2px 4px rgba(255, 255, 255, 0.15),
              inset -1px -1px 3px rgba(0, 0, 0, 0.1);
          }
          .side-btn:hover {
            width: 160px;
            box-shadow:
              -6px 6px 16px rgba(15, 23, 42, 0.15),
              inset 3px 3px 6px rgba(255, 255, 255, 0.18),
              inset -2px -2px 4px rgba(0, 0, 0, 0.12);
          }
          .side-btn-icon {
            min-width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }
          .side-btn-text {
            font-size: 0.9rem;
            font-weight: 600;
            font-family: 'Plus Jakarta Sans', sans-serif;
            margin-left: 8px;
            opacity: 0;
            transition: opacity 0.2s ease;
            transition-delay: 0.05s;
            color: white;
          }
          .side-btn:hover .side-btn-text {
            opacity: 1;
          }

          /* Clay WhatsApp Button */
          .whatsapp-btn {
            position: fixed;
            bottom: 24px;
            right: 24px;
            background: linear-gradient(135deg, #25D366 0%, #20ba5a 100%);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            font-weight: 700;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 0.95rem;
            z-index: 1000;
            animation: pulse-glow 3s infinite;
            border: none;
            transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow:
              6px 6px 16px rgba(37, 211, 102, 0.25),
              -3px -3px 8px rgba(255, 255, 255, 0.15),
              inset 2px 2px 4px rgba(255, 255, 255, 0.2),
              inset -1px -1px 3px rgba(0, 0, 0, 0.1);
          }
          .whatsapp-btn:hover {
            background: linear-gradient(135deg, #20ba5a 0%, #1da851 100%);
            transform: translateY(-2px) scale(1.02);
            box-shadow:
              8px 8px 20px rgba(37, 211, 102, 0.3),
              -4px -4px 10px rgba(255, 255, 255, 0.2),
              inset 3px 3px 6px rgba(255, 255, 255, 0.22),
              inset -2px -2px 4px rgba(0, 0, 0, 0.12);
          }
          .whatsapp-btn:active {
            transform: translateY(1px);
            box-shadow:
              3px 3px 8px rgba(37, 211, 102, 0.2),
              inset 3px 3px 6px rgba(0, 0, 0, 0.1),
              inset -2px -2px 4px rgba(255, 255, 255, 0.1);
          }
          .whatsapp-label {
            display: inline;
          }
          @media (max-width: 480px) {
            .floating-container {
              gap: 8px;
            }
            .side-btn {
              width: 40px;
              height: 40px;
            }
            .side-btn-icon {
              min-width: 40px;
              height: 40px;
            }
            .side-btn:hover {
              width: 130px;
            }
            .whatsapp-btn {
              padding: 10px 10px;
              border-radius: 50%;
              width: 50px;
              height: 50px;
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
      <div className="floating-container">
        {/* Call Button */}
        <a href="tel:+918318428997" className="side-btn" style={{ backgroundColor: '#0ea5e9' }}>
          <span className="side-btn-icon">
            <Phone size={18} />
          </span>
          <span className="side-btn-text">Call Us</span>
        </a>

        {/* Book Appointment Button */}
        <a href="#contact" className="side-btn" style={{ backgroundColor: '#0d9488' }}>
          <span className="side-btn-icon">
            <Calendar size={18} />
          </span>
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
        <MessageCircle size={22} fill="white" />
        <span className="whatsapp-label">Chat With Us</span>
      </a>
    </>
  );
};

export default FloatingButtons;
