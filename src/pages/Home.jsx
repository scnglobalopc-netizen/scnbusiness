import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const heroSlides = [
  {
    badge: 'SCN GLOBAL • EST. 2004',
    line1: 'Building <em>high-performing</em> teams &',
    line2: 'empowering global business growth.',
    subtitle: 'Leading provider of staffing, IT solutions, HR training, and corporate management services.'
  },
  {
    badge: 'ENTERPRISE IT & MOBILE SOLUTIONS',
    line1: 'Custom <em>Web & Android App</em>',
    line2: 'engineering for digital growth.',
    subtitle: 'Native Android (Kotlin), iOS, Flutter apps, full-stack web architectures, and Google Play Store deployment.'
  },
  {
    badge: 'GLOBAL TALENT & US STAFFING',
    line1: 'Specialized <em>offshore recruitment</em> &',
    line2: 'cross-border staffing solutions.',
    subtitle: 'Deploying expert US IT recruiters, general staffing, BPO support, and enterprise workforce management.'
  },
  {
    badge: '20+ YEARS INDUSTRY LEGACY',
    line1: 'Job-oriented <em>training institutes</em> &',
    line2: 'practical HR generalist certification.',
    subtitle: 'Empowering students and corporate professionals with hands-on skill modules and placement support.'
  }
];

const businessOverview = [
  {
    id: 1,
    slug: 'it-services',
    title: 'SCN Global IT Services',
    image: '/images/vertical_it_services.jpg',
    desc: 'Custom web apps, mobile solutions, cloud management, UI/UX design, and SEO services.'
  },
  {
    id: 2,
    slug: 'it-training',
    title: 'SCN Global IT Training Institute',
    image: '/images/vertical_it_training.jpg',
    desc: 'Job-oriented technical training in full-stack web development, SEO, and digital marketing.'
  },
  {
    id: 3,
    slug: 'personality-development',
    title: 'SCN Global Personality Training',
    image: '/images/vertical_personality_training.jpg',
    desc: 'Soft skills, corporate etiquette, public speaking, and confidence building for professionals.'
  },
  {
    id: 4,
    slug: 'hr-training',
    title: 'SCN Global HR Training Institute',
    image: '/images/vertical_hr_training.jpg',
    desc: 'End-to-end practical HR generalist training, payroll, and recruitment certification.'
  },
  {
    id: 5,
    slug: 'us-staffing',
    title: 'SCN Global U. S. Staffing',
    image: '/images/vertical_us_staffing.jpg',
    desc: 'Offshore recruitment solutions, US IT bench sales recruiters, W2/C2C placements.'
  },

  {
    id: 6,
    slug: 'general-staffing',
    title: 'SCN Global General Staffing',
    image: '/images/vertical_general_staffing.jpg',
    desc: 'Temporary, contractual, and permanent workforce deployment for diverse industries.'
  },
  {
    id: 7,
    slug: 'event-management',
    title: 'SCN Global Event Management',
    image: '/images/vertical_payroll_management.jpg',
    desc: 'Corporate events, trade shows, BTL promotions, exhibitions, custom exhibits, and MICE services.'
  },
  {
    id: 8,
    slug: 'bpo-services',
    title: 'SCN Global BPO Services',
    image: '/images/vertical_bpo_services.jpg',
    desc: '24/7 Voice and non-voice customer support, inbound/outbound sales, and live help desk.'
  },
  {
    id: 9,
    slug: 'real-estate',
    title: 'SCN Global Real Estate',
    image: '/images/vertical_real_estate.jpg',
    desc: 'Corporate office space leasing, commercial property advisory, and asset management.'
  }
];

const testimonials = [
  {
    quote: "SCN Global helped streamline our HR and staffing needs with exceptional professionalism. Their team is responsive, reliable, and results-driven.",
    author: "Rohit Gupta",
    role: "VP Operations, Tech Enterprise"
  },
  {
    quote: "Their IT staffing and offshore team setup exceeded our expectations. The candidates were well-trained and ready to perform from Day 1.",
    author: "Priya Sharma",
    role: "HR Director, Global Solutions"
  },
  {
    quote: "SCN Global Payroll Management transformed our compliance and monthly salary process. Error-free and timely every single month.",
    author: "Amit Verma",
    role: "Founder & CEO, Retail Chain"
  },

];

