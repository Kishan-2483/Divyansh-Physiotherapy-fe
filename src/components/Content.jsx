import React, { useState } from 'react';

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
    <section id="content" className="section container">
      <div className="text-center animate-fade-in">
        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '1rem', textTransform: 'uppercase' }}>CONTENTS</h2>
        <p style={{ marginBottom: '3rem' }}>Frequently Asked Questions about our services</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ 
            marginBottom: '1rem', 
            border: '1px solid var(--glass-border)', 
            borderRadius: '10px',
            overflow: 'hidden',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <button 
              onClick={() => toggleAccordion(index)}
              style={{
                width: '100%',
                padding: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: activeIndex === index ? 'var(--bg-color)' : 'white',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--primary-dark)',
                transition: 'background-color 0.3s'
              }}
            >
              {faq.question}
              <span style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            
            {activeIndex === index && (
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: 'white',
                borderTop: '1px solid var(--glass-border)',
                color: '#444',
                lineHeight: '1.8'
              }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content;
