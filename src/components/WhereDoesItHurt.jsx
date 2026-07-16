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
        /* ============================================
           CLAYMORPHISM DESIGN — WhereDoesItHurt
           Soft 3D clay-sculpted cards with inner glow,
           dual shadows, and inflated tactile feel.
           ============================================ */

        .hurt-map-section {
          background: linear-gradient(160deg, #F0FDFA 0%, #F8FCFB 40%, #E6FAF7 100%);
          padding: 5rem 0;
          border-bottom: none;
          position: relative;
          overflow: hidden;
        }

        /* Subtle background clay blobs */
        .hurt-map-section::before {
          content: '';
          position: absolute;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(20, 184, 166, 0.06) 0%, transparent 70%);
          top: -80px;
          left: -100px;
          border-radius: 50%;
          pointer-events: none;
        }

        .hurt-map-section::after {
          content: '';
          position: absolute;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%);
          bottom: -60px;
          right: -60px;
          border-radius: 50%;
          pointer-events: none;
        }

        .hurt-title-wrapper {
          text-align: center;
          margin-bottom: 3.5rem;
          position: relative;
          z-index: 1;
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
          gap: 3.5rem;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }

        /* ── CLAY CARD: Silhouette Map ── */
        .silhouette-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #EDF9F7;
          border-radius: 32px;
          padding: 3rem;
          height: 540px;
          position: relative;
          border: none;

          /* Claymorphism signature: outer shadow + inner glow */
          box-shadow:
            12px 12px 24px rgba(15, 118, 110, 0.10),
            -8px -8px 20px rgba(255, 255, 255, 0.85),
            inset 3px 3px 8px rgba(255, 255, 255, 0.9),
            inset -2px -2px 6px rgba(15, 118, 110, 0.06);
          transition: box-shadow 0.4s ease, transform 0.4s ease;
        }

        .silhouette-wrapper:hover {
          box-shadow:
            14px 14px 28px rgba(15, 118, 110, 0.12),
            -10px -10px 24px rgba(255, 255, 255, 0.9),
            inset 4px 4px 10px rgba(255, 255, 255, 0.95),
            inset -3px -3px 8px rgba(15, 118, 110, 0.07);
          transform: translateY(-2px);
        }

        .silhouette-svg {
          height: 100%;
          color: rgba(15, 118, 110, 0.18);
          transition: color 0.3s ease;
          filter: drop-shadow(0 1px 2px rgba(15, 118, 110, 0.08));
        }

        /* ── Hotspot Dots — Clay-pressed interaction ── */
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
          stroke-width: 2.5px;
          animation: hotspotPulseAnim 1.5s infinite ease-out;
        }

        .hotspot-core {
          fill: var(--primary);
          transition: fill 0.3s ease, r 0.3s ease;
          filter: drop-shadow(0 2px 4px rgba(15, 118, 110, 0.3));
        }

        .hotspot-group:hover .hotspot-core,
        .hotspot-group.active .hotspot-core {
          fill: var(--secondary);
          r: 7px;
          filter: drop-shadow(0 3px 8px rgba(20, 184, 166, 0.4));
        }

        .hotspot-label-tag {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 700;
          fill: var(--text-main);
          opacity: 0.55;
          transition: opacity 0.3s, fill 0.3s;
        }

        .hotspot-group:hover .hotspot-label-tag,
        .hotspot-group.active .hotspot-label-tag {
          opacity: 1;
          fill: var(--primary-hover);
        }

        @keyframes hotspotPulseAnim {
          0% {
            r: 5px;
            opacity: 1;
          }
          100% {
            r: 24px;
            opacity: 0;
          }
        }

        /* ── CLAY CARD: Detail Panel ── */
        .detail-panel {
          background: #FFFFFF;
          border-radius: 32px;
          padding: 3.5rem;
          border: none;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

          /* Claymorphism: soft 3D sculpted look */
          box-shadow:
            10px 10px 20px rgba(15, 118, 110, 0.08),
            -6px -6px 16px rgba(255, 255, 255, 0.9),
            inset 3px 3px 6px rgba(255, 255, 255, 0.7),
            inset -2px -2px 5px rgba(15, 118, 110, 0.04);
        }

        .detail-panel:hover {
          box-shadow:
            12px 12px 24px rgba(15, 118, 110, 0.10),
            -8px -8px 20px rgba(255, 255, 255, 0.95),
            inset 4px 4px 8px rgba(255, 255, 255, 0.8),
            inset -3px -3px 6px rgba(15, 118, 110, 0.05);
          transform: translateY(-2px);
        }

        .detail-panel-fade {
          animation: detailFadeIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes detailFadeIn {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* ── Clay Badge ── */
        .detail-badge {
          align-self: flex-start;
          background: #E6FAF7;
          color: var(--primary);
          padding: 0.45rem 1.2rem;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          margin-bottom: 1.5rem;
          box-shadow:
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -1px -1px 3px rgba(15, 118, 110, 0.08),
            3px 3px 8px rgba(15, 118, 110, 0.06);
          transition: all 0.3s ease;
        }

        .detail-badge:hover {
          background: #D4F5F0;
          transform: translateY(-1px);
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
          line-height: 1.75;
          margin-bottom: 2rem;
        }

        .ailment-list-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-main);
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-bottom: 0.85rem;
        }

        .ailment-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
          margin-bottom: 2.5rem;
        }

        /* ── Clay Ailment Chips ── */
        .ailment-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
          padding: 0.5rem 0.75rem;
          border-radius: 14px;
          background: #F6FFFE;
          box-shadow:
            inset 1px 1px 3px rgba(255, 255, 255, 0.7),
            inset -1px -1px 2px rgba(15, 118, 110, 0.04),
            2px 2px 6px rgba(15, 118, 110, 0.04);
          transition: all 0.25s ease;
        }

        .ailment-item:hover {
          background: #EDF9F7;
          transform: translateY(-1px);
          box-shadow:
            inset 2px 2px 4px rgba(255, 255, 255, 0.8),
            inset -1px -1px 3px rgba(15, 118, 110, 0.05),
            3px 3px 8px rgba(15, 118, 110, 0.06);
        }

        .ailment-item-dot {
          width: 7px;
          height: 7px;
          background: linear-gradient(135deg, var(--secondary), var(--primary));
          border-radius: 50%;
          box-shadow: 0 1px 3px rgba(20, 184, 166, 0.3);
          flex-shrink: 0;
        }

        /* ── Clay CTA Button ── */
        .detail-cta-link {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, var(--primary) 0%, #0D9488 100%);
          color: white !important;
          padding: 0.95rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);

          /* Clay-style raised button */
          box-shadow:
            6px 6px 14px rgba(15, 118, 110, 0.18),
            -3px -3px 8px rgba(255, 255, 255, 0.2),
            inset 2px 2px 4px rgba(255, 255, 255, 0.15),
            inset -1px -1px 3px rgba(0, 0, 0, 0.08);
        }

        .detail-cta-link:hover {
          background: linear-gradient(135deg, var(--primary-hover) 0%, var(--primary) 100%);
          transform: translateY(-2px) translateX(2px);
          box-shadow:
            8px 8px 18px rgba(15, 118, 110, 0.22),
            -4px -4px 10px rgba(255, 255, 255, 0.25),
            inset 3px 3px 6px rgba(255, 255, 255, 0.18),
            inset -2px -2px 4px rgba(0, 0, 0, 0.1);
        }

        .detail-cta-link:active {
          transform: translateY(1px);
          box-shadow:
            3px 3px 8px rgba(15, 118, 110, 0.15),
            inset 3px 3px 6px rgba(0, 0, 0, 0.12),
            inset -2px -2px 4px rgba(255, 255, 255, 0.1);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .hurt-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .silhouette-wrapper {
            height: 460px;
            padding: 2rem;
            border-radius: 28px;
          }
          .detail-panel {
            min-height: auto;
            padding: 2.5rem 2rem;
            border-radius: 28px;
          }
        }

        @media (max-width: 480px) {
          .hurt-map-section {
            padding: 3rem 0;
          }
          .hurt-title {
            font-size: 2rem !important;
          }
          .silhouette-wrapper,
          .detail-panel {
            border-radius: 24px;
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
