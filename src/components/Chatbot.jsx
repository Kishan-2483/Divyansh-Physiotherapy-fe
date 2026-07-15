import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, Bot, Phone, MapPin, Calendar, Film } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState('start'); // start, name, phone, service, finished
  const [bookingData, setBookingData] = useState({ name: '', phone: '', service: '', message: 'Booked via Chatbot' });
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);

  const servicesList = [
    "Neuro Rehabilitation", "Pediatric Rehabilitation", "Orthopedic Rehabilitation",
    "Geriatric Physiotherapy", "Tapping & Cupping", "Manual Therapy",
    "Frozen Shoulder", "Facial Palsy"
  ];

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      triggerBotResponse([
        { text: "Hello! Welcome to Divyansh Physiotherapy Clinic. 👋" },
        { text: "I am the virtual assistant for Dr. Abhishek Yadav (PT) here in Ashiyana, Lucknow." },
        { text: "How can I help you today? You can select a quick query below or type your questions." }
      ]);
    }
  }, [isOpen]);

  const addMessage = (text, sender) => {
    setMessages((prev) => [...prev, { text, sender, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
  };

  const triggerBotResponse = (msgArray, delay = 600) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      msgArray.forEach((msg, idx) => {
        setTimeout(() => {
          setMessages((prev) => [...prev, { 
            text: msg.text, 
            sender: 'bot', 
            options: msg.options || null,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
          }]);
        }, idx * 400);
      });
    }, delay);
  };

  const handleOptionClick = (option) => {
    addMessage(option.label, 'user');

    if (option.action === 'book') {
      setStep('name');
      triggerBotResponse([{ text: "Let's book your appointment! May I know your Full Name?" }]);
    } else if (option.action === 'info') {
      triggerBotResponse([
        { text: "📍 Address: Sec. M-1/422, Ashiyana Colony, near Vishwanath Academy, Lucknow-226012" },
        { text: "⏰ Timings: 9:00 AM to 8:00 PM (Monday to Saturday)" },
        { text: "📞 Contact: +91-8318428997 / +91-8737996914" },
        { 
          text: "What else would you like to do?",
          options: [
            { label: "Book Appointment 📅", action: "book" },
            { label: "Check Rehab Videos 🎥", action: "videos" },
            { label: "Go Back 🔙", action: "reset" }
          ]
        }
      ]);
    } else if (option.action === 'videos') {
      triggerBotResponse([
        { text: "🎥 You can watch our exercise tutorials on the website!" },
        { text: "Simply scroll down to our 'Exercise & Rehab Hub' section, click any video thumbnail, and watch the correct exercise patterns instantly." },
        {
          text: "Would you like to book an appointment with Dr. Abhishek?",
          options: [
            { label: "Yes, Book Now 📅", action: "book" },
            { label: "Go Back 🔙", action: "reset" }
          ]
        }
      ]);
    } else if (option.action === 'reset') {
      triggerBotResponse([
        { 
          text: "How can I help you?", 
          options: [
            { label: "Book Appointment 📅", action: "book" },
            { label: "Timings & Location 📍", action: "info" },
            { label: "Physiotherapy Videos 🎥", action: "videos" }
          ] 
        }
      ]);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const text = inputValue.trim();
    addMessage(text, 'user');
    setInputValue('');

    if (step === 'name') {
      setBookingData(prev => ({ ...prev, name: text }));
      setStep('phone');
      triggerBotResponse([{ text: `Thank you, ${text}. Please provide your Mobile Number so we can reach you.` }]);
    } else if (step === 'phone') {
      setBookingData(prev => ({ ...prev, phone: text }));
      setStep('service');
      triggerBotResponse([{
        text: "Which therapy or rehabilitation service are you looking for?",
        options: servicesList.map(service => ({ label: service, action: 'select_service', value: service }))
      }]);
    } else if (step === 'service') {
      // User typed instead of selecting
      const selected = text;
      submitBooking({ ...bookingData, service: selected });
    } else {
      // General question parsing (Very basic NLP fallback)
      const query = text.toLowerCase();
      if (query.includes('book') || query.includes('appoint') || query.includes('schedule') || query.includes('fees') || query.includes('price')) {
        setStep('name');
        triggerBotResponse([{ text: "Let's schedule an appointment. What is your Full Name?" }]);
      } else if (query.includes('where') || query.includes('location') || query.includes('address') || query.includes('lucknow') || query.includes('place')) {
        triggerBotResponse([
          { text: "📍 We are located at Sec. M-1/422, Ashiyana Colony, near Vishwanath Academy, Lucknow-226012." },
          { text: "Timings: Mon - Sat (9:00 AM - 8:00 PM)." }
        ]);
      } else if (query.includes('video') || query.includes('exercise') || query.includes('stretch') || query.includes('tutorial')) {
        triggerBotResponse([{ text: "Check out our 'Exercise & Rehab Hub' section on this page to watch correct exercise steps!" }]);
      } else if (query.includes('hi') || query.includes('hello') || query.includes('hey')) {
        triggerBotResponse([{ text: "Hello! How can I help you today? Please feel free to ask about appointments, timings, or therapy services." }]);
      } else {
        triggerBotResponse([
          { text: "I've noted that! For detailed clinical queries, it's best to speak with Dr. Abhishek directly." },
          { 
            text: "Would you like to register an appointment inquiry or contact us?",
            options: [
              { label: "Book Appointment 📅", action: "book" },
              { label: "Timings & Location 📍", action: "info" }
            ]
          }
        ]);
      }
    }
  };

  const selectService = (serviceName) => {
    addMessage(serviceName, 'user');
    submitBooking({ ...bookingData, service: serviceName });
  };

  const submitBooking = async (dataToSubmit) => {
    setStep('finished');
    setIsTyping(true);
    try {
      const response = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSubmit)
      });
      const data = await response.json();
      setIsTyping(false);
      if (data.success) {
        triggerBotResponse([
          { text: `🎉 Perfect! Your appointment inquiry has been registered successfully.` },
          { text: `Dr. Abhishek Yadav will call you at ${dataToSubmit.phone} soon. Thank you, ${dataToSubmit.name}!` },
          {
            text: "What would you like to do next?",
            options: [
              { label: "Timings & Location 📍", action: "info" },
              { label: "Exercise Videos 🎥", action: "videos" }
            ]
          }
        ]);
      } else {
        triggerBotResponse([{ text: "Oops, something went wrong while saving your details. Please call us at +91-8318428997." }]);
        setStep('start');
      }
    } catch (err) {
      setIsTyping(false);
      triggerBotResponse([
        { text: "Connecting issues... but your appointment is important to us!" },
        { text: "Please call us directly at +91-8318428997 to confirm right away." }
      ]);
      setStep('start');
    }
  };

  const defaultOptions = [
    { label: "Book Appointment 📅", action: "book" },
    { label: "Timings & Location 📍", action: "info" },
    { label: "Exercise Videos 🎥", action: "videos" }
  ];

  return (
    <>
      <style>{`
        .chat-bubble-btn {
          position: fixed;
          bottom: 95px; /* Above the WhatsApp button */
          right: 24px;
          background-color: var(--primary);
          color: white;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(15, 118, 110, 0.3);
          border: 1px solid rgba(255,255,255,0.15);
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .chat-bubble-btn:hover {
          transform: scale(1.08) rotate(5deg);
          background-color: var(--primary-hover);
        }
        
        .chat-window {
          position: fixed;
          bottom: 165px;
          right: 24px;
          width: 380px;
          max-height: 520px;
          height: 520px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-radius: var(--border-radius);
          border: 1px solid rgba(15, 118, 110, 0.12);
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
          z-index: 1000;
          overflow: hidden;
          animation: chatOpen 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes chatOpen {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .chat-header {
          background-color: var(--primary);
          color: white;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        
        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .chat-header-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: white;
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        
        .chat-header h4 {
          font-family: 'Manrope', sans-serif;
          margin: 0;
          font-size: 1rem;
          color: white;
        }
        
        .chat-header p {
          margin: 0;
          font-size: 0.75rem;
          opacity: 0.85;
          color: white;
        }
        
        .chat-close-btn {
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
          padding: 4px;
          border-radius: 50%;
          transition: background 0.2s;
        }
        
        .chat-close-btn:hover {
          background: rgba(255,255,255,0.15);
        }
        
        .chat-messages {
          flex-grow: 1;
          padding: 1.25rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .chat-msg-row {
          display: flex;
          gap: 8px;
          max-width: 85%;
        }
        
        .chat-msg-row.bot {
          align-self: flex-start;
        }
        
        .chat-msg-row.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }
        
        .chat-msg-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 4px;
        }
        
        .chat-msg-avatar.bot {
          background-color: var(--primary-light);
          color: var(--primary);
        }
        
        .chat-msg-avatar.user {
          background-color: var(--bg-alt);
          color: var(--text-muted);
        }
        
        .chat-bubble {
          padding: 0.75rem 1rem;
          border-radius: 14px;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        .chat-msg-row.bot .chat-bubble {
          background-color: white;
          color: var(--text-main);
          border-top-left-radius: 2px;
          border: 1px solid rgba(15, 118, 110, 0.06);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
        }
        
        .chat-msg-row.user .chat-bubble {
          background-color: var(--primary);
          color: white;
          border-top-right-radius: 2px;
        }
        
        .chat-msg-time {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 2px;
          opacity: 0.7;
          text-align: right;
        }
        
        .chat-options-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 8px;
          width: 100%;
        }
        
        .chat-opt-btn {
          background-color: white;
          border: 1.5px solid var(--primary);
          color: var(--primary);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.2s;
          text-align: left;
          width: 100%;
        }
        
        .chat-opt-btn:hover {
          background-color: var(--primary-light);
          color: var(--primary-hover);
        }
        
        .chat-typing {
          align-self: flex-start;
          display: flex;
          align-items: center;
          gap: 4px;
          background: white;
          padding: 0.5rem 1rem;
          border-radius: 14px;
          border-top-left-radius: 2px;
          border: 1px solid rgba(15, 118, 110, 0.06);
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        
        .dot {
          width: 6px;
          height: 6px;
          background: var(--text-muted);
          border-radius: 50%;
          animation: dotBounce 1.4s infinite ease-in-out both;
        }
        
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
        
        @keyframes dotBounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        
        .chat-input-form {
          border-top: 1px solid var(--border-color);
          padding: 10px;
          display: flex;
          gap: 8px;
          background: white;
        }
        
        .chat-input-form input {
          flex-grow: 1;
          border: 1.5px solid var(--border-color);
          border-radius: 8px;
          padding: 0.6rem 0.85rem;
          font-size: 0.9rem;
          color: var(--text-main);
          outline: none;
          transition: border-color 0.2s;
        }
        
        .chat-input-form input:focus {
          border-color: var(--primary);
        }
        
        .chat-send-btn {
          background-color: var(--primary);
          color: white;
          border: none;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .chat-send-btn:hover {
          background-color: var(--primary-hover);
        }
        
        @media (max-width: 480px) {
          .chat-window {
            width: calc(100% - 32px);
            right: 16px;
            left: 16px;
            bottom: 85px;
            height: 480px;
          }
          .chat-bubble-btn {
            bottom: 20px;
            left: 20px; /* Swap placement on mobile if needed, or overlay */
            right: auto;
          }
          .whatsapp-btn {
            bottom: 20px;
            right: 20px;
          }
        }
      `}</style>

      {/* Floating Chat Bubble Button */}
      <button 
        className="chat-bubble-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat assistant"
      >
        {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-header-avatar">
                <Bot size={18} />
              </div>
              <div>
                <h4>Ayush Assistant</h4>
                <p>Online • Direct Clinic Support</p>
              </div>
            </div>
            <button className="chat-close-btn" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-msg-row ${msg.sender}`}>
                <div className={`chat-msg-avatar ${msg.sender}`}>
                  {msg.sender === 'bot' ? <Bot size={14} /> : <User size={14} />}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="chat-bubble">
                    {msg.text}
                    {msg.options && (
                      <div className="chat-options-container">
                        {msg.options.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={() => opt.action === 'select_service' ? selectService(opt.value) : handleOptionClick(opt)}
                            className="chat-opt-btn"
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="chat-msg-time">{msg.time}</span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="chat-msg-row bot">
                <div className="chat-msg-avatar bot">
                  <Bot size={14} />
                </div>
                <div className="chat-typing">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
            
            {/* Options fallback when in initial/reset state */}
            {!isTyping && messages.length > 0 && messages[messages.length - 1].sender === 'user' && step === 'start' && (
              <div className="chat-msg-row bot">
                <div className="chat-msg-avatar bot">
                  <Bot size={14} />
                </div>
                <div className="chat-bubble">
                  How else can I assist you?
                  <div className="chat-options-container">
                    {defaultOptions.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleOptionClick(opt)}
                        className="chat-opt-btn"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chat-input-form">
            <input
              type="text"
              placeholder={
                step === 'name' 
                  ? "Type your full name..." 
                  : step === 'phone' 
                  ? "Type your mobile number..." 
                  : "Ask about appointments, exercises..."
              }
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={step === 'service'} // force user to choose options for services
            />
            <button type="submit" className="chat-send-btn" disabled={step === 'service'}>
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
