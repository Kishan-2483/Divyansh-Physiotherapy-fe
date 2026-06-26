import React, { useState } from 'react';
import { MapPin, Phone, Mail, User, Stethoscope, FileText, Calendar } from 'lucide-react';

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
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', fontWeight: '800' }}>Contact Us</h2>
        <p style={{ color: 'var(--text-muted)' }}>Get in touch for appointments and inquiries</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Divyansh Physiotherapy Clinic</h3>
          <p className="hospital-sub">A Unit of Ayush Family Hospital</p>
          
          <div className="contact-detail">
            <MapPin className="contact-icon-svg" size={20} />
            <div className="contact-detail-text">
              <strong>Address:</strong><br/>
              Sec. M-1/422, Ashiyana Colony,<br/>
              Near Vishwanath Academy, Lucknow-226012
            </div>
          </div>
          <div className="contact-detail">
            <Phone className="contact-icon-svg" size={20} />
            <div className="contact-detail-text">
              <strong>Phone:</strong><br/>
              +91-8318428997<br/>
              +91-8737996914
            </div>
          </div>
          <div className="contact-detail">
            <Mail className="contact-icon-svg" size={20} />
            <div className="contact-detail-text">
              <strong>Email:</strong><br/>
              divyanshphysio@gmail.com
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h3 className="booking-form-title">
            <Calendar size={24} /> Book an Appointment
          </h3>
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-row-2">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <div className="input-with-icon">
                  <User className="input-icon-svg" size={18} />
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    placeholder="Full Name" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <div className="input-with-icon">
                  <Phone className="input-icon-svg" size={18} />
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone" 
                    placeholder="Phone Number" 
                    required 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">Select a Service</label>
              <div className="input-with-icon">
                <Stethoscope className="input-icon-svg" size={18} />
                <select 
                  id="service"
                  name="service" 
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>Select a Service</option>
                  {servicesList.map((s, i) => <option key={i} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message/Symptoms</label>
              <div className="input-with-icon">
                <FileText className="input-icon-svg" size={18} style={{ alignSelf: 'flex-start', marginTop: '1.25rem' }} />
                <textarea 
                  id="message"
                  name="message" 
                  placeholder="Your Message/Symptoms" 
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
            
            <button type="submit" className="btn">Send Message</button>
            {submitStatus && <p style={{ marginTop: '1rem', color: submitStatus.includes('success') ? 'green' : 'red', textAlign: 'center', fontWeight: 'bold' }}>{submitStatus}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
