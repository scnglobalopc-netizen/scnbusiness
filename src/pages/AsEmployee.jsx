import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AsEmployee({ onEnquireClick }) {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', qualification: '', experience: '', resume: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="as-employee-page animate-fade-in bg-black text-white min-vh-100">
      {/* Top Banner / Breadcrumb */}
      <div className="bradcam_area position-relative">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="bradcam_text">
                <h2 className="display-6 text-white fw-bold mb-2">As Employee / Job Seeker</h2>
                <ul className="breadcrumb mb-0">
                  <li><Link to="/" className="text-white opacity-75">Home</Link></li>
                  <li className="text-white fw-bold">As Employee</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link 
                to="/contact-us" 
                className="btn btn-solid px-4 py-2 fw-bold"
              >
                <i className="fa fa-file-text-o me-2"></i> Submit Resume
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Employee Helpdesk */}
      <div className="container py-5">
        <div className="row g-4 align-items-stretch">
          {/* Left Column: Career & Training Guidance */}
          <div className="col-lg-6">
            <div className="bg-dark p-4 p-md-5 rounded-4 shadow-sm border border-secondary border-opacity-25 h-100">
              <span className="badge bg-success px-3 py-2 text-uppercase mb-3" style={{ letterSpacing: '1px' }}>
                Career Opportunities
              </span>
              <h2 className="fw-bold text-white mb-3">Accelerate Your Career with SCN</h2>
              <p className="text-light opacity-75 mb-4" style={{ lineHeight: '1.7' }}>
                Whether you are a fresh graduate seeking your first job or an experienced professional aiming for career advancement, SCN Global connects you with leading employers in IT, Android App Development, BPO, HR, Banking, and Corporate sectors across India & Global markets.
              </p>

              {/* Employee Helpdesk Box */}
              <div className="bg-black p-4 rounded-3 border-start border-4 border-success mb-4 border border-secondary border-opacity-25">
                <h5 className="fw-bold text-white mb-3"><i className="fa fa-id-badge text-success me-2"></i> Employee & Jobseeker Helpdesk</h5>
                <div className="d-flex align-items-start gap-3">
                  <div className="bg-success text-white p-2 rounded-circle">
                    <i className="fa fa-user-circle fs-5"></i>
                  </div>
                  <div>
                    <p className="mb-0 fw-semibold text-white">SCN Talent Acquisition Desk</p>
                    <p className="mb-0 text-white-50 small">Recruitment & Placement Lead</p>
                    <p className="mb-0 text-white small"><i className="fa fa-envelope text-success me-1"></i> <a href="mailto:info@scnglobalpvtltd.com" className="text-decoration-none text-success font-weight-bold">info@scnglobalpvtltd.com</a></p>
                    <p className="mb-0 text-white small"><i className="fa fa-phone text-success me-1"></i> <a href="tel:+917982941427" className="text-decoration-none text-success font-weight-bold">+91-7982941427</a></p>
                  </div>
                </div>
              </div>

              <h5 className="fw-bold text-white mb-3">Available Training & Placement Tracks:</h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="attractive-card p-3 bg-black text-white border border-secondary border-opacity-25 d-flex flex-column h-100">
                    <h6 className="fw-bold text-white mb-1">📱 Android & IT Development</h6>
                    <p className="text-white-50 small mb-2 flex-grow-1">Android (Kotlin/Java), React, Node, Python, UI/UX</p>
                    <Link to="/service-detail/full-stack-web-android" className="text-success small text-decoration-none fw-semibold">
                      More Details <i className="fa fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="attractive-card p-3 bg-black text-white border border-secondary border-opacity-25 d-flex flex-column h-100">
                    <h6 className="fw-bold text-white mb-1">👔 HR Management</h6>
                    <p className="text-white-50 small mb-2 flex-grow-1">Talent Sourcing, Payroll, Statutory Compliance</p>
                    <Link to="/service-detail/hr-generalist-payroll" className="text-success small text-decoration-none fw-semibold">
                      More Details <i className="fa fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="attractive-card p-3 bg-black text-white border border-secondary border-opacity-25 d-flex flex-column h-100">
                    <h6 className="fw-bold text-white mb-1">🌐 US Staffing & Recruiting</h6>
                    <p className="text-white-50 small mb-2 flex-grow-1">US IT Recruiter training & job placement</p>
                    <Link to="/service-detail/us-technical-recruitment" className="text-success small text-decoration-none fw-semibold">
                      More Details <i className="fa fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="attractive-card p-3 bg-black text-white border border-secondary border-opacity-25 d-flex flex-column h-100">
                    <h6 className="fw-bold text-white mb-1">🎧 BPO & Voice Care</h6>
                    <p className="text-white-50 small mb-2 flex-grow-1">Inbound / Outbound Customer Support jobs</p>
                    <Link to="/service-detail/bpo-customer-care" className="text-success small text-decoration-none fw-semibold">
                      More Details <i className="fa fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Candidate Application Form */}
          <div className="col-lg-6">
            <div className="bg-dark p-4 p-md-5 rounded-4 shadow-sm border border-secondary border-opacity-25 h-100">
              <h3 className="fw-bold text-white mb-2">Register & Upload Resume</h3>
              <p className="text-white-50 small mb-4">Submit your details to get indexed in our candidate database for upcoming hiring drives.</p>

              {submitted ? (
                <div className="alert alert-success p-4 rounded-3 text-center my-4 bg-dark text-white border-success">
                  <div className="fs-1 mb-2">🎓</div>
                  <h4 className="fw-bold alert-heading text-white">Application Submitted!</h4>
                  <p className="small mb-0 text-white-50">Thank you. The SCN Talent Acquisition & HR Team will review your profile and reach out.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-solid btn-sm mt-3 px-4 rounded-pill">
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                  <div>
                    <label className="form-label small fw-semibold text-white">Full Name *</label>
                    <input 
                      type="text" 
                      className="form-control shadow-none" 
                      placeholder="Enter your full name" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-white">Email Address *</label>
                      <input 
                        type="email" 
                        className="form-control shadow-none" 
                        placeholder="you@domain.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-white">Mobile Number *</label>
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

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-white">Highest Qualification</label>
                      <select 
                        className="form-select shadow-none"
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      >
                        <option value="">Select Qualification</option>
                        <option value="Graduate (B.Tech/BCA/BBA/B.Com)">Graduate (B.Tech / BCA / BBA / B.Com)</option>
                        <option value="Post Graduate (M.Tech/MCA/MBA)">Post Graduate (M.Tech / MCA / MBA)</option>
                        <option value="Diploma">Diploma / Certification</option>
                        <option value="12th Pass">10+2 / Intermediate</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-white">Experience Level</label>
                      <select 
                        className="form-select shadow-none"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      >
                        <option value="">Select Experience</option>
                        <option value="Fresher">Fresher (0 Years)</option>
                        <option value="1-3 Years">1 - 3 Years</option>
                        <option value="3-5 Years">3 - 5 Years</option>
                        <option value="5+ Years">5+ Years Senior</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="form-label small fw-semibold text-white">Paste Resume Text / Key Skills Summary *</label>
                    <textarea 
                      className="form-control shadow-none" 
                      rows="3" 
                      placeholder="Summary of skills, Android development, tech stack, past experience, or job preferences..."
                      value={formData.resume}
                      onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-solid py-3 fw-bold rounded-3 mt-2 shadow-sm"
                  >
                    Submit Job Application
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

export default AsEmployee;
