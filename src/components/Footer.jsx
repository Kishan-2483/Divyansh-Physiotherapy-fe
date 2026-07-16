import React from 'react';

const Footer = () => (
  <footer>
    <style>{`
      .footer-inner {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        align-items: center;
      }

      .footer-brand {
        font-weight: 800;
        color: #e2e8f0;
        letter-spacing: 0.8px;
        font-size: 1.05rem;
        font-family: 'Manrope', sans-serif;
      }

      .footer-address {
        font-size: 0.88rem;
        opacity: 0.65;
        color: #94a3b8;
      }

      .footer-divider {
        width: 60px;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.3), transparent);
        border: none;
        margin: 0.75rem 0;
        border-radius: 2px;
      }

      .footer-copy {
        font-size: 0.78rem;
        opacity: 0.45;
        color: #94a3b8;
      }
    `}</style>

    <div className="container footer-inner">
      <p className="footer-brand">
        DIVYANSH PHYSIOTHERAPY CLINIC
      </p>
      <p className="footer-address">
        Sec. M-1/422, Ashiyana Colony, Lucknow | +91-8318428997
      </p>
      <hr className="footer-divider" />
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} All Rights Reserved. A Unit of Ayush Family Hospital.
      </p>
    </div>
  </footer>
);

export default Footer;
