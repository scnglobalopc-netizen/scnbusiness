import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EnquiryModal from '../components/EnquiryModal';

function MainLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Get Instant Call Back');

  const openModal = (title) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-between position-relative">
      {/* Header Navigation */}
      <Header onEnquireClick={openModal} />

      {/* Floating Enquire Sidebar */}
      <Link 
        to="/contact-us"
        className="floating-enquire-sidebar text-decoration-none"
      >
        Enquire Now
      </Link>

      {/* Main Content Viewport */}
      <main className="flex-grow-1">
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { onEnquireClick: openModal });
          }
          return child;
        })}
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Lightbox Enquiry Modal popup */}
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title={modalTitle} 
      />
    </div>
  );
}

export default MainLayout;
