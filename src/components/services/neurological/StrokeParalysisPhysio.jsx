import React from 'react';
import { Link } from 'react-router-dom';

const StrokeParalysisPhysio = () => {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Stroke Paralysis Physiotherapy</h1>
      
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What is Stroke Paralysis?</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          A stroke is a sudden brain attack caused by a disruption in blood flow to the brain, which is usually caused by a blockage or a burst blood vessel. Brain cells require constant oxygen supply from the blood. Brain cells are damaged when there is insufficient blood supply. As a result, a stroke victim may have difficulty moving on one side of the body, difficulty communicating, and poor coordination and balance.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Stroke paralysis usually affects the opposite side of the brain that has been damaged by the stroke, but it can affect any part of the body. Most of stroke victims experience some degree of paralysis right away; it is possible to recover from the condition and regain body movements through paralysis stroke physiotherapy and stroke recovery exercises.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What causes Stroke Paralysis?</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>Stroke is classified as either hemorrhagic or ischemic based on its cause:</p>
        <ol style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li style={{ marginBottom: '0.5rem' }}>A blood clot causes a lack of blood supply to the brain, resulting in an Ischemic Stroke. The most common type of stroke.</li>
          <li style={{ marginBottom: '0.5rem' }}>Hemorrhagic Stroke is caused by bleeding in the brain caused by a burst blood vessel in the brain. This can happen in various parts of the brain.</li>
          <li style={{ marginBottom: '0.5rem' }}>A Transient Ischaemic Attack, also known as a ministroke, occurs when the brain's blood supply is temporarily cut off. The symptoms of a TIA resolve within 5 minutes to 24 hours because the disruption in blood supply occurs for a short period of time.</li>
        </ol>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What are the symptoms of Stroke Paralysis?</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>The effects of a stroke vary depending on which part of the brain is affected. The most common symptoms are:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Lack of Balance</li>
          <li>Speaking Difficulty</li>
          <li>Weak Facial Muscles</li>
          <li>Difficulty in Swallowing</li>
          <li>Incontinence (Difficulty with Bowel or Bladder Control)</li>
          <li>Difficulty in Moving, Coordinating or Walking</li>
          <li>Paralysis on one side of the Body</li>
        </ul>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Physiotherapy for Stroke Paralysis</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Physiotherapy performed by a specialist is beneficial to stroke patients. In order to achieve long-term improvements, physiotherapy treatment will maximise your potential while advising and supporting you throughout your treatment.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Starting physiotherapy as soon as feasible is crucial for the best recovery possible. Many stroke survivors have trouble carrying out routine duties, which can make life more challenging. In order to make your life simpler, our specialized physiotherapists will work closely with you.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How to Book At-Home Physiotherapy for Stroke Paralysis?</h2>
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

export default StrokeParalysisPhysio;
