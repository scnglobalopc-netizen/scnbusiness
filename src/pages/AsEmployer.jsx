import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AsEmployer({ onEnquireClick }) {
  const [formData, setFormData] = useState({ companyName: '', contactPerson: '', email: '', phone: '', positions: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="as-employer-page animate-fade-in bg-black text-white min-vh-100">
      {/* Top Banner / Breadcrumb */}
      <div className="bradcam_area position-relative">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="bradcam_text">
                <h2 className="display-6 text-white fw-bold mb-2">As Employer</h2>
                <ul className="breadcrumb mb-0">
                  <li><Link to="/" className="text-white opacity-75">Home</Link></li>
                  <li className="text-white fw-bold">As Employer</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link
                to="/contact-us"
                className="btn btn-solid px-4 py-2 fw-bold"
              >
                <i className="fa fa-users me-2"></i> Hire Top Talent
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Helpdesk */}
      <div className="container py-5">
        <div className="row g-4 align-items-stretch">
          {/* Left Column: Employer Services Overview & Helpdesk */}
          <div className="col-lg-6">
            <div className="bg-dark p-4 p-md-5 rounded-4 shadow-sm border border-secondary border-opacity-25 h-100">
              <span className="badge bg-primary px-3 py-2 text-uppercase mb-3" style={{ letterSpacing: '1px' }}>
                Employer Solutions
              </span>
              <h2 className="fw-bold text-white mb-3">Partner with SCN Global</h2>
              <p className="text-light opacity-75 mb-4" style={{ lineHeight: '1.7' }}>
                Backed by 20+ years of experience, SCN Global partners with organisations of all sizes—from emerging start-ups to Fortune 5000 leaders—to deliver impactful staffing, Android app development, executive recruitment, and HR management solutions.
              </p>

              {/* Employer Helpdesk Box */}
              <div className="bg-black p-4 rounded-3 border-start border-4 border-primary mb-4 border border-secondary border-opacity-25">
                <h5 className="fw-bold text-white mb-3"><i className="fa fa-headphones text-primary me-2"></i> Client Help Desk for Employers</h5>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-primary text-white p-2 rounded-circle">
                      <i className="fa fa-briefcase fs-5"></i>
                    </div>
                    <div>
                      <p className="mb-0 fw-semibold text-white">Employer Hiring Desk</p>
                      <p className="mb-0 text-white-50 small">Corporate Talent Sourcing</p>
                      <a href="tel:+919891910542" className="text-primary fw-semibold small text-decoration-none">+91 9891910542</a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="bg-primary text-white p-2 rounded-circle">
                      <i className="fa fa-envelope fs-5"></i>
                    </div>
                    <div>
                      <p className="mb-0 fw-semibold text-white">Client Account Services</p>
                      <p className="mb-0 text-white-50 small">Senior Accounts Desk</p>
                      <a href="mailto:info@scnglobalpvtltd.com" className="text-primary fw-semibold small text-decoration-none">info@scnglobalpvtltd.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <h5 className="fw-bold text-white mb-3">Why Employers Trust SCN:</h5>
              <ul className="list-unstyled text-light opacity-75 small d-flex flex-column gap-2 mb-0" style={{ fontSize: '15px' }}>
                <li><i className="fa fa-check-circle text-success me-2"></i> <strong>Rigorous Vetting:</strong> Pre-screened candidates matching technical and cultural requirements.</li>
                <li><i className="fa fa-check-circle text-success me-2"></i> <strong>Rapid Placement:</strong> Low turnaround time for niche IT, Android app, and general staffing needs.</li>
                <li><i className="fa fa-check-circle text-success me-2"></i> <strong>Compliance Guaranteed:</strong> Full statutory payroll, PF/ESI, and labor law compliance.</li>
                <li><i className="fa fa-check-circle text-success me-2"></i> <strong>Scalable Model:</strong> Contractual, temporary, or permanent staffing solutions.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Hiring Requirement Form */}
          <div className="col-lg-6">
            <div className="bg-dark p-4 p-md-5 rounded-4 shadow-sm border border-secondary border-opacity-25 h-100">
              <h3 className="fw-bold text-white mb-2">Submit Your Hiring Requirement</h3>
              <p className="text-white-50 small mb-4">Fill out the form below and our Client Account Manager will get in touch with you within 2 hours.</p>

              {submitted ? (
                <div className="alert alert-success p-4 rounded-3 text-center my-4 bg-dark text-white border-success">
                  <div className="fs-1 mb-2">🎉</div>
                  <h4 className="fw-bold alert-heading text-white">Requirement Received!</h4>
                  <p className="small mb-0 text-white-50">Thank you for reaching out to SCN Global. Our corporate employer relations team will contact you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-solid btn-sm mt-3 px-4 rounded-pill">
                    Submit Another Requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                  <div>
                    <label className="form-label small fw-semibold text-white">Company / Organization Name *</label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      placeholder="e.g. Acme Corp"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label small fw-semibold text-white">Contact Person Name *</label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      placeholder="Your Full Name"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      required
                    />
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-white">Work Email ID *</label>
                      <input
                        type="email"
                        className="form-control shadow-none"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-white">Contact Phone *</label>
                      <input
                        type="tel"
                        className="form-control shadow-none"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label small fw-semibold text-white"> Service Needed</label>
                    <select
                      className="form-select shadow-none"
                      value={formData.positions}
                      onChange={(e) => setFormData({ ...formData, positions: e.target.value })}
                    >
                      <option value="">Select Option</option>
                      <option value="IT Staffing">IT Services</option>
                      <option value="US Staffing">US Offshore Staffing</option>
                      <option value="General Staffing">General & Industrial Staffing</option>
                      <option value="Payroll Outsourcing">Payroll Management Outsourcing</option>
                      <option value="BPO Support">BPO / Call Center Operations</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label small fw-semibold text-white">Role Requirements & Description</label>
                    <textarea
                      className="form-control shadow-none"
                      rows="3"
                      placeholder="Specify skills, experience level, budget, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-solid py-3 fw-bold rounded-3 mt-2 shadow-sm"
                  >
                    Submit Requirement
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsEmployer;
