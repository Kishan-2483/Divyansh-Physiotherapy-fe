import React from 'react';
import { Link } from 'react-router-dom';

const OrthopaedicPhysio = () => {
  const orthoServices = [
    { title: "Post Fracture Physiotherapy", icon: "🦴", link: "/services/post-fracture-physiotherapy" },
    { title: "Sports Injury Physiotherapy", icon: "🏃‍♂️", link: "/services/sports-injury-physiotherapy" },
    { title: "Post Surgery Physiotherapy", icon: "🏥", link: "/services/post-surgery-physiotherapy" },
    { title: "Frozen Shoulder Physiotherapy", icon: "🧊", link: "/services/frozen-shoulder-physiotherapy" },
    { title: "Physiotherapy For Spinal Injury", icon: "🩻", link: "/services/spinal-injury-physiotherapy" },
    { title: "Posture Correction Physiotherapy", icon: "🧍", link: "/services/posture-correction-physiotherapy" },
    { title: "Cervical Spondylosis Physiotherapy", icon: "🧑‍⚕️", link: "/services/cervical-spondylosis-physiotherapy" },
    { title: "Ankylosing Spondylitis", icon: "🦴", link: "/services/ankylosing-spondylitis" },
    { title: "Arthritis Physiotherapy", icon: "🦵", link: "/services/arthritis-physiotherapy" },
    { title: "Shoulder Dislocation Physiotherapy", icon: "🤕", link: "/services/shoulder-dislocation-physiotherapy" },
    { title: "Physiotherapy For Ligament Injury", icon: "💥", link: "/services/ligament-injury-physiotherapy" },
    { title: "Back Pain Physiotherapy", icon: "⚡", link: "/services/back-pain-physiotherapy" },
    { title: "Knee Pain Physiotherapy", icon: "🦵", link: "/services/knee-pain-physiotherapy" }
  ];

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Orthopaedic Physiotherapy</h1>
      
      {/* Sub-services Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2.5rem',
        marginBottom: '4rem',
        textAlign: 'center'
      }}>
        {orthoServices.map((service, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'transform 0.2s ease-in-out',
            cursor: 'pointer'
          }}
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
            <Link to={service.link || "#"} style={{
              color: '#0000ee',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              Know More
            </Link>
          </div>
        ))}
      </div>

      {/* Detailed Information */}
      <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>What is Orthopaedic Physiotherapy?</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Orthopaedic Physiotherapy focuses on orthopaedics and the treatment of musculoskeletal conditions, which include joints, muscles, bones, ligaments, and tendons. It diagnoses, manages, and cures musculoskeletal disorders and helps patients recover from orthopaedic surgery. Any condition that causes pain or restricted functional mobility as a result of an injury to your body's bony or soft tissue structures may benefit from the skilled services of orthopaedic Physiotherapy.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Conditions treated under Orthopaedic Physiotherapy</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Sports Injuries, Ligament Strain, Sprain or tear</li>
          <li>Fracture Rehabilitation</li>
          <li>Inflammation of tendons or Bursa</li>
          <li>Osteo -Arthritis</li>
          <li>Rheumatoid - Arthritis</li>
          <li>Osteoporosis</li>
          <li>Anklyosing Spondylitis</li>
          <li>Scoliosis</li>
          <li>Spondylolisthesis</li>
          <li>Spondylolysis</li>
          <li>Posture Related Issues</li>
          <li>Surgical Rehabilitation of Hip,Shoulder,Knee and Foot/Ankle</li>
        </ul>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Physiotherapy Treatments of Orthopaedic Conditions</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>Physiotherapy treatments of Orthopaedic Conditions can include the following:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li><strong>Ultrasound Therapy:</strong> A machine that generates ultrasonic waves that are transmitted into the affected area via conducting gel. This, in turn, causes a micro-massage effect, which promotes circulation, reduces pain, increases tissue regenerative abilities, and aids in muscle relaxation.</li>
          <li><strong>Interferential Therapy:</strong> This is an electrical current delivered to the injured area via two or four electrodes. It sends two opposing currents into the body part. It can be used to alleviate pain. Reduce swelling and speed up the healing process.</li>
          <li><strong>Rehabilitation Programme:</strong> Physiotherapy exercises are scientifically designed to improve your posture, increase the mobility of your spine and joints, and reestablish and strengthen the muscle groups that support your bones. This will be customised and graded to ensure that you realize your full potential, this is also an essential step in your recovery.</li>
          <li><strong>Neuromuscular Stimulation:</strong> An electrical machine that uses variable currents and electrodes to strengthen very weak muscles. This is extremely beneficial after knee surgery to strengthen the muscles that support the knee.</li>
          <li><strong>Manual therapy:</strong> It includes techniques such as mobilisation, muscle manipulation, and other related techniques.</li>
          <li><strong>Taping:</strong> Taping for joint support or alignment relieves pain and allows for normal movement.</li>
        </ul>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Benefits of Orthopaedic Physiotherapy?</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li>Reduces Pain</li>
          <li>Builds Strength</li>
          <li>Promotes Healing</li>
          <li>Improves Balance</li>
          <li>Improves Joint Movement and Mobility</li>
          <li>Improves Muscle or Joint Flexibility</li>
          <li>Unnecessary Surgeries can be avoided</li>
        </ul>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How do I book At-Home Orthopaedic Physiotherapy?</h2>
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
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Do you have call \ chat support?</h2>
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

export default OrthopaedicPhysio;
