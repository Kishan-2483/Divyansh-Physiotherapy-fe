import React from 'react';
import { Link } from 'react-router-dom';

const FrozenShoulderPhysio = () => {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Frozen Shoulder Physiotherapy</h1>
      
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What is Frozen Shoulder?</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Frozen shoulder is a condition that causes shoulder pain and stiffness, eventually making movement of the upper arm and shoulder difficult. The symptoms of frozen shoulder appear gradually and worsen over time. What is commonly referred to as frozen shoulder is characterised by pain and stiffness in the shoulder, making everyday tasks painful. It reduces your range of motion and negatively impacts your quality of life.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Causes Of Frozen Shoulder</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          The exact cause of frozen shoulder is unknown. The following risk factors have been linked to the onset of frozen shoulder:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Diabetes</li>
          <li>Stroke</li>
          <li>Thyroid Disease</li>
          <li>Shoulder Pain</li>
          <li>Dupuytren's Syndrome</li>
          <li>Parkinsonism</li>
          <li>Cancer</li>
        </ul>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          It is most common in people aged 40 to 60. Females are four times more likely than males to develop frozen shoulder.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Stages of Frozen Shoulder</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li style={{ marginBottom: '1rem' }}><strong>Stage 1 :</strong> This stage lasts between 3 and 9 months. During this stage, any movement of your shoulder causes pain, and your shoulder's range of motion begins to be limited.</li>
          <li style={{ marginBottom: '1rem' }}><strong>Stage 2 :</strong> This stage lasts between 4 and 12 months. Pain may begin to fade during the frozen stage. However, your shoulder stiffens and your range of motion decreases significantly.</li>
          <li style={{ marginBottom: '1rem' }}><strong>Stage 3 :</strong> It could take anywhere between 12 and 42 months. The range of motion in your shoulder begins to improve with recovery during the thawing stage.</li>
        </ul>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Physiotherapy For Frozen Shoulder</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Frozen shoulder can heal without treatment, but the pain and stiffness can last for months or years. Physiotherapy, in conjunction with medication, is critical in managing pain and stiffness and assisting you in returning to your normal daily activities.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Electrotherapy (Ultrasound, IFT, electrical stimulation), Hot fomentation, Cryotherapy, Manual Therapy (Mobilisation, Myofascial Release techniques), Exercises, and Stretching would be used to treat this condition.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How to Book At-Home Physiotherapy For Frozen Shoulder?</h2>
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

export default FrozenShoulderPhysio;
