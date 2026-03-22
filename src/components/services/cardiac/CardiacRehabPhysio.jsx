import React from 'react';
import { Link } from 'react-router-dom';

const CardiacRehabPhysio = () => {
  const cardiacServices = [
    { title: "Physiotherapy for Stroke Rehab", icon: "🧠", link: "#" },
    { title: "Physiotherapy for Cardiomyopathy", icon: "❤️‍🩹", link: "#" },
    { title: "Physiotherapy for Vascular Disease", icon: "🦵", link: "#" },
    { title: "Physiotherapy for Pericardial Disease", icon: "🫀", link: "#" },
    { title: "Physiotherapy for Deep Vein Thrombosis", icon: "🩸", link: "#" },
    { title: "Physiotherapy for Ischaemic Lung Disease", icon: "🫁", link: "#" },
    { title: "Physiotherapy for Coronary Artery Disease", icon: "❤️", link: "#" },
    { title: "Physiotherapy for Rheumatic Heart Disease", icon: "💓", link: "#" },
    { title: "Physiotherapy for Hypertension", icon: "🩺", link: "#" }
  ];

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Cardiac Rehab Physiotherapy</h1>
      
      {/* Services Grid matching UI */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2.5rem',
        marginBottom: '4rem'
      }}>
        {cardiacServices.map((service, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{service.icon}</div>
            <h3 style={{ fontSize: '1.1rem', color: '#333', marginBottom: '0.5rem', fontWeight: '500', minHeight: '40px' }}>{service.title}</h3>
            <Link to={service.link} style={{
              color: '#0000ee',
              textDecoration: 'none',
              fontSize: '0.9rem',
              marginTop: '0.5rem'
            }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What is Cardiac Rehab Physiotherapy?</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Cardiac Rehabilitation Physiotherapy, also known as Cardiac Rehab Physiotherapy, is a personalised exercise and education programme. The programme is intended to assist you in improving your health and recovering from a heart attack, other forms of heart disease, or heart surgery.
        </p>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Exercise training, emotional support, and education about lifestyle changes to reduce your risk of heart disease, such as eating a heart-healthy diet, maintaining a healthy weight, and quitting smoking, are common components of Cardiac Rehabilitation.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Cardiac Rehabilitation Physiotherapy aims to help you regain strength, keep your condition from worsening, lower your risk of future heart problems, and improve your health and quality of life.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Purpose of Cardiac Rehabilitation</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Cardiac Rehabilitation is an option for people suffering from various types of heart disease. You may benefit from Cardiac Rehabilitation in particular if your medical history includes heart-related ailments such as, Heart attack, Coronary Artery Disease, Heart Failure, Peripheral Artery Disease, Angina, Cardiomyopathy, Bypass Surgery, Angioplasty, Heart Surgeries, Pulmonary Hypertension etc.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Importance of Physiotherapy In Cardiac Rehabilitation Program</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Physiotherapy can help you improve your cardiovascular fitness with Cardiac Rehabilitation. Walking, cycling, rowing, and jogging are all low-impact activities that your Physiotherapist will most likely recommend.
        </p>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          You should exercise at least three times per week. Your Physiotherapist will teach you proper exercise techniques such as warm-up and cool-down periods.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          To improve your muscular fitness, you could also do muscle-strengthening exercises like lifting weights or other resistance training exercises two or three times per week.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>After Cardiac Rehabilitation</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          After your programme ends, you'll need to keep up the diet, exercise, and other healthy lifestyle habits you learned for the rest of your life in order to maintain the heart-health benefits. The goal is for you to leave the programme with the tools you need to exercise on your own and live a healthier lifestyle.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How to Book At-Home Cardiac Rehab Physiotherapy?</h2>
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

export default CardiacRehabPhysio;
