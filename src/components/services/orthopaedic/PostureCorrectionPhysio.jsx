import React from 'react';
import { Link } from 'react-router-dom';

const PostureCorrectionPhysio = () => {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Posture Correction Physiotherapy</h1>
      
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What is Good Posture?</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Good Posture is the perfect alignment of your body when standing or sitting. Correct placement teaches you how to hold your body against gravity while putting minimum strain and tension on supporting structures such as muscles and ligaments.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Posture is more important than most people realise. It helps you maintain balance, ensures the correct alignment of your bones and joints, protects your spine, and prevents muscular soreness by focusing your body weight over your feet. In addition, standing or sitting will make you appear more attractive.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Consequences of Poor Posture</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Bad posture not only affects appearance, but it also contributes to a slew of health issues that have an impact on your overall health and well-being. Muscle weakness is most common in the core muscles, the back, pelvis, and buttocks, resulting in body instability.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Round shoulders, muscle imbalances, neck pain, painful cartilage degeneration, headaches, muscle fatigue, a protruding belly, and general body aches can all result from poor posture.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Physiotherapy for Posture Correction</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Posture Correction Physiotherapy focuses on increasing muscle strength and loading your postural muscles so that they can withstand the stresses of daily life. An individual's posture may change as a result of pain or injury. Physiotherapists can help people regain their natural posture by providing pain relief and rehabilitation. We enable you to be comfortable in whatever posture you prefer while also educating you on the importance of changing your posture periodically throughout the day.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Goals of Posture Correction Physiotherapy</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Developing good posture habits.</li>
          <li>Ensure that your joints have a normal range of motion.</li>
          <li>Obtain a normal range of nerve extension.</li>
          <li>Obtain the proper muscle length.</li>
          <li>Increase your muscle endurance.</li>
          <li>Acquire a high level of muscle strength.</li>
          <li>Create a strong sense of spatial awareness.</li>
        </ul>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How to Book At-Home Posture Correction Physiotherapy?</h2>
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

export default PostureCorrectionPhysio;
