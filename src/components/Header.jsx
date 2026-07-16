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
        /* Clay-raised header on scroll */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: transparent;
          border-bottom: 1px solid transparent;
          padding: 1.5rem 0;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .header.scrolled {
          padding: 0.85rem 0;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: none;
          box-shadow:
            0 6px 18px rgba(15, 118, 110, 0.06),
            inset 0 -1px 2px rgba(255, 255, 255, 0.8),
            inset 0 1px 3px rgba(255, 255, 255, 0.5);
        }

        /* Nav link hover underline */
        .nav-links a {
          position: relative;
          text-decoration: none;
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0.5rem 0;
          margin: 0 0.5rem;
          transition: color 0.3s ease;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          border-radius: 2px;
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-links a:hover {
          color: var(--primary);
          background-color: transparent !important;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        /* Clay CTA Button */
        .nav-cta {
          background: linear-gradient(135deg, var(--primary) 0%, #0D9488 100%);
          color: white !important;
          padding: 0.65rem 1.35rem;
          border-radius: 50px;
          font-weight: 700;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem;
          text-decoration: none;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            4px 4px 10px rgba(15, 118, 110, 0.15),
            -2px -2px 6px rgba(255, 255, 255, 0.2),
            inset 1px 1px 3px rgba(255, 255, 255, 0.15),
            inset -1px -1px 2px rgba(0, 0, 0, 0.08);
        }

        .nav-cta:hover {
          background: linear-gradient(135deg, var(--primary-hover) 0%, var(--primary) 100%);
          transform: translateY(-1.5px);
          box-shadow:
            6px 6px 14px rgba(15, 118, 110, 0.2),
            -3px -3px 8px rgba(255, 255, 255, 0.25),
            inset 2px 2px 4px rgba(255, 255, 255, 0.18),
            inset -1px -1px 3px rgba(0, 0, 0, 0.1);
        }

        .nav-cta:active {
          transform: translateY(0.5px);
          box-shadow:
            2px 2px 6px rgba(15, 118, 110, 0.1),
            inset 2px 2px 4px rgba(0, 0, 0, 0.08),
            inset -1px -1px 2px rgba(255, 255, 255, 0.1);
        }

        .mobile-cta-li {
          display: none;
          width: 100%;
          text-align: center;
          margin-top: 1rem;
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 10px;
          transition: background 0.2s;
          flex-direction: column;
          gap: 5px;
          align-items: center;
          justify-content: center;
        }
        .hamburger:hover {
          background: rgba(15, 118, 110, 0.06);
        }
        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text-main);
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

        @media (max-width: 992px) {
          .desktop-cta {
            display: none;
          }
          .mobile-cta-li {
            display: block;
          }
          .nav-cta {
            width: 80%;
            margin: 0.5rem auto;
          }
          .hamburger {
            display: flex;
          }
          /* Clay-panel mobile dropdown */
          .nav-links {
            display: none;
            flex-direction: column;
            gap: 0;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #FFFFFF;
            border-radius: 0 0 24px 24px;
            padding: 1rem 0 1.5rem;
            border-top: none;
            animation: fadeIn 0.2s ease-out;
            box-shadow:
              0 12px 24px rgba(15, 118, 110, 0.08),
              inset 0 2px 4px rgba(255, 255, 255, 0.8);
          }
          .nav-links.nav-open {
            display: flex;
          }
          .nav-links li {
            width: 100%;
            text-align: center;
          }
          .nav-links a {
            display: block;
            padding: 0.85rem;
            margin: 0;
            border-radius: 0;
            font-size: 0.95rem;
            border-bottom: 1px solid rgba(15, 118, 110, 0.04);
          }
          .nav-links a::after {
            display: none;
          }
          .nav-links a:hover {
            background-color: var(--clay-bg-tinted, #EDF9F7) !important;
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
            Divyansh Physiotherapy
          </a>

          {/* Hamburger — visible only on mobile */}
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

          <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ul className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
              <li><a href="/#home" onClick={closeMenu}>Home</a></li>
              <li><a href="/#doctor" onClick={closeMenu}>About</a></li>
              <li><a href="/#services" onClick={closeMenu}>Services</a></li>
              <li><a href="/#content" onClick={closeMenu}>FAQs</a></li>
              <li><a href="/#contact" onClick={closeMenu}>Contact</a></li>
              <li className="mobile-cta-li">
                <a href="/#contact" className="nav-cta" onClick={closeMenu}>Book Appointment</a>
              </li>
            </ul>
            <a href="/#contact" className="nav-cta desktop-cta">Book Appointment</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
