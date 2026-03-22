import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const servicesList = [
    "Neuro Rehabilitation", "Pediatric Rehabilitation", "Orthopedic Rehabilitation",
    "Geriatric Physiotherapy", "Tapping & Cupping", "Manual Therapy",
    "Frozen Shoulder", "Facial Palsy"
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus('Message sent successfully! We will contact you soon.');
        setFormData({ name: '', phone: '', service: '', message: '' });
      } else {
        setSubmitStatus('Failed to send message. Please try again.');
      }
    } catch (err) {
      setSubmitStatus('Error connecting to Server.');
    }
  };

  return (
    <section id="contact" className="section container">
      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)' }}>Contact Us</h2>
        <p>Get in touch for appointments and inquiries</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Divyansh Physiotherapy Clinic</h3>
          <p style={{ fontWeight: 600, color: 'var(--text-dark)' }}>A Unit of Ayush Family Hospital</p>
          
          <div className="contact-detail">
            <strong>📍 Address:</strong><br/>
            Sec. M-1/422, Ashiyana Colony,<br/>
            Near Vishwanath Academy, Lucknow-226012
          </div>
          <div className="contact-detail">
            <strong>📞 Phone:</strong><br/>
            +91-8318428997<br/>
            +91-8737996914
          </div>
          <div className="contact-detail">
            <strong>✉️ Email:</strong><br/>
            divyanshphysio@gmail.com
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Book an Appointment</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Full Name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                required 
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <select 
                name="service" 
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select a Service</option>
                {servicesList.map((s, i) => <option key={i} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message/Symptoms" 
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="btn" style={{ width: '100%' }}>Send Message</button>
            {submitStatus && <p style={{ marginTop: '1rem', color: submitStatus.includes('success') ? 'green' : 'red', textAlign: 'center', fontWeight: 'bold' }}>{submitStatus}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
