import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Location({ onEnquireClick }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const landDetails = [
    { key: "Project Name", value: "Brigade Granada" },
    { key: "Village", value: "Sannatammanahalli" },
    { key: "Taluk", value: "Bangalore East" },
    { key: "District", value: "Bangalore Rural" },
    { key: "Pin Code", value: "560067" },
    { key: "Latitude", value: "13.019101" },
    { key: "Longitude", value: "77.762164" },
    { key: "Google Plus Code", value: "3Q6M+7Q" }
  ];

  const connectivity = [
    {
      title: "Road Connectivity",
      info: "Serviced through BMTC bus services to all prime areas at regular intervals. Nearest BMTC bus stop: Whitefield Bus Stop – 5.9 km.",
      distance: "5.9 km",
      icon: "🚌"
    },
    {
      title: "Metro Connectivity",
      info: "Maintains a good metro network via the Namma Metro Purple Line. Nearest Metro Station: Kadugodi metro station – 3.3 km (5 minutes drive).",
      distance: "3.3 km",
      icon: "🚇"
    },
    {
      title: "Rail Connectivity",
      info: "Provides easy access to major railway stations, making interstate travel smooth. Nearest Station: Whitefield railway station – 2.8 km (4 minutes drive).",
      distance: "2.8 km",
      icon: "🚆"
    },
    {
      title: "Air Connectivity",
      info: "Kempegowda Airport is easily approached via SH 104 (approx. 45 minutes drive time).",
      distance: "32.1 km",
      icon: "✈️"
    }
  ];

  const placesToVisit = [
    {
      name: "Cubbon Park",
      distance: "26.3 km",
      desc: "A green haven stretching over 300+ acres. Established in 1870, it houses 6,000+ trees, a tennis academy, an aquarium, museums, and statues. Open 6:00 AM - 6:00 PM."
    },
    {
      name: "Lalbagh Botanical Garden",
      distance: "27.2 km",
      desc: "Commissioned by Hyder Ali in 1760. It spans 240 acres, hosting 1000+ species of trees. Entry fee is Rs. 50 for adults, Rs. 20 for kids."
    },
    {
      name: "Heritage Aerospace Museum",
      distance: "14.8 km",
      desc: "Exhibits various aircraft, fighter planes, ATC tower models, and helicopters, tracing India's aviation history from 1940 to present day."
    },
    {
      name: "Bangalore Palace",
      distance: "27.2 km",
      desc: "Stunning Tudor and Scottish Gothic palace built in 1878, former private residence of the Wodeyars. Entry fee is Rs. 230 for Indians, Rs. 460 for foreigners."
    },
    {
      name: "Phoenix Market City",
      distance: "16.7 km",
      desc: "Bangalore's best shopping mall spanning over 1,000,000 sq ft. Features 296 stores, a 9-screen PVR Cinema, and food court."
    }
  ];

  const schools = [
    { name: "Polaris School", dist: "3.2 km" },
    { name: "Montreal English School", dist: "4.1 km" },
    { name: "Citizens English School", dist: "6.4 km" },
    { name: "OM Shree Public School", dist: "7.7 km" },
    { name: "Sri Vivekananda Vidya Kendra School", dist: "8.4 km" },
    { name: "Capstone High CBSE School", dist: "8.9 km" },
    { name: "Uzma English School", dist: "10.2 m" }
  ];

  const ithubs = [
    { name: "ITPL", dist: "6.1 km" },
    { name: "Laptech IT Services", dist: "6.9 km" },
    { name: "EPIP Zone", dist: "9.6 km" },
    { name: "Embassy TechVillage", dist: "15.5 km" },
    { name: "RMZ Ecospace", dist: "16.6 km" },
    { name: "Bagmane Tech Park", dist: "17.9 km" }
  ];

  const hospitals = [
    { name: "Shivapriya Maternity Home", dist: "6.7 km" },
    { name: "Sri Narayana Eye Care Hospital", dist: "6.9 km" },
    { name: "Hoskote Mission Institute of Nursing", dist: "7.6 km" },
    { name: "Ashwini Hospital", dist: "7.7 km" },
    { name: "Taluk Government Hospital, Hoskote", dist: "9.4 km" },
    { name: "MVJ Medical College & Research Hospital", dist: "9.8 km" }
  ];

  const malls = [
    { name: "Dress Circle Mall", dist: "6.2 km" },
    { name: "Park Square Mall", dist: "6.2 km" },
    { name: "Nexus Whitefield", dist: "7.1 km" },
    { name: "Brookefield Mall", dist: "11.9 km" },
    { name: "Phoenix Marketcity", dist: "16.7 km" },
    { name: "VR Bengaluru", dist: "16.8 km" }
  ];

  const keyDistances = [
    { name: "Whitefield", dist: "6.2 km" },
    { name: "Varthur", dist: "10.3 km" },
    { name: "Marathahalli", dist: "12.3 km" },
    { name: "Sarjapur", dist: "23.2 km" }
  ];

  const faqs = [
    {
      q: "Where is Brigade Granada located?",
      a: "Brigade Granada is located on Whitefield–Hoskote Road in Sannatammanahalli, East Bangalore."
    },
    {
      q: "What is the exact address of the project?",
      a: "The exact address of Brigade Granada is situated at Whitefield–Hoskote Road, Sannatammanahalli, East Bengaluru, Karnataka 560067."
    },
    {
      q: "What are the coordinates for the location?",
      a: "The project is mapped to 13.019101 latitude and 77.762164 longitude. The Google Plus code is 3Q6M+7Q."
    },
    {
      q: "Which major IT hubs stay close to Brigade Granada?",
      a: "Major IT Hubs include ITPL (6.1 km), Laptech IT Services (6.9 km), EPIP Zone (9.6 km), Embassy TechVillage (15.5 km), RMZ Ecospace (16.6 km), and Bagmane Tech Park (17.9 km)."
    },
    {
      q: "How far is the nearest metro station?",
      a: "The nearest metro station is Kadugodi Metro Station, which is 3.3 km away (about a 5-minute drive) on the Purple Line."
    },
    {
      q: "Which railway station provides the easiest access?",
      a: "Whitefield Railway Station is the nearest station, located just 2.8 km away (about a 4-minute drive)."
    },
    {
      q: "How far is Kempegowda International Airport?",
      a: "Kempegowda International Airport is located 32.1 km away from the project site."
    },
    {
      q: "Which major highways link to the project?",
      a: "The project connects to all parts of Bangalore via NH 75, SH 82, SH 95, and SH 35."
    },
    {
      q: "Are there any BMTC bus stops nearby?",
      a: "Yes, the nearest BMTC bus stop is the Whitefield Bus Stop, which is 5.9 km away."
    },
    {
      q: "What upcoming infrastructure will improve travel times?",
      a: "The Satellite Town Ring Road (STRR), Namma Metro Phase 2/upcoming expansions, and the proposed Elevated Expressway will minimize commute times."
    },
    {
      q: "Which schools are located near Brigade Granada?",
      a: "Schools close by include Polaris School (3.2 km), Montreal English School (4.1 km), Citizens English School (6.4 km), OM Shree Public School (7.7 km), Sri Vivekananda Vidya Kendra School (8.4 km), Capstone High CBSE School (8.9 km), and Uzma English School (10.2 m)."
    },
    {
      q: "What medical facilities are available in the vicinity?",
      a: "Hospitals nearby include Shivapriya Maternity Home (6.7 km), Sri Narayana Eye Care Hospital (6.9 km), Hoskote Mission Institute of Nursing (7.6 km), Ashwini Hospital (7.7 km), Taluk Government Hospital Hoskote (9.4 km), and MVJ Medical College & Research Hospital (9.8 km)."
    },
    {
      q: "Where can residents go for shopping and entertainment?",
      a: "Malls nearby include Dress Circle Mall (6.2 km), Park Square Mall (6.2 km), Nexus Whitefield (7.1 km), Brookefield Mall (11.9 km), Phoenix Marketcity (16.7 km), and VR Bengaluru (16.8 km)."
    },
    {
      q: "What makes the Hoskote real estate market a good choice?",
      a: "Hoskote homes cost significantly less than the city center, and the real estate market is growing rapidly with upgrades like STRR and upcoming metro extensions."
    },
    {
      q: "How far is Cubbon Park from the project?",
      a: "Cubbon Park is located 26.3 km away."
    },
    {
      q: "Is Bangalore Palace accessible from this location?",
      a: "Yes, Bangalore Palace is accessible at a distance of 27.2 km."
    },
    {
      q: "What is the distance to Whitefield and Marathahalli?",
      a: "Whitefield is 6.2 km away, and Marathahalli is 12.3 km away from the project."
    },
    {
      q: "Why is investing in Brigade Granada beneficial right now?",
      a: "Investing now secures the benefit of pre-launch pricing in a high-demand IT and transit corridor before the location reaches full maturity."
    }
  ];

  const relatedPosts = [
    { title: "Schools near Brigade Granada", desc: "Building a Brighter Future: Schools for Your Growing Family" },
    { title: "Brigade Granada Address", desc: "Exact coordinates and location details of the project" },
    { title: "Brigade Granada Airport", desc: "Area map showing the direct driving route and highway connectivity" },
    { title: "Apartments in Sannatammanahalli", desc: "Modern luxury residential apartments in East Bangalore" },
    { title: "Apartments Near Narasapura Industrial Area", desc: "Modern residential projects near Narasapura Industrial Zone" },
    { title: "Apartments with Lake Views in Sannatammanahalli", desc: "Apartments with scenic lake views and premium architecture" },
    { title: "The Best Apartment in Sannatammanahalli", desc: "A detailed comparison of local luxury developments" },
    { title: "Best Apartment in Whitefield-Hoskote Road", desc: "Top high-rise residential properties in Sannatammanahalli" },
    { title: "Best Schools and Hospitals Near Brigade Granada", desc: "A parents' guide to top educational and healthcare units" },
    { title: "Best Township in Whitefield-Hoskote Road", desc: "Explore the features of the largest upcoming luxury township" },
    { title: "Biggest Township in Sannatammanahalli", desc: "Project scale, master layout and green features" },
    { title: "A Grand Vision of Luxury at Sannatammanahalli", desc: "Mediterranean architectural designs and premium amenities" },
    { title: "How Far is Brigade Granada from Kadugodi Metro Station", desc: "Distance, travel times, and metro accessibility maps" },
    { title: "Living Close to Work and Play in East Bangalore", desc: "Infographics and distance guides for IT parks" },
    { title: "A New Standard of Living in East Bangalore", desc: "Explore the 14 tall towers with 80% open landscape" },
    { title: "Brigade Granada to Airport Distance", desc: "32.1 km road connectivity and drive duration details" },
    { title: "Discover Grand Living in East Bangalore", desc: "A guide to the pre-launch premium gated community" },
    { title: "Commuting from Brigade Granada", desc: "Proximity to ITPL, RMZ, and Whitefield IT hubs" },
    { title: "Connectivity Masterclass", desc: "How close is Brigade Granada to Namma Metro Purple Line" },
    { title: "Seamless Connectivity: Center of Growth", desc: "Road networks including NH 75, SH 82, and SH 35" },
    { title: "Brigade Granada Direction", desc: "Routes and GPS directions for Sannatammanahalli" },
    { title: "Reach New Heights: Ultimate Airport Guide", desc: "Travel guide via State Highway 104 and bypasses" },
    { title: "Do We Have a Metro in Sannatammanahalli?", desc: "Purple Line network and Kadugodi station access details" },
    { title: "Does Sannatammanahalli Have a Metro Station?", desc: "Future metro plans and current transit stations" },
    { title: "High-rise Apartments Price in East Bangalore", desc: "ROI and pre-launch prices for 2.5, 3 and 4 BHK homes" },
    { title: "Wellness at Your Doorstep", desc: "Healthcare hubs and hospitals near Whitefield-Hoskote Road" },
    { title: "Infrastructure Boom: STRR Benefits", desc: "How the Satellite Town Ring Road enhances local properties" },
    { title: "Is Sannatammanahalli a City or Town?", desc: "Micro-market updates and community structure" },
    { title: "Is Sannatammanahalli a Good Place to Live?", desc: "Green zones, noise-free environment, and connectivity review" },
    { title: "Is Sannatammanahalli a Safe Place to Live?", desc: "Gated community security systems and local neighborhood safety" },
    { title: "Is Sannatammanahalli Bangalore East or North?", desc: "Geographical location, taluk limits, and boundaries" },
    { title: "Is Sannatammanahalli Good to Stay?", desc: "Analysis of schools, hospitals, and water/solar facilities" },
    { title: "Is Sannatammanahalli Rural or Urban?", desc: "Vibrant urban infrastructures with modern high-rises" },
    { title: "Is Sannatammanahalli the Next Whitefield?", desc: "Analyzing 2026 property trends and appreciation potential" },
    { title: "Strategic Living: IT Corridor Proximity", desc: "Commute times to the East Bangalore Tech Zone" },
    { title: "Living on Whitefield-Hoskote Road: Is It the Right Move?", desc: "Pros, cons, and future growth of this highway corridor" },
    { title: "The Ultimate Retail Map", desc: "Best shopping malls and entertainment zones nearby" },
    { title: "Living Large in East Bangalore's Newest Hub", desc: "Mediterranean lifestyle at the new launch project" },
    { title: "New Launch Apartment in Whitefield-Hoskote Road", desc: "A guide to the pre-launch premium gated community" },
    { title: "NH-75 Road Proximity", desc: "Bypasses and highway connections of the project" },
    { title: "Inside the Project Office", desc: "Your gateway to booking a unit at Brigade Granada" },
    { title: "Early Access to Luxury Living in East Bangalore", desc: "How to register EOI and select preferred units" },
    { title: "Secure Your Early Booking in East Bangalore", desc: "EOI timelines and payment plan guidelines" },
    { title: "A New Chapter of Luxury in East Bangalore", desc: "Luxury towers and landscape amenities overview" },
    { title: "Elevating Modern Living in East Bangalore", desc: "Premium interior features and smart home security systems" },
    { title: "Top Malls and Entertainment Hubs Near Whitefield-Hoskote Road", desc: "PVR, IMAX, and retail maps for residents" },
    { title: "Is Sannatammanahalli Good for Long-term Investment?", desc: "Appreciation rates, rental yields and future forecast" },
    { title: "Premium Homes in Sannatammanahalli Real Estate", desc: "Detailed breakdown of the 20-acre project parameters" },
    { title: "Sannatammanahalli's New Landmark", desc: "Why Brigade Granada is chosen as Project of the Year" },
    { title: "The PRR Effect: PRR Expressway Impact", desc: "Bengaluru Business Corridor impact on Granada value" },
    { title: "Top Luxury Apartment in Whitefield-Hoskote Road", desc: "A review of luxury features and developer credentials" },
    { title: "Weekend Getaways Near Brigade Granada", desc: "Scenic nature reserves, lakes and getaways around Hoskote" },
    { title: "Whitefield Metro Near Brigade Granada", desc: "Commuting timelines to Purple Line metro extensions" },
    { title: "Why East Bangalore is the Future of Home Ownership", desc: "Growth indicators and tech parks expansion details" },
    { title: "Why Whitefield East is Outperforming in Real Estate ROI", desc: "Rental yields, demand trends, and capital appreciation analysis" }
  ];

  return (
    <div className="location-page animate-fade-in">
      {/* Title Banner */}
      <section className="bradcam_area">
        <div className="container">
          <div className="bradcam_text">
            <h2>Location</h2>
            <ul className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li>Location</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="main_warpper py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              {/* Location Heading */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="location-header-section">
                <h1 className="text-center fw-bold mb-4" style={{ fontSize: '28px' }}>
                  Brigade Granada Location
                </h1>
                
                {/* Hero Image */}
                <div className="text-center mb-4">
                  <img 
                    src="https://www.thebrigadegranada.in/images/brigade-limited/index-hero.webp" 
                    alt="Brigade Granada - Luxury Residential Project in Bangalore hero" 
                    className="img-fluid rounded border shadow-sm"
                    style={{ width: '100%', maxHeight: '420px', objectFit: 'cover' }}
                  />
                </div>

                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }}>
                  Brigade Granada is located on Whitefield–Hoskote Road in Sannatammanahalli, East Bangalore. It is very close to major IT areas like Whitefield, Varthur, and Sarjapur Road. Getting around is easy since the Kadugodi Metro Station is only 3.3 km away and the Whitefield Railway Station is just 2.8 km away. The airport is 32.1 km from the project via SH 104. You can find the exact spot using the Google Plus code <strong>3Q6M+7Q</strong> or the coordinates <strong>13.019101, 77.762164</strong>.
                </p>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }}>
                  The project boasts a key location near the major IT hubs of Whitefield and Sarjapur and also grants quick access to the best shopping centres, malls, colleges, hospitals, and schools.
                </p>
              </div>

              {/* Location and Land Details (Table) */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="land-details-section">
                <h2 className="fw-bold mb-4 h5" style={{ color: '#28582d' }}>Location and Land Details</h2>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered mb-0">
                    <tbody>
                      {landDetails.map((detail, idx) => (
                        <tr key={idx}>
                          <td className="fw-bold" style={{ width: '40%' }}>{detail.key}</td>
                          <td>{detail.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Exact Address */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="address-section">
                <h2 className="fw-bold mb-3 h5" style={{ color: '#28582d' }}>Brigade Granada Address</h2>
                <p className="mb-0" style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }}>
                  The exact address of Brigade Granada is situated at <strong>Whitefield–Hoskote Road, Sannatammanahalli, East Bengaluru, Karnataka 560067</strong>. This address falls under the Bangalore East Taluk in the Bangalore Rural district.
                </p>
              </div>

              {/* Connectivity details */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="connectivity-section">
                <h2 className="fw-bold mb-3 h5" style={{ color: '#28582d' }}>Brigade Granada Connectivity</h2>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }} className="mb-4">
                  Brigade Granada links to all parts of Bangalore through road, rail, metro, and air. BMTC buses and cabs traverse the area regularly. The project features access to a strong highway network including NH 75, SH 82, SH 95, and SH 35. The proposed Elevated Expressway will further minimize travel time for daily commuters once it commences operation.
                </p>

                <div className="row g-4">
                  {connectivity.map((conn, idx) => (
                    <div className="col-md-6" key={idx}>
                      <div className="p-3 bg-light rounded border h-100">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span className="fs-4">{conn.icon}</span>
                          <h3 className="h6 fw-bold mb-0 text-dark">{conn.title}</h3>
                          <span className="badge bg-secondary ms-auto small">{conn.distance}</span>
                        </div>
                        <p className="small text-muted mb-0" style={{ lineHeight: '1.6' }}>{conn.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Places to Visit */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="places-visit-section">
                <h2 className="fw-bold mb-4 h5" style={{ color: '#28582d' }}>Places to Visit near Brigade Granada</h2>
                <div className="row g-4">
                  {placesToVisit.map((place, idx) => (
                    <div className="col-md-6" key={idx}>
                      <div className="p-3 border rounded h-100">
                        <div className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2">
                          <h3 className="h6 fw-bold text-primary mb-0">{place.name}</h3>
                          <span className="text-muted small fw-semibold">📍 {place.distance}</span>
                        </div>
                        <p className="small text-muted mb-0" style={{ lineHeight: '1.6' }}>{place.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hoskote Focus Area */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="hoskote-section" style={{ borderLeft: '4px solid #28582d !important' }}>
                <h2 className="fw-bold mb-3 h5" style={{ color: '#28582d' }}>Hoskote & its Connectivity</h2>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }}>
                  Hoskote is in East Bangalore, near the major IT areas of Whitefield and Varthur. It is popular because homes here cost much less than in the center of the city. The real estate market is growing quickly as more people and investors look for affordable options. With its good roads, metro access, and increasing popularity, Hoskote is a great place for both families and property buyers.
                </p>
                <p style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }}>
                  Travel will become much faster once the <strong>Satellite Town Ring Road (STRR)</strong> is completely finished. The area is already close to Purple Line metro stations, and new metro projects will make traveling even easier in the future.
                </p>

                <div className="row g-3 mt-2">
                  <div className="col-md-4">
                    <div className="bg-light p-3 rounded border h-100 text-start">
                      <h4 className="h6 fw-bold mb-2">Roads & Highways</h4>
                      <p className="small text-muted mb-0" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                        NH 75, SH 35, SH 104, NH-648, Sulibele Road, Kadugodi Road, Malur Road, Kolar Road, Budigere Cross Road.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bg-light p-3 rounded border h-100 text-start">
                      <h4 className="h6 fw-bold mb-2">Metro Access</h4>
                      <p className="small text-muted mb-0" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                        Purple Line metro. Stations like Kadugodi stay within 5 minutes. Future Namma Metro phases will expand directly to Hoskote.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="bg-light p-3 rounded border h-100 text-start">
                      <h4 className="h6 fw-bold mb-2">Airport Access</h4>
                      <p className="small text-muted mb-0" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                        Kempegowda Airport is accessible in 45 minutes. Regular BMTC Airport Vayu Vajra buses serve this route.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nearby Establishments (Grids) */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="establishments-section">
                <h2 className="fw-bold mb-4 h5 text-center" style={{ color: '#28582d' }}>Nearby Infrastructure Approximations</h2>
                
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="p-3 border rounded bg-light h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-3">🎓 Schools nearby</h3>
                      <ul className="list-unstyled small mb-0 lh-lg text-start">
                        {schools.map((item, idx) => (
                          <li key={idx} className="d-flex justify-content-between">
                            <span>• {item.name}</span>
                            <span className="text-muted fw-semibold">{item.dist}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-3 border rounded bg-light h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-3">💻 IT Hubs nearby</h3>
                      <ul className="list-unstyled small mb-0 lh-lg text-start">
                        {ithubs.map((item, idx) => (
                          <li key={idx} className="d-flex justify-content-between">
                            <span>• {item.name}</span>
                            <span className="text-muted fw-semibold">{item.dist}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-3 border rounded bg-light h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-3">🏥 Hospitals nearby</h3>
                      <ul className="list-unstyled small mb-0 lh-lg text-start">
                        {hospitals.map((item, idx) => (
                          <li key={idx} className="d-flex justify-content-between">
                            <span>• {item.name}</span>
                            <span className="text-muted fw-semibold">{item.dist}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="p-3 border rounded bg-light h-100">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-3">🛍️ Malls & Shopping</h3>
                      <ul className="list-unstyled small mb-0 lh-lg text-start">
                        {malls.map((item, idx) => (
                          <li key={idx} className="d-flex justify-content-between">
                            <span>• {item.name}</span>
                            <span className="text-muted fw-semibold">{item.dist}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="p-3 border rounded bg-light">
                      <h3 className="h6 fw-bold text-dark border-bottom pb-2 mb-3">📍 Key Distances to Major Areas</h3>
                      <div className="row g-2">
                        {keyDistances.map((item, idx) => (
                          <div className="col-6 col-md-3" key={idx}>
                            <div className="bg-white p-2 rounded text-center border">
                              <div className="small fw-semibold">{item.name}</div>
                              <div className="text-primary fw-bold" style={{ fontSize: '13px' }}>{item.dist}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Location Stands Out */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="stands-out-section" style={{ backgroundColor: '#f9fcf9 !important' }}>
                <h2 className="fw-bold mb-3 h5" style={{ color: '#28582d' }}>Why Brigade Granada Location Stands Out</h2>
                <p className="mb-0" style={{ fontSize: '15px', color: '#333', lineHeight: '1.8' }}>
                  Brigade Granada anchors at one of the best-connected points in East Bangalore. You gain metro access in 5 minutes, a railway station in 4 minutes, and ITPL in under 15 minutes. The project is nestled close to six major schools, six hospitals, and six shopping malls. Kempegowda Airport stays 32.1 km away via SH 104. The Whitefield–Hoskote Road corridor is witnessing strong infrastructure growth with the STRR and Elevated Expressway projects underway. Investing here now secures the benefit of today's pricing before this corridor reaches full maturity.
                </p>
              </div>

              {/* Frequently Asked Questions Accordion */}
              <div className="border rounded p-4 mb-5 bg-white shadow-sm" id="location-faqs-section">
                <h2 className="text-center fw-bold mb-4" style={{ fontSize: '22px' }}>
                  Frequently Asked Questions (FAQs)
                </h2>

                <div className="accordion" id="locFaqsAccordion">
                  {faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    const collapseId = `faqLocCollapse${idx}`;
                    const headingId = `faqLocHeading${idx}`;
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
                            {faq.q}
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
              <div className="border rounded p-4 mb-4 bg-white shadow-sm" id="related-posts-section">
                <h2 className="fw-bold mb-2 h5 text-center" style={{ color: '#28582d' }}>Related Posts</h2>
                <p className="text-center text-muted mb-4 small">Discover more articles, guides, and neighborhood reviews.</p>
                
                <div className="row row-cols-1 row-cols-md-2 g-3" style={{ maxHeight: '600px', overflowY: 'auto', paddingRight: '8px' }}>
                  {relatedPosts.map((post, idx) => (
                    <div className="col" key={idx}>
                      <div 
                        className="card h-100 p-3 bg-light border cursor-pointer hover-shadow transition-all text-start"
                        onClick={() => onEnquireClick(`Related Post: ${post.title}`)}
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

export default Location;

