import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="main_header">
      <div className="container">
        <div className="hdr_main d-flex justify-content-between align-items-center flex-wrap py-3">
          {/* Brand Logo */}
          <div className="logo_main py-1">
            <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
              <img
                src="/images/scn_global_logo.jpg"
                alt="SCN Global Logo"
                title="SCN Global Logo"
                className="main_logo"
                style={{ maxHeight: '42px', width: 'auto' }}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="main_menu d-flex align-items-center gap-3">
            <ul className="d-flex align-items-center gap-2 mb-0 list-unstyled">
              <li>
                <NavLink to="/" className={({ isActive }) => `nav-pill-metal ${isActive ? 'active' : ''}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className={({ isActive }) => `nav-pill-metal ${isActive ? 'active' : ''}`}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/our-business" className={({ isActive }) => `nav-pill-metal ${isActive ? 'active' : ''}`}>
                  Our Business
                </NavLink>
              </li>
              <li>
                <NavLink to="/as-employer" className={({ isActive }) => `nav-pill-metal ${isActive ? 'active' : ''}`}>
                  As Employer
                </NavLink>
              </li>
              <li>
                <a href="https://scnjobs.com/" target="_blank" rel="noopener noreferrer" className="nav-pill-metal">
                  Apply for Jobs
                </a>
              </li>
              <li>
                <NavLink to="/contact-us" className={({ isActive }) => `nav-pill-metal ${isActive ? 'active' : ''}`}>
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* Quick Consultation button */}
            <Link to="/contact-us" className="btn-vesper btn-solid-vesper ms-2" title="SCN Global Enquiry">
              <i className="fa fa-envelope-o me-1"></i> Enquire Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
