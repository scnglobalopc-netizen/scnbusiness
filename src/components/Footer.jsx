import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="py-5 text-white mt-auto" style={{ backgroundColor: 'var(--colorFooter)' }}>
      <div className="container">
        <div className="row g-4 mb-4 text-start">
          {/* Company Brief & Logo */}
          <div className="col-lg-4 col-md-6">
            <img
              src="/images/scn_global_logo.jpg"
              alt="SCN Global Logo"
              className="rounded-circle mb-3 border border-secondary border-opacity-50"
              style={{ maxHeight: '55px', width: 'auto', objectFit: 'cover' }}
            />
            <h5 className="text-white fw-bold mb-2">SCN Global</h5>
            <p className="small text-white-50 mb-2" style={{ fontSize: '13px', lineHeight: '1.6' }}>
              Backed by 20+ years of experience, SCN Global partners with organisations of all sizes—from emerging start-ups to Fortune 5000 leaders—to deliver impactful staffing, IT, and HR solutions.
            </p>
            <p className="small mb-3">
              <i className="fa fa-envelope text-primary me-2"></i>
              <a href="mailto:info@scnglobalpvtltd.com" className="text-white-50 text-decoration-none hover-white">info@scnglobalpvtltd.com</a>
            </p>
            {/* Social Media Links */}
            <div className="d-flex gap-2">
              <a href="https://www.instagram.com/scnglobal.recruitment/" target="_blank" rel="noreferrer" className="social-icon-btn" title="Instagram">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/SCNGlobalRecruitment" target="_blank" rel="noreferrer" className="social-icon-btn" title="Facebook">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://x.com/SCNGlobal2024" target="_blank" rel="noreferrer" className="social-icon-btn" title="X (Twitter)">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="LinkedIn">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.youtube.com/@SCNGlobalPvtLtd" target="_blank" rel="noreferrer" className="social-icon-btn" title="YouTube">
                <i className="fa fa-youtube-play"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="text-white fw-bold mb-3 border-bottom border-secondary pb-2">Quick Links</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0" style={{ fontSize: '14px' }}>
              <li><Link to="/" className="text-white-50 text-decoration-none hover-white">Home</Link></li>
              <li><Link to="/about-us" className="text-white-50 text-decoration-none hover-white">About Us</Link></li>
              <li><Link to="/our-business" className="text-white-50 text-decoration-none hover-white">Our Business</Link></li>
              <li><Link to="/solutions" className="text-white-50 text-decoration-none hover-white">Corporate Solutions</Link></li>
              <li><Link to="/as-employer" className="text-white-50 text-decoration-none hover-white">As Employer</Link></li>
              <li><a href="https://scnjobs.com/" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none hover-white">Apply for Jobs</a></li>
              <li><Link to="/contact-us" className="text-white-50 text-decoration-none hover-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Addresses */}
          <div className="col-lg-6 col-md-12">
            <h6 className="text-white fw-bold mb-3 border-bottom border-secondary pb-2">Corporate Office & Branches</h6>
            <div className="row g-3 small" style={{ fontSize: '13px' }}>
              <div className="col-md-6">
                <p className="mb-1 text-white fw-semibold"><i className="fa fa-map-marker text-primary me-1"></i> Branch Office (Noida):</p>
                <p className="text-white-50 mb-3">H-25, Ground Floor Office No G- 9 Sector 63, Noida, Uttar Pradesh 201301</p>
              </div>
              <div className="col-md-6">
                <p className="mb-1 text-white fw-semibold"><i className="fa fa-map-marker text-primary me-1"></i> Head Office (Rohini):</p>
                <p className="text-white-50 mb-3">Office No-111, 1st floor, Aggarwal City Square, Mangalam Place, Sector-3, Rohini, Delhi 110085</p>
              </div>
              <div className="col-md-12">
                <p className="mb-1 text-white fw-semibold"><i className="fa fa-map-marker text-primary me-1"></i> Branch Office (Seemapuri):</p>
                <p className="text-white-50 mb-0">J-126, G/F Shop No. 1 Old Seemapuri NR Water Tank, Delhi 110095</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 small text-white-50" style={{ fontSize: '13px' }}>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} SCN Global. All Rights Reserved.
          </p>
          <div className="d-flex gap-3">
            <Link to="/contact-us" className="text-white-50 text-decoration-none hover-white">Privacy Policy</Link>
            <span>|</span>
            <Link to="/contact-us" className="text-white-50 text-decoration-none hover-white">Terms & Conditions</Link>
            <span>|</span>
            <Link to="/contact-us" className="text-white-50 text-decoration-none hover-white">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
