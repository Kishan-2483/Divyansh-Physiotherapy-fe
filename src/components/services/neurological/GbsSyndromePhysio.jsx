import React from 'react';
import { Link } from 'react-router-dom';

const GbsSyndromePhysio = () => {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Physiotherapy for GBS Syndrome</h1>
      
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What is Guillain-Barré Syndrome?</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Guillain-Barré Syndrome is a disease in which the peripheral nerves become inflamed and cease to work properly. A rare disorder known as Guillain-Barré Syndrome (GBS) occurs when the immune system attacks a portion of the nervous system. Peripheral nerve damage from GBS results in numbness and weakness. The most frequent cause of GBS is a viral or bacterial infection, which is thought to cause an immunological reaction that damages the neurons. Although GBS often goes away fairly fast, the weakness and lack of sensation might sometimes take some time to go away.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Types of Guillain-Barré Syndrome</h2>
        <ol style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li style={{ marginBottom: '0.5rem' }}>Acute Inflammatory Demyelinating Polyradiculoneuropathy</li>
          <li style={{ marginBottom: '0.5rem' }}>Acute Motor Axonal Neuropathy</li>
          <li style={{ marginBottom: '0.5rem' }}>Acute Motor Sensory Axonal Neuropathy</li>
          <li style={{ marginBottom: '0.5rem' }}>Miller Fisher Syndrome</li>
          <li style={{ marginBottom: '0.5rem' }}>Sensory GBS</li>
        </ol>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Causes Of Guillain-Barré Syndrome</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Inflammation of the peripheral nerves supplying your muscles, joints, and skin results in Guillian-Barre syndrome. The conduction of impulses moving along the nerves is slowed down by this inflammation, which stops the nerves from functioning properly. White blood cells attacking the nerves is the most typical explanation for the inflammation.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Physiotherapy for Guillain-Barré Syndrome</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Physiotherapy for Guilian-Barre syndrome patients will be helpful. The purpose of physical therapy is to accelerate your recovery and minimise the severity of your ailment. A person with Guilian-Barre syndrome can continue to make great progress with the use of physiotherapy after being released from the hospital. Starting physiotherapy as soon as feasible is advised. Physiotherapy for Guillain-Barré syndrome will:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Increase Strength</li>
          <li>Increase Mobility</li>
          <li>Increase Balance</li>
          <li>Improve Normal Patterns of Movement</li>
          <li>Increase Fitness and Energy Levels</li>
          <li>Improving Posture</li>
          <li>Minimise Secondary Complications</li>
          <li>Promote Recovery</li>
        </ul>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How to Book At-Home Physiotherapy for GBS?</h2>
            <ol style={{ paddingLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Click to call our office number.</strong><br/>
                <a href="tel:+918318428997" style={{ color: 'var(--primary-dark)', textDecoration: 'none', fontWeight: '600' }}>+91-8318428997</a>
              </li>
              <li>
                <strong>Or, Book Appointment through our Portal.</strong><br/>
                <a href="/#contact" className="btn" style={{ marginTop: '0.8rem', display: 'inline-block', textDecoration: 'none' }}>Book Appointment</a>
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

export default GbsSyndromePhysio;
