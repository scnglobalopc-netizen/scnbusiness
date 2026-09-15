import React, { useState } from 'react';

function EnquiryModal({ isOpen, onClose, title = 'Get Instant Consultation' }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'General Enquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: 'General Enquiry', message: '' });
    }, 2000);
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center animate-fade-in"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
    >
      <div
        className="bg-dark text-white rounded-4 shadow-lg p-4 position-relative mx-3 border border-secondary border-opacity-25 animate-slide-down"
        style={{ maxWidth: '460px', width: '100%' }}
      >
        {/* Close Button */}
        <button
          type="button"
          className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
          aria-label="Close"
          onClick={onClose}
          style={{ cursor: 'pointer' }}
        ></button>

        {/* Title & Subtitle */}
        <div className="text-center mb-4 mt-2">
          <img
            src="/images/scn_global_logo.jpg"
            alt="SCN Global Logo"
            className="mb-2 rounded-circle border border-info border-opacity-25"
            style={{ maxHeight: '54px', width: 'auto', objectFit: 'cover' }}
          />
          <h2 className="fw-bold mb-1 text-white" style={{ fontSize: '22px' }}>
            SCN Global
          </h2>
          <h3 className="fw-semibold text-primary mb-3" style={{ fontSize: '15px' }}>
            {title}
          </h3>

          {/* Quick Badges / Support Icons */}
          <div className="d-flex justify-content-around text-center py-2 border-top border-bottom border-secondary border-opacity-25 my-3">
            <div>
              <i className="fa fa-headphones fs-4 text-primary d-block mb-1"></i>
              <span className="text-light opacity-75" style={{ fontSize: '11px', display: 'block', lineHeight: '1.2' }}>24/7 Support</span>
            </div>
            <div>
              <i className="fa fa-briefcase fs-4 text-primary d-block mb-1"></i>
              <span className="text-light opacity-75" style={{ fontSize: '11px', display: 'block', lineHeight: '1.2' }}>Staffing & IT</span>
            </div>
            <div>
              <i className="fa fa-certificate fs-4 text-primary d-block mb-1"></i>
              <span className="text-light opacity-75" style={{ fontSize: '11px', display: 'block', lineHeight: '1.2' }}>20+ Yrs Legacy</span>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="alert alert-success border-0 text-center py-4 rounded-3 mb-0 bg-black text-white" role="alert">
            <div className="fs-3 mb-2">✅</div>
            <h4 className="alert-heading fw-bold mb-2">Request Submitted!</h4>
            <p className="small mb-0 opacity-75">Thank you. Our representative will connect with you shortly.</p>
            <button onClick={() => { setSubmitted(false); onClose(); }} className="btn btn-solid btn-sm mt-3 px-4 rounded-pill">
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            {/* Full Name */}
            <div>
              <input
                type="text"
                className="form-control modal-underline-input"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            {/* Email ID */}
            <div>
              <input
                type="email"
                className="form-control modal-underline-input"
                placeholder="Email ID"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            {/* Mobile with Country Code */}
            <div className="d-flex align-items-center gap-2 border-bottom border-secondary border-opacity-50 pb-1">
              <select className="border-0 bg-transparent text-white small py-2" style={{ outline: 'none', cursor: 'pointer', minWidth: '95px', fontSize: '15px' }}>
                <option value="+91" style={{ background: '#0f172a' }}>India (+91)</option>
                <option value="+1" style={{ background: '#0f172a' }}>USA (+1)</option>
                <option value="+971" style={{ background: '#0f172a' }}>UAE (+971)</option>
                <option value="+44" style={{ background: '#0f172a' }}>UK (+44)</option>
              </select>
              <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255,255,255,0.3)' }}></div>
              <input
                type="tel"
                className="form-control border-0 bg-transparent py-1 shadow-none text-white"
                style={{ outline: 'none', fontSize: '15px' }}
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            {/* Service Selection */}
            <div>
              <select
                className="form-select border-0 border-bottom border-secondary border-opacity-50 rounded-0 shadow-none text-white bg-transparent"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="General Enquiry" style={{ background: '#0f172a' }}>Select Service / Vertical</option>
                <option value="IT Services" style={{ background: '#0f172a' }}>SCN Global IT Services</option>
                <option value="IT Training" style={{ background: '#0f172a' }}>SCN Global IT Training Institute</option>
                <option value="HR Training" style={{ background: '#0f172a' }}>SCN Global HR Training Institute</option>
                <option value="Personality Training" style={{ background: '#0f172a' }}>Personality Development Training</option>
                <option value="US Staffing" style={{ background: '#0f172a' }}>SCN Global U.S. Staffing</option>
                <option value="Payroll Management" style={{ background: '#0f172a' }}>SCN Global Payroll Management</option>
                <option value="General Staffing" style={{ background: '#0f172a' }}>SCN Global General Staffing</option>
                <option value="BPO Services" style={{ background: '#0f172a' }}>SCN Global BPO Services</option>
                <option value="Real Estate" style={{ background: '#0f172a' }}>SCN Global Real Estate</option>
                <option value="Employer Hiring" style={{ background: '#0f172a' }}>As Employer / Hiring Partner</option>
                <option value="Employee Career" style={{ background: '#0f172a' }}>As Employee / Job Seeker</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <textarea
                className="form-control modal-underline-input"
                rows="2"
                style={{ resize: 'none' }}
                placeholder="How can we help you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-2">
              <button
                type="submit"
                className="btn btn-solid w-100 py-3 border-0 rounded-3 text-white fw-bold"
                style={{ fontSize: '16px', letterSpacing: '0.5px' }}
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default EnquiryModal;

