import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const Services = () => {
  const servicesList = [
    { 
      title: "Neurological Physiotherapy", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80", 
      link: "/services/neurological-physiotherapy",
      desc: "Rehabilitation for stroke, Parkinson's, bells palsy, and nerve injuries to restore mobility and function."
    },
    { 
      title: "Orthopaedic Physiotherapy", 
      image: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&w=600&q=80", 
      link: "/services/orthopaedic-physiotherapy",
      desc: "Treatment for joint pains, fractures, spinal injuries, arthritis, and posture correction."
    },
    { 
      title: "Geriatric Physiotherapy", 
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80", 
      link: "/services/geriatric-physiotherapy",
      desc: "Specialized physical therapy for seniors to improve balance, strength, and age-related fitness."
    },
    { 
      title: "Pediatric Physiotherapy", 
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80", 
      link: "/services/pediatric-neuro-physiotherapy",
      desc: "Gentle therapeutic care for children dealing with developmental delays and neuro disorders."
    },
    { 
      title: "Gynecological Physiotherapy", 
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80", 
      link: "/services/gynecological-physiotherapy",
      desc: "Support for pre & post-pregnancy conditions, pelvic health, and women's core wellness."
    },
    { 
      title: "Post Surgery Physiotherapy", 
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80", 
      link: "/services/post-surgery-physiotherapy",
      desc: "Accelerated, guided healing programs post joint replacements and major surgical operations."
    },
    { 
      title: "Post Fracture Physiotherapy", 
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80", 
      link: "/services/post-fracture-physiotherapy",
      desc: "Stiffness relief and strength recovery programs following cast removals and bone healing."
    },
    { 
      title: "Sports Injury Physiotherapy", 
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80", 
      link: "/services/sports-injury-physiotherapy",
      desc: "Fast-tracked recovery from muscle strains, sprains, torn ligaments, and athletic issues."
    },
    { 
      title: "Cardiac Rehab Physiotherapy", 
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80", 
      link: "/services/cardiac-rehab-physiotherapy",
      desc: "Controlled cardiovascular exercise protocols to rebuild heart strength post cardiac events."
    },
    { 
      title: "Physiotherapy Post Chemotherapy", 
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80", 
      link: "/services/physiotherapy-post-chemotherapy",
      desc: "Conditioning sessions to combat fatigue, muscle loss, and neuropathic pains post cancer treatments."
    },
    { 
      title: "Respiratory Physiotherapy", 
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80", 
      link: "/services/respiratory-physiotherapy",
      desc: "Chest therapy and targeted breathing exercises to optimize lung capacity and asthma symptoms."
    }
  ];

  return (
    <section id="services" className="section container services-section">
      <div className="text-center animate-fade-in">
        <h2 className="services-title">Our Services</h2>
      </div>

      <div className="services-grid-new">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card-new">
            <div className="service-image-container">
              <img src={service.image} alt={service.title} className="service-card-img" />
            </div>

            <div className="service-card-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>

              <Link to={service.link} className="service-link-new">
                Know More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
