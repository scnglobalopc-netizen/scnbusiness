import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import OurBusiness from '../pages/OurBusiness';
import BusinessDetail from '../pages/BusinessDetail';
import AsEmployer from '../pages/AsEmployer';
import AsEmployee from '../pages/AsEmployee';
import Contact from '../pages/Contact';
import ServiceDetail from '../pages/ServiceDetail';
import Solutions from '../pages/Solutions';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/about" element={<Navigate to="/about-us" replace />} />
      
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/corporate-solutions" element={<Navigate to="/solutions" replace />} />

      <Route path="/our-business" element={<OurBusiness />} />
      <Route path="/our-business/:slug" element={<BusinessDetail />} />
      
      <Route path="/service-detail/:slug" element={<ServiceDetail />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/service/:slug" element={<ServiceDetail />} />
      
      {/* SCN Website Inner Page URL Compatibility */}
      <Route path="/it-service" element={<Navigate to="/our-business/it-services" replace />} />
      <Route path="/it-services" element={<Navigate to="/our-business/it-services" replace />} />
      <Route path="/it-training-institute" element={<Navigate to="/our-business/it-training" replace />} />
      <Route path="/personality-development-training" element={<Navigate to="/our-business/personality-development" replace />} />
      <Route path="/hr-training-institute" element={<Navigate to="/our-business/hr-training" replace />} />
      <Route path="/u-s-staffing" element={<Navigate to="/our-business/us-staffing" replace />} />
      <Route path="/event-management" element={<Navigate to="/our-business/event-management" replace />} />
      <Route path="/general-staffing" element={<Navigate to="/our-business/general-staffing" replace />} />
      <Route path="/corporate-domestic-support-staffing" element={<Navigate to="/service-detail/corporate-domestic-support-staffing" replace />} />
      <Route path="/industrial-blue-collar-staffing" element={<Navigate to="/service-detail/industrial-blue-collar-staffing" replace />} />
      <Route path="/corporate-white-collar-staffing" element={<Navigate to="/service-detail/corporate-white-collar-staffing" replace />} />
      <Route path="/bpo-services" element={<Navigate to="/our-business/bpo-services" replace />} />
      <Route path="/real-estate" element={<Navigate to="/our-business/real-estate" replace />} />

      <Route path="/as-employer" element={<AsEmployer />} />
      <Route path="/as-employee" element={<AsEmployee />} />
      
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/contact" element={<Navigate to="/contact-us" replace />} />

      {/* Legacy / Fallback Routes */}
      <Route path="/location" element={<Navigate to="/contact-us" replace />} />
      <Route path="/master-plan" element={<Navigate to="/our-business" replace />} />
      <Route path="/floor-plan" element={<Navigate to="/our-business" replace />} />
      <Route path="/price" element={<Navigate to="/as-employer" replace />} />
      <Route path="/amenities" element={<Navigate to="/our-business" replace />} />
      <Route path="/specification" element={<Navigate to="/our-business" replace />} />
      <Route path="/gallery" element={<Navigate to="/our-business" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRoutes;
