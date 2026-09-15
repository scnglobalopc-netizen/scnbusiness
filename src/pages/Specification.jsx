import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Specification({ onEnquireClick }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const overviewDetails = [
    { category: "Structure", detail: "RCC frame engineered with shear wall technology" },
    { category: "Main Door", detail: "8-foot teak wood, aligned with Vaastu" },
    { category: "Flooring", detail: "Flooring Vitrified tiles installed in all rooms, anti-skid tiles laid in the balcony" },
    { category: "Kitchen", detail: "Kitchen Modular setup fitted with RO point and multiple plug points" },
    { category: "Bathrooms", detail: "Bathrooms Chrome fittings installed, solar hot water supplied, shower panel provided in the master" },
    { category: "Windows", detail: "UPVC windows and doors fitted in all units" },
    { category: "Power", detail: "100% DG backup available at extra cost, 24x7 supply maintained in common areas" },
    { category: "Security", detail: "CCTV active, gas detectors installed, fire alarms set, intercom connected, 24x7 guards posted" },
    { category: "Lifts", detail: "High-speed lifts and service lifts operating in all towers" }
  ];

  const faqs = [
    {
      q: "What is the building made of?",
      a: "It is built with a strong concrete frame (RCC) using modern 'shear wall' technology for extra strength."
    },
    {
      q: "What does the main door look like?",
      a: "The main entry door is crafted from premium Teak Wood, reaching an 8-foot height in alignment with Vaastu principles."
    },
    {
      q: "What kind of flooring is used?",
      a: "All bedrooms, kitchen, dining room, entry, living room, hallways, and study rooms are surfaced with vitrified tiles. Laminated flooring is provided in the master bedroom, and the balcony floor features anti-skid ceramic tiles."
    },
    {
      q: "Is the kitchen ready to use?",
      a: "The counters are planned with enough space for a modular kitchen setup, including a ceramic tile strip border, RO points, utility area, and multiple power plugs for modern appliances."
    },
    {
      q: "Are the windows good quality?",
      a: "Yes, UPVC windows and frames are facilitated for all apartments, along with aluminum windows in specific utility sections."
    },
    {
      q: "Is there a power backup?",
      a: "Yes, buyers will receive 100% power backup (DG power) at an extra cost. Common areas and the clubhouse maintain 24/7 power supply automatically."
    },
    {
      q: "What are the bathrooms like?",
      a: "All toilets feature geyser provisions, anti-skid ceramic tiling, geyser hot water via solar devices on upper floors, chrome-plated fittings, suspended pipelines, and a shower panel in the master bathroom."
    },
    {
      q: "How safe is the complex?",
      a: "The gated complex features 24/7 security patrols, intercom facilities, active CCTV monitoring of common areas, gas leak detectors, and fire alarms."
    },
    {
      q: "Are there lifts in the building?",
      a: "Yes, automatic high-speed passenger lifts of suitable size are installed on all floors, along with service lifts for moving heavy materials."
    },
    {
      q: "Is there parking for electric cars?",
      a: "Yes, the 3-level basement parking provides dedicated EV charging points and a car wash bay."
    },
    {
      q: "How are the walls painted?",
      a: "External walls are finished with distemper paints, internal walls are covered with emulsion paints, and all railings are treated with enamel paint."
    },
    {
      q: "Is the project eco-friendly?",
      a: "Yes, the project implements water treatment plants, organic waste disposal methods, and rainwater harvesting to sustain an eco-friendly community."
    },
    {
      q: "What is the lobby like?",
      a: "The ground floor lobby of each tower is designed with granite/vitrified tiles and texturized paint. The staircase and service lobbies are finished in Kota Stone."
    },
    {
      q: "Are there enough electrical points?",
      a: "Yes, all bedrooms are equipped with PVC-insulated copper wiring, modular switches, and adequate electrical/TV points."
    },
    {
      q: "Can I see the full details?",
      a: "Yes, you can download the complete Brigade Granada specifications PDF from this page to check every detail before booking."
    }
  ];

  return (
    <div className="specification-page animate-fade-in">
      {/* Title Banner */}
      <section className="bradcam_area">
        <div className="container">
          <div className="bradcam_text">
            <h2>Specifications</h2>
            <ul className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li>Specifications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main_warpper py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Specifications Header Card */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm text-start" id="specification-header">
                <h1 className="text-center fw-bold mb-4" style={{ fontSize: '28px' }}>
                  Brigade Granada Specifications
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
                  Brigade Granada specifications highlight the quality standards that Brigade Group follows in every project. Each apartment is built with a strong RCC frame and shear wall technology, teak wood main doors, vitrified flooring, chrome-plated bathroom fittings, and a fully fitted modular kitchen. These are not basic builder materials. Brigade Group has chosen high-quality specifications that offer better durability and help improve resale value in the Whitefield–Hoskote Road area.
                </p>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }} className="mb-0">
                  Specifications enumerate the materials and fittings that are employed in the construction of the project. Brigade Group has provided this, so buyers can evaluate the quality of materials that will be utilized in this project. The specifications of Brigade Granada will meet world-class standards. Buyers can verify this by obtaining the Brigade Granada specifications PDF that is hosted on this website.
                </p>
              </div>

              {/* Construction Quality Table */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="construction-quality-overview">
                <h2 className="fw-bold mb-4 h5 text-start" style={{ color: '#28582d' }}>Overview of Brigade Granada Construction Quality</h2>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered mb-0">
                    <thead className="table-light">
                      <tr>
                        <th style={{ width: '30%' }}>Category</th>
                        <th>Key Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {overviewDetails.map((item, idx) => (
                        <tr key={idx} onClick={() => onEnquireClick(`Specification: ${item.category}`)} style={{ cursor: 'pointer' }}>
                          <td className="fw-bold">{item.category}</td>
                          <td className="text-muted text-start">{item.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Detailed Specifications Sections */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm text-start" id="detailed-specs-lists">
                <h2 className="fw-bold mb-4 h5 text-center" style={{ color: '#28582d' }}>Detailed Specifications of Brigade Granada</h2>

                <div className="row g-4">
                  {/* Category 1 */}
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded border h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-2">🏢 Structure</h3>
                      <ul className="list-unstyled small mb-0 lh-lg text-muted">
                        <li>• RCC frames constructed with shear wall technology</li>
                        <li>• Cement blocks will be integrated in some areas</li>
                      </ul>
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded border h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-2">⚡ Bedroom Flooring and Electrical</h3>
                      <ul className="list-unstyled small mb-0 lh-lg text-muted">
                        <li>• PVC-insulated wiring and mounted modular switches</li>
                        <li>• Multiple electrical and television points in all bedrooms</li>
                        <li>• Laminated flooring in the master bedroom, vitrified tiles in extra bedrooms</li>
                        <li>• Spacious balconies attached to master bedrooms for better airflow</li>
                      </ul>
                    </div>
                  </div>

                  {/* Category 3 */}
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded border h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-2">🚪 Internal Doors & Entrance</h3>
                      <ul className="list-unstyled small mb-0 lh-lg text-muted">
                        <li>• 8-foot high Teak Wood main entry door for Vaastu compliance</li>
                        <li>• Quality wood flush doors in all bedrooms</li>
                        <li>• UPVC slide door frames and shutters for external accesses</li>
                      </ul>
                    </div>
                  </div>

                  {/* Category 4 */}
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded border h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-2">🪟 External Doors and Windows</h3>
                      <ul className="list-unstyled small mb-0 lh-lg text-muted">
                        <li>• UPVC windows facilitated for all units</li>
                        <li>• UPVC doors and shutters installed for all flats</li>
                        <li>• Aluminum windows and doors incorporated in specific spots</li>
                      </ul>
                    </div>
                  </div>

                  {/* Category 5 */}
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded border h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-2">📐 Apartment Flooring</h3>
                      <ul className="list-unstyled small mb-0 lh-lg text-muted">
                        <li>• Ceramic tile finishes laid in balconies</li>
                        <li>• Vitrified tiles laid in living, dining, entry, kitchen, corridors, and study rooms</li>
                      </ul>
                    </div>
                  </div>

                  {/* Category 6 */}
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded border h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-2">🍳 Kitchen</h3>
                      <ul className="list-unstyled small mb-0 lh-lg text-muted">
                        <li>• Counters planned with adequate space for modular kitchen</li>
                        <li>• Ceramic tile strip bordered along kitchen counter lengths</li>
                        <li>• Kitchen utility area with tile finishes and sink space</li>
                        <li>• Plug points for dishwashers, grinders, washing machines, and RO systems</li>
                      </ul>
                    </div>
                  </div>

                  {/* Category 7 */}
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded border h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-2">🏢 Lobby & Common Areas</h3>
                      <ul className="list-unstyled small mb-0 lh-lg text-muted">
                        <li>• Vitrified tiles laid on basement, ground, and upper tower lobbies</li>
                        <li>• Service lobbies and staircases finished in Kota Stone</li>
                        <li>• Quality texture paints and distempers on common area walls and ceilings</li>
                        <li>• Granite flooring fixed in the main reception areas</li>
                      </ul>
                    </div>
                  </div>

                  {/* Category 8 */}
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded border h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-2">🚿 Restrooms / Toilets</h3>
                      <ul className="list-unstyled small mb-0 lh-lg text-muted">
                        <li>• Geyser provisions and exhaust fan layouts in all toilets</li>
                        <li>• Solar hot water supply for upper floor apartments</li>
                        <li>• Suspended pipelines, towel rods, and soap stands</li>
                        <li>• Chrome-plated sanitary fittings and PVC coated false ceilings</li>
                        <li>• Master bathroom features a shower panel and wash basin</li>
                      </ul>
                    </div>
                  </div>

                  {/* Category 9 */}
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded border h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-2">🛗 Lifts & Elevators</h3>
                      <ul className="list-unstyled small mb-0 lh-lg text-muted">
                        <li>• Granite cladding attached around lift entries</li>
                        <li>• High-speed passenger lifts installed on all floors</li>
                        <li>• Service lifts integrated for shifting household goods and heavy loads</li>
                      </ul>
                    </div>
                  </div>

                  {/* Category 10 */}
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded border h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-2">🛡️ Security & Power Systems</h3>
                      <ul className="list-unstyled small mb-0 lh-lg text-muted">
                        <li>• Gas leak detectors, fire alarms, and sprinkler detectors functioning</li>
                        <li>• 24/7 security with active intercom connectivity and CCTV monitoring</li>
                        <li>• 100% power backup (DG) available at extra cost</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="mt-4 small text-muted mb-0">
                  Brigade Group has followed the same high construction quality across 250+ completed projects in Bangalore, Hyderabad, Chennai, and Kochi. The materials used in Brigade Granada reflect the quality seen in their earlier townships. Buyers who invest during the pre-launch stage can secure today’s pricing while getting a finished home built with these standards.
                </p>
              </div>

              {/* FAQs Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="spec-faqs-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '22px' }}>
                  Frequently Asked Questions (FAQs)
                </h2>

                <div className="accordion" id="specFaqsAccordion">
                  {faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    const collapseId = `faqSpecCollapse${idx}`;
                    const headingId = `faqSpecHeading${idx}`;
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

              {/* Bottom Home Link */}
              <div className="text-center my-4">
                <Link to="/" className="fw-bold text-decoration-none" style={{ color: '#c59d5f' }}>
                  Explore more: Brigade Granada Home →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Specification;

