import React from 'react';

const DoctorProfile = () => (
  <section id="doctor" className="section container">
    <div className="doctor-section glass">
      <div className="doctor-image">
        <img
          src="/Profile-Abhishek.jpeg"
          alt="Dr. Abhishek Yadav"
        />
      </div>
      <div className="doctor-info">
        <h2>Dr. Abhishek Yadav (PT)</h2>
        <h3>Consultant Physiotherapist</h3>
        <div className="credentials">BPT (UPUMS Saifai), MPT (Ortho), CMT, MIAP</div>
        <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
          Dedicated to providing personalized care and effective treatment plans. Specializing in orthopedic and neuro rehabilitation, helping patients achieve optimal physical function and quality of life.
        </p>
        <div
          className="stats"
          style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}
        >
          <div>
            <h4 style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>4+</h4>
            <p>Years Experience</p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>500+</h4>
            <p>Happy Patients</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DoctorProfile;
