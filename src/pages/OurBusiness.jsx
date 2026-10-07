// import React from 'react';
// import { Link } from 'react-router-dom';

// const businessVerticals = [
//   {
//     id: 1,
//     slug: 'it-services',
//     title: 'SCN Global IT Services',
//     image: '/images/vertical_it_services.jpg',
//     alt: 'SCN Global IT Services',
//     tagline: 'End-to-End Enterprise Technology Solutions & Software Services',
//     description: 'We deliver cutting-edge IT services including Web Development, Android & Mobile App Development, UI/UX Design, SEO, Digital Marketing, and Cloud Infrastructure management to empower business digital transformation.'
//   },
//   {
//     id: 2,
//     slug: 'it-training',
//     title: 'SCN Global IT Training Institute',
//     image: '/images/vertical_it_training.jpg',
//     alt: 'SCN Global IT Training Institute',
//     tagline: 'Skill Development & Technical Training Programs',
//     description: 'Empowering students and working professionals with job-ready tech skills in Full Stack Web Development, Android App Development, UI/UX Design, SEO, Graphic Design, and modern software engineering.'
//   },
//   {
//     id: 3,
//     slug: 'personality-development',
//     title: 'SCN Global Personality Development Training',
//     image: '/images/vertical_personality_training.jpg',
//     alt: 'SCN Global Personality Development Training',
//     tagline: 'Professional Growth & Soft Skills Mentorship',
//     description: 'Comprehensive soft skills training covering effective communication, corporate etiquette, leadership development, interview preparation, and confidence building for workplace success.'
//   },
//   {
//     id: 4,
//     slug: 'hr-training',
//     title: 'SCN Global HR Training Institute',
//     image: '/images/vertical_hr_training.jpg',
//     alt: 'SCN Global HR Training Institute',
//     tagline: 'Practical Human Resource Management Certification',
//     description: 'In-depth HR operational training on talent acquisition, payroll processing, statutory compliance, employee engagement, labor laws, and HR generalist functions.'
//   },
//   {
//     id: 5,
//     slug: 'us-staffing',
//     title: 'SCN Global U. S. Staffing',
//     image: '/images/vertical_us_staffing.jpg',
//     alt: 'SCN Global U. S. Staffing',
//     tagline: 'Offshore & Cross-Border Talent Recruitment for US Clients',
//     description: 'Specialized US staffing solutions providing US IT recruiters, Bench Sales recruiters, W2/C2C placement services, and technical talent acquisition for North American enterprises.'
//   },

//   {
//     id: 6,
//     slug: 'general-staffing',
//     title: 'SCN Global General Staffing',
//     image: '/images/vertical_general_staffing.jpg',
//     alt: 'SCN Global General Staffing',
//     tagline: 'Temporary, Flexible & Permanent Workforce Deployment',
//     description: 'Comprehensive general staffing across administrative, industrial, retail, and corporate operations tailored to meet seasonal and long-term organizational demands.'
//   },
//   {
//     id: 7,
//     slug: 'event-management',
//     title: 'SCN Global Event Management',
//     image: '/images/vertical_payroll_management.jpg',
//     alt: 'SCN Global Event Management',
//     tagline: 'Corporate Events, Trade Shows, Exhibitions & MICE Services',
//     description: 'Complete event management solutions for corporate events, trade shows, BTL promotions, activation campaigns, exhibitions, custom exhibits, wedding management, and MICE services—delivering memorable experiences with precision and creativity.'
//   },
//   {
//     id: 8,
//     slug: 'bpo-services',
//     title: 'SCN Global BPO Services',
//     image: '/images/vertical_bpo_services.jpg',
//     alt: 'SCN Global BPO Services',
//     tagline: 'Inbound, Outbound & Non-Voice Customer Care Operations',
//     description: '24/7 customer support center operations, tele-calling, back-office data processing, live chat support, and client relationship handling.'
//   },
//   {
//     id: 9,
//     slug: 'real-estate',
//     title: 'SCN Global Real Estate',
//     image: '/images/vertical_real_estate.jpg',
//     alt: 'SCN Global Real Estate',
//     tagline: 'Commercial & Corporate Property Advisory Services',
//     description: 'Strategic commercial space leasing, corporate office setup advisory, real estate investments, and asset management tailored for enterprise growth.'
//   }
// ];

