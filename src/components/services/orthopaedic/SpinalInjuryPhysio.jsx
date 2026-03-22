import React from 'react';
import { Link } from 'react-router-dom';

const SpinalInjuryPhysio = () => {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Physiotherapy For Spinal Injury</h1>
      
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What is a Spinal Cord Injury?</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          A spinal cord injury occurs when the spinal cord, which transports signals to and from the brain, is damaged. Depending on the level and severity of the injury, a person with spinal cord damage may experience loss of sensation and motor function. Most spinal cord injuries are incomplete and do not sever the spinal cord. Some injuries will heal almost completely. Others may cause total paralysis.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Causes of Spinal Cord Injury</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          The most common causes of spinal cord damage are trauma, which includes: 
          Accidents on the road, sports injuries, and domestic injuries. Diseases such as Transverse Myelitis, Polio, Spina Bifida, Friedreich's Ataxia, and Multiple Sclerosis can also cause spinal cord damage.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Types of Spinal Cord Injury and Complications</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          A Complete Spinal Cord Injury causes paralysis and loss of sensation below the level of injury.<br />
          Depending on the severity of the injury, an Incomplete Spinal Cord Injury will affect different parts of the body.
        </p>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          In addition to loss of mobility and sensation below the level of injury, individuals with an injured spinal cord frequently experience other complications such as:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Bowel and Bladder Function Problems</li>
          <li>Difficulties Breathing</li>
          <li>Sexual Dysfunction has been lost</li>
          <li>Spasticity</li>
          <li>Muscle Wasting and Weakness</li>
          <li>Neuropathic Pain</li>
        </ul>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Physiotherapy for Spinal Cord Injury</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Physiotherapy for a person with a spinal cord injury should begin as soon as possible after the injury.A spinal cord injury will change your life and the lives of those around you. Specialist neurological physiotherapy helps people who have had a spinal cord injury.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Working closely with your partners, family, and carers, physiotherapy treatment will support and guide you through your treatment. Our Physiotherapist will tailor your treatment to your specific needs. Physiotherapy treatment will thus be determined by the extent and severity of your spinal cord damage.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How to Book At-Home Physiotherapy for Spinal Cord Injury?</h2>
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

export default SpinalInjuryPhysio;
