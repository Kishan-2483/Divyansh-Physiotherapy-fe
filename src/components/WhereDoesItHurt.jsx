import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight, Shield } from 'lucide-react';

const WhereDoesItHurt = () => {
  const [selectedPart, setSelectedPart] = useState('Neck');

  const bodyPartsData = {
    Neck: {
      title: "Neck Pain & Stiffness",
      ailments: ["Cervical Spondylosis", "Whiplash Injury", "Tech Neck (Muscle strain)", "Pinched Nerves"],
      description: "Neck stiffness and pain often result from poor posture, desk jobs, or disc degeneration. Our targeted therapy relieves pressure on cervical nerves and restores full mobility.",
      treatmentLink: "/services/cervical-spondylosis-physiotherapy",
      treatmentName: "Cervical Physiotherapy"
    },
    Shoulder: {
      title: "Shoulder Pain & Frozen Joint",
      ailments: ["Frozen Shoulder (Capsulitis)", "Rotator Cuff Tendinitis", "Shoulder Dislocation Recovery", "Bursitis"],
      description: "Shoulder conditions restrict arm reach and affect sleep comfort. Dr. Abhishek uses specialized mobilization techniques to break joint stiffness and rebuild rotational strength.",
      treatmentLink: "/services/frozen-shoulder-physiotherapy",
      treatmentName: "Frozen Shoulder Therapy"
    },
    Back: {
      title: "Lower Back Pain & Sciatica",
      ailments: ["Lumbar Spondylosis", "Sciatica Nerve Pain", "Herniated/Slipped Disc", "Muscle Spasms"],
      description: "Lower back pain is a leading cause of mobility loss. We offer decompression therapies, manual release, and progressive core stabilization to get you moving comfortably.",
      treatmentLink: "/services/back-pain-physiotherapy",
      treatmentName: "Lower Back Treatment"
    },
    Spine: {
      title: "Spine & Posture Correction",
      ailments: ["Ankylosing Spondylitis", "Postural Kyphosis/Scoliosis", "Spinal Injury rehab", "Degenerative Disc Disease"],
      description: "Spinal alignment is essential for structural balance. We offer custom alignment routines, posture retraining, and specialized protocols for chronic spine conditions.",
      treatmentLink: "/services/posture-correction-physiotherapy",
      treatmentName: "Posture & Spine Rehab"
    },
    Elbow: {
      title: "Elbow Pain & Tendinitis",
      ailments: ["Tennis Elbow (Lateral Epicondylitis)", "Golfer's Elbow", "Elbow Joint Stiffness post-cast"],
      description: "Repetitive movements cause elbow tendon inflammation. We utilize therapeutic ultrasound, deep friction massage, and forearm exercises to speed up tendon repair.",
      treatmentLink: "/services/sports-injury-physiotherapy",
      treatmentName: "Elbow & Sports Therapy"
    },
    Hip: {
      title: "Hip Pain & Joint Stiffness",
      ailments: ["Hip Osteoarthritis", "Post-THR (Total Hip Replacement) recovery", "Piriformis Syndrome"],
      description: "Hip joint alignment governs gait and balance. Our treatment targets pelvic muscle balance, joint range optimization, and guided walking mechanics.",
      treatmentLink: "/services/post-surgery-physiotherapy",
      treatmentName: "Post-Surgery Rehab"
    },
    Knee: {
      title: "Knee Pain & Arthritis",
      ailments: ["Knee Osteoarthritis", "ACL / MCL Ligament Sprains", "Meniscus Tears", "Patellofemoral Pain"],
      description: "Knee joints bear our full body weight. We specialize in non-surgical knee pain management, rebuilding quadricep/hamstring support, and ligament stability conditioning.",
      treatmentLink: "/services/knee-pain-physiotherapy",
      treatmentName: "Knee Recovery Therapy"
    },
    Ankle: {
      title: "Ankle Sprain & Instability",
      ailments: ["Ligament Sprains (Inversion/Eversion)", "Achilles Tendinitis", "Chronic Ankle Instability"],
      description: "Ankle sprains are common sports issues. We focus on rigid athletic taping, swelling reduction, and progressive balance exercises to restore joint confidence.",
      treatmentLink: "/services/sports-injury-physiotherapy",
      treatmentName: "Ankle & Ligament Rehab"
    },
    Foot: {
      title: "Foot Pain & Drop Foot",
      ailments: ["Plantar Fasciitis (Heel Pain)", "Foot Drop (Nerve weakness)", "Metatarsalgia"],
      description: "Foot drop and heel pain severely affect daily steps. We design targeted nerve stimulation exercises and arch support stretching to get you back on your feet.",
      treatmentLink: "/services/foot-drop-physiotherapy",
      treatmentName: "Foot Drop & Pain Therapy"
    }
  };

  const hotspots = [
    { name: 'Neck', x: 100, y: 76 },
    { name: 'Shoulder', x: 132, y: 92 },
    { name: 'Spine', x: 100, y: 130 },
    { name: 'Elbow', x: 152, y: 132 },
    { name: 'Back', x: 100, y: 175 },
    { name: 'Hip', x: 118, y: 212 },
    { name: 'Knee', x: 118, y: 330 },
    { name: 'Ankle', x: 118, y: 440 },
    { name: 'Foot', x: 130, y: 446 }
  ];

  return (
    <section id="hurt-map" className="hurt-map-section">
      <style>{`
        .hurt-map-section {
          background-color: var(--bg-main);
          padding: 4.5rem 0;
          border-bottom: none;
        }

        .hurt-title-wrapper {
          text-align: center;
          margin-bottom: 3rem;
        }

        .hurt-title {
          font-family: 'Manrope', sans-serif;
          font-size: 2.5rem !important;
          color: var(--text-main) !important;
          margin-bottom: 1rem;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .hurt-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4rem;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* SVG Silhouetted Interactive Map */
        .silhouette-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(15, 118, 110, 0.05);
          border-radius: var(--border-radius-lg);
          padding: 3rem;
          box-shadow: var(--shadow-sm);
          height: 520px;
          position: relative;
        }

        .silhouette-svg {
          height: 100%;
          color: rgba(15, 118, 110, 0.15); /* Light teal anatomical lines */
          transition: color 0.3s ease;
        }

        /* glowing pulsing dot */
        .hotspot-group {
          cursor: pointer;
        }

        .hotspot-pulse {
          fill: none;
          stroke: var(--primary);
          stroke-width: 1.5px;
          transform-origin: center;
          animation: hotspotPulseAnim 2.5s infinite ease-out;
        }

        .hotspot-group:hover .hotspot-pulse,
        .hotspot-group.active .hotspot-pulse {
          stroke: var(--secondary);
          stroke-width: 2px;
          animation: hotspotPulseAnim 1.5s infinite ease-out;
        }

        .hotspot-core {
          fill: var(--primary);
          transition: fill 0.3s ease, r 0.3s ease;
        }

        .hotspot-group:hover .hotspot-core,
        .hotspot-group.active .hotspot-core {
          fill: var(--secondary);
          r: 6.5px;
        }

        .hotspot-label-tag {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 700;
          fill: var(--text-main);
          opacity: 0.6;
          transition: opacity 0.3s, fill 0.3s;
        }

        .hotspot-group:hover .hotspot-label-tag,
        .hotspot-group.active .hotspot-label-tag {
          opacity: 1;
          fill: var(--primary-hover);
        }

        @keyframes hotspotPulseAnim {
          0% {
            r: 4px;
            opacity: 1;
          }
          100% {
            r: 22px;
            opacity: 0;
          }
        }

        /* Detail Panel Column */
        .detail-panel {
          background-color: var(--bg-card);
          border-radius: var(--border-radius-lg);
          padding: 3.5rem;
          border: 1px solid rgba(15, 118, 110, 0.06);
          box-shadow: var(--shadow-lg);
          min-height: 480px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .detail-panel-fade {
          animation: detailFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes detailFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .detail-badge {
          align-self: flex-start;
          background-color: var(--primary-light);
          color: var(--primary);
          padding: 0.35rem 1rem;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1.25rem;
        }

        .detail-panel h3 {
          font-family: 'Manrope', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-main);
          letter-spacing: -0.5px;
          margin-bottom: 1rem;
        }

        .detail-panel p {
          font-size: 0.98rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .ailment-list-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-main);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.75rem;
        }

        .ailment-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }

        .ailment-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .ailment-item-dot {
          width: 6px;
          height: 6px;
          background-color: var(--secondary);
          border-radius: 50%;
        }

        .detail-cta-link {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: var(--primary);
          color: white !important;
          padding: 0.85rem 1.75rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          box-shadow: 0 6px 14px rgba(15, 118, 110, 0.15);
          transition: all 0.3s ease;
        }

        .detail-cta-link:hover {
          background-color: var(--primary-hover);
          transform: translateX(3px);
          box-shadow: 0 8px 20px rgba(15, 118, 110, 0.25);
        }

        @media (max-width: 900px) {
          .hurt-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .silhouette-wrapper {
            height: 460px;
            padding: 1.5rem;
          }
          .detail-panel {
            min-height: auto;
            padding: 2.5rem 1.75rem;
          }
        }

        @media (max-width: 480px) {
          .hurt-title {
            font-size: 2rem !important;
          }
          .ailment-grid {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          .detail-cta-link {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="hurt-title-wrapper animate-fade-in">
        <h2 className="hurt-title">Where Does It Hurt?</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', padding: '0 1rem' }}>
          Click on any joint hotspot on the body to see related physiotherapy treatments and clinical programs.
        </p>
      </div>

      <div className="hurt-grid">
        {/* SVG Silhouetted Interactive Map Column */}
        <div className="silhouette-wrapper animate-fade-in">
          <svg viewBox="0 0 200 480" className="silhouette-svg">
            {/* Minimal Vector Human Body */}
            {/* Head */}
            <circle cx="100" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
            {/* Neck */}
            <line x1="100" y1="68" x2="100" y2="82" stroke="currentColor" strokeWidth="2" />
            {/* Shoulders */}
            <line x1="68" y1="88" x2="132" y2="88" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            {/* Spine / Torso */}
            <line x1="100" y1="82" x2="100" y2="210" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M72,94 Q100,102 128,94 L118,206 Q100,212 82,206 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
            {/* Arms */}
            <line x1="68" y1="88" x2="52" y2="160" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="52" y1="160" x2="40" y2="220" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="132" y1="88" x2="148" y2="160" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="148" y1="160" x2="160" y2="220" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            {/* Hip */}
            <line x1="82" y1="206" x2="118" y2="206" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            {/* Legs */}
            <line x1="84" y1="206" x2="84" y2="330" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="84" y1="330" x2="84" y2="440" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="116" y1="206" x2="116" y2="330" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="116" y1="330" x2="116" y2="440" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            {/* Feet */}
            <line x1="84" y1="440" x2="72" y2="444" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="116" y1="440" x2="128" y2="444" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

            {/* Glowing Interactive Hotspots */}
            {hotspots.map((spot, idx) => {
              const isActive = selectedPart === spot.name;
              // Adjust tag labels display position dynamically to avoid overlap
              const labelXOffset = spot.name === 'Shoulder' || spot.name === 'Elbow' || spot.name === 'Hip' || spot.name === 'Knee' || spot.name === 'Ankle' || spot.name === 'Foot' ? 12 : -45;
              const labelYOffset = 3;
              
              return (
                <g 
                  key={idx} 
                  className={`hotspot-group${isActive ? ' active' : ''}`}
                  onClick={() => setSelectedPart(spot.name)}
                >
                  {/* Outer Glowing Ring */}
                  <circle cx={spot.x} cy={spot.y} className="hotspot-pulse" />
                  {/* Invisible easy-click circle */}
                  <circle cx={spot.x} cy={spot.y} r="18" fill="transparent" />
                  {/* Inner Solid core */}
                  <circle cx={spot.x} cy={spot.y} r="4.5" className="hotspot-core" />
                  {/* Label Text Tag */}
                  <text 
                    x={spot.x + labelXOffset} 
                    y={spot.y + labelYOffset} 
                    className="hotspot-label-tag"
                  >
                    {spot.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Display Detail Panel Column */}
        <div key={selectedPart} className="detail-panel detail-panel-fade">
          <span className="detail-badge">Pain Assessment</span>
          <h3>{bodyPartsData[selectedPart].title}</h3>
          <p>{bodyPartsData[selectedPart].description}</p>
          
          <div className="ailment-list-title">Common Conditions Treated:</div>
          <div className="ailment-grid">
            {bodyPartsData[selectedPart].ailments.map((ail, aIdx) => (
              <div key={aIdx} className="ailment-item">
                <span className="ailment-item-dot"></span>
                <span>{ail}</span>
              </div>
            ))}
          </div>

          <Link to={bodyPartsData[selectedPart].treatmentLink} className="detail-cta-link">
            <span>Learn About {bodyPartsData[selectedPart].treatmentName}</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhereDoesItHurt;
