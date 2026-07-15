import React from 'react';
import { Heart, ShieldCheck, Activity, Star, Award, Users, Phone, Calendar } from 'lucide-react';

const Hero = () => (
  <section id="home" className="hero-section-wrapper">
    <style>{`
      .hero-section-wrapper {
        position: relative;
        min-height: 90vh;
        display: flex;
        align-items: center;
        background: linear-gradient(135deg, #F0FDFA 0%, #E0F2FE 100%);
        overflow: hidden;
        padding-top: 8rem;
        padding-bottom: 5rem;
      }
      
      /* Subtle animated gradient blobs */
      .blob-bg {
        position: absolute;
        width: 380px;
        height: 380px;
        border-radius: 50%;
        filter: blur(90px);
        opacity: 0.35;
        mix-blend-mode: multiply;
        animation: floatBlob 12s infinite alternate ease-in-out;
        z-index: 1;
      }
      .blob-teal {
        background: #14B8A6;
        top: 15%;
        right: 15%;
        animation-delay: 0s;
      }
      .blob-blue {
        background: #38BDF8;
        bottom: 20%;
        right: 5%;
        animation-delay: 4s;
      }
      
      @keyframes floatBlob {
        0% { transform: translateY(0px) scale(1) rotate(0deg); }
        50% { transform: translateY(-25px) scale(1.1) rotate(60deg); }
        100% { transform: translateY(15px) scale(0.95) rotate(-60deg); }
      }

      .hero-grid {
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        align-items: center;
        gap: 4rem;
        position: relative;
        z-index: 2;
        width: 100%;
      }

      .hero-left {
        max-width: 650px;
      }

      .hero-left h1 {
        font-family: 'Manrope', sans-serif;
        font-size: 3.85rem;
        font-weight: 800;
        line-height: 1.15;
        color: var(--text-main);
        letter-spacing: -1.8px;
        margin-bottom: 1.5rem;
      }

      .hero-left h1 span {
        color: var(--primary);
      }

      .hero-left p {
        font-size: 1.15rem;
        line-height: 1.8;
        color: var(--text-muted);
        margin-bottom: 2.5rem;
      }

      .hero-ctas {
        display: flex;
        gap: 1.25rem;
        flex-wrap: wrap;
        margin-bottom: 3.5rem;
      }

      .btn-hero-primary {
        background-color: var(--primary);
        color: white !important;
        padding: 0.95rem 2rem;
        border-radius: 50px;
        font-weight: 700;
        font-family: 'Plus Jakarta Sans', sans-serif;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        box-shadow: 0 8px 20px rgba(15, 118, 110, 0.2);
      }

      .btn-hero-primary:hover {
        background-color: var(--primary-hover);
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(15, 118, 110, 0.3);
      }

      .btn-hero-secondary {
        background-color: white;
        color: var(--primary) !important;
        border: 2px solid var(--primary);
        padding: 0.95rem 2rem;
        border-radius: 50px;
        font-weight: 700;
        font-family: 'Plus Jakarta Sans', sans-serif;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        box-shadow: var(--shadow-sm);
      }

      .btn-hero-secondary:hover {
        background-color: var(--primary-light);
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
      }

      /* Trust Badges */
      .hero-trust-badges {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
        border-top: 1px solid rgba(15, 118, 110, 0.1);
        padding-top: 2rem;
      }

      .trust-badge-item {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-main);
      }

      .trust-badge-item svg {
        color: var(--primary);
      }

      .trust-stars {
        color: #FBBF24 !important; /* Gold stars */
      }

      /* Right Side Photo */
      .hero-right {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .hero-image-frame {
        position: relative;
        width: 100%;
        max-width: 440px;
        border-radius: 30px;
        overflow: visible;
      }

      .hero-img-main {
        width: 100%;
        height: 500px;
        object-fit: cover;
        border-radius: 30px;
        box-shadow: var(--shadow-lg);
        border: 2px solid rgba(255, 255, 255, 0.8);
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .hero-img-main:hover {
        transform: scale(1.02);
      }

      /* Floating Healthcare Badges */
      .float-badge {
        position: absolute;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1.5px solid rgba(255, 255, 255, 0.6);
        padding: 0.75rem 1.25rem;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(15, 118, 110, 0.1);
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 10;
        animation: floatAnim 6s infinite ease-in-out;
      }

      .float-badge-1 {
        top: 15%;
        left: -35px;
        animation-delay: 0s;
      }

      .float-badge-2 {
        bottom: 20%;
        right: -30px;
        animation-delay: 3s;
      }

      .float-badge-3 {
        top: -20px;
        right: 40px;
        animation-delay: 1.5s;
      }

      .float-badge-icon {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: var(--primary-light);
        color: var(--primary);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .float-badge-text h5 {
        margin: 0;
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--text-main);
      }

      .float-badge-text p {
        margin: 0;
        font-size: 0.7rem;
        color: var(--text-muted);
        font-weight: 500;
      }

      @keyframes floatAnim {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
        100% { transform: translateY(0px); }
      }

      @media (max-width: 992px) {
        .hero-grid {
          grid-template-columns: 1fr;
          text-align: center;
          gap: 3.5rem;
        }
        .hero-left {
          max-width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-left h1 {
          font-size: 3rem;
          letter-spacing: -1px;
        }
        .hero-ctas {
          justify-content: center;
        }
        .hero-trust-badges {
          justify-content: center;
        }
        .hero-img-main {
          height: 380px;
        }
        .float-badge-1 { left: 10px; }
        .float-badge-2 { right: 10px; }
      }

      @media (max-width: 480px) {
        .hero-left h1 {
          font-size: 2.25rem;
        }
        .btn-hero-primary, .btn-hero-secondary {
          width: 100%;
          justify-content: center;
        }
        .hero-img-main {
          height: 320px;
        }
      }
    `}</style>

    {/* Subtle animated blobs */}
    <div className="blob-bg blob-teal"></div>
    <div className="blob-bg blob-blue"></div>

    <div className="container">
      <div className="hero-grid">
        
        {/* Left Content Side */}
        <div className="hero-left animate-fade-in">
          <h1>
            Move Better.<br />
            <span>Live Pain-Free.</span>
          </h1>
          <p>
            Personalized physiotherapy treatments designed to restore mobility, reduce pain, and improve your quality of life.
          </p>
          
          <div className="hero-ctas">
            <a href="#contact" className="btn-hero-primary">
              <Calendar size={18} /> Book Appointment
            </a>
            <a href="tel:+918318428997" className="btn-hero-secondary">
              <Phone size={18} /> Call Now
            </a>
          </div>

          <div className="hero-trust-badges">
            <div className="trust-badge-item">
              <Star size={16} fill="currentColor" className="trust-stars" />
              <span>500+ Happy Patients</span>
            </div>
            <div className="trust-badge-item">
              <Users size={16} />
              <span>4+ Years Experience</span>
            </div>
            <div className="trust-badge-item">
              <Award size={16} />
              <span>Certified Physiotherapist</span>
            </div>
          </div>
        </div>

        {/* Right Graphic/Photo Side */}
        <div className="hero-right animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero-image-frame">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" 
              alt="Physiotherapy session" 
              className="hero-img-main"
            />
            
            {/* Floating Badge 1 - Heart Pulse */}
            <div className="float-badge float-badge-1">
              <div className="float-badge-icon">
                <Heart size={18} fill="currentColor" />
              </div>
              <div className="float-badge-text">
                <h5>Pain Relief</h5>
                <p>Targeted Therapies</p>
              </div>
            </div>

            {/* Floating Badge 2 - Stethoscope/Activity */}
            <div className="float-badge float-badge-2">
              <div className="float-badge-icon">
                <Activity size={18} />
              </div>
              <div className="float-badge-text">
                <h5>Active Recovery</h5>
                <p>Guided Stretches</p>
              </div>
            </div>

            {/* Floating Badge 3 - Cert Check */}
            <div className="float-badge float-badge-3">
              <div className="float-badge-icon">
                <ShieldCheck size={18} />
              </div>
              <div className="float-badge-text">
                <h5>100% Certified</h5>
                <p>Expert Care</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Hero;
