import React, { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 8px;
          transition: background 0.2s;
          flex-direction: column;
          gap: 5px;
          align-items: center;
          justify-content: center;
        }
        .hamburger:hover {
          background: rgba(0, 128, 128, 0.08);
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--primary-dark);
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }
        }
      `}</style>

      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="container" style={{ position: 'relative' }}>
          <a
            href="/#home"
            className="logo"
            onClick={closeMenu}
          >
            <img src="/logo.png" alt="Clinic Logo" />
            Divyansh Physiotherapy Clinic
          </a>

          {/* Hamburger — visible only on mobile via CSS */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav>
            <ul className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
              <li><a href="/#home" onClick={closeMenu}>Home</a></li>
              <li><a href="/#services" onClick={closeMenu}>Services</a></li>
              <li><a href="/#content" onClick={closeMenu}>Content</a></li>
              <li><a href="/#doctor" onClick={closeMenu}>Specialist</a></li>
              <li><a href="/#pricing" onClick={closeMenu}>Pricing</a></li>
              <li><a href="/#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
