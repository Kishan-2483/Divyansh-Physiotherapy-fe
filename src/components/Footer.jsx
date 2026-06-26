import React from 'react';

const Footer = () => (
  <footer>
    <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
      <p style={{ fontWeight: '700', color: 'white', letterSpacing: '0.5px', fontSize: '1rem' }}>
        DIVYANSH PHYSIOTHERAPY CLINIC
      </p>
      <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>
        Sec. M-1/422, Ashiyana Colony, Lucknow | +91-8318428997
      </p>
      <p style={{ fontSize: '0.8rem', opacity: 0.5, marginTop: '1rem' }}>
        &copy; {new Date().getFullYear()} All Rights Reserved. A Unit of Ayush Family Hospital.
      </p>
    </div>
  </footer>
);

export default Footer;
