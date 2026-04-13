import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartPulse, Baby, Activity, PersonStanding,
  Droplets, ShieldCheck
} from 'lucide-react';

const GynecologicalPhysio = () => {
  const gynaeServices = [
    { title: "Physiotherapy During Pregnancy", icon: <HeartPulse size={48} />, link: "#" },
    { title: "Physiotherapy After Childbirth", icon: <Baby size={48} />, link: "#" },
    { title: "Physiotherapy for Pelvic Floor", icon: <Activity size={48} />, link: "#" },
    { title: "Physiotherapy for Perineal Pain", icon: <PersonStanding size={48} />, link: "#" },
    { title: "Physiotherapy for Incontinence", icon: <Droplets size={48} />, link: "#" },
    { title: "Physiotherapy for Organ Prolapse", icon: <ShieldCheck size={48} />, link: "#" }
  ];

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Gynecological Physiotherapy</h1>
      
      {/* Services Grid matching UI */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        marginBottom: '4rem'
      }}>
        {gynaeServices.map((service, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '80px',
              color: 'var(--primary, #2c7a7b)',
            }}>
              {service.icon}
            </div>
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
        
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What is Gynecological Physiotherapy?</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Gynecological Physiotherapy is a subspecialty of physiotherapy that focuses on the treatment of all gynaecological issues that women face in their lives. It is the care of women during childbirth, both before and after the delivery. It also entails teaching antenatal classes that aid in the treatment of incontinence (inability to hold urine) and in the case of women undergoing Gynecological Surgery. Physiotherapy benefits women of all ages, including young athletes, childbearing women, menopausal women, and the elderly.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Physiotherapy During Pregnancy and After Delivery</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          During pregnancy and After Delivery, a series of changes take place in the woman's body to accommodate the new being that is being formed. Sometimes this can lead to minor imbalances, aches, pains, etc. generally in the areas of the back, pelvis and legs. There is much that a specialized physiotherapist can do to alleviate these discomforts in future moms.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Conditions Treated under Gynecological Physiotherapy</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Postural Issues</li>
          <li>Pelvic Floor Prolapse</li>
          <li>Problems During Menopause</li>
          <li>Lower Back Pains</li>
          <li>Urinary Tract Infection</li>
          <li>Polycystic Ovarian Syndrome</li>
          <li>Urinary Incontinence</li>
          <li>Cervical Cancer</li>
          <li>Neonatal / Antinatal</li>
          <li>Pelvic/Vaginal Pain</li>
          <li>Breast Pain</li>
          <li>Menstrual Issues</li>
          <li>Postpartum Depression</li>
        </ul>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Benefits of Gynecological Physiotherapy</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Women have specific health concerns, such as with pregnancy and post-partum care. Physical therapists can offer specialized management of issues related to women's health. Additionally, Physiotherapy takes care of the overall health of a woman and prevents them from any future problems. Gynecological Physiotherapy helps in relieving pain as well as improve women's strength and overall health, it also provides proper rehab after various surgical procedures. Gynecological Physiotherapists also provide proper training sessions prior to childbirth as well as after delivery in order to reduce complications, maintain proper health, and help in managing the changes that the body has gone through during the pregnancy period
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How to Book At-Home Gynecological Physiotherapy?</h2>
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

export default GynecologicalPhysio;