const partnerLogos = [
  { name: 'IDT', tagline: 'Tech Solutions' },
  { name: 'Noble', tagline: 'Enterprise' },
  { name: 'CubeWeb', tagline: 'Digital' },
  { name: 'Hurculas', tagline: 'Structure' },
  { name: 'Tracking Africa', tagline: 'Systems' },
  { name: 'DevWeb', tagline: 'Solutions' },
  { name: 'Khetan', tagline: 'Industries' },
  { name: 'SDK', tagline: 'Travels' },
  { name: 'Waves', tagline: 'Media' },
  { name: 'CW', tagline: 'Global' },
  { name: 'Tangent', tagline: 'Technologies' },
  { name: 'Imperial', tagline: 'Medicare' },
  { name: 'Sky Group', tagline: 'Ventures' },
  { name: 'Markup', tagline: 'Design' },
  { name: 'Connect', tagline: 'Infosoft' },
  { name: 'Nazeer', tagline: 'Foods' },
  { name: 'Money Tick', tagline: 'Fintech' },
  { name: 'InXpress', tagline: 'Logistics' },
  { name: 'Future Group', tagline: 'Retail' },
  { name: 'JSR Global', tagline: 'Network' },
  { name: 'Filo', tagline: 'EdTech' },
  { name: 'MS Infotech', tagline: 'Software' },
  { name: 'Dangal Games', tagline: 'Gaming' },
  { name: 'Easy Solar Solutions ', tagline: 'Tech Solutions' },

];

