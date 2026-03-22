import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import NeurologicalPhysio from './components/services/neurological/NeurologicalPhysio';
import OrthopaedicPhysio from './components/services/orthopaedic/OrthopaedicPhysio';
import PostFracturePhysio from './components/services/orthopaedic/PostFracturePhysio';
import PostSurgeryPhysio from './components/services/orthopaedic/PostSurgeryPhysio';
import SportsInjuryPhysio from './components/services/orthopaedic/SportsInjuryPhysio';
import FrozenShoulderPhysio from './components/services/orthopaedic/FrozenShoulderPhysio';
import SpinalInjuryPhysio from './components/services/orthopaedic/SpinalInjuryPhysio';
import PostureCorrectionPhysio from './components/services/orthopaedic/PostureCorrectionPhysio';
import CervicalSpondylosisPhysio from './components/services/orthopaedic/CervicalSpondylosisPhysio';
import AnkylosingSpondylitisPhysio from './components/services/orthopaedic/AnkylosingSpondylitisPhysio';
import ArthritisPhysio from './components/services/orthopaedic/ArthritisPhysio';
import ShoulderDislocationPhysio from './components/services/orthopaedic/ShoulderDislocationPhysio';
import LigamentInjuryPhysio from './components/services/orthopaedic/LigamentInjuryPhysio';
import BackPainPhysio from './components/services/orthopaedic/BackPainPhysio';
import KneePainPhysio from './components/services/orthopaedic/KneePainPhysio';
import GynecologicalPhysio from './components/services/gynecological/GynecologicalPhysio';
import CardiacRehabPhysio from './components/services/cardiac/CardiacRehabPhysio';
import PostChemoPhysio from './components/services/chemotherapy/PostChemoPhysio';
import RespiratoryPhysio from './components/services/respiratory/RespiratoryPhysio';
import StrokeParalysisPhysio from './components/services/neurological/StrokeParalysisPhysio';
import ParkinsonsPhysio from './components/services/neurological/ParkinsonsPhysio';
import BellsPalsyPhysio from './components/services/neurological/BellsPalsyPhysio';
import PediatricNeuroPhysio from './components/services/neurological/PediatricNeuroPhysio';
import GeriatricNeuroPhysio from './components/services/neurological/GeriatricNeuroPhysio';
import GbsSyndromePhysio from './components/services/neurological/GbsSyndromePhysio';
import MultipleSclerosisPhysio from './components/services/neurological/MultipleSclerosisPhysio';
import NerveInjuryPhysio from './components/services/neurological/NerveInjuryPhysio';
import ParalysisPhysio from './components/services/neurological/ParalysisPhysio';
import FootDropPhysio from './components/services/neurological/FootDropPhysio';
import WristDropPhysio from './components/services/neurological/WristDropPhysio';
import GeriatricPhysio from './components/services/geriatric/GeriatricPhysio';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/neurological-physiotherapy" element={<NeurologicalPhysio />} />
        <Route path="/services/orthopaedic-physiotherapy" element={<OrthopaedicPhysio />} />
        <Route path="/services/post-fracture-physiotherapy" element={<PostFracturePhysio />} />
        <Route path="/services/post-surgery-physiotherapy" element={<PostSurgeryPhysio />} />
        <Route path="/services/sports-injury-physiotherapy" element={<SportsInjuryPhysio />} />
        <Route path="/services/frozen-shoulder-physiotherapy" element={<FrozenShoulderPhysio />} />
        <Route path="/services/spinal-injury-physiotherapy" element={<SpinalInjuryPhysio />} />
        <Route path="/services/posture-correction-physiotherapy" element={<PostureCorrectionPhysio />} />
        <Route path="/services/cervical-spondylosis-physiotherapy" element={<CervicalSpondylosisPhysio />} />
        <Route path="/services/ankylosing-spondylitis" element={<AnkylosingSpondylitisPhysio />} />
        <Route path="/services/arthritis-physiotherapy" element={<ArthritisPhysio />} />
        <Route path="/services/shoulder-dislocation-physiotherapy" element={<ShoulderDislocationPhysio />} />
        <Route path="/services/ligament-injury-physiotherapy" element={<LigamentInjuryPhysio />} />
        <Route path="/services/back-pain-physiotherapy" element={<BackPainPhysio />} />
        <Route path="/services/knee-pain-physiotherapy" element={<KneePainPhysio />} />
        <Route path="/services/gynecological-physiotherapy" element={<GynecologicalPhysio />} />
        <Route path="/services/cardiac-rehab-physiotherapy" element={<CardiacRehabPhysio />} />
        <Route path="/services/physiotherapy-post-chemotherapy" element={<PostChemoPhysio />} />
        <Route path="/services/respiratory-physiotherapy" element={<RespiratoryPhysio />} />
        <Route path="/services/stroke-paralysis-physiotherapy" element={<StrokeParalysisPhysio />} />
        <Route path="/services/parkinsons-physiotherapy" element={<ParkinsonsPhysio />} />
        <Route path="/services/bells-palsy-physiotherapy" element={<BellsPalsyPhysio />} />
        <Route path="/services/pediatric-neuro-physiotherapy" element={<PediatricNeuroPhysio />} />
        <Route path="/services/geriatric-neuro-physiotherapy" element={<GeriatricNeuroPhysio />} />
        <Route path="/services/gbs-syndrome-physiotherapy" element={<GbsSyndromePhysio />} />
        <Route path="/services/multiple-sclerosis-physiotherapy" element={<MultipleSclerosisPhysio />} />
        <Route path="/services/nerve-injury-physiotherapy" element={<NerveInjuryPhysio />} />
        <Route path="/services/paralysis-physiotherapy" element={<ParalysisPhysio />} />
        <Route path="/services/foot-drop-physiotherapy" element={<FootDropPhysio />} />
        <Route path="/services/wrist-drop-physiotherapy" element={<WristDropPhysio />} />
        <Route path="/services/geriatric-physiotherapy" element={<GeriatricPhysio />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </Router>
  );
}

export default App;
