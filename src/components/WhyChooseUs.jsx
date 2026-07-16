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
          background: linear-gradient(160deg, #F0FDFA 0%, #F8FCFB 40%, #E6FAF7 100%);
          padding: 5rem 0;
          position: relative;
          overflow: hidden;
        }

        .why-choose-section::before {
          content: '';
          position: absolute;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.05) 0%, transparent 70%);
          top: -60px;
          right: -80px;
          border-radius: 50%;
          pointer-events: none;
        }
        
        .why-choose-title-wrapper {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
          z-index: 1;
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
          gap: 1.75rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }
        
        /* Clay-sculpted cards */
        .choose-card {
          background: #FFFFFF;
          padding: 3rem 2.25rem;
          border-radius: 28px;
          border: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          box-shadow:
            10px 10px 20px rgba(15, 118, 110, 0.06),
            -6px -6px 16px rgba(255, 255, 255, 0.9),
            inset 3px 3px 6px rgba(255, 255, 255, 0.7),
            inset -2px -2px 5px rgba(15, 118, 110, 0.03);
        }
        
        .choose-card:hover {
          transform: translateY(-5px);
          box-shadow:
            12px 12px 24px rgba(15, 118, 110, 0.08),
            -8px -8px 20px rgba(255, 255, 255, 0.95),
            inset 4px 4px 8px rgba(255, 255, 255, 0.8),
            inset -3px -3px 6px rgba(15, 118, 110, 0.04);
        }
        
        /* Clay-embossed icon circle */
        .choose-card-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 20px;
          background: #EDF9F7;
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.75rem;
          transition: all 0.35s ease;
          box-shadow:
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -1px -1px 3px rgba(15, 118, 110, 0.06),
            4px 4px 10px rgba(15, 118, 110, 0.05);
        }
        
        .choose-card:hover .choose-card-icon-wrapper {
          background: linear-gradient(135deg, var(--primary) 0%, #0D9488 100%);
          color: white;
          transform: scale(1.05);
          box-shadow:
            inset 2px 2px 4px rgba(255, 255, 255, 0.2),
            inset -1px -1px 3px rgba(0, 0, 0, 0.1),
            4px 4px 10px rgba(15, 118, 110, 0.12);
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
          line-height: 1.65;
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
            border-radius: 24px;
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
