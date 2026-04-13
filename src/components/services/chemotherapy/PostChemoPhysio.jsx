import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Ribbon, UserRound } from 'lucide-react';

const PostChemoPhysio = () => {
  const chemoServices = [
    { title: "Physiotherapy In Cancer Recovery", icon: <Stethoscope size={56} />, link: "#" },
    { title: "Physiotherapy Post Cancer Surgery", icon: <Ribbon size={56} />, link: "#" }
  ];

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      
      {/* Optional hero icon to match reference UI's top graphic */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', color: 'var(--primary, #2c7a7b)' }}>
          <UserRound size={64} />
          <Stethoscope size={64} />
        </div>
      </div>

      <h1 style={{ color: 'var(--primary-dark)', marginBottom: '3rem', textAlign: 'center', fontSize: '2.5rem' }}>Physiotherapy Post Chemotherapy</h1>
      
      {/* Services Grid matching UI */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '4rem',
        flexWrap: 'wrap',
        marginBottom: '4rem'
      }}>
        {chemoServices.map((service, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '250px'
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
            <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '0.5rem', fontWeight: '500', minHeight: '40px' }}>{service.title}</h3>
            <Link to={service.link} style={{
              color: '#0000ee',
              textDecoration: 'none',
              fontSize: '1rem',
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
        
        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Role Of Physiotherapy In Cancer Recovery</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          If you or someone you know has been diagnosed with cancer, you are no doubt aware of the numerous treatment options available. There are numerous treatment options available, ranging from medication and dietary changes to chemotherapy and surgery. While it may not be the first thing that comes to mind when discussing cancer, physiotherapy can help people maintain a high quality of life and stay healthy.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          There are numerous approaches a person can take in response to a cancer diagnosis, but all of them will leave the person exhausted and more vulnerable to other medical complications. Physiotherapy helps people maintain their physical abilities, which keeps them strong and healthy.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>How Physiotherapy Can Help In Cancer Recovery</h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <strong>Cancer treatment frequently results in neuropathy.</strong> It is caused by changes in nerve conduction and manifests as tingling, numbness, and pain. Speak with your Physiotherapist about how treatment for neuropathy can help.
        </p>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <strong>Cardiovascular Performance</strong> can be significantly impacted during and after cancer treatment. Your rehabilitation clinic's experienced physiotherapists and other health professionals can help you regain endurance and monitor your cardiovascular status. Physiotherapists are trained to recognise the signs of fatigue and stress and will educate you on how to recognise these signs as well as develop safe and achievable cardiovascular fitness goals.
        </p>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <strong>Fatigue can be severe and incapacitating</strong> during and after cancer treatment. There is a wealth of medical research demonstrating that moderate, supervised exercise and stretching can significantly reduce fatigue and malaise. An experienced physiotherapist at your rehabilitation clinic knows how to gently and safely get you moving toward your more energised and happier self.
        </p>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <strong>Lymphadema</strong> is the accumulation of lymphatic fluid at the tissue, which causes swelling throughout the body, especially in the limbs. Lymph glands are frequently targeted in cancer treatment, and lymphadema is a common side effect. Physiotherapists can assist in reducing the effects of lymphadema and promoting increased mobility and motion.
        </p>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <strong>Pain from cancer treatments</strong> can be excruciating and incapacitating. Through hands-on tissue release, modalities, stretching, and strengthening, physiotherapy treatment can positively and gently work with your soft tissues. Physiotherapy can help to reduce the severity and duration of pain. Your physiotherapist can also recommend some pain management strategies that you can incorporate into your home self-care routine. Anything that helps alleviate the pain associated with cancer treatment will improve your overall sense of well-being.
        </p>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Importance of Maintaining Healthy Lifestyle In Cancer Recovery</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          <li style={{ marginBottom: '0.5rem' }}>A balanced and healthy diet is always important, but it is especially important when your body is under stress. Your recovering body requires an abundance of fruits and vegetables, as well as omega-3 fatty acids, clean proteins, and good carbohydrates.</li>
          <li style={{ marginBottom: '0.5rem' }}>Keep a healthy weight. As a result of the illness or treatment, you may have lost or gained weight. It is critical that you return to your normal weight as soon as possible. A consultation with a dietician may be exactly what you need to get back on track.</li>
          <li style={{ marginBottom: '0.5rem' }}>Both alcohol and tobacco are known to increase the risk of disease.</li>
          <li style={{ marginBottom: '0.5rem' }}>Consume plenty of water! Hydration is essential at all stages of life. Water is necessary for muscle health. Ask your physiotherapist how much water you should drink after each physiotherapy session.</li>
          <li style={{ marginBottom: '0.5rem' }}>The importance of exercise cannot be overstated. A physiotherapist will design an exercise programme that will get you moving in the safest, gentlest way possible while also assisting you in reaching your recovery goals.</li>
        </ul>

        <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.8rem' }}>Genitourinary Complications</h2>
        <p style={{ marginBottom: '2.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#4b5563' }}>
          Incontinence and Sexual Dysfunction are common among men undergoing prostate cancer treatment and women undergoing bladder or ovarian cancer treatment. A skilled Physiotherapist can assist in rebuilding pelvic floor strength in order to improve urinary continence and reduce pain associated with sexual function.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '3rem' }}>
          <div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>How to Book At-Home Post Chemo Physiotherapy?</h2>
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

export default PostChemoPhysio;