// function OurBusiness({ onEnquireClick }) {
//   return (
//     <div className="our-business-page animate-fade-in bg-black text-white min-vh-100">
//       {/* Top Banner / Breadcrumb Area */}
//       <div className="bradcam_area position-relative">
//         <div className="container py-4">
//           <div className="row align-items-center">
//             <div className="col-lg-8">
//               <div className="bradcam_text">
//                 <h2 className="display-6 text-white fw-bold mb-2">Our Businesses</h2>
//                 <ul className="breadcrumb mb-0">
//                   <li><Link to="/" className="text-white opacity-75">Home</Link></li>
//                   <li className="text-white fw-bold">Our Business</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
//               <Link
//                 to="/contact-us"
//                 className="btn btn-solid px-4 py-2 fw-bold"
//               >
//                 <i className="fa fa-phone me-2"></i> Request Consultation
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Business Verticals Grid */}
//       <div className="main_warpper py-5 bg-black">
//         <div className="container">
//           <div className="text-center max-w-3xl mx-auto mb-5">
//             <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
//               <span className="text-muted fs-4">—</span>
//               <h2 className="text-uppercase fw-bold text-white mb-0" style={{ letterSpacing: '3px', fontSize: '24px' }}>
//                 Our Business
//               </h2>
//               <span className="text-muted fs-4">—</span>
//             </div>
//             <p className="lead text-light opacity-75 mt-2" style={{ fontSize: '16px' }}>
//               Discover how our specialized business units deliver end-to-end workforce, IT, mobile apps, training, payroll, and infrastructure solutions.
//             </p>
//           </div>

//           <div className="row g-4">
//             {businessVerticals.map((item) => (
//               <div className="col-lg-4 col-md-6" key={item.id}>
//                 <div className="business-card attractive-card h-100 bg-dark text-white border border-secondary border-opacity-25 shadow-sm">
//                   <div className="business-card-img-wrapper">
//                     <Link to={`/our-business/${item.slug}`}>
//                       <img
//                         src={item.image}
//                         alt={item.alt}
//                         loading="lazy"
//                       />
//                     </Link>
//                     <div className="position-absolute top-0 end-0 m-3">
//                       <span className="badge bg-black text-white px-2 py-1 small rounded-pill opacity-75 border border-secondary">
//                         Vertical #{item.id}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="p-4 d-flex flex-column flex-grow-1">
//                     <h3 className="h5 fw-bold mb-2">
//                       <Link to={`/our-business/${item.slug}`} className="text-white text-decoration-none hover-primary">
//                         {item.title}
//                       </Link>
//                     </h3>
//                     <p className="text-primary fw-semibold small mb-3">{item.tagline}</p>
//                     <p className="text-light opacity-75 small mb-4 flex-grow-1" style={{ lineHeight: '1.6' }}>
//                       {item.description}
//                     </p>
//                     <div className="mt-auto pt-3 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center flex-wrap gap-2">
//                       <Link
//                         to={`/our-business/${item.slug}`}
//                         className="btn btn-solid btn-sm px-3"
//                       >
//                         Explore Details <i className="fa fa-arrow-right ms-1"></i>
//                       </Link>
//                       <Link
//                         to="/contact-us"
//                         className="btn btn-ghost btn-sm"
//                       >
//                         Enquire Now
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="py-5 border-top border-secondary border-opacity-25" style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)' }}>
//         <div className="container text-center py-3">
//           <h3 className="fw-bold text-white mb-3">Looking for Customized Corporate Solutions?</h3>
//           <p className="text-light opacity-75 max-w-2xl mx-auto mb-4" style={{ maxWidth: '650px' }}>
//             Partner with SCN Global today to elevate your business operations with our end-to-end staffing, IT, Android app development, and HR management services.
//           </p>
//           <div className="d-flex justify-content-center gap-3 flex-wrap">
//             <Link
//               to="/contact-us"
//               className="btn btn-solid px-4 py-2 fw-bold"
//             >
//               Contact Sales Team
//             </Link>
//             <Link to="/contact-us" className="btn btn-ghost px-4 py-2 fw-bold">
//               Visit Branch Office
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OurBusiness;


