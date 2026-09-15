import React from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css';

const corporatePillars = [
  {
    num: '01',
    icon: '🏢',
    title: 'Integrated Facility Management',
    desc: 'Complete workplace administration, soft services, technical operations, and infrastructure upkeep under a single contract.'
  },
  {
    num: '02',
    icon: '👥',
    title: 'Workplace Support Manpower',
    desc: 'Trained front-desk concierges, administrative coordinators, mailroom clerks, and workplace hospitality personnel.'
  },
  {
    num: '03',
    icon: '🛒',
    title: 'Corporate Procurement & Recurring Supplies',
    desc: 'Pantry consumables, premium office stationery, safety equipment, and IT peripherals with streamlined monthly invoicing.'
  },
  {
    num: '04',
    icon: '🛡️',
    title: 'Workplace Safety & Compliance',
    desc: 'Fire fighting drill adherence, electrical safety audits, air quality monitoring, and 100% labor law compliance.'
  },
  {
    num: '05',
    icon: '💻',
    title: 'Smart Technology & Energy Management',
    desc: 'IoT-enabled HVAC monitoring, digital visitor management systems, access card automation, and energy efficiency analytics.'
  },
  {
    num: '06',
    icon: '🤝',
    title: 'Single Accountable Partner Model',
    desc: 'Eliminate fragmented vendor coordination. A dedicated Facility Account Director oversees all site operations with strict SLAs.'
  }
];

const engagementBenefits = [
  { icon: 'fa-check', text: 'Single Unified Monthly Invoicing' },
  { icon: 'fa-shield', text: '100% Statutory & Labor Compliance' },
  { icon: 'fa-clock-o', text: '24/7 Rapid Helpdesk Resolution' },
  { icon: 'fa-line-chart', text: 'Up to 25% Reduction in Overhead Costs' },
  { icon: 'fa-users', text: 'Pre-Vetted, Background-Checked Staff' },
  { icon: 'fa-refresh', text: 'Immediate Staff Replacement Guarantee' }
];

