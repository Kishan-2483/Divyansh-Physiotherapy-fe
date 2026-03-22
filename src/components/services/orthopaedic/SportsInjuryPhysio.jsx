import React from 'react';
import { Link } from 'react-router-dom';

const SportsInjuryPhysio = () => {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Sports Injury Physiotherapy</h1>
      
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What is Sports Injury Physiotherapy?</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Sports Injury Physiotherapy or "Sports Injury Rehabilitation" is a systematic program designed by a physical therapist for people with sports injuries. Depending on the type of injury suffered, the program has various parts such as strength exercises, mobilization, pain relief techniques and functional skills. We aim to maximize recovery by tailoring rehabilitation to your individual goals and monitoring your progress in between.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Conditions Treated under Sports Injury Physiotherapy?</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>Sports Injury Physiotherapy treats a range of conditions:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Muscle Sprains/Strain</li>
          <li>Tennis Elbow</li>
          <li>ACL/Quad/Ankle Strain</li>
          <li>Torn ACL/MCL</li>
          <li>Runner’s Knee</li>
          <li>Pulled Hamstrings</li>
          <li>Rotator Cuff Injury</li>
          <li>Shin Splits, Overuse Injury</li>
          <li>Frozen Shoulder or Dislocation</li>
          <li>Plantar Fasciitis Inflammation</li>
          <li>Achilles Tendonitis Inflammation</li>
        </ul>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Stages of Sports Injury Physiotherapy</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          It's natural to want to rush through the recovery process and get back into the game after suffering a sports injury. Taking the time to go through each stage of rehabilitation, on the other hand, will help ensure a full recovery. Following are the various stages of Sports Injury Rehabilitation:
        </p>
        <ol style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li style={{ marginBottom: '0.5rem' }}>Pain and Swelling Reduction</li>
          <li style={{ marginBottom: '0.5rem' }}>Improve Joint Mobility and Range of Motion</li>
          <li style={{ marginBottom: '0.5rem' }}>Regain Your Strength and Endurance</li>
          <li style={{ marginBottom: '0.5rem' }}>Increase Coordination Skills</li>
          <li style={{ marginBottom: '0.5rem' }}>Recovering Sports Specific Movements</li>
        </ol>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Benefits of At-Home Sports Injury Physiotherapy</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>Through Sports Injury Rehabilitation Program, you can get the following benefits:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Avoid the need for Surgery</li>
          <li>Mitigate the Risk of Re-Injury</li>
          <li>Increase Sports Performance</li>
          <li>Faster Recovery and Return to Sport</li>
          <li>Improving your Flexibility and Coordination</li>
        </ul>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          We provide you with the best of Sports Injury Physiotherapy, to get you on your way to speedy recovery and back on your feet.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How to Book At-Home Sports Injury Physiotherapy?</h2>
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

export default SportsInjuryPhysio;
