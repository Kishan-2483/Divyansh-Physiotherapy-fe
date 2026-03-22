import React from 'react';
import { Link } from 'react-router-dom';

const ParalysisPhysio = () => {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Physiotherapy for Paralysis</h1>
      
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What is Paralysis?</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Paralysis is a condition in which an individual is unable to use muscles in any part of the body and, as a result, is unable to move that body part. People who have been affected, lose all feelings in the affected area of their body. The left side of the body is affected by the right side of the brain and vice versa. The region affected by paralysis is determined by the region affected by stroke. The most common cause of paralysis is damage to the nervous system, specifically the spinal cord.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Physiotherapy can greatly benefit a paralysis patient by restoring maximum independence. Physiotherapy is also important in avoiding complications following paralysis. Although the rehabilitation process can be time-consuming, the results are sufficiently encouraging for a patient to continue with it until full recovery. The recovery time is determined by the type of paralysis experienced.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Types Of Paralysis</h2>
        <ol style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Monoplegia</strong> - This affects only one arm or leg.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Hemiplegia</strong> - This affects one arm and one leg on the same side of the body.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Paraplegia</strong> - Both the legs are affected.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Quadriplegia</strong> - Both arms and legs on both sides are affected.</li>
        </ol>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Causes Of Paralysis</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Spinal Cord Injury</li>
          <li>Head Injury</li>
          <li>Stroke</li>
          <li>Multiple Sclerosis</li>
          <li>Motor Neuron Disease</li>
          <li>Spina Bifida</li>
        </ul>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Physiotherapy Treatment for Paralysis</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Physiotherapy for paralysis patients should begin as soon as possible after a paralytic attack because it relaxes muscles and improves blood circulation. It may also slow the progression and deterioration caused by paralysis. Physiotherapy for paralysis patients improves muscle tone and the patient's overall well-being. When the brain is injured from an external source, physiotherapy reduces inflammation and speeds up healing.<br/><br/>
          The following are some of the advantages of Physiotherapy For Paralysis Patients:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Physiotherapy can assist a person in regaining as much mobility as possible.</li>
          <li>Physiotherapy can improve a person's respiratory function.</li>
          <li>It aids in lowering blood pressure and contracture.</li>
          <li>It also focuses on affected areas and works with them to ensure that the unaffected part of the body does not lose mobility or natural strength.</li>
          <li>A paralysed bladder can also be managed with physiotherapy.</li>
          <li>Physiotherapy improves a patient's morale and motivation by addressing post-traumatic experiences.</li>
          <li>It also serves as an excellent guide for the patient's family.</li>
        </ul>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How to Book At-Home Physiotherapy For Paralysis?</h2>
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

export default ParalysisPhysio;
