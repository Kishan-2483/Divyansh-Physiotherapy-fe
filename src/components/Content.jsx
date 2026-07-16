import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const Content = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Physiotherapy?",
      answer: "Physiotherapy is a healing method focused on mobility. Physiotherapists work with individuals with temporary, or permanent, mobility problems caused by injury, disease, aging or birth abnormalities. They assess clients to determine their physical status and the potential for improvement and change."
    },
    {
      question: "What is the focus of Physiotherapy?",
      answer: (
        <>
          Physiotherapy, when indicated, often focuses on:<br/>
          • Decreasing pain<br/>
          • Increasing joint movement and flexibility<br/>
          • Building muscle strength and endurance<br/>
          • Improving balance and co-ordination<br/>
          • Enhancing tolerance in exercise and daily activities<br/>
          • Education about the condition and therapy program<br/>
          • Providing advice on ways to prevent further injury or deterioration.
        </>
      )
    },
    {
      question: "What are benefits of Physiotherapy At Home?",
      answer: (
        <>
          Travelling to Physiotherapy centres often cause inconvenience to the patients and their loved ones. We bring the physiotherapists at your home which<br/>
          • Enables convenience<br/>
          • Provides personalized care<br/>
          • Brings about a faster healing process<br/>
          With our affordable service, all you need to worry about now is getting better sooner.
        </>
      )
    },
    {
      question: "When do you need Physiotherapy At Home?",
      answer: (
        <>
          If patient is suffering from any of the following, or any other physical pain:<br/>
          • Post Surgical Rehab<br/>
          • Post Fracture Rehab<br/>
          • Stroke or Paralysis<br/>
          • Parkinson's Disease<br/>
          • Cerebral Palsy, Delayed Milestones<br/>
          • Pediatric Neurological Disorders<br/>
          • Geriatric Neurological Disorders<br/>
          • Frozen Shoulder<br/>
          • Sports Injuries<br/>
          • Age related, Balance Problems<br/>
          • Muscle or Joint Pain<br/>
          With our affordable service, all you need to worry about now is getting better sooner.
        </>
      )
    },
    {
      question: "How do I book Physiotherapy At Home Service?",
      answer: (
        <>
          You can book through any of the following:<br/>
          1. Click to call our office number: <strong>+91-8318428997</strong><br/>
          2. Or, Book Appointment through our <a href="#contact" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Portal</a>.
        </>
      )
    },
    {
      question: "Do you have a call / chat support?",
      answer: "Yes, you can Call / WhatsApp our support team @ +91-8318428997 / +91-8737996914 , our executives will assist you immediately."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="content" className="content-section-modern">
      <style>{`
        /* ============================================
           CONTENTS / FAQ — Claymorphism Modern Design
           ============================================ */

        .content-section-modern {
          background: linear-gradient(160deg, #F8FCFB 0%, #F0FDFA 50%, #E6FAF7 100%);
          padding: 5.5rem 0;
          position: relative;
          overflow: hidden;
        }

        .content-section-modern::before {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.04) 0%, transparent 70%);
          bottom: -80px;
          left: -80px;
          border-radius: 50%;
          pointer-events: none;
        }

        .content-section-modern::after {
          content: '';
          position: absolute;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.05) 0%, transparent 70%);
          top: -60px;
          right: -60px;
          border-radius: 50%;
          pointer-events: none;
        }

        /* ── Title Area ── */
        .faq-header-modern {
          text-align: center;
          margin-bottom: 3.5rem;
          position: relative;
          z-index: 1;
        }

        .faq-label-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #EDF9F7;
          color: var(--primary);
          padding: 0.45rem 1.2rem;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 1.25rem;
          box-shadow:
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -1px -1px 3px rgba(15, 118, 110, 0.06),
            3px 3px 8px rgba(15, 118, 110, 0.05);
        }

        .faq-title-modern {
          font-family: 'Manrope', sans-serif;
          font-size: 2.5rem;
          color: var(--text-main);
          margin-bottom: 0.75rem;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .faq-subtitle-modern {
          color: var(--text-muted);
          max-width: 550px;
          margin: 0 auto;
          font-size: 1rem;
          line-height: 1.7;
        }

        /* ── FAQ Container ── */
        .faq-container-modern {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        /* ── Clay FAQ Item ── */
        .faq-item-modern {
          background: #FFFFFF;
          border-radius: 22px;
          border: none;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow:
            8px 8px 18px rgba(15, 118, 110, 0.05),
            -4px -4px 12px rgba(255, 255, 255, 0.85),
            inset 2px 2px 5px rgba(255, 255, 255, 0.6),
            inset -1px -1px 3px rgba(15, 118, 110, 0.03);
        }

        .faq-item-modern:hover {
          box-shadow:
            10px 10px 22px rgba(15, 118, 110, 0.07),
            -6px -6px 16px rgba(255, 255, 255, 0.9),
            inset 3px 3px 6px rgba(255, 255, 255, 0.7),
            inset -2px -2px 4px rgba(15, 118, 110, 0.04);
          transform: translateY(-2px);
        }

        .faq-item-modern.active {
          box-shadow:
            10px 10px 22px rgba(15, 118, 110, 0.08),
            -6px -6px 16px rgba(255, 255, 255, 0.9),
            inset 3px 3px 6px rgba(255, 255, 255, 0.7),
            inset -2px -2px 4px rgba(15, 118, 110, 0.05);
        }

        /* ── Trigger Button ── */
        .faq-trigger-modern {
          width: 100%;
          padding: 1.4rem 1.75rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          font-size: 1.02rem;
          font-weight: 700;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: var(--text-main);
          transition: color 0.25s ease;
        }

        .faq-trigger-modern:hover {
          color: var(--primary);
        }

        .faq-item-modern.active .faq-trigger-modern {
          color: var(--primary);
          border-bottom: 1px solid rgba(15, 118, 110, 0.05);
        }

        /* ── Number Circle ── */
        .faq-num {
          width: 32px;
          height: 32px;
          min-width: 32px;
          border-radius: 50%;
          background: #EDF9F7;
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.78rem;
          font-weight: 800;
          font-family: 'Manrope', sans-serif;
          transition: all 0.3s ease;
          box-shadow:
            inset 2px 2px 3px rgba(255, 255, 255, 0.8),
            inset -1px -1px 2px rgba(15, 118, 110, 0.06);
        }

        .faq-item-modern.active .faq-num {
          background: linear-gradient(135deg, var(--primary) 0%, #0D9488 100%);
          color: white;
          box-shadow:
            inset 1px 1px 2px rgba(255, 255, 255, 0.2),
            inset -1px -1px 2px rgba(0, 0, 0, 0.1),
            3px 3px 8px rgba(15, 118, 110, 0.15);
        }

        .faq-question-text {
          flex: 1;
        }

        /* ── Chevron Icon ── */
        .faq-chevron {
          width: 28px;
          height: 28px;
          min-width: 28px;
          border-radius: 50%;
          background: #F6FFFE;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow:
            inset 1px 1px 2px rgba(255, 255, 255, 0.8),
            inset -1px -1px 2px rgba(15, 118, 110, 0.05);
        }

        .faq-chevron svg {
          width: 16px;
          height: 16px;
          color: var(--primary);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .faq-item-modern.active .faq-chevron {
          background: rgba(56, 189, 248, 0.08);
          box-shadow:
            inset 1px 1px 3px rgba(255, 255, 255, 0.7),
            inset -1px -1px 2px rgba(56, 189, 248, 0.08);
        }

        .faq-item-modern.active .faq-chevron svg {
          transform: rotate(180deg);
          color: var(--accent);
        }

        /* ── Answer Panel ── */
        .faq-answer-panel {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          background: transparent;
        }

        .faq-item-modern.active .faq-answer-panel {
          max-height: 600px;
        }

        .faq-answer-inner {
          padding: 0 1.75rem 1.5rem 4.5rem;
          color: var(--text-muted);
          line-height: 1.75;
          font-size: 0.95rem;
          animation: faqAnswerFadeIn 0.4s ease forwards;
        }

        @keyframes faqAnswerFadeIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .content-section-modern {
            padding: 4rem 0;
          }
          .faq-title-modern {
            font-size: 2rem;
          }
          .faq-trigger-modern {
            padding: 1.2rem 1.25rem;
            font-size: 0.95rem;
            gap: 0.75rem;
          }
          .faq-answer-inner {
            padding: 0 1.25rem 1.25rem 3.25rem;
          }
          .faq-item-modern {
            border-radius: 18px;
          }
        }

        @media (max-width: 480px) {
          .faq-title-modern {
            font-size: 1.75rem;
          }
          .faq-num {
            width: 28px;
            height: 28px;
            min-width: 28px;
            font-size: 0.72rem;
          }
          .faq-answer-inner {
            padding: 0 1rem 1rem 2.75rem;
            font-size: 0.9rem;
          }
        }
      `}</style>

      {/* Title Section */}
      <div className="faq-header-modern animate-fade-in">
        <div className="faq-label-badge">
          <HelpCircle size={14} />
          <span>FAQs</span>
        </div>
        <h2 className="faq-title-modern">Frequently Asked Questions</h2>
        <p className="faq-subtitle-modern">
          Everything you need to know about our physiotherapy services, home visits, and booking process.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="faq-container-modern">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item-modern${activeIndex === index ? ' active' : ''}`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="faq-trigger-modern"
              aria-expanded={activeIndex === index}
            >
              <span className="faq-num">{String(index + 1).padStart(2, '0')}</span>
              <span className="faq-question-text">{faq.question}</span>
              <span className="faq-chevron">
                <ChevronDown />
              </span>
            </button>
            
            <div className="faq-answer-panel">
              <div className="faq-answer-inner">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content;
