import React from 'react';

const Header = () => (
  <header className="header">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <a href="/#home" className="logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
        <img src="/logo.png" alt="Clinic Logo" style={{ height: '40px', marginRight: '10px' }} />
        Divyansh Physiotherapy Clinic
      </a>
      <nav>
        <ul className="nav-links">
          <li><a href="/#home">Home</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#content">Content</a></li>
          <li><a href="/#doctor">Specialist</a></li>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
