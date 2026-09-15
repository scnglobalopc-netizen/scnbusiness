import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MasterPlan({ onEnquireClick }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const keyFeatures = [
    "Main Entry/Exit Gates & Wide Driveways",
    "Fun Play Zones for children",
    "Smart Tower Placement for better views",
    "Outdoor Sports Courts (like Tennis or Basketball)",
    "Clubhouses in every phase",
    "Safe Parking Areas",
    "Jogging Tracks & Walking Paths",
    "Beautiful Gardens and themed parks",
    "Space for Future Growth of the project"
  ];

  const towerFeatures = [
    "3 basements dedicated to safe car parking",
    "G+24 upper floors for residential living",
    "Wide spacing between towers for a quiet atmosphere",
    "Large balconies in every home to enjoy the views",
    "Quick access to the clubhouse and sports zones from any tower",
    "Cross-ventilation to keep your home cool and airy"
  ];

  const unitSizes = [
    { type: "2.5 BHK", size: "1,200 to 1,400 sq. ft." },
    { type: "3 BHK", size: "1,600 to 1,950 sq. ft." },
    { type: "4 BHK", size: "2,200 to 2,800 sq. ft." }
  ];

  const clubhouseAmenities = [
    "24/7 Security and an Emergency Room",
    "Swimming Pools for adults and kids",
    "Modern Gym, Yoga Floor, and Zumba Space",
    "Relaxing Spa, Massage Room, and Salon",
    "Rooftop Party Deck and a large Banquet Hall",
    "Gaming Zone, Mini Theatre, and Library",
    "Café, Food Court, and an ATM inside the campus"
  ];

  const kidsAmenities = [
    "Creche Facility for toddlers",
    "Safe Walking Zones (no cars allowed)",
    "Indoor Activity Areas and a Toddlers' Park"
  ];

  const faqs = [
    {
      q: "Where is Brigade Granada located?",
      a: "The Brigade Granada project is situated on Whitefield–Hoskote Road in East Bangalore, ensuring great connectivity to the city's main hubs."
    },
    {
      q: "What is the total size of the project land?",
      a: "The project spans a total land area of 20 acres, designed to balance urban living with nature."
    },
    {
      q: "How much open space is available in the project?",
      a: "Brigade Granada features an impressive 80% open green space, dedicating only 20% of the land for buildings."
    },
    {
      q: "How many towers and floors are there?",
      a: "The township features 14 high-rise towers, each rising up to 24 floors high (3 basements + Ground + 24 floors)."
    },
    {
      q: "What types of apartments are being offered?",
      a: "The project offers premium 2.5 BHK, 3 BHK, and 4 BHK luxury residences."
    },
    {
      q: "What are the sizes of the different units?",
      a: "The sizes are: 2.5 BHK (1,200 - 1,400 sq. ft.), 3 BHK (1,600 - 1,950 sq. ft.), and 4 BHK (2,200 - 2,800 sq. ft.). All units are designed in compliance with Vaastu principles."
    },
    {
      q: "How big is the clubhouse?",
      a: "The grand clubhouse is massive, spanning over 50,000 sq. ft. of space."
    },
    {
      q: "What amenities are found inside the clubhouse?",
      a: "Amenities include a modern gym, zumba room, pools, spa, banquet hall, indoor gaming zone, mini theatre, library, and in-campus café/food court."
    },
    {
      q: "Are there special facilities for kids?",
      a: "Yes, kids have access to a crèche, safe toddler play zones (no-car areas), and indoor play zones."
    },
    {
      q: "How is the parking managed?",
      a: "Parking is managed via 3 levels of basements featuring EV charging stations, safe walkaways, and car wash provisions."
    },
    {
      q: "Is Brigade Granada an eco-friendly project?",
      a: "Yes, it implements sustainable systems like solar panel grids for common area lighting, rainwater harvesting, and smart waste management."
    },
    {
      q: "What security features are provided?",
      a: "The gated community has 24/7 active CCTV surveillance, video door phones, intercoms, and trained security patrols."
    },
    {
      q: "Is there support for Electric Vehicles (EV)?",
      a: "Yes, dedicated EV charging points are integrated inside the basement parking levels."
    },
    {
      q: "What makes the tower design 'low-density'?",
      a: "Towers are placed widely apart to ensure maximum cross-ventilation, privacy, and breathing room, avoiding visual clutter and overcrowding."
    },
    {
      q: "How can I get the full project layout?",
      a: "You can download the official Master Plan PDF from our website, or get in touch with the sales team to view the physical 3D layout at our experience center."
    }
  ];

  return (
    <div className="master-plan-page animate-fade-in">
      {/* Title Banner */}
      <section className="bradcam_area">
        <div className="container">
          <div className="bradcam_text">
            <h2>Master Plan</h2>
            <ul className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li>Master Plan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main_warpper py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Master Plan Heading Card */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="master-plan-header">
                <h1 className="text-center fw-bold mb-4" style={{ fontSize: '28px' }}>
                  Brigade Granada Master Plan
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
                    onClick={() => onEnquireClick('Download Master Plan')} 
                    className="btn_main_brochure px-4 py-2"
                    style={{ minWidth: '160px' }}
                  >
                    <i className="fa fa-map me-1"></i> Master Plan
                  </button>
                </div>

                {/* Master Plan Render Image */}
                <div className="text-center mb-4 border rounded p-2 bg-light">
                  <img 
                    src="https://www.thebrigadegranada.in/images/plans/brigade-granada-master-plan.webp" 
                    alt="Brigade Granada Master Plan - Modern Township Layout and Green Zones on 20 Acres" 
                    className="img-fluid rounded"
                    style={{ width: '100%', maxHeight: '420px', objectFit: 'contain' }}
                  />
                  <p className="small text-muted mt-2 mb-0 fw-semibold">
                    Brigade Granada Master Plan - Modern Township Layout and Green Zones on 20 Acres
                  </p>
                </div>

                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }}>
                  The Brigade Granada master plan covers 20 acres of land and features 14 high-rise towers. Each of these towers goes up to 24 floors high. Situated on Whitefield–Hoskote Road in East Bangalore, this project offers 2,000 premium homes in 2.5, 3, and 4 BHK sizes.
                </p>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }}>
                  Expert architects designed the project so that every home receives lots of natural sunlight and fresh air. We set aside a massive 80% of the land for gardens and parks, using only 20% for the buildings. This clever plan makes the neighborhood feel quiet and roomy, which is very hard to find in busy Bangalore.
                </p>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }} className="mb-0">
                  The plan places all 14 towers far apart to give residents privacy and allow a cool breeze to flow through. Everything—from the play areas and roads to the gates and parking—is neatly organized. If you want to see the exact details, you can ask the sales team for the full master plan PDF before you book your flat.
                </p>
              </div>

              {/* Key Features List */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="key-features">
                <h2 className="fw-bold mb-3 h5" style={{ color: '#28582d' }}>Key Features of the Master Plan</h2>
                <div className="row g-2">
                  {keyFeatures.map((feat, idx) => (
                    <div className="col-md-6" key={idx}>
                      <div className="p-2 border-bottom text-start small">• {feat}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 small text-muted text-start mb-0">
                  The design focuses on sustainability and healthy living. Every part of the campus is built to avoid crowding, improve airflow, and make sure you can reach any facility easily from your building.
                </p>
              </div>

              {/* Tower Plan & Design */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="tower-plan">
                <h2 className="fw-bold mb-3 h5" style={{ color: '#28582d' }}>Tower Plan & Design</h2>
                <p style={{ fontSize: '15px', color: '#333' }}>
                  All 14 towers at Brigade Granada are designed to be "low-density," meaning there is more breathing room for everyone. Each building includes:
                </p>
                <ul className="text-start lh-lg small">
                  {towerFeatures.map((tFeat, idx) => (
                    <li key={idx}>• {tFeat}</li>
                  ))}
                </ul>
              </div>

              {/* Apartment Sizes */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="apartment-sizes">
                <h2 className="fw-bold mb-3 h5" style={{ color: '#28582d' }}>Apartment Sizes</h2>
                <p style={{ fontSize: '15px', color: '#333' }}>
                  The flats are built following Vaastu principles to bring in positive energy and light.
                </p>
                <div className="table-responsive">
                  <table className="table table-bordered mb-0 text-center">
                    <thead className="table-light">
                      <tr>
                        <th>Configuration</th>
                        <th>Super Built-up Area</th>
                      </tr>
                    </thead>
                    <tbody>
                      {unitSizes.map((u, idx) => (
                        <tr key={idx}>
                          <td className="fw-bold">{u.type}</td>
                          <td>{u.size}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* The Grand Clubhouse */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="clubhouse-amenities">
                <h2 className="fw-bold mb-3 h5" style={{ color: '#28582d' }}>The Grand Clubhouse</h2>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }}>
                  The Brigade Granada clubhouse is massive, spanning over <strong>50,000 sq. ft.</strong> It is the heart of the project and offers 35+ indoor activities for people of all ages. Residents can enjoy these facilities anytime without paying extra fees.
                </p>

                <div className="row g-4 mt-2 text-start">
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded border h-100">
                      <h4 className="h6 fw-bold text-dark border-bottom pb-2 mb-2">⭐ Top Amenities</h4>
                      <ul className="list-unstyled small mb-0 lh-lg">
                        {clubhouseAmenities.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded border h-100">
                      <h4 className="h6 fw-bold text-dark border-bottom pb-2 mb-2">🧸 Special Features for Kids</h4>
                      <ul className="list-unstyled small mb-0 lh-lg">
                        {kidsAmenities.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Maps & PDF */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="maps-pdf">
                <h2 className="fw-bold mb-3 h5" style={{ color: '#28582d' }}>Detailed Project Maps & PDF</h2>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }}>
                  You can find the official Brigade Granada Master Plan PDF on our website. It clearly shows:
                </p>
                <ul className="text-start lh-lg small mb-3">
                  <li>• Tower Placement Map (where each building stands)</li>
                  <li>• Floor Plans for each flat type</li>
                  <li>• Location Map of the project in East Bangalore</li>
                  <li>• Amenity Zones (where the parks and courts are)</li>
                </ul>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }} className="mb-0">
                  The project also provides 3-level basement parking with EV charging points for electric cars and a car wash area. The entire campus is watched over by CCTV cameras, video door phones, and a trained security team. To stay eco-friendly, we use solar panels, rainwater harvesting, and smart waste systems.
                </p>
              </div>

              {/* Why Choose Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="why-choose-granada" style={{ backgroundColor: '#f9fcf9 !important' }}>
                <h2 className="fw-bold mb-3 h5" style={{ color: '#28582d' }}>Why Choose Brigade Granada?</h2>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }} className="mb-0">
                  What makes Brigade Granada special is that it keeps 80% of its land as open space. Most other projects in this price range only give you 60% or 65%. This means you get better views, more greenery, and less noise from neighbors. The plan also keeps walking paths away from car roads, making it very safe for kids and senior citizens to walk around. You are welcome to visit our sales office to see the 3D model of the master plan before making your decision.
                </p>
              </div>

              {/* FAQs Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="master-faqs-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '22px' }}>
                  Frequently Asked Questions (FAQs)
                </h2>

                <div className="accordion" id="masterFaqsAccordion">
                  {faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    const collapseId = `faqMastCollapse${idx}`;
                    const headingId = `faqMastHeading${idx}`;
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
              <div className="border rounded p-4 mb-4 bg-white shadow-sm" id="master-related-posts">
                <h2 className="fw-bold mb-2 h5 text-center" style={{ color: '#28582d' }}>Related Posts</h2>
                <div className="row g-3 mt-2 text-start">
                  <div className="col-md-6">
                    <div 
                      className="card p-3 bg-light border cursor-pointer hover-shadow transition-all"
                      onClick={() => onEnquireClick('Related: Retail and Commercial Guide')}
                    >
                      <h4 className="h6 fw-bold text-primary mb-1" style={{ fontSize: '13px' }}>
                        Integrated Apartments with Retail and Commercial: Easy Housing Guide
                      </h4>
                      <p className="small text-muted mb-0" style={{ fontSize: '11px' }}>
                        Explore dynamic mixed-use gated enclaves in East Bangalore.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div 
                      className="card p-3 bg-light border cursor-pointer hover-shadow transition-all"
                      onClick={() => onEnquireClick('Related: Model Apartment Tour')}
                    >
                      <h4 className="h6 fw-bold text-primary mb-1" style={{ fontSize: '13px' }}>
                        Brigade Granada Model Apartment | 2.5 BHK | 3 BHK | 4 BHK
                      </h4>
                      <p className="small text-muted mb-0" style={{ fontSize: '11px' }}>
                        Virtual walkthroughs and 3D render designs of unit interiors.
                      </p>
                    </div>
                  </div>
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

export default MasterPlan;

