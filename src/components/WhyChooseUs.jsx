import React from 'react';
import { Award, ClipboardList, Activity, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const cards = [
    {
      icon: <Award size={32} />,
      title: "Certified Physiotherapists",
      desc: "Our therapists hold BPT & MPT degrees with specializations in orthopedic, neurological, and sports rehabilitation."
    },
    {
      icon: <ClipboardList size={32} />,
      title: "Personalized Treatment Plans",
      desc: "Every patient receives a unique, customized recovery plan based on clinical assessments and specific lifestyle goals."
    },
    {
      icon: <Activity size={32} />,
      title: "Modern Equipment",
      desc: "Equipped with advanced electrotherapy modalities, traction units, and target exercise tools for optimal clinical care."
    },
    {
      icon: <Zap size={32} />,
      title: "Fast Recovery Programs",
      desc: "Goal-oriented physical therapy combined with guided home exercise programs to accelerate recovery and prevent re-injury."
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-section">
      <style>{`
        .why-choose-section {
          background-color: var(--bg-alt);
          padding: 4.5rem 0;
        }
        
        .why-choose-title-wrapper {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .why-choose-title {
          font-family: 'Manrope', sans-serif;
          font-size: 2.5rem !important;
          color: var(--text-main) !important;
          margin-bottom: 1rem;
          font-weight: 800;
          letter-spacing: -1px;
        }
        
        .why-choose-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .choose-card {
          background-color: var(--bg-card);
          padding: 3rem 2.25rem;
          border-radius: var(--border-radius);
          border: 1px solid rgba(15, 118, 110, 0.05);
          box-shadow: var(--shadow-sm);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        
        .choose-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary);
        }
        
        .choose-card-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background-color: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.75rem;
          transition: all 0.3s ease;
        }
        
        .choose-card:hover .choose-card-icon-wrapper {
          background-color: var(--primary);
          color: white;
          transform: scale(1.05);
        }
        
        .choose-card h3 {
          font-family: 'Manrope', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.75rem;
          line-height: 1.35;
        }
        
        .choose-card p {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .why-choose-section {
            padding: 4rem 0;
          }
          .why-choose-title {
            font-size: 2rem !important;
          }
          .choose-card {
            padding: 2.25rem 1.75rem;
          }
        }
      `}</style>

      <div className="why-choose-title-wrapper animate-fade-in">
        <h2 className="why-choose-title">Why Choose Us?</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', padding: '0 1rem' }}>
          Providing compassionate, evidence-based physical therapy care to help you return to active living.
        </p>
      </div>

      <div className="why-choose-grid">
        {cards.map((card, idx) => (
          <div key={idx} className="choose-card animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="choose-card-icon-wrapper">
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
