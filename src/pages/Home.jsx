import React from 'react';
import '../index.css';

import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/services/Services';
import WhereDoesItHurt from '../components/WhereDoesItHurt';
import Content from '../components/Content';
import DoctorProfile from '../components/DoctorProfile';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Chatbot from '../components/Chatbot';

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <WhereDoesItHurt />
      <Content />
      <DoctorProfile />
      <Pricing />
      <Contact />
      <Chatbot />
    </>
  );
};

export default Home;
