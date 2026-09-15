import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Amenities({ onEnquireClick }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const mainAmenities = [
    { name: "Gymnasium", icon: "🏋️" },
    { name: "Swimming Pool", icon: "🏊" },
    { name: "Yoga Pavilion", icon: "🧘" },
    { name: "Video Door Phone", icon: "📞" },
    { name: "Kids Activity Zone", icon: "🧸" },
    { name: "Mini Theater", icon: "🎬" },
    { name: "Tennis Court", icon: "🎾" },
    { name: "Indoor Games Room", icon: "🎮" },
    { name: "Club House", icon: "🏢" },
    { name: "Dance/Music", icon: "🎵" },
    { name: "24/7 CCTV Monitoring", icon: "📹" },
    { name: "Jogging Track", icon: "🏃" }
  ];

  const outdoorAmenities = [
    "Herb and Spice Garden", "Medicinal Plant Garden", "Bird Feeder", 
    "Mini Woodland", "Serenity Lounge", "Hammock Garden", 
    "Zen Garden", "Nature Walkway", "Hangout Space", 
    "Water Court with Sculpture", "Leisure Landscape Court", 
    "Koi Pond", "Sunlit Meadow", "Snapshot Nook", 
    "Giant Chess", "Camping Ground", "Picnic Lawn with Tents"
  ];

  const healthAndFitness = [
    "Seating Gallery", "Outdoor Playboard", "Outdoor Table Tennis", 
    "Basketball Court", "Tennis Practice Wall", "Athlete Practice Area", 
    "Outdoor Crossfit Court", "Integrated Target Workouts", "Monkey Bar", 
    "Multi-purpose Sports Court", "Beach Volleyball", "Cross Net Volleyball"
  ];

  const lifestyleAmenities = [
    "Zumba Rooms", "Billiards & Games", "Pet's Corner", 
    "Jacuzzi", "Café", "Squash Court", "Multisports Court", 
    "Kids Play Area", "Urban Farming", "Party Area", 
    "Food Court", "Table Tennis", "Landscaped Garden", 
    "Board Games Room", "Skating Area", "Sauna"
  ];

  const recreationalZone = [
    "Mini Theatre", "Party Lawn with Dais", "Board Game Plaza", 
    "Outdoor Co-working Space", "Pet’s Park", "Adult Nest Swing", 
    "Working Garden with Pods", "Feng Shui Parks", "Musical Garden", 
    "Pet Washing Area", "Hobby Court", "Senior Citizen Plaza", 
    "Outdoor Chess Table", "Musical Stone Area", "Mist Rings"
  ];

  const fitnessZone = [
    "Yoga Room", "Walking Area", "Outdoor Exercising Deck", "Gym", 
    "Sport Courts", "Playgrounds", "Tactile Walk", "Squash Court", 
    "Rock Climb Wall", "Kid’s Play Area", "Jogging Tracks", "Skating Rink", 
    "Outdoor Swimming Pool", "Play Area", "Nature Trail", "Cycling Area"
  ];

  const indoorClubhouse = [
    "Changing Room", "Banquet Hall", "Card and Carom Range", "Indoor Pool", 
    "Squash Court", "Table Tennis Room", "Super Market", "Gym", 
    "Meeting Rooms", "Salon", "Mini Theatre", "Dance Rooms", 
    "Indoor Games", "Guest Rooms", "Party Hall", "Co-working Spaces", 
    "Spa", "Pool Table Room", "Leisure Pool"
  ];

  const terraceClubhouse = [
    "Rooftop Gym", "Solar Work Pods", "Camping Tent", 
    "Terrace Floor Games", "Sunset Deck", "Reading Lawn", "Terrace Yoga"
  ];

  const securityFeatures = [
    { name: "Boom barriers", desc: "Regulated vehicle entry and exit points" },
    { name: "Video door phones", desc: "Direct video connection from door to smartphone/intercom" },
    { name: "Public address system", desc: "Emergency announcements across common areas" },
    { name: "24*7 security", desc: "Trained security personnel active day and night" },
    { name: "CCTVs", desc: "Continuous video surveillance in common spaces and towers" }
  ];

  const faqs = [
    {
      q: "What are the key highlights of the Brigade Granada amenities?",
      a: "The Brigade Granada project features 35+ sports, fitness, and lifestyle facilities, 80% open green space, and a massive 50,000 sq ft multi-level clubhouse."
    },
    {
      q: "Is there an extra fee to use the clubhouse or sports facilities?",
      a: "No, every amenity remains accessible to all residents and tenants at no extra charge."
    },
    {
      q: "When will the final list of amenities be confirmed?",
      a: "The full amenities list will be officially finalized before the launch on 5 December 2026."
    },
    {
      q: "How large is the clubhouse at Brigade Granada?",
      a: "The clubhouse spans over 50,000 sq ft, distributed across 2 basements, a ground floor, and 3 upper floors."
    },
    {
      q: "What kind of indoor facilities are available in the clubhouse?",
      a: "Indoor facilities include a banquet hall, guest rooms, indoor/leisure pools, supermarket, salon, spa, squash court, table tennis, co-working spaces, dance rooms, and mini theatre."
    },
    {
      q: "Are there any unique features on the clubhouse terrace?",
      a: "Yes, the terrace features a rooftop gym, sunset deck, reading lawn, terrace yoga, solar work pods, camping tents, and terrace floor games."
    },
    {
      q: "Does the project offer facilities for working professionals?",
      a: "Yes, the project features co-working spaces inside the clubhouse, solar work pods on the terrace, and outdoor co-working gardens."
    },
    {
      q: "What sports facilities are available in the Fitness Zone?",
      a: "Facilities include a squash court, basketball court, tennis court, beach/cross net volleyball, outdoor crossfit, zumba rooms, skating rinks, cycling/jogging tracks, and swimming pools."
    },
    {
      q: "Are there dedicated spaces for senior citizens?",
      a: "Yes, a dedicated Senior Citizen Plaza, Serenity Lounges, and walking nature trails are integrated."
    },
    {
      q: "Is Brigade Granada a pet-friendly project?",
      a: "Yes, the project features a Pet's Park, Pet's Corner, and a Pet Washing Area."
    },
    {
      q: "What security features are installed on the premises?",
      a: "Safety features include boom barriers, video door phones, public address systems, 24/7 manned security, gas/fire detectors, and CCTV cameras."
    },
    {
      q: "Can I engage in organic farming within the project?",
      a: "Yes, the project includes dedicated spaces for Urban Farming."
    },
    {
      q: "Do some apartments have better views of the amenities?",
      a: "Yes, apartments that directly overlook the swimming pool, gardens, or landscaped courts command premium pricing due to high demand."
    },
    {
      q: "Where can I see photos of the planned amenities?",
      a: "High-definition photos are available in the gallery section of the website, and you can request a virtual walkthrough of the amenity zones."
    },
    {
      q: "How have experts rated the amenities at Brigade Granada?",
      a: "Property experts have rated the scale and variety of the amenities at Brigade Granada 4.7 out of 5."
    }
  ];

  const relatedPosts = [
    { title: "Brigade Granada Clubhouse & Sports Zone", desc: "A detailed look at the 50,000 sq ft sports architecture" },
    { title: "Brigade Granada Smart Homes", desc: "Future tech integrations including video door phones and automated locks" },
    { title: "Brigade Granada Sustainability", desc: "Rainwater harvesting, solar panel arrays and organic waste systems" },
    { title: "Brigade Granada Bangalore: Safe Senior Living", desc: "Age-friendly infrastructure, emergency systems and plazas" }
  ];

  return (
    <div className="amenities-page animate-fade-in">
      {/* Title Banner */}
      <section className="bradcam_area">
        <div className="container">
          <div className="bradcam_text">
            <h2>Amenities</h2>
            <ul className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li>Amenities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main_warpper py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Amenities Header Card */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm text-start" id="amenities-header">
                <h1 className="text-center fw-bold mb-4" style={{ fontSize: '28px' }}>
                  Brigade Granada Amenities
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
                  Brigade Granada amenities feature 35+ sports, fitness, and lifestyle facilities. It is spread across 80% open space, and a 50,000 sq ft clubhouse in East Bangalore. Every amenity remains accessible to all residents and tenants at no extra charge. The project is at a pre-launch stage, and the full amenities list will be finalized before the official launch on 5 December 2026.
                </p>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }} className="mb-0">
                  Brigade Group has crafted these amenities for modern families, working professionals, and senior citizens. You find dedicated zones for fitness, recreation, leisure, and community living inside the project campus. You do not need to venture outside for your daily wellness or social needs. You can acquire the Brigade Granada amenities PDF from this page, containing a complete list of 35+ features with images and placement details inside the project layout.
                </p>
              </div>

              {/* Main List Icon Grid */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="main-list-grid">
                <h2 className="fw-bold mb-4 h5 text-center" style={{ color: '#28582d' }}>Brigade Granada Amenities List</h2>
                <div className="row g-3 justify-content-center">
                  {mainAmenities.map((item, idx) => (
                    <div className="col-6 col-sm-4 col-md-3 text-center" key={idx}>
                      <div className="p-3 border rounded bg-light hover-shadow transition-all h-100">
                        <div className="fs-2 mb-2">{item.icon}</div>
                        <span className="small fw-semibold text-secondary">{item.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Multi-Section Lists */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="detailed-categories">
                <h2 className="fw-bold mb-4 h5 text-center" style={{ color: '#28582d' }}>Amenities for Modern Living</h2>
                
                <div className="row g-4 text-start">
                  {/* Outdoor */}
                  <div className="col-md-4">
                    <div className="p-3 bg-light rounded border h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-3">🌿 Outdoor & Eco-Zones</h3>
                      <ul className="list-unstyled small mb-0 lh-lg text-muted">
                        {outdoorAmenities.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Health */}
                  <div className="col-md-4">
                    <div className="p-3 bg-light rounded border h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-3">🏋️ Health & Fitness</h3>
                      <ul className="list-unstyled small mb-0 lh-lg text-muted">
                        {healthAndFitness.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Lifestyle */}
                  <div className="col-md-4">
                    <div className="p-3 bg-light rounded border h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-3">💎 Lifestyle & Recreation</h3>
                      <ul className="list-unstyled small mb-0 lh-lg text-muted">
                        {lifestyleAmenities.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="mt-4 small text-muted text-start mb-0">
                  <strong>Community View Premium:</strong> Apartments that directly overlook the swimming pool, gardens, or landscaped courts attract high demand at Brigade Granada. These units command a premium over standard pricing. Consult our sales team to obtain the Brigade Granada amenities price sheet and verify which units face these features.
                </p>
              </div>

              {/* Dedicated Zones Grids */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="dedicated-zones">
                <h2 className="fw-bold mb-4 h5 text-center" style={{ color: '#28582d' }}>Recreational & Fitness Zones</h2>
                
                <div className="row g-4 text-start">
                  <div className="col-md-6">
                    <div className="p-3 border rounded h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-3">🎭 Recreational Zone (15 Spaces)</h3>
                      <p className="small text-muted mb-3">Spaces designed for relaxation, neighborhood meets, and outdoor community fun:</p>
                      <div className="row g-1 small text-muted">
                        {recreationalZone.map((item, idx) => (
                          <div className="col-6" key={idx}>• {item}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-3 border rounded h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-3">🏃 Fitness Zone (16 Spaces)</h3>
                      <p className="small text-muted mb-3">Dedicated indoor & outdoor athletic layouts that eliminate outside gym memberships:</p>
                      <div className="row g-1 small text-muted">
                        {fitnessZone.map((item, idx) => (
                          <div className="col-6" key={idx}>• {item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clubhouse Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm text-start" id="clubhouse-section">
                <h2 className="fw-bold mb-2 h5" style={{ color: '#28582d' }}>Brigade Granada Clubhouse</h2>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }} className="mb-4">
                  Brigade Granada clubhouse stretches over 50,000 sq ft across 2 basement floors, a ground floor, and 3 upper floors. It ranks as one of the largest clubhouses in any residential project on Whitefield–Hoskote Road. The clubhouse houses 19 indoor amenities and 7 terrace-level features.
                </p>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded border h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-3">🏢 Indoor Clubhouse Amenities</h3>
                      <div className="row g-1 small text-muted">
                        {indoorClubhouse.map((item, idx) => (
                          <div className="col-6" key={idx}>• {item}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded border h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-3">🌅 Clubhouse Terrace Amenities</h3>
                      <div className="row g-1 small text-muted">
                        {terraceClubhouse.map((item, idx) => (
                          <div className="col-12" key={idx}>• {item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm text-start" id="security-section">
                <h2 className="fw-bold mb-3 h5" style={{ color: '#28582d' }}>Security & Safety Amenities</h2>
                <div className="row g-3">
                  {securityFeatures.map((sec, idx) => (
                    <div className="col-md-4" key={idx}>
                      <div className="p-3 bg-light rounded border h-100">
                        <div className="fw-bold text-dark mb-1 small">{sec.name}</div>
                        <div className="text-muted small" style={{ fontSize: '12px', lineHeight: '1.4' }}>{sec.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="amenities-faqs-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '22px' }}>
                  Frequently Asked Questions (FAQs)
                </h2>

                <div className="accordion" id="amenitiesFaqsAccordion">
                  {faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    const collapseId = `faqAmenCollapse${idx}`;
                    const headingId = `faqAmenHeading${idx}`;
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
              <div className="border rounded p-4 mb-4 bg-white shadow-sm" id="amenities-related-posts">
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

export default Amenities;

