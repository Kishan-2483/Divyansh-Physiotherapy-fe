import React from 'react';

const PricingCard = ({ pkg }) => {
  return (
    <div className={`pricing-card${pkg.isPopular ? ' popular' : ''}`}>
      {pkg.isPopular && (
        <span className="popular-badge">
          MOST POPULAR
        </span>
      )}

      <h3>{pkg.title}</h3>
      <h2>{pkg.price}</h2>

      <ul>
        {pkg.features.map((feature, i) => (
          <li key={i}>
            <span className="check-icon">✓</span> {feature}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`btn${!pkg.isPopular ? ' btn-outline' : ''}`}
      >
        Choose Plan
      </a>
    </div>
  );
};

const Pricing = () => {
  const packages = [
    {
      title: "Basic Consultation",
      price: "₹400 / session",
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
      price: "₹3,800 / 10 sessions",
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
      price: "₹600 / session",
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
        <h2 className="pricing-title">Our Pricing</h2>
        <p style={{ marginBottom: '3rem' }}>Affordable packages for your journey to recovery</p>
      </div>

      <div className="pricing-grid">
        {packages.map((pkg, index) => (
          <PricingCard key={index} pkg={pkg} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
