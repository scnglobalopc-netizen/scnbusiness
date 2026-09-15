import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Price({ onEnquireClick }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const priceList = [
    { type: "2.5 BHK", area: "1,200 to 1,400 sq. ft.", price: "Rs 1.45 Cr onwards" },
    { type: "3 BHK", area: "1,600 to 1,950 sq. ft.", price: "Rs 1.93 Cr onwards" },
    { type: "4 BHK", area: "2,200 to 2,800 sq. ft.", price: "Rs 2.65 Cr onwards" }
  ];

  const eoiAmounts = [
    { type: "2.5 BHK", amount: "Rs 9 Lakhs" },
    { type: "3 BHK", amount: "Rs 11 Lakhs" },
    { type: "4 BHK", amount: "Rs 15 Lakhs" }
  ];

  const hoskoteRates = [
    { type: "1 BHK", value: "Rs 52 Lakhs", rent: "Rs 11,000+" },
    { type: "2 BHK", value: "Rs 86 Lakhs", rent: "Rs 18,000+" },
    { type: "3 BHK", value: "Rs 1.10 Crore", rent: "Rs 25,000+" }
  ];

  const blrTrends = [
    { place: "Indira Nagar", rate: "₹15,500/ sq ft" },
    { place: "Manyata Tech Park", rate: "₹ 9,200/ sq ft" },
    { place: "Jayanagar", rate: "₹13,600/ sq ft" },
    { place: "Varthur", rate: "₹16,100/ sq ft" },
    { place: "Whitefield", rate: "₹15,500/ sq ft" },
    { place: "Marathahalli", rate: "₹9,000/ sq ft" },
    { place: "Sarjapur Road", rate: "₹9,000/ sq ft" },
    { place: "Yelahanka", rate: "₹10,620/ sq ft" },
    { place: "Hebbal", rate: "₹10,600/ sq ft" }
  ];

  const paymentPlan = [
    { stage: "Booking / EOI Amount", percentage: "10%" },
    { stage: "Signing Agreement", percentage: "20%" },
    { stage: "Foundation Work Milestone", percentage: "10%" },
    { stage: "Ground Floor Roof Slab", percentage: "5%" },
    { stage: "Progressive Floor Castings (2nd to 18th)", percentage: "5% per even floor" },
    { stage: "Internal Flooring Completion", percentage: "5%" },
    { stage: "Final Possession / Handover", percentage: "5%" }
  ];

  const costSheetBreakup = [
    "Agreement Value Cost",
    "Base Price of the Apartment",
    "Carpet Area Cost",
    "Stamp Duty Charges",
    "Registration Charges",
    "Applicable Taxes (GST)",
    "Total Built-up Area Cost",
    "Common Area Maintenance Charges",
    "Additional Fees & Floor Rise Cost",
    "Final Sale Value Price"
  ];

  const faqs = [
    {
      q: "Where is Brigade Granada located?",
      a: "Brigade Granada is located in Hoskote, East Bangalore. It is close to major IT hubs like Whitefield and Varthur."
    },
    {
      q: "What apartment types are available?",
      a: "The project offers premium 2.5 BHK, 3 BHK, and 4 BHK configurations."
    },
    {
      q: "What is the starting price of the apartments?",
      a: "Apartments start at Rs 1.45 Cr for a 2.5 BHK, Rs 1.93 Cr for a 3 BHK, and Rs 2.65 Cr for a 4 BHK configuration."
    },
    {
      q: "What is the current pre launch price per square foot?",
      a: "The current pre-launch rate is set at Rs 12,083 per square foot, valid until 2 December 2026."
    },
    {
      q: "Will prices increase after the launch?",
      a: "Yes, after the official launch, the price will increase to Rs 13,500 per square foot."
    },
    {
      q: "What are the apartment sizes?",
      a: "The unit sizes are: 2.5 BHK (1,200 to 1,400 sq. ft.), 3 BHK (1,600 to 1,950 sq. ft.), and 4 BHK (2,200 to 2,800 sq. ft.)."
    },
    {
      q: "What is the booking amount (EOI)?",
      a: "The Expression of Interest (EOI) booking amounts are: 2.5 BHK (Rs 9 Lakhs), 3 BHK (Rs 11 Lakhs), and 4 BHK (Rs 15 Lakhs)."
    },
    {
      q: "Are there any extra charges?",
      a: "Yes, base prices do not include GST, stamp duty, registration fees, or floor rise charges (applicable for flats above the 5th floor)."
    },
    {
      q: "What is the payment plan?",
      a: "It follows a construction-linked payment plan: 10% at Booking, 20% on Signing Agreement, 10% on Foundation, 5% on Ground Floor, 5% progressive floors, 5% flooring, and 5% at Handover."
    },
    {
      q: "Why is Hoskote a good investment location?",
      a: "Hoskote has direct connectivity to major IT corridors via NH 75 and SH 35. Properties here are highly affordable compared to the Whitefield average, indicating excellent ROI appreciation."
    },
    {
      q: "What is the average rent in Hoskote?",
      a: "Average rentals range from Rs 11,000+ for 1 BHK, Rs 18,000+ for 2 BHK, and Rs 25,000+ for 3 BHK apartments."
    },
    {
      q: "How does Brigade Granada compare to Whitefield prices?",
      a: "Brigade Granada pre-launch is priced at Rs 12,083/sq ft, whereas the Whitefield average market rate stands at Rs 15,500/sq ft."
    },
    {
      q: "What is included in the cost sheet?",
      a: "It captures Agreement Value, Base Price, Carpet/Built-up cost, Stamp Duty, Registration, Taxes, and auxiliary fees."
    },
    {
      q: "Is this a good time to buy property in Bangalore?",
      a: "Yes. Bangalore property values rose by 5% to 12% in 2026, and experts project a consistent 10% annual increase due to massive IT expansion."
    },
    {
      q: "How can I get a personalized cost sheet?",
      a: "You can click on the Request Cost Sheet button to submit your budget preferences, and our sales team will compile a custom cost sheet for you."
    }
  ];

  const relatedPosts = [
    { title: "Cost of 2 BHK in Brigade Granada", desc: "Detailed pricing and layout options guide" },
    { title: "Brigade Granada Cost Sheet | Price Break Up | Timeline", desc: "A transparent look at extra fees, taxes, and payment stages" },
    { title: "Brigade Granada Home Loan", desc: "Top bank rates and financing partners guide" },
    { title: "Brigade Granada Launch Price", desc: "How to register early bird offers before December 2026" },
    { title: "Brigade Granada Maintenance Charges", desc: "Yearly maintenance deposits and per sq ft estimates" },
    { title: "Brigade Granada Offers", desc: "Launch waivers, gold vouchers, and registration cashbacks" },
    { title: "Brigade Granada Payment Plan", desc: "Construction linked milestones and payment durations" },
    { title: "Brigade Granada Pre Launch price", desc: "Securing the Rs 12,083 per sq ft rate step-by-step" },
    { title: "Brigade Granada Price List", desc: "Detailed floor-by-floor rise fees and inventory checklist" }
  ];

  return (
    <div className="price-page animate-fade-in">
      {/* Title Banner */}
      <section className="bradcam_area">
        <div className="container">
          <div className="bradcam_text">
            <h2>Price</h2>
            <ul className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li>Price</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main_warpper py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Price Header Card */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="price-header-section">
                <h1 className="text-center fw-bold mb-4" style={{ fontSize: '28px' }}>
                  Brigade Granada Price
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
                    onClick={() => onEnquireClick('Download Cost Sheet')} 
                    className="btn_main_brochure px-4 py-2"
                    style={{ minWidth: '160px' }}
                  >
                    <i className="fa fa-file-text-o me-1"></i> Cost Sheet
                  </button>
                </div>

                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }}>
                  Brigade Granada apartment prices start at Rs 1.45 Crore for a 2.5 BHK and go up to Rs 3.15 Crore for a large 4 BHK. Currently, the pre-launch price is set at Rs 12,083 per square foot, which is valid until 2 December 2026. After the official launch, the price will jump to Rs 13,500 per square foot. Booking early is a smart way to lock in the lower rate.
                </p>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }} className="mb-0">
                  The apartments range from 1,200 to 2,800 square feet. Right now, you can book at the pre-launch rate of Rs 12,083 per sq. ft. until early December 2026. Once the building work starts, prices will increase. By booking now, you can take advantage of these special early-bird offers.
                </p>
              </div>

              {/* Price List Table */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="price-list-section">
                <h2 className="fw-bold mb-4 h5 text-start" style={{ color: '#28582d' }}>Brigade Granada Price List</h2>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered text-center mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Unit Type</th>
                        <th>Super Built-Up Area</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceList.map((item, idx) => (
                        <tr key={idx}>
                          <td className="fw-bold">{item.type}</td>
                          <td>{item.area}</td>
                          <td className="fw-bold text-success">
                            <button 
                              onClick={() => onEnquireClick(`Request Cost Breakup: ${item.type}`)} 
                              className="btn btn-link p-0 fw-bold text-decoration-none text-success"
                            >
                              {item.price}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 small text-muted text-start mb-0">
                  <strong>Note:</strong> These are base prices. They do not include stamp duty, registration fees, or GST. If you choose a flat above the 5th floor, there will be an extra "floor rise" charge. For a full cost sheet with every detail, please get in touch with our sales team.
                </p>
              </div>

              {/* EOI Booking section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="eoi-amounts-section">
                <h2 className="fw-bold mb-3 h5 text-start" style={{ color: '#28582d' }}>Expression of Interest (EOI) Amount</h2>
                <p className="small text-muted mb-3 text-start">To reserve your home during this pre-launch phase, you need to submit an EOI booking amount:</p>
                <div className="table-responsive">
                  <table className="table table-bordered text-center mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Apartment Size</th>
                        <th>EOI Booking Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eoiAmounts.map((item, idx) => (
                        <tr key={idx}>
                          <td className="fw-bold">{item.type}</td>
                          <td className="text-primary fw-bold">
                            <button 
                              onClick={() => onEnquireClick(`EOI Booking: ${item.type}`)} 
                              className="btn btn-link p-0 fw-bold text-decoration-none text-primary"
                            >
                              {item.amount}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Rates in Hoskote */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="hoskote-rates-section">
                <h2 className="fw-bold mb-3 h5 text-start" style={{ color: '#28582d' }}>Property Prices & Rentals in Hoskote</h2>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }} className="mb-4">
                  Hoskote is located in East Bangalore and is very close to IT hubs like Whitefield and Varthur. It is well-connected by SH 35 and NH 75. With schools, hospitals, and malls nearby, it is a very convenient place to live. Currently, property prices here are more affordable than in Whitefield, making it a great time to invest before prices go up.
                </p>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered text-center mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Unit Config</th>
                        <th>Avg Market Price</th>
                        <th>Avg Monthly Rent</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hoskoteRates.map((item, idx) => (
                        <tr key={idx}>
                          <td className="fw-bold">{item.type}</td>
                          <td>{item.value}</td>
                          <td className="text-secondary fw-semibold">{item.rent}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bangalore Real Estate Trends */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="bangalore-trends-section">
                <h2 className="fw-bold mb-3 h5 text-start" style={{ color: '#28582d' }}>Bangalore Real Estate Trends 2026</h2>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }}>
                  Experts believe property prices will grow by 10% every year until 2026. Brigade Granada’s price of Rs 12,083 per sq. ft. is a great deal compared to Whitefield, where the average is Rs 15,500. Rises of around 10% each year until 2027 are expected due to continuous IT sector expansions.
                </p>
                <div className="table-responsive">
                  <table className="table table-bordered text-center mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Location</th>
                        <th>Average Rate per Sq. Ft.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {blrTrends.map((trend, idx) => (
                        <tr key={idx}>
                          <td className="fw-semibold">{trend.place}</td>
                          <td>{trend.rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Payment Plan Schedule */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="payment-plan-section">
                <h2 className="fw-bold mb-3 h5 text-start" style={{ color: '#28582d' }}>Construction Linked Payment Plan</h2>
                <p className="small text-muted text-start mb-3">The project follows a construction-linked payment plan, meaning you pay in stages as the superstructure progresses:</p>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Construction Milestone Stage</th>
                        <th className="text-center">Percentage Due</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paymentPlan.map((step, idx) => (
                        <tr key={idx}>
                          <td className="text-start">{step.stage}</td>
                          <td className="text-center fw-bold">{step.percentage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cost Sheet Breakdowns */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="cost-sheet-section">
                <h2 className="fw-bold mb-3 h5 text-start" style={{ color: '#28582d' }}>Brigade Granada Cost Sheet Components</h2>
                <p className="small text-muted text-start mb-3">A personalized cost sheet outlines the exact calculations of your budget, including:</p>
                <div className="row g-2 text-start">
                  {costSheetBreakup.map((comp, idx) => (
                    <div className="col-md-6" key={idx}>
                      <div className="p-2 border-bottom small">• {comp}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs Section */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="price-faqs-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '22px' }}>
                  Frequently Asked Questions (FAQs)
                </h2>

                <div className="accordion" id="priceFaqsAccordion">
                  {faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    const collapseId = `faqPriceCollapse${idx}`;
                    const headingId = `faqPriceHeading${idx}`;
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
              <div className="border rounded p-4 mb-4 bg-white shadow-sm" id="price-related-posts">
                <h2 className="fw-bold mb-2 h5 text-center" style={{ color: '#28582d' }}>Related Posts</h2>
                <p className="text-center text-muted mb-4 small">Find more information about loans, timelines, and offers.</p>
                
                <div className="row row-cols-1 row-cols-md-3 g-3 text-start" style={{ maxHeight: '500px', overflowY: 'auto', paddingRight: '8px' }}>
                  {relatedPosts.map((post, idx) => (
                    <div className="col" key={idx}>
                      <div 
                        className="card h-100 p-3 bg-light border cursor-pointer hover-shadow transition-all"
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

export default Price;