import React from 'react';
import { Link } from 'react-router-dom';

const businessVerticals = [
  {
    id: 1,
    slug: 'it-services',
    title: 'SCN Global IT Services',
    image: '/images/vertical_it_services.jpg',
    alt: 'SCN Global IT Services',
    tagline: 'End-to-End Enterprise Technology Solutions & Software Services',
    description:
      'We deliver cutting-edge IT services including Web Development, Android & Mobile App Development, UI/UX Design, SEO, Digital Marketing, and Cloud Infrastructure management to empower business digital transformation.',
  },
  {
    id: 2,
    slug: 'it-training',
    title: 'SCN Global IT Training Institute',
    image: '/images/vertical_it_training.jpg',
    alt: 'SCN Global IT Training Institute',
    tagline: 'Skill Development & Technical Training Programs',
    description:
      'Empowering students and working professionals with job-ready tech skills in Full Stack Web Development, Android App Development, UI/UX Design, SEO, Graphic Design, and modern software engineering.',
  },
  {
    id: 3,
    slug: 'personality-development',
    title: 'SCN Global Personality Development Training',
    image: '/images/vertical_personality_training.jpg',
    alt: 'SCN Global Personality Development Training',
    tagline: 'Professional Growth & Soft Skills Mentorship',
    description:
      'Comprehensive soft skills training covering effective communication, corporate etiquette, leadership development, interview preparation, and confidence building for workplace success.',
  },
  {
    id: 4,
    slug: 'hr-training',
    title: 'SCN Global HR Training Institute',
    image: '/images/vertical_hr_training.jpg',
    alt: 'SCN Global HR Training Institute',
    tagline: 'Practical Human Resource Management Certification',
    description:
      'In-depth HR operational training on talent acquisition, payroll processing, statutory compliance, employee engagement, labor laws, and HR generalist functions.',
  },
  {
    id: 5,
    slug: 'us-staffing',
    title: 'SCN Global U. S. Staffing',
    image: '/images/vertical_us_staffing.jpg',
    alt: 'SCN Global U. S. Staffing',
    tagline: 'Offshore & Cross-Border Talent Recruitment for US Clients',
    description:
      'Specialized US staffing solutions providing US IT recruiters, Bench Sales recruiters, W2/C2C placement services, and technical talent acquisition for North American enterprises.',
  },
  {
    id: 6,
    slug: 'general-staffing',
    title: 'SCN Global General Staffing',
    image: '/images/vertical_general_staffing.jpg',
    alt: 'SCN Global General Staffing',
    tagline: 'Temporary, Flexible & Permanent Workforce Deployment',
    description:
      'Comprehensive general staffing across administrative, industrial, retail, and corporate operations tailored to meet seasonal and long-term organizational demands.',
  },
  {
    id: 7,
    slug: 'event-management',
    title: 'SCN Global Event Management',
    image: '/images/vertical_payroll_management.jpg',
    alt: 'SCN Global Event Management',
    tagline: 'Corporate Events, Trade Shows, Exhibitions & MICE Services',
    description:
      'Complete event management solutions for corporate events, trade shows, BTL promotions, activation campaigns, exhibitions, custom exhibits, wedding management, and MICE services—delivering memorable experiences with precision and creativity.',
  },
  {
    id: 8,
    slug: 'bpo-services',
    title: 'SCN Global BPO Services',
    image: '/images/vertical_bpo_services.jpg',
    alt: 'SCN Global BPO Services',
    tagline: 'Inbound, Outbound & Non-Voice Customer Care Operations',
    description:
      '24/7 customer support center operations, tele-calling, back-office data processing, live chat support, and client relationship handling.',
  },
  {
    id: 9,
    slug: 'real-estate',
    title: 'SCN Global Real Estate',
    image: '/images/vertical_real_estate.jpg',
    alt: 'SCN Global Real Estate',
    tagline: 'Commercial & Corporate Property Advisory Services',
    description:
      'Strategic commercial space leasing, corporate office setup advisory, real estate investments, and asset management tailored for enterprise growth.',
  },
];

