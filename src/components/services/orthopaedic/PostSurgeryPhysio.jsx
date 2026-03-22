import React from 'react';
import { Link } from 'react-router-dom';

const PostSurgeryPhysio = () => {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Post Surgery Physiotherapy</h1>
      
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What is Post Surgical Rehab?</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Post-Surgery Rehabilitation is a specially designed program to re-establish muscle strength and joint function, prevent respiratory and vascular complications, increase mobility, and give the patient confidence to live a full life again. Depending upon the surgical procedure, the Post Surgery Physiotherapy could last from a month to a full year.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>When You Need Post-Operative Physiotherapy?</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>The most common surgeries after which patients require and benefit from Post-Surgery Rehabilitation Physiotherapy are:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Joint Replacement Surgeries</li>
          <li>Spinal & Neurological Surgeries</li>
          <li>ACL Reconstruction Surgeries</li>
          <li>Rotator Cuff Repair Surgeries</li>
          <li>Cancer Prevention Surgeries</li>
          <li>Orthopedic Surgeries</li>
          <li>Cardiac Surgeries</li>
        </ul>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Why You Need Post-Operative Physiotherapy?</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Post-Surgery Physiotherapy and Rehabilitation Treatments help in strengthening and Mobilize affected joints, muscles and improve circulation and breathing. Post-surgery Physiotherapy helps in:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Pain Reduction and Elimination</li>
          <li>Regain and Enhance Mobility</li>
          <li>Better Muscle Function and Strength</li>
          <li>Better Balance and Coordination</li>
          <li>Improved Blood Circulation</li>
          <li>Regain Independence</li>
        </ul>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          With our affordable services, all you need to worry about now is getting better sooner.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Stages of Surgery Rehabilitation Program</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          The overall goal of Post Surgical Rehabilitation is to help you get your abilities back and regain independence. But the specific goals are different for each person. Rehabilitation Program varies Depending upon the surgical procedure, also varies from person to person, differs in duration and is customized according to the type of surgery. Rehabilitation Programes broadly divided in following phases:
        </p>
        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li style={{ marginBottom: '0.5rem' }}>Phase 1 - Control Pain and Swelling</li>
          <li style={{ marginBottom: '0.5rem' }}>Phase 2 - Improve Range of Motion and Flexibility</li>
          <li style={{ marginBottom: '0.5rem' }}>Phase 3 - Improve Strength & Begin Balance Training</li>
          <li style={{ marginBottom: '0.5rem' }}>Phase 4 - Balance Training & Activity Training</li>
          <li style={{ marginBottom: '0.5rem' }}>Phase 5 - Gradual Return to Full Activity</li>
        </ol>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          By booking At-Home Service of PhysioNcare, you can get Post Surgical Rehabilitation Physiotherapy in your home, under the supervision of your family members or friends who can support you with your Post Surgery Rehabilitation, @ comfort of your Home Environment.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How to Book At-Home Post Surgery Physiotherapy?</h2>
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

export default PostSurgeryPhysio;
