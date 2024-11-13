import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoginPage from './pages/login/LoginPage';
import Signup from './pages/account creation/Signup';
import FirstStep from './pages/account creation/FirstStep';
import SecondStep from './pages/account creation/SecondStep';
import FinalStep from './pages/account creation/FinalStep'
import BecomePartner from './pages/landing pages/BecomePartner';
import OurMission from './pages/landing pages/OurMission';

// import styles
import './styles/App.scss';
import './styles/components/Header.scss';
import './styles/components/CTA.scss';
import './styles/components/HowItWorks.scss';
import './styles/components/Footer.scss';
import './styles/pages/LoginPage.scss';
import './styles/pages/Signup.scss';
import './styles/pages/BecomePartner.scss';
import './styles/pages/OurMission.scss';

import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  const location = useLocation();
  const excludeRoutes = [
    '/signup', '/first-step', '/second-step', '/final-step'
  ];
  const shouldRenderHeaderFooter = !excludeRoutes.includes(location.pathname);

  return (
    <div>
      {shouldRenderHeaderFooter && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/first-step" element={<FirstStep />} />
          <Route path="/second-step" element={<SecondStep />} />
          <Route path="/final-step" element={<FinalStep />} />
          <Route path="/become-partner" element={<BecomePartner />} />
          <Route path="/mission" element={<OurMission />} />
        </Routes>
      </main>
      {shouldRenderHeaderFooter && <Footer />}
    </div>
  );
};

export default App;