function Solutions({ onEnquireClick }) {
  return (
    <div className="solutions-page animate-fade-in">
      {/* Top Banner / Breadcrumb Area */}
      <div className="bradcam_area position-relative">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="bradcam_text">
                <span className="badge bg-primary px-3 py-1 mb-2 text-uppercase fw-semibold" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                  Integrated Workplace Solutions
                </span>
                <h1 className="display-6 text-white fw-bold mb-2">One Stop Corporate Solutions</h1>
                <ul className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="/" className="text-white opacity-75 text-decoration-none">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/about-us" className="text-white opacity-75 text-decoration-none">About Us</Link></li>
                  <li className="breadcrumb-item active text-white fw-bold" aria-current="page">Corporate Solutions</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link 
                to="/contact-us"
                className="btn btn-solid px-4 py-2 fw-bold"
              >
                <i className="fa fa-phone me-2"></i> Request Proposal
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Overview Section */}
      <section className="solutions-hero-banner py-5">
        <div className="container py-3">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="pe-lg-3">
                <span className="badge bg-primary px-3 py-2 text-uppercase mb-3" style={{ letterSpacing: '1px' }}>
                  Unified Workplace Management
                </span>
                <h2 className="display-6 fw-bold text-white mb-3" style={{ fontSize: '32px', lineHeight: '1.25' }}>
                  Streamline Your Facilities, Staffing & Operations Under One Roof
                </h2>
                <p className="text-light opacity-80 mb-4" style={{ lineHeight: '1.75', fontSize: '16px' }}>
                  <strong>One Stop Corporate Solutions</strong> is SCN Global’s comprehensive Corporate Facility Management and Business Support Services division. We bring manpower, facility maintenance, workplace procurement, compliance, and safety together—freeing your leadership to focus 100% on core business growth.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link 
                    to="/contact-us" 
                    className="btn btn-solid px-4 py-3 fw-semibold"
                  >
                    Request Workplace Facility Audit
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="solutions-hero-img-wrap">
                <img 
                  src="/images/solutions_hero.jpg" 
                  alt="Corporate Solutions & Headquarters" 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Operational Pillars */}
      <section className="py-5">
        <div className="container py-2">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '750px' }}>
            <span className="badge bg-primary px-3 py-2 text-uppercase mb-2" style={{ letterSpacing: '1px' }}>
              Core Capabilities
            </span>
            <h2 className="display-6 fw-bold text-white">6 Pillars of Enterprise Facility Excellence</h2>
            <p className="text-light opacity-75">
              Customized to fit your exact site requirements, operating shifts, headcount strength, and regulatory safety standards.
            </p>
          </div>

          <div className="row g-4">
            {corporatePillars.map((pillar, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="solution-pillar-card">
                  <div className="solution-pillar-num">{pillar.num}</div>
                  <div className="fs-1 mb-3">{pillar.icon}</div>
                  <h3 className="h5 fw-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-light opacity-75 small mb-0" style={{ lineHeight: '1.65' }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Enterprise Benefits */}
      <section className="py-5 border-top border-bottom border-secondary border-opacity-25" style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)' }}>
        <div className="container py-2">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="text-primary fw-bold text-uppercase small" style={{ letterSpacing: '1px' }}>
                Why Leading Enterprises Choose SCN
              </span>
              <h2 className="display-6 fw-bold text-white my-3">Eliminate Fragmented Vendors. Boost Efficiency by 25%.</h2>
              <p className="text-light opacity-80" style={{ lineHeight: '1.75' }}>
                Managing separate vendors for security, cleaning, pantry supplies, electrical repairs, and admin manpower creates administrative friction, communication gaps, and escalating overhead costs.
              </p>
              <p className="text-light opacity-80 mb-4" style={{ lineHeight: '1.75' }}>
                With SCN Global, your enterprise gains a dedicated, accountable facility partner with clear Service Level Agreements (SLAs), standardized quality protocols, and real-time operational reporting.
              </p>
              <div className="d-flex flex-wrap gap-2">
                {engagementBenefits.map((item, idx) => (
                  <div className="solution-benefit-badge" key={idx}>
                    <i className={`fa ${item.icon} text-primary`}></i>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 p-md-5 rounded-4 bg-dark border border-secondary border-opacity-25 shadow-lg">
                <h4 className="fw-bold text-white mb-3">Schedule a Site Survey</h4>
                <p className="text-white-50 small mb-4">
                  Our senior facility engineers will inspect your facility, evaluate recurring supply requirements, and provide a customized operational audit proposal within 48 hours.
                </p>
                <div className="d-flex flex-column gap-3">
                  <div className="p-3 bg-black rounded-3 border border-secondary border-opacity-25">
                    <p className="fw-semibold text-white mb-1"><i className="fa fa-map-marker text-primary me-2"></i> Corporate Branch (Noida):</p>
                    <p className="small text-white-50 mb-0">H-25, G-9 Sector 63, Noida, UP 201301</p>
                  </div>
                  <div className="p-3 bg-black rounded-3 border border-secondary border-opacity-25">
                    <p className="fw-semibold text-white mb-1"><i className="fa fa-phone text-primary me-2"></i> Corporate Desk:</p>
                    <p className="small text-white-50 mb-0">+91 9891910542 | +91 7982941427</p>
                  </div>
                  <Link 
                    to="/contact-us"
                    className="btn btn-solid py-3 fw-bold rounded-3 mt-2 text-center text-decoration-none d-block"
                  >
                    Book Site Inspection Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-5 bg-black">
        <div className="container text-center py-3">
          <h3 className="fw-bold text-white mb-2">Ready to Transform Your Workplace Operations?</h3>
          <p className="text-light opacity-75 mx-auto mb-4" style={{ maxWidth: '650px' }}>
            Join leading enterprises that trust SCN Global for seamless workplace facility management and business support.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/contact-us" className="btn btn-solid px-4 py-2 fw-semibold">
              Contact Sales Team
            </Link>
            <Link to="/our-business" className="btn btn-ghost px-4 py-2 fw-semibold">
              Explore All Verticals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solutions;
