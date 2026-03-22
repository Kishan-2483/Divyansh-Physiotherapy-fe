import React from 'react';
import { Link } from 'react-router-dom';

const GeriatricNeuroPhysio = () => {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Geriatric Neurological Physiotherapy</h1>
      
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What is Geriatric Neurological Physiotherapy?</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Geriatric Neurological Physiotherapy involves the treatment of old age patients with movement and function disorders that have originated from problems within the body’s nervous and neuromuscular system. These conditions often manifest themselves as muscle weakness, poor balance and coordination, uncontrolled muscle spasm and tremors, loss of function and decreased sensation.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>How Does Geriatric Neurological Physiotherapy Work?</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Geriatric Neurological Physiotherapy is able to kick-start the message pathways that the Patient's brain is struggling to use, to make new pathways through repetitive actions and exercises, in the guidance of Physiotherapist. Olg age patients undergoing Neurological Physiotherapy can improve symptoms such as, difficulties with loss of balance, loss of hand and arm, or leg and foot function, walking, spasticity and pain. It is a process that centrally involves the patient in making plans and setting goals that are important and relevant to their own particular Neurological Issues.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Conditions Treated in Geriatric Neurological Physiotherapy</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Any neurological condition that affects movement and physical ability of old age Patients, can be treated using Geriatric Neurological Physiotherapy. Some common conditions in which this is useful include:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Stroke Paralysis</li>
          <li>Parkinson’s Disease</li>
          <li>Bell’s Palsy</li>
          <li>Multiple Sclerosis</li>
          <li>Traumatic Brain Injury</li>
          <li>Spinal Cord Injury</li>
          <li>Alzheimer’s Disease</li>
          <li>Guillain–Barre Syndrome (GBS)</li>
          <li>etc.</li>
        </ul>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Benefits of Geriatric Neurological Physiotherapy?</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Geriatric Neurological physiotherapy should commence as soon as possible following Injury or Disability for the best possible recovery. The treatment approach used varies depending on the individual, their symptoms and their goals. Geriatric Neurological Physiotherapy treatment will help to:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Make movements easier to achieve</li>
          <li>Retrain Normal Patterns of Movement</li>
          <li>Increase Muscle Strength</li>
          <li>Increase Range of Movement</li>
          <li>Improve Motor Skills</li>
          <li>Improve posture & balance</li>
          <li>Reduce Muscle Stiffness</li>
          <li>Increase Fitness Levels and Endurance</li>
          <li>Reduce Risk of Falling</li>
          <li>Increase independence</li>
          <li>Improve ability with everyday activities</li>
        </ul>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How to Book At-Home Geriatric Neurological Physiotherapy?</h2>
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

export default GeriatricNeuroPhysio;