function OurBusiness() {
  return (
    <div className="our-business-page animate-fade-in bg-black text-white min-vh-100">
      {/* Top Banner / Breadcrumb Area */}
      <div className="bradcam_area position-relative">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="bradcam_text">
                <h2 className="display-6 text-white fw-bold mb-2">
                  Our Businesses
                </h2>
                <ul className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link
                      to="/"
                      className="text-white opacity-75 text-decoration-none"
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item active text-white fw-bold"
                    aria-current="page"
                  >
                    Our Business
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link to="/contact-us" className="btn btn-solid px-4 py-2 fw-bold">
                <i className="fa fa-phone me-2" aria-hidden="true"></i>
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Business Verticals Grid */}
      <section className="main_warpper py-5 bg-black">
        <div className="container">
          {/* Section Heading */}
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '768px' }}>
            <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
              <span className="text-muted fs-4">—</span>
              <h2
                className="text-uppercase fw-bold text-white mb-0"
                style={{ letterSpacing: '3px', fontSize: '24px' }}
              >
                Our Business
              </h2>
              <span className="text-muted fs-4">—</span>
            </div>
            <p className="lead text-light opacity-75 mt-2 mb-0" style={{ fontSize: '16px' }}>
              Discover how our specialized business units deliver end-to-end
              workforce, IT, mobile apps, training, payroll, and infrastructure
              solutions.
            </p>
          </div>

          {/* Business Cards */}
          <div className="row g-4">
            {businessVerticals.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="business-card attractive-card h-100 bg-dark text-white border border-secondary border-opacity-25 shadow-sm d-flex flex-column">
                  {/* Image */}
                  <div
                    className="business-card-img-wrapper position-relative"
                    style={{ overflow: 'hidden' }}
                  >
                    <Link to={`/our-business/${item.slug}`} className="d-block">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        className="img-fluid w-100"
                      />
                    </Link>

                    {/* Vertical Number */}
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-black text-white px-2 py-1 small rounded-pill opacity-75 border border-secondary">
                        Vertical #{item.id}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h3 className="h5 fw-bold mb-2">
                      <Link
                        to={`/our-business/${item.slug}`}
                        className="text-white text-decoration-none hover-primary"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-primary fw-semibold small mb-3">
                      {item.tagline}
                    </p>
                    <p
                      className="text-light opacity-75 small mb-4 flex-grow-1"
                      style={{ lineHeight: '1.6' }}
                    >
                      {item.description}
                    </p>

                    {/* Card Footer */}
                    <div className="mt-auto pt-3 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center flex-wrap gap-2">
                      <Link
                        to={`/our-business/${item.slug}`}
                        className="btn btn-solid btn-sm px-3"
                      >
                        Explore Details
                        <i className="fa fa-arrow-right ms-1" aria-hidden="true"></i>
                      </Link>
                      <Link to="/contact-us" className="btn btn-ghost btn-sm">
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-5 border-top border-secondary border-opacity-25"
        style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)' }}
      >
        <div className="container text-center py-3">
          <h3 className="fw-bold text-white mb-3">
            Looking for Customized Corporate Solutions?
          </h3>
          <p
            className="text-light opacity-75 mx-auto mb-4"
            style={{ maxWidth: '650px' }}
          >
            Partner with SCN Global today to elevate your business operations
            with our end-to-end staffing, IT, Android app development, and HR
            management services.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/contact-us" className="btn btn-solid px-4 py-2 fw-bold">
              Contact Our Team
            </Link>
            <Link to="/contact-us" className="btn btn-ghost px-4 py-2 fw-bold">
              Visit Branch Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurBusiness;