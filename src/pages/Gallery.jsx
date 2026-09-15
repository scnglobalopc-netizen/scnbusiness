import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Gallery({ onEnquireClick }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const galleryList = [
    {
      title: "Brigade Group",
      category: "Developer Profile of Brigade Granada",
      src: "https://www.thebrigadegranada.in/images/brigade-group/brigade-group.webp"
    },
    {
      title: "Brigade Avalon",
      category: "Developer Profile of Brigade Granada",
      src: "https://www.thebrigadegranada.in/images/brigade-group/brigade-avalon.webp"
    },
    {
      title: "Brigade Lakecrest",
      category: "Developer Profile of Brigade Granada",
      src: "https://www.thebrigadegranada.in/images/brigade-group/brigade-lakecrest.webp"
    },
    {
      title: "Whitefield–Hoskote Road",
      category: "Developer Profile of Brigade Granada",
      src: "https://www.thebrigadegranada.in/images/brigade-limited/index-hero.webp"
    },
    {
      title: "Whitefield",
      category: "Brigade Granada Location Map - Connectivity",
      src: "https://www.thebrigadegranada.in/images/plans/brigade-granada-master-plan.webp"
    },
    {
      title: "Tech Park",
      category: "Brigade Granada Location Map - Connectivity",
      src: "https://www.thebrigadegranada.in/images/brigade-group/banner/brigade-granada-tower-view.webp"
    },
    {
      title: "Brigade Granada Hoskote Entrance View",
      category: "Developer Profile of Brigade Granada",
      src: "https://www.thebrigadegranada.in/images/brigade-group/banner/brigade-granada-entrance-view.webp"
    },
    {
      title: "Brigade Granada East Bangalore Living Area",
      category: "Developer Profile of Brigade Granada",
      src: "https://www.thebrigadegranada.in/images/brigade-limited/index-hero.webp"
    },
    {
      title: "Brigade Granada Bangalore Balcony View",
      category: "Developer Profile of Brigade Granada",
      src: "https://www.thebrigadegranada.in/images/brigade-group/banner/brigade-granada-swimmimg-pool-view.webp"
    },
    {
      title: "Brigade Granada Swimming Pool",
      category: "Developer Profile of Brigade Granada",
      src: "https://www.thebrigadegranada.in/images/brigade-group/banner/brigade-granada-swimmimg-pool-view.webp"
    },
    {
      title: "Brigade Granada Dining Area",
      category: "Developer Profile of Brigade Granada",
      src: "https://www.thebrigadegranada.in/images/plans/2.5-bhk-floor-plan.webp"
    },
    {
      title: "Brigade Granada Bedroom Area",
      category: "Developer Profile of Brigade Granada",
      src: "https://www.thebrigadegranada.in/images/plans/3-bhk-floor-plan.webp"
    }
  ];

  const blrFallback = "https://www.thebrigadegranada.in/images/plans/brigade-granada-master-plan.webp";

  const faqs = [
    {
      q: "Where is Brigade Granada located?",
      a: "Brigade Granada is a luxury township located on Whitefield–Hoskote Road in East Bangalore."
    },
    {
      q: "What can I see in the project gallery?",
      a: "You can view over 45 high-quality photos of the towers, amenities, internal living spaces, landscaping, and master layouts."
    },
    {
      q: "Does the gallery show real construction updates?",
      a: "Yes, the gallery is updated every 15 days with the latest photos from the building site."
    },
    {
      q: "When is the possession date for Brigade Granada?",
      a: "The keys are expected to be handed over to buyers starting in 2030."
    },
    {
      q: "What kind of apartments are available here?",
      a: "The configurations offered are premium 2.5 BHK, 3 BHK, and 4 BHK configurations."
    },
    {
      q: "How many towers are there in the project?",
      a: "There are 14 high-rise towers in the project, each standing G+24 floors tall."
    },
    {
      q: "What is special about the project layout?",
      a: "The layout allocates 80% open space for gardens and playgrounds, keeping only 20% for buildings to ensure privacy and airflow."
    },
    {
      q: "What kind of amenities does the project offer?",
      a: "Over 35 premium facilities are integrated, covering sports courts, jogging tracks, pools, yoga deck, mini theatre, and organic farming."
    },
    {
      q: "How big is the clubhouse?",
      a: "The clubhouse is extremely spacious, spanning over 50,000 sq ft across multiple levels."
    },
    {
      q: "How do I watch the 360-degree virtual tour?",
      a: "Find the tour block, hit the play button, fill out a small enquiry form, and the 360-degree walkthrough will begin immediately."
    },
    {
      q: "Can I get a live video tour of the project?",
      a: "Yes, you can request a live video tour on WhatsApp from our sales managers."
    },
    {
      q: "Is it possible to visit the site in person?",
      a: "Yes, you can book a free site visit to see the model apartment and progress with our representative."
    }
  ];

  const relatedPosts = [
    { title: "Brigade Granada Latest Photos | Luxury Homes and Amenities", desc: "Browse high-definition photography of the premium landscaping" },
    { title: "Brigade Granada Photos | Download Images | Aerial View", desc: "Get structural floor layouts, landscape master plans and drone shots" },
    { title: "Take a Virtual Tour of Brigade Granada | Video", desc: "Detailed 360-degree interactive virtual tour guide" }
  ];

  return (
    <div className="gallery-page animate-fade-in">
      {/* Title Banner */}
      <section className="bradcam_area">
        <div className="container">
          <div className="bradcam_text">
            <h2>Gallery</h2>
            <ul className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li>Gallery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main_warpper py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Gallery Header Card */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm text-start" id="gallery-header">
                <h1 className="text-center fw-bold mb-4" style={{ fontSize: '28px' }}>
                  Brigade Granada Gallery
                </h1>

                {/* Action Buttons */}
                <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
                  <button 
                    onClick={() => onEnquireClick('Download Brochure')} 
                    className="btn_main_brochure px-4 py-2"
                    style={{ minWidth: '160px' }}
                  >
                    <i className="fa fa-download me-1"></i> Brochure
                  </button>
                  <button 
                    onClick={() => onEnquireClick('Download Floor Plan')} 
                    className="btn_main_brochure px-4 py-2"
                    style={{ minWidth: '160px' }}
                  >
                    <i className="fa fa-th-large me-1"></i> Floor Plan
                  </button>
                </div>

                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }}>
                  The Brigade Granada gallery gives you a real look at this luxury township on Whitefield–Hoskote Road in East Bangalore. We have put together more than 45 high-quality photos showing the tall towers, the fun play areas, how the rooms look from the inside, and the entire project map. Buyers can also take a 360-degree virtual tour, so it feels like you are walking through the project without leaving your house.
                </p>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }} className="mb-0">
                  We refresh the photos on this page every 15 days with the latest site updates. This makes it easy for you to check how the building work is going and see the project grow before you get your keys in 2030.
                </p>
              </div>

              {/* Virtual Tour Box */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm text-start" id="virtual-tour-section">
                <h2 className="fw-bold mb-3 h5 text-dark" style={{ color: '#28582d' }}>Brigade Granada Virtual Tour</h2>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }} className="mb-4">
                  In the Brigade Granada gallery, you can watch a full 360-degree video tour. It shows you the whole layout starting from the main gate, including where the towers stand and all the open park areas. You can check out the gym, the big clubhouse, the party halls, and the swimming pool to see exactly where everything is located.
                </p>

                <div className="p-3 bg-light rounded border mb-0">
                  <h3 className="h6 fw-bold mb-3">How to watch the 360-degree virtual tour of Brigade Granada:</h3>
                  <ol className="small lh-lg text-muted mb-0">
                    <li>1. Find the 360-degree video button below and click play.</li>
                    <li>2. Fill in a small form with your name and phone number.</li>
                    <li>3. Once you submit, the video tour will launch instantly.</li>
                  </ol>
                  <div className="text-center mt-3">
                    <button 
                      onClick={() => onEnquireClick('Start 360 Virtual Tour')}
                      className="btn_main_brochure px-4 py-2 border-0 fw-bold"
                    >
                      <i className="fa fa-play-circle me-1"></i> Start 360° Video Tour
                    </button>
                  </div>
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="gallery-grid-section">
                <h2 className="fw-bold mb-2 h5 text-center text-dark">Related Photos of Brigade Granada</h2>
                <p className="text-muted text-center small mb-4">Click on any render to view a larger image and cost breakdown.</p>
                
                <div className="row g-4 justify-content-center">
                  {galleryList.map((item, idx) => (
                    <div 
                      className="col-md-6 col-lg-4 text-center cursor-pointer" 
                      key={idx}
                      onClick={() => onEnquireClick(`Gallery View: ${item.title}`)}
                    >
                      <div className="floor_plan_Sec p-1 mb-2 border rounded bg-light hover-zoom transition-all">
                        <img 
                          src={item.src} 
                          alt={item.title} 
                          className="img-fluid rounded" 
                          style={{ width: '100%', height: '170px', objectFit: 'cover' }}
                          onError={(e) => { e.target.src = blrFallback; }}
                        />
                      </div>
                      <h3 className="h6 fw-bold text-dark mb-1" style={{ fontSize: '13px' }}>{item.title}</h3>
                      <p className="text-muted small mb-0" style={{ fontSize: '11px' }}>{item.category}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="gallery-faqs">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '22px' }}>
                  Frequently Asked Questions (FAQs)
                </h2>

                <div className="accordion" id="galleryFaqsAccordion">
                  {faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    const collapseId = `faqGalCollapse${idx}`;
                    const headingId = `faqGalHeading${idx}`;
                    return (
                      <div className="accordion-item" key={idx}>
                        <h2 className="accordion-header" id={headingId}>
                          <button 
                            className={`accordion-button ${isOpen ? '' : 'collapsed'}`} 
                            type="button" 
                            onClick={() => setActiveFaq(isOpen ? null : idx)}
                            aria-expanded={isOpen ? 'true' : 'false'}
                            aria-controls={collapseId}
                          >
                            {idx + 1}. {faq.q}
                          </button>
                        </h2>
                        {isOpen && (
                          <div id={collapseId} className="accordion-collapse show" aria-labelledby={headingId}>
                            <div className="accordion-body small text-muted" style={{ lineHeight: '1.6' }}>
                              {faq.a}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Related Posts Section */}
              <div className="border rounded p-4 mb-4 bg-white shadow-sm" id="gallery-related-posts">
                <h2 className="fw-bold mb-2 h5 text-center" style={{ color: '#28582d' }}>Related Posts</h2>
                <div className="row g-3 mt-2 text-start">
                  {relatedPosts.map((post, idx) => (
                    <div className="col-md-4" key={idx}>
                      <div 
                        className="card p-3 bg-light border h-100 cursor-pointer hover-shadow transition-all"
                        onClick={() => onEnquireClick(`Related: ${post.title}`)}
                      >
                        <h4 className="h6 fw-bold text-primary mb-1" style={{ fontSize: '13px' }}>{post.title}</h4>
                        <p className="small text-muted mb-0" style={{ fontSize: '11px', lineHeight: '1.4' }}>{post.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-4 border-top pt-3">
                  <Link to="/" className="fw-bold small text-decoration-none" style={{ color: '#c59d5f' }}>
                    Explore more: Brigade Granada Home →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;

