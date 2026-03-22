import React from 'react';
import { Link } from 'react-router-dom';

const RespiratoryPhysio = () => {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Respiratory Physiotherapy</h1>
      
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What is Respiratory Physiotherapy?</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Respiratory Physiotherapy is a type of Physiotherapy used to diagnose and treat respiratory system disorders. Most approaches to Respiratory Physiotherapy employ a variety of chest clearance techniques, as well as exercises, and teach the patient rest positions to maximise the functional ability of their lungs. It aims to clear the patient's airways and enable them to resume physical activity and exercise.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563', fontStyle: 'italic' }}>
          (It should be noted that respiratory physiotherapy is not intended to replace medical treatment, but rather to supplement it and make it more effective.)
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Why is Respiratory Physiotherapy Done?</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>Respiratory physiotherapy is used to treat diseases of the respiratory system. Here are some examples:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Asthma</li>
          <li>Chronic Obstructive Pulmonary Disease</li>
          <li>Pneumonia</li>
          <li>Chronic bronchitis</li>
          <li>Emphysema</li>
          <li>Cystic fibrosis</li>
          <li>Inhaled foreign bodies</li>
          <li>Neuromuscular diseases</li>
        </ul>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          It is also beneficial for rehabilitation following major surgical procedures such as lung, heart, and liver transplants, as well as other chest operations.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563', fontStyle: 'italic' }}>
          It should be noted that respiratory physiotherapy is not intended to replace medical treatment, but rather to supplement it and make it more effective.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Techniques used for Respiratory Physiotherapy</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>There are several Respiratory Physiotherapy techniques:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Thoracic Expansion Exercises:</strong> Keeping the chest and shoulders relaxed, the patient takes a long, slow breath and holds the air in for two-three seconds at the end of the breath before gently exhaling.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Provoked Cough:</strong> Normally, when mucus in the chest loosens, it causes a cough. If this does not occur, the cough can be induced by gently pressing on the windpipe in the suprasternal space when inspiration ceases.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Postural Drainage:</strong> This is the ideal and most well-tolerated method for removing mucus accumulation in the lungs. The goal is to use gravity to drain mucus into the bronchi and trachea, where it can be expelled through coughing.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Manual Techniques:</strong> In this technique, the physiotherapist applies force to the chest wall in order to clear the airways. Ex Chest percussion or clapping, vibration, or Shaking</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Breathing Control:</strong> This includes periods of slow breathing, relaxation, and slowing down the breathing rate.</li>
        </ul>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Care After Respiratory Physiotherapy</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Respiratory Physiotherapy consists of methods that, in principle, should be completely harmless to one's health, so no special aftercare is required.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How to Book At-Home Respiratory Physiotherapy?</h2>
            <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Click to call our office number.</strong><br/>
                <a href="tel:+918318428997" style={{ color: 'var(--primary-dark)', textDecoration: 'none', fontWeight: '600' }}>+91-8318428997</a>
              </li>
              <li>
                <strong>Or, Book Appointment through our Portal.</strong><br/>
                <Link to="/#contact" className="btn" style={{ marginTop: '0.8rem', display: 'inline-block' }}>Book Appointment</Link>
              </li>
            </ol>
          </div>

          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Do you have a call \ chat support?</h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563', backgroundColor: 'var(--bg-color)', padding: '1.5rem', borderRadius: '15px' }}>
              Yes, you can Call \ WhatsApp our support team @ <br/>
              <a href="tel:+918318428997" style={{ color: 'var(--primary-dark)', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem', display: 'inline-block', marginTop: '0.5rem' }}>+91-8318428997</a> \ 
              <a href="https://wa.me/918737996914" style={{ color: 'var(--primary-dark)', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem', display: 'inline-block', marginTop: '0.5rem' }}>+91-8737996914</a><br/><br/>
              our executives will assist you immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RespiratoryPhysio;
