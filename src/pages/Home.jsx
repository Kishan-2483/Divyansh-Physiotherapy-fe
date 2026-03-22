import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../index.css';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/services/Services';
import Content from '../components/Content';
import DoctorProfile from '../components/DoctorProfile';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Content />
      <DoctorProfile />
      <Pricing />
      <Contact />
    </>
  );
};

export default Home;
