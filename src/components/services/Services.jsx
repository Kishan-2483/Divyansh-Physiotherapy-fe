import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain, Bone, UserRound, Baby, HeartPulse,
  Hospital, Bandage, Dumbbell, Heart, Pill, Wind
} from 'lucide-react';
import '../../index.css';

const Services = () => {
  const servicesList = [
    { title: "Neurological Physiotherapy", icon: <Brain size={48} />, link: "/services/neurological-physiotherapy" },
    { title: "Orthopaedic Physiotherapy", icon: <Bone size={48} />, link: "/services/orthopaedic-physiotherapy" },
    { title: "Geriatric Physiotherapy", icon: <UserRound size={48} />, link: "/services/geriatric-physiotherapy" },
    { title: "Pediatric Physiotherapy", icon: <Baby size={48} />, link: "/services/pediatric-neuro-physiotherapy" },
    { title: "Gynecological Physiotherapy", icon: <HeartPulse size={48} />, link: "/services/gynecological-physiotherapy" },
    { title: "Post Surgery Physiotherapy", icon: <Hospital size={48} />, link: "/services/post-surgery-physiotherapy" },
    { title: "Post Fracture Physiotherapy", icon: <Bandage size={48} />, link: "/services/post-fracture-physiotherapy" },
    { title: "Sports Injury Physiotherapy", icon: <Dumbbell size={48} />, link: "/services/sports-injury-physiotherapy" },
    { title: "Cardiac Rehab Physiotherapy", icon: <Heart size={48} />, link: "/services/cardiac-rehab-physiotherapy" },
    { title: "Physiotherapy Post Chemotherapy", icon: <Pill size={48} />, link: "/services/physiotherapy-post-chemotherapy" },
    { title: "Respiratory Physiotherapy", icon: <Wind size={48} />, link: "/services/respiratory-physiotherapy" }
  ];

  return (
    <section id="services" className="section container" style={{ backgroundColor: '#ffffff', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="text-center animate-fade-in">
        <h2 style={{ fontSize: '2rem', color: '#2c3e50', marginBottom: '3rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Services</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2.5rem 1.5rem',
        textAlign: 'center'
      }}>
        {servicesList.map((service, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'transform 0.2s ease-in-out',
            cursor: 'default'
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100px',
              width: '100px',
              color: 'var(--primary, #2c7a7b)',
            }}>
              {service.icon}
            </div>

            <h3 style={{
              fontSize: '1rem',
              color: '#333',
              marginBottom: '0.5rem',
              fontWeight: '500',
              lineHeight: '1.4'
            }}>
              {service.title}
            </h3>

            <Link to={service.link} style={{
              color: '#0000ee',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '400'
            }}
              onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              Know More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
