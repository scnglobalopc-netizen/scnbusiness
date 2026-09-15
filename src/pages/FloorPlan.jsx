import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FloorPlan({ onEnquireClick }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const floorPlanOptions = [
    { type: "2.5 BHK", size: "1,200 to 1,400 sq. ft.", price: "Rs 1.45 Crore*" },
    { type: "3 BHK", size: "1,600 to 1,950 sq. ft.", price: "Rs 1.95 Crore*" },
    { type: "4 BHK", size: "2,200 to 2,800 sq. ft.", price: "Rs 2.65 Crore*" }
  ];

  const designFeatures = [
    "2.5, 3, and 4 BHK layouts engineered between 1,200 sq ft and 2,800 sq ft",
    "Floor plans oriented as per Vaastu with North-, East-, or West-facing units",
    "All units structured with zero dead corners for maximum efficiency",
    "All units absorb ample natural light and ventilation",
    "No housing units confront each other, securing better privacy",
    "All balconies overlook surrounding green amenities for a serene view"
  ];

  const faqs = [
    {
      q: "What types of homes are available?",
      a: "Buyers can choose from 2.5, 3, and 4 BHK premium apartments."
    },
    {
      q: "How big are the apartments?",
      a: "The apartments range from 1,200 sq. ft. to 2,800 sq. ft. in super built-up area."
    },
    {
      q: "Where exactly is the project?",
      a: "The project is located on Whitefield–Hoskote Road in East Bangalore."
    },
    {
      q: "How many buildings and floors are there?",
      a: "There are 14 high-rise towers, and each building rises to G+24 floors."
    },
    {
      q: "Where do residents park their cars?",
      a: "Each tower features 3 basement levels dedicated to safe car parking."
    },
    {
      q: "Can I see the house layout in 3D?",
      a: "Yes, floor plans are available in both 2D and 3D formats on request."
    },
    {
      q: "What is the starting price for a 2.5 BHK?",
      a: "The starting price for a 2.5 BHK apartment is Rs 1.45 Crore at the pre-launch offer rate."
    },
    {
      q: "What is the starting price for a 3 BHK?",
      a: "The starting price for a 3 BHK apartment is Rs 1.95 Crore."
    },
    {
      q: "What is the starting price for a 4 BHK?",
      a: "The starting price for a 4 BHK apartment is Rs 2.65 Crore."
    },
    {
      q: "What is the extra small room in a 2.5 BHK used for?",
      a: "The extra small room is highly versatile and can be used as a home office, study room, or toddler's nursery."
    },
    {
      q: "Are the homes built according to Vaastu?",
      a: "Yes, all apartments are built following Vaastu principles to ensure positive energy and light flow."
    },
    {
      q: "What does 'zero dead space' mean?",
      a: "It means that the internal architecture eliminates unused corners, and stack planning aligns plumbing shafts vertically, maximizing the net usable carpet area."
    },
    {
      q: "Will the apartments have enough light and air?",
      a: "Yes, all flats are crafted with cross-ventilation design to optimize natural light and airflow throughout the day."
    },
    {
      q: "What will I see from my balcony?",
      a: "All balconies are designed to face outwards, overlooking the surrounding green spaces and parks for a serene view."
    },
    {
      q: "Is the design well-liked by others?",
      a: "Yes, early buyers and real estate experts have rated the floor plans 4.6 out of 5, praising the vaastu compliance, zero dead space, and generous balcony sizes."
    }
  ];

  const relatedPosts = [
    { title: "2.5 BHK apartments in Brigade Granada: Best Choice", desc: "Why young couples prefer the 2.5 BHK layout study variant" },
    { title: "4BHK flats in Brigade Granada: Ultra-Luxury Living Guide", desc: "Premium configurations for large families and luxury end-users" },
    { title: "7 Stunning Interior Design Ideas for a 3 BHK in Brigade Granada", desc: "Tips on maximizing storage and layouts for your 3 BHK flat" },
    { title: "Vastu Shastra & Modern Living: Brigade Granada Unit Designs", desc: "Deep dive into entry orientations, kitchen layouts and energy compliance" }
  ];

  return (
    <div className="floor-plan-page animate-fade-in">
      {/* Title Banner */}
      <section className="bradcam_area">
        <div className="container">
          <div className="bradcam_text">
            <h2>Floor Plan</h2>
            <ul className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li>Floor Plan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main_warpper py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Floor Plan Header Card */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="floor-plan-header">
                <h1 className="text-center fw-bold mb-4" style={{ fontSize: '28px' }}>
                  Brigade Granada Floor Plan
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
                    <i className="fa fa-map-o me-1"></i> Floor Plan
                  </button>
                </div>

                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }}>
                  Brigade Granada floor plans offer 2.5, 3, and 4 BHK apartments with sizes from 1,200 to 2,800 sq ft. The project has 2,000 homes spread across 14 towers, and each building is 24 floors high. It is located on Whitefield–Hoskote Road in East Bangalore. Each tower has 3 basement levels for parking, which leaves the ground floor open for gardens and facilities.
                </p>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }} className="mb-0">
                  Each floor plan remains available in 2D and 3D formats. You can obtain the Brigade Granada floor plan PDF from this page to evaluate room sizes, layouts, and balcony positions across all unit types.
                </p>
              </div>

              {/* Floor Plan Render Image Grid */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="floor-plan-renders">
                <h2 className="fw-bold mb-4 h5 text-center" style={{ color: '#28582d' }}>Unit Variants & Configurations</h2>
                <div className="row g-4">
                  <div className="col-md-4 text-center">
                    <div className="floor_plan_Sec p-2 border mb-2 position-relative rounded bg-white">
                      <img 
                        src="https://www.thebrigadegranada.in/images/plans/2.5-bhk-floor-plan.webp" 
                        alt="Brigade Granada Unit Variants - 2.5 BHK Floor Plan" 
                        className="img-fluid"
                        style={{ height: '160px', objectFit: 'contain' }}
                      />
                      <button 
                        onClick={() => onEnquireClick('Download 2.5 BHK Floor Plan')} 
                        className="Common_btn btn_master position-absolute top-50 start-50 translate-middle border-0"
                        style={{ zIndex: 10 }}
                      >
                        Enquire Layout
                      </button>
                    </div>
                    <span className="fw-bold small text-secondary">2.5 BHK Floor Plan</span>
                  </div>

                  <div className="col-md-4 text-center">
                    <div className="floor_plan_Sec p-2 border mb-2 position-relative rounded bg-white">
                      <img 
                        src="https://www.thebrigadegranada.in/images/plans/3-bhk-floor-plan.webp" 
                        alt="Brigade Granada Unit Variants - 3 BHK Floor Plan" 
                        className="img-fluid"
                        style={{ height: '160px', objectFit: 'contain' }}
                      />
                      <button 
                        onClick={() => onEnquireClick('Download 3 BHK Floor Plan')} 
                        className="Common_btn btn_master position-absolute top-50 start-50 translate-middle border-0"
                        style={{ zIndex: 10 }}
                      >
                        Enquire Layout
                      </button>
                    </div>
                    <span className="fw-bold small text-secondary">3 BHK Floor Plan</span>
                  </div>

                  <div className="col-md-4 text-center">
                    <div className="floor_plan_Sec p-2 border mb-2 position-relative rounded bg-white">
                      <img 
                        src="https://www.thebrigadegranada.in/images/plans/4-bhk-floor-plan.webp" 
                        alt="Brigade Granada Unit Variants - 4 BHK Floor Plan" 
                        className="img-fluid"
                        style={{ height: '160px', objectFit: 'contain' }}
                      />
                      <button 
                        onClick={() => onEnquireClick('Download 4 BHK Floor Plan')} 
                        className="Common_btn btn_master position-absolute top-50 start-50 translate-middle border-0"
                        style={{ zIndex: 10 }}
                      >
                        Enquire Layout
                      </button>
                    </div>
                    <span className="fw-bold small text-secondary">4 BHK Floor Plan</span>
                  </div>
                </div>
              </div>

              {/* Table Options */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="floor-options">
                <h2 className="fw-bold mb-3 h5" style={{ color: '#28582d' }}>Brigade Granada Floor Plan Options</h2>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered mb-0 text-center">
                    <thead className="table-light">
                      <tr>
                        <th>Unit Type</th>
                        <th>Unit Size (Super Built-Up Area)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {floorPlanOptions.map((opt, idx) => (
                        <tr key={idx}>
                          <td className="fw-bold">{opt.type}</td>
                          <td>{opt.size}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 small text-muted text-start mb-0">
                  Within each BHK type, many variants exist with different arrangements of rooms and views pointing towards the external city. A choice of levels extends across 24 floors, and buyers can select any floors as they desire, from lower, middle, or higher floors.
                </p>
              </div>

              {/* Details of configurations */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="detailed-configurations">
                <h2 className="fw-bold mb-4 h5 text-center" style={{ color: '#28582d' }}>Types of Floor Plan at Brigade Granada</h2>

                {/* 2.5 BHK Details */}
                <div className="mb-4 text-start">
                  <h3 className="h6 fw-bold border-bottom pb-2 text-dark">Brigade Granada 2.5 BHK Floor Plan</h3>
                  <p className="small text-muted" style={{ lineHeight: '1.6' }}>
                    The 2.5 BHK homes range from 1,200 to 1,400 sq ft. They are perfect for young couples or first-time buyers looking for a smart, compact layout. The extra small room can be used as an office, a study, or a nursery. Prices for these homes start at Rs 1.45 Crore*.
                  </p>
                  <div className="p-3 bg-light rounded border">
                    <div className="fw-bold small mb-2">Internal Layout includes:</div>
                    <div className="row g-1 small text-muted">
                      <div className="col-md-6">• A kitchen with an attached utility</div>
                      <div className="col-md-6">• A living space</div>
                      <div className="col-md-6">• A master bedroom & a guest bedroom</div>
                      <div className="col-md-6">• A small study bedroom</div>
                      <div className="col-md-6">• 2 attached bathrooms</div>
                      <div className="col-md-6">• 2 balconies</div>
                    </div>
                  </div>
                </div>

                {/* 3 BHK Details */}
                <div className="mb-4 text-start">
                  <h3 className="h6 fw-bold border-bottom pb-2 text-dark">Brigade Granada 3 BHK Floor Plan</h3>
                  <p className="small text-muted" style={{ lineHeight: '1.6' }}>
                    The 3 BHK homes are between 1,600 and 1,950 sq ft. They are great for growing families who need extra space for a guest room, office, or gym. This is the most popular choice at Brigade Granada, with prices starting at Rs 1.95 Crore*.
                  </p>
                  <div className="p-3 bg-light rounded border">
                    <div className="fw-bold small mb-2">Internal Layout includes:</div>
                    <div className="row g-1 small text-muted">
                      <div className="col-md-6">• 3 bedrooms & a living room</div>
                      <div className="col-md-6">• 3 bathrooms</div>
                      <div className="col-md-6">• 3 balconies</div>
                      <div className="col-md-6">• A kitchen with an attached utility</div>
                    </div>
                  </div>
                </div>

                {/* 4 BHK Details */}
                <div className="mb-0 text-start">
                  <h3 className="h6 fw-bold border-bottom pb-2 text-dark">Brigade Granada 4 BHK Floor Plan</h3>
                  <p className="small text-muted" style={{ lineHeight: '1.6' }}>
                    The 4 BHK floor plan stretches from 2,200 to 2,800 sq ft. It accommodates large families, senior professionals, and NRI buyers who crave a premium home with generous room sizes. At 2,800 sq ft, this represents one of the largest apartment configurations situated on Whitefield–Hoskote Road. Prices begin at Rs 2.65 Crore* at the current pre-launch rate.
                  </p>
                  <div className="p-3 bg-light rounded border">
                    <div className="fw-bold small mb-2">Internal Layout includes:</div>
                    <div className="row g-1 small text-muted">
                      <div className="col-md-6">• 4 bedrooms & a living room</div>
                      <div className="col-md-6">• 4 balconies</div>
                      <div className="col-md-6">• A kitchen with an attached utility</div>
                      <div className="col-md-6">• 3 bathrooms (select units provide 4 bathrooms)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design parameters & Vaastu */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="design-parameters">
                <h2 className="fw-bold mb-3 h5" style={{ color: '#28582d' }}>How Brigade Granada Floor Plans Are Designed</h2>
                <ul className="text-start lh-lg small mb-3">
                  {designFeatures.map((feat, idx) => (
                    <li key={idx}>• {feat}</li>
                  ))}
                </ul>
                <p className="small text-muted mb-0">
                  All the flats follow Vaastu to provide a positive living space, and eliminate dead space to guarantee an extreme usable area in every housing unit. All the flats are crafted with cross ventilation to capture better natural light and airflow throughout the day. Stack planning ensures that plumbing shafts align vertically, boosting the net usable carpet area inside each apartment.
                </p>
              </div>

              {/* FAQs Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="floor-faqs-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '22px' }}>
                  Frequently Asked Questions (FAQs)
                </h2>

                <div className="accordion" id="floorFaqsAccordion">
                  {faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    const collapseId = `faqFloorCollapse${idx}`;
                    const headingId = `faqFloorHeading${idx}`;
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
              <div className="border rounded p-4 mb-4 bg-white shadow-sm" id="floor-related-posts">
                <h2 className="fw-bold mb-2 h5 text-center" style={{ color: '#28582d' }}>Related Posts</h2>
                <div className="row g-3 mt-2 text-start">
                  {relatedPosts.map((post, idx) => (
                    <div className="col-md-6" key={idx}>
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
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FloorPlan;

