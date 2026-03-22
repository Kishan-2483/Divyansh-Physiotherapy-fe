import React from 'react';
import { Link } from 'react-router-dom';

const ParkinsonsPhysio = () => {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Parkinson's Physiotherapy</h1>
      
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What is Parkinson’s Disease?</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Parkinson's disease, which affects dopaminergic neurons in the brain's substantia nigra region, which is primarily in charge of producing dopamine, is essentially a neurodegenerative disorder. The molecule known as dopamine is in charge of moving signals across the brain. Dopamine, for instance, sends the signal to the nerve cells that control the muscles you require to scratch yourself when you sense the urge to do so.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Causes Of Parkinson’s Disease</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Parkinson's disease symptoms are thought to result from the death of dopaminergic cells in the substantia nigra. Though it is still unknown how dopamine-producing cells die, it is believed to be related to both genetic and environmental factors. The beginning of Parkinson's Disease has been connected to a number of causal monogenetic mutations. Although it is believed that only a tiny portion of Parkinson's Disease cases may be explained by this idea.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Physiotherapy for Parkinson’s Disease</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Parkinson's disease can be treated with physiotherapy, which focuses on transfers, posture, upper-limb function, balance, physical capacity, and activity. In order to preserve or improve the patient's level of independence and general quality of life, physiotherapists may also use cognitive movement and cueing tactics, as well as exercise.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Physiotherapists work to encourage participation in leisure activities that improve fitness and inclusion in community activities in the early stages of Parkinson's disease, when symptoms are not as harmful. Patients are taught movement techniques when their symptoms worsen in order to get through their struggles with thought and movement. This includes the physical therapist coming up with ways to make up for lost function.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Benefits of Physiotherapy in Parkinson’s Disease</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Aids in preserving and enhancing functional abilities</li>
          <li>Aids in improving balance and posture correction</li>
          <li>Reduces the likelihood of falls</li>
          <li>Aids in maintaining strength and flexibility</li>
          <li>Enhances independence and daily activities like getting out of bed and sitting up from a chair.</li>
          <li>Maintains a secure gait pattern whether or not using a mobility aid.</li>
          <li>If freezing is obvious, teaching coping techniques like auditory or visual cues may be appropriate.</li>
          <li>Aids in enhancing manual tasks like reaching and grasping.</li>
          <li>Maintains respiratory health by encouraging breathing exercises</li>
        </ul>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How to Book At-Home Physiotherapy for Parkinson’s Disease?</h2>
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

export default ParkinsonsPhysio;
