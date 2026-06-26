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
        <h2 className="faq-title">CONTENTS</h2>
        <p style={{ marginBottom: '3rem' }}>Frequently Asked Questions about our services</p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item${activeIndex === index ? ' active' : ''}`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="faq-trigger"
              aria-expanded={activeIndex === index}
            >
              {faq.question}
              <span className="faq-trigger-icon">+</span>
            </button>
            
            <div className="faq-answer-wrapper">
              <div className="faq-answer-content">
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
