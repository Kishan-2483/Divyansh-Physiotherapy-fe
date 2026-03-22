import React from 'react';
import { Link } from 'react-router-dom';

const FootDropPhysio = () => {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Physiotherapy for Foot Drop</h1>
      
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What is Foot Drop?</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Foot drop (also known Dropped Foot) is the inability to raise the front of the foot due to weakness or paralysis of the muscles and nerves that do so. Foot drop is not a disease in and of itself; rather, it is a symptom of a larger problem or medical condition.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Foot drop can be identified by how it affects your gait. When walking, someone with foot drop may drag their toes along the ground because they are unable to lift the front of their foot with each step.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Causes Of Foot Drop</h2>
        <ol style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Nerve damage.</strong> The peroneal nerve communicates with the muscles that lift the foot. The most common cause of foot drop is peroneal nerve damage.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Muscle Problems.</strong> Foot drop can be caused by a condition that causes muscles to gradually weaken or deteriorate. Muscular dystrophy, and polio are examples of these disorders.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Neurological or spinal disorders.</strong> Foot drop can also be caused by neurological conditions. Stroke, multiple sclerosis (MS), and cerebral palsy are all possible conditions.</li>
        </ol>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>How Does Physiotherapy Help Foot Drop?</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Physiotherapy exercises for drop foot, or difficulty lifting the front of your foot, can target different muscle groups in the lower leg and back. Balance exercises are also employed in the treatment of the condition.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          The primary goal of Foot Drop Physiotherapy is to improve functional mobility related to walking. This will ensure that you can get around safely and may reduce your risk of falling.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Recovery from Foot Drop</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Foot drop can be very debilitating for patients and severely limit mobility. Physical therapy is the most effective treatment option for foot drop, despite the fact that there are several causes.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Long-term outcomes vary, but many patients can regain significant function and mobility after undergoing physical therapy. We promise to take good care of you as your trusted Physiotherapy provider with many years of experience treating muscular and neurological conditions. We will walk the road to recovery together.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How to Book At-Home Physiotherapy For Foot Drop?</h2>
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

export default FootDropPhysio;
