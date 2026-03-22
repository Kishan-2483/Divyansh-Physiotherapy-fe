import React from 'react';
import { Link } from 'react-router-dom';

const GeriatricPhysio = () => {
  const geriatricServices = [
    { title: "Joint Pain Physiotherapy", icon: "🦴", link: "/#contact", linkText: "Book Now" },
    { title: "General Weakness Physiotherapy", icon: "💪", link: "/#contact", linkText: "Book Now" },
    { title: "Postural Issues Physiotherapy", icon: "🧍", link: "/#contact", linkText: "Book Now" },
    { title: "Balance Disorders Physiotherapy", icon: "🦯", link: "/#contact", linkText: "Book Now" },
    { title: "Parkinson's Physiotherapy", icon: "🚶‍♂️", link: "/services/parkinsons-physiotherapy", linkText: "Know More" },
    { title: "Geriatric Neuro Physiotherapy", icon: "👵", link: "/services/geriatric-neuro-physiotherapy", linkText: "Know More" },
    { title: "Bell's Palsy Physiotherapy", icon: "🤕", link: "/services/bells-palsy-physiotherapy", linkText: "Know More" },
    { title: "Stroke Paralysis Physiotherapy", icon: "🧠", link: "/services/stroke-paralysis-physiotherapy", linkText: "Know More" },
    { title: "Physiotherapy for GBS Syndrome", icon: "🧬", link: "/services/gbs-syndrome-physiotherapy", linkText: "Know More" },
    { title: "Physiotherapy for Paralysis", icon: "🦼", link: "/services/paralysis-physiotherapy", linkText: "Know More" },
    { title: "Physiotherapy For Walking Difficulty", icon: "🩼", link: "/#contact", linkText: "Book Now" },
  ];

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Geriatric Physiotherapy</h1>
      
      {/* Sub-services Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2.5rem',
        marginBottom: '4rem',
        textAlign: 'center'
      }}>
        {geriatricServices.map((service, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'transform 0.2s ease-in-out',
            cursor: 'pointer'
          }}
            onClick={() => window.location.href = service.link || "#"}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              fontSize: '4rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '80px',
            }}>
              {service.icon}
            </div>
            <h3 style={{
              fontSize: '1.1rem',
              color: '#333',
              marginBottom: '1rem',
              fontWeight: '500',
              lineHeight: '1.4',
              minHeight: '3rem'
            }}>
              {service.title}
            </h3>
            {service.link?.startsWith('/#') ? (
              <a href={service.link} style={{
                color: '#0000ee',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                {service.linkText || "Know More"}
              </a>
            ) : (
              <Link to={service.link || "#"} style={{
                color: '#0000ee',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                {service.linkText || "Know More"}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Detailed Information */}
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What is Geriatric Physiotherapy?</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          As we age, several health problems arise as our metabolism slows and our ability to stay fit decreases. Geriatric physical therapy can be very effective in keeping us in shape. It helps maintain mobility, control chronic joint pain, work on limitations and posture, control physiological disorders, and increase endurance and strength.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>How Does Geriatric Physiotherapy Work?</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Our Physiotherapist conduct a thorough evaluation of your problem, taking into account your past medical history and the impact of other medical conditions on this problem. Things like your gait, the ability to get out of a chair and out of bed are assessed. It also runs some balance tests to get a baseline for your current balance levels. Your treatment will be individually tailored to your needs. From your assessment, the key areas will be highlighted and your treatment will aim to improve those issues.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Conditions Treated in Geriatric Physiotherapy?</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Many diseases can affect older people, such as a sprained ankle or back pain, but also age-related problems, such as joint pain, arthritis or osteoporosis. You may also have comorbidities such as Alzheimer's, diabetes, cancer, heart disease that also affect your health. It is well known that poor physical condition in older adults can lead to health problems such as stroke, high blood pressure, diabetes, and respiratory and circulatory problems.<br/><br/>
          Geriatric Physiotherapy is broad and encompasses all conditions that may affect an older adult. Such as:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Joint Pain</li>
          <li>Generalized Weakness</li>
          <li>Postural Instability</li>
          <li>Balance Impairment</li>
          <li>Post Surgery Rehab</li>
          <li>Neurological Issues</li>
          <li>Age-Related Muscle Reduction</li>
          <li>Parkinson's Disease</li>
        </ul>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Benefits of At-Home Geriatric Physiotherapy?</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Availing At-Home Geriatric Physiotherapy program of PhysioNcare can bring you a number of benefits:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Improving your quality of life</li>
          <li>Improving mobility indoors and outdoors</li>
          <li>Maintaining your muscle strength</li>
          <li>Balance and gait training</li>
          <li>Regain your independence</li>
          <li>Maximize your safety</li>
          <li>Reduce the risk of falls</li>
          <li>Restore your confidence</li>
        </ul>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          With our affordable service, all you need to worry about now is getting better sooner.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How to Book At-Home Geriatric Physiotherapy?</h2>
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

export default GeriatricPhysio;
