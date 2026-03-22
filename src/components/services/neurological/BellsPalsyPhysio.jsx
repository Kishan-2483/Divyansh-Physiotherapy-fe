import React from 'react';
import { Link } from 'react-router-dom';

const BellsPalsyPhysio = () => {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Bell's Palsy Physiotherapy</h1>
      
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What is Bell's Palsy?</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Bell's Palsy is a condition that causes facial paralysis. It occurs suddenly, affects only one side of the face, and has no apparent cause. Bell's Palsy is usually temporary. Physical therapy is an effective way to treat Bell's Palsy.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Causes Bell's Palsy</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Bell's palsy has no known cause. However, it is possible that it is connected to the cold sore virus. This virus may remain dormant on one of the facial nerves for some time before reemerging. Bell's palsy can also be caused by chickenpox and shingles viruses.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Symptoms of Bell's Palsy</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>The main symptom is complete paralysis or weakness on one side of the face. This paralysis can cause:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Drooping Eyebrows \ Difficulty Closing Eyes</li>
          <li>Mouth Drooping on One Side</li>
          <li>Dribble at the side of the mouth</li>
          <li>Slurred Speech</li>
          <li>Dryness or Watering of the affected eye</li>
          <li>Bulging lower eyelid</li>
        </ul>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Physiotherapy Treatment for Bell's Palsy</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Physiotherapy is important in the recovery from a Bell’s palsy. The aim of physiotherapy treatment is to stimulate and, therefore, promote the recovery of the damaged nerve fibres. By using the Electrical Muscle Stimulation Therapy, Physiotherapist can stimulate the nerve fibres whilst maintaining some of the strength of the facial muscles. This allows a faster recovery once the nerves start regenerating themselves. As the muscle strength improves your physiotherapist will show you more exercises to perform to increase the strength of the muscles in your face.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How to Book At-Home Physiotherapy for Bell's Palsy?</h2>
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

export default BellsPalsyPhysio;