function Home({ onEnquireClick }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto-play timer for hero text slider (every 4.5 seconds)
  React.useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(slideInterval);
  }, []);

  // Entrance animation fallback handler
  React.useEffect(() => {
    const appearEls = document.querySelectorAll('.appear');
    appearEls.forEach((el) => {
      const handleAnimEnd = () => el.classList.add('is-in');
      el.addEventListener('animationend', handleAnimEnd, { once: true });
    });

    const timer = setTimeout(() => {
      appearEls.forEach((el) => {
        el.classList.add('is-in');
      });
    }, 1600);

    return () => clearTimeout(timer);
  }, [currentSlideIndex]);

  const currentTitle = heroSlides[currentSlideIndex];

  return (
    <div className="home-page animate-fade-in position-relative">
      {/* Vesper Background Grain Overlay */}
      <div className="grain" />

      {/* Vesper.ai Single-Viewport Hero Section */}
      <div className="vesper-hero-section position-relative">
        {/* Background Video Layer */}
        <div className="hero-photo-wrapper">
          <video autoPlay loop muted playsInline className="hero-photo">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260818_072341_50851634-bbc3-4c33-9acc-7647d4db44aa.mp4" type="video/mp4" />
          </video>
          <div className="hero-scrim" />
        </div>

        {/* Hero Content */}
        <main className="hero" id="top">
          <div className="hero-copy" key={currentSlideIndex}>
            {/* Badge */}
            <div className="badge appear appear--pop" style={{ '--d': '0.15s' }}>
              <svg viewBox="0 0 24 24" width="18" height="20" fill="white" className="badge-star">
                <path d="M12 2.6C12.55 2.6 12.88 3.15 13.08 4.7c.62 4.7 1.52 5.6 6.22 6.22 1.55.2 2.1.53 2.1 1.08s-.55.88-2.1 1.08c-4.7.62-5.6 1.52-6.22 6.22-.2 1.55-.53 2.1-1.08 2.1s-.88-.55-1.08-2.1c-.62-4.7-1.52-5.6-6.22-6.22C3.15 12.88 2.6 12.55 2.6 12s.55-.88 2.1-1.08c4.7-.62 5.6-1.52 6.22-6.22C11.12 3.15 11.45 2.6 12 2.6Z" />
              </svg>
              <span>{currentTitle.badge}</span>
            </div>

            {/* H1 Headline */}
            <h1>
              <span className="headline-line appear appear--mask" style={{ '--d': '0.35s' }} dangerouslySetInnerHTML={{ __html: currentTitle.line1 }} />
              <span className="headline-line appear appear--mask" style={{ '--d': '0.50s' }} dangerouslySetInnerHTML={{ __html: currentTitle.line2 }} />
            </h1>

            {/* Lede Paragraph */}
            <p className="lede appear appear--soft" style={{ '--d': '0.65s' }}>
              {currentTitle.subtitle}
            </p>

            {/* Hero Action Buttons */}
            <div className="hero-actions">
              <Link
                to="/contact-us"
                className="btn btn-solid appear appear--btn"
                style={{ '--d': '0.80s' }}
              >
                Get Started Now
              </Link>
              <Link
                to="/our-business"
                className="btn btn-ghost appear appear--side"
                style={{ '--d': '0.90s' }}
              >
                Explore Business Verticals
              </Link>
            </div>

            {/* Slide Switchers & Arrow Controls */}
            <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
              <button
                type="button"
                className="btn-slider-arrow"
                onClick={() => setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                aria-label="Previous Slide"
              >
                <i className="fa fa-chevron-left"></i>
              </button>

              <div className="d-flex align-items-center gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`hero-slide-indicator ${idx === currentSlideIndex ? 'active' : ''}`}
                    onClick={() => setCurrentSlideIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="btn-slider-arrow"
                onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length)}
                aria-label="Next Slide"
              >
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </main>

        {/* Stats Footer */}
        <footer className="stats">
          <div className="stat appear appear--stat" style={{ '--d': '1.12s' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="pillGrad1" x1="3" y1="2" x2="14" y2="22" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.38" />
                  <stop offset="100%" stopColor="#3a3a3a" stopOpacity="0.62" />
                </linearGradient>
                <linearGradient id="pillGrad2" x1="3" y1="2" x2="14" y2="22" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#3a3a3a" stopOpacity="0.38" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.62" />
                </linearGradient>
              </defs>
              <rect x="3.4" y="2.6" width="7.2" height="18.8" rx="3.6" fill="url(#pillGrad1)" />
              <rect x="13.4" y="2.6" width="7.2" height="18.8" rx="3.6" fill="url(#pillGrad2)" />
              <rect x="9.2" y="10.9" width="5.6" height="2.2" rx="1.1" fill="#4a4a4a" />
            </svg>
            <span>20+ Years Industry Legacy & Workflows</span>
          </div>

          <div className="stat appear appear--stat" style={{ '--d': '1.28s' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2.4" y="2.4" width="19.2" height="19.2" rx="6.2" fill="#ffffff" />
              <path d="M12 7.1v7.4" stroke="#111111" strokeWidth="1.85" strokeLinecap="round" />
              <path d="M8.15 12.35L12 16.2l3.85-3.85" stroke="#111111" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>1000+ Corporate Partners Onboarded</span>
          </div>

          <div className="stat appear appear--stat" style={{ '--d': '1.44s' }}>
            <svg width="38" height="21" viewBox="0 0 40 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="stat-icon-wide">
              <circle cx="10.2" cy="11" r="9.2" fill="#2b2b2b" />
              <ellipse cx="10.2" cy="12.1" rx="4.15" ry="3.7" fill="#f4f4f4" />
              <polygon points="6.8,7.2 8.4,5.2 9.2,7.6" fill="#2b2b2b" />
              <polygon points="13.6,7.2 12.0,5.2 11.2,7.6" fill="#2b2b2b" />
              <circle cx="9" cy="11.5" r="0.7" fill="#1a1a1a" />
              <circle cx="11.4" cy="11.5" r="0.7" fill="#1a1a1a" />
              <circle cx="20.2" cy="11" r="9.2" fill="#ffffff" />
              <circle cx="18" cy="9.8" r="1.7" fill="#111111" />
              <circle cx="22.4" cy="9.8" r="1.7" fill="#111111" />
              <ellipse cx="20.2" cy="12.2" rx="1.2" ry="0.9" fill="#111111" />
              <path d="M17.8 14.2 Q20.2 16.6 22.6 14.2" stroke="#111111" strokeWidth="1.2" fill="none" strokeLinecap="round" />
              <circle cx="30.2" cy="11" r="9.2" fill="#f26b1d" />
              <text x="30.2" y="15.1" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="12.5" textAnchor="middle" fill="#ffffff">e</text>
            </svg>
            <span>10,000+ Placements & 180+ Teams</span>
          </div>
        </footer>
      </div>

      {/* Quick Statistics Banner */}
      <div className="py-4 text-white shadow-sm position-relative z-2" style={{ backgroundColor: 'var(--colorPrimary)' }}>
        <div className="container">
          <div className="row text-center g-3">
            <div className="col-md-3 col-6">
              <h3 className="fw-bold mb-0 text-white">20+</h3>
              <p className="small mb-0 text-white-50">Years Legacy (Est. 2004)</p>
            </div>
            <div className="col-md-3 col-6">
              <h3 className="fw-bold mb-0 text-white">1000+</h3>
              <p className="small mb-0 text-white-50">Enterprise Clients</p>
            </div>
            <div className="col-md-3 col-6">
              <h3 className="fw-bold mb-0 text-white">10,000+</h3>
              <p className="small mb-0 text-white-50">Successful Placements</p>
            </div>
            <div className="col-md-3 col-6">
              <h3 className="fw-bold mb-0 text-white">9</h3>
              <p className="small mb-0 text-white-50">Specialized Verticals</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Company Teaser */}
      <div className="container py-5 position-relative z-2">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="pe-lg-3">
              <span className="text-primary fw-bold text-uppercase small" style={{ letterSpacing: '1px' }}>About SCN Global</span>
              <h2 className="display-6 fw-bold text-white my-2">Your Trusted Partner in Workforce & Technology Excellence</h2>
              <p className="text-light opacity-75" style={{ lineHeight: '1.7' }}>
                SCN Global is a premier multi-level business company providing top-tier staffing solutions, IT services, HR training, english and personality development programs, payroll management, BPO operations, real estate services and event management services.
              </p>
              <p className="text-light opacity-75" style={{ lineHeight: '1.7' }}>
                Headquartered in Delhi, our deep industry expertise empowers companies to build high-performing teams, optimize operational efficiency, and drive sustainable growth across India and international markets.
              </p>
              <div className="d-flex gap-3 mt-4">
                <Link to="/about-us" className="btn btn-solid px-4 py-2 fw-semibold">
                  Read Our Story
                </Link>
                <Link to="/as-employer" className="btn btn-ghost px-4 py-2 fw-semibold">
                  For Employers
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rounded-4 overflow-hidden shadow-lg border border-secondary border-opacity-25">
              <img
                src="/images/corporate_meeting_about.jpg"
                alt="SCN Corporate Meeting & Strategy"
                className="w-100 h-100 object-fit-cover"
                style={{ maxHeight: '380px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Business Verticals Grid ("WHAT WE DO") */}
      <div className="py-5 border-top border-bottom border-secondary border-opacity-25 position-relative z-2" id="our-verticals" style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)' }}>
        <div className="container py-2">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="badge bg-primary px-3 py-2 text-uppercase mb-2" style={{ letterSpacing: '1px' }}>WHAT WE DO</span>
            <h2 className="display-6 fw-bold text-white">Our Core Business Verticals</h2>
            <p className="text-light opacity-75">Explore our specialized service divisions designed for enterprise scale.</p>
          </div>

          <div className="row g-4">
            {businessOverview.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="business-card attractive-card shadow-sm h-100 bg-dark text-white border border-secondary border-opacity-25">
                  <div className="business-card-img-wrapper">
                    <Link to={`/our-business/${item.slug}`}>
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </Link>
                  </div>
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h3 className="h5 fw-bold mb-2">
                      <Link to={`/our-business/${item.slug}`} className="text-white text-decoration-none hover-primary">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-light opacity-75 small mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
                      {item.desc}
                    </p>
                    <div className="d-flex gap-2 mt-auto">
                      <Link
                        to={`/our-business/${item.slug}`}
                        className="btn btn-solid btn-sm flex-grow-1 fw-semibold"
                      >
                        Explore Details <i className="fa fa-arrow-right ms-1"></i>
                      </Link>
                      <Link
                        to="/contact-us"
                        className="btn btn-ghost btn-sm fw-semibold"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div className="py-5 position-relative z-2" style={{ backgroundColor: '#000000' }}>
        <div className="container py-3">
          <div className="text-center mb-5">
            <span className="text-primary fw-bold text-uppercase small" style={{ letterSpacing: '1px' }}>Client Satisfaction</span>
            <h2 className="display-6 fw-bold text-white">What Our Customers Say</h2>
          </div>

          <div className="row g-4 justify-content-center">
            {testimonials.map((t, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className="attractive-card p-4 d-flex flex-column justify-content-between bg-dark text-white border border-secondary border-opacity-25">
                  <div className="mb-3">
                    <div className="text-warning mb-2">★★★★★</div>
                    <p className="text-light opacity-90 fst-italic mb-0" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="pt-3 border-top border-secondary border-opacity-25">
                    <h6 className="fw-bold mb-0 text-white">— {t.author}</h6>
                    <span className="small text-white-50">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Logos Grid Section */}
      <div className="py-5 border-top border-secondary border-opacity-25 position-relative z-2" style={{ backgroundColor: 'rgba(15, 23, 42, 0.4)' }}>
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="fw-bold text-white mb-2">Our Esteemed Clients & Partners</h3>
            <p className="text-light opacity-75 small">Trusted by industry-leading organizations across multiple domains.</p>
          </div>

          <div className="row g-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6">
            {partnerLogos.map((partner, index) => (
              <div className="col" key={index}>
                <div className="client-logo-item bg-dark border border-secondary border-opacity-25 rounded-3 p-3 text-center d-flex flex-column justify-content-center align-items-center h-100" title={partner.name} style={{ minHeight: '80px' }}>
                  <span className="fw-bold text-white small d-block mb-1">{partner.name}</span>
                  <span className="text-primary opacity-75" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{partner.tagline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Contact Teaser */}
      <div className="text-white py-5 position-relative z-2" style={{ backgroundColor: 'var(--colorPrimary)' }}>
        <div className="container text-center">
          <h2 className="fw-bold text-white mb-3">Ready to Grow Your Business with SCN?</h2>
          <p className="lead text-white-50 max-w-xl mx-auto mb-4" style={{ maxWidth: '600px' }}>
            Get in touch with our Client Helpdesk or visit our Corporate  Office in Noida Sector 63 and Sector-3, Rohini, Delhi.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link
              to="/contact-us"
              className="btn btn-solid px-4 py-3"
            >
              Request Call Back
            </Link>
            <Link to="/contact-us" className="btn btn-ghost px-4 py-3">
              Contact Helpdesk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
