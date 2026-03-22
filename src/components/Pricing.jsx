import React from 'react';

const PricingCard = ({ pkg }) => {
  const [hovered, setHovered] = React.useState(false);

  const baseStyle = {
    padding: '2.5rem 2rem',
    borderRadius: '20px',
    textAlign: 'center',
    position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
    cursor: 'pointer',
    background: 'rgba(255,255,255,0.85)',
    backdropFilter: 'blur(10px)',
  };

  const cardStyle = pkg.isPopular
    ? {
        ...baseStyle,
        transform: hovered ? 'scale(1.08)' : 'scale(1.05)',
        boxShadow: hovered
          ? '0 28px 55px rgba(0, 128, 128, 0.28)'
          : '0 20px 40px rgba(0, 128, 128, 0.15)',
        border: '2px solid var(--primary)',
      }
    : {
        ...baseStyle,
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 20px 40px rgba(0, 128, 128, 0.18)'
          : '0 10px 30px rgba(0,0,0,0.05)',
        border: hovered
          ? '2px solid var(--primary)'
          : '1px solid rgba(255,255,255,0.4)',
      };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {pkg.isPopular && (
        <span style={{
          position: 'absolute',
          top: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--accent)',
          color: 'white',
          padding: '0.4rem 1.5rem',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>
          MOST POPULAR
        </span>
      )}

      <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>
        {pkg.title}
      </h3>
      <h2 style={{ fontSize: '2rem', color: 'var(--text-dark)', marginBottom: '2rem' }}>
        {pkg.price}
      </h2>

      <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2.5rem', textAlign: 'left' }}>
        {pkg.features.map((feature, i) => (
          <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: 'green', fontWeight: 'bold' }}>✓</span> {feature}
          </li>
        ))}
      </ul>

      <a href="#contact" className="btn" style={{
        width: '100%',
        backgroundColor: pkg.isPopular ? 'var(--primary)' : 'transparent',
        color: pkg.isPopular ? 'white' : 'var(--primary)',
        border: pkg.isPopular ? 'none' : '2px solid var(--primary)',
        boxShadow: pkg.isPopular ? '0 4px 15px rgba(0, 128, 128, 0.3)' : 'none'
      }}>
        Choose Plan
      </a>
    </div>
  );
};

const Pricing = () => {
  const packages = [
    {
      title: "Basic Consultation",
      price: "₹500 / session",
      features: [
        "In-depth Physiotherapy Assessment",
        "Basic Exercise Prescription",
        "Ergonomic Advice",
        "Pain Management Guidelines"
      ],
      isPopular: false
    },
    {
      title: "Standard Plan",
      price: "₹4,500 / 10 sessions",
      features: [
        "Everything in Basic",
        "Advanced Manual Therapy",
        "Electrotherapy modalities as needed",
        "Progress Tracking"
      ],
      isPopular: true
    },
    {
      title: "Home Visit Care",
      price: "₹800 / session",
      features: [
        "Complete Therapy at Home",
        "Personalized Care for Seniors/Post-Op",
        "Convenient Scheduling",
        "Comprehensive Rehab Protocols"
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="section container">
      <div className="text-center animate-fade-in">
        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '1rem' }}>Our Pricing</h2>
        <p style={{ marginBottom: '3rem' }}>Affordable packages for your journey to recovery</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        alignItems: 'center'
      }}>
        {packages.map((pkg, index) => (
          <PricingCard key={index} pkg={pkg} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
