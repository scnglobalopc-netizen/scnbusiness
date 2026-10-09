import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TrainingInstitute.css';

/* ------------------------------------------------------------------ */
/*  Content: HR, IT and Personality Development, in that order         */
/* ------------------------------------------------------------------ */
const tracks = [
  {
    id: 'hr',
    cls: 'ti-hr',
    short: 'HR Training',
    institute: 'SCN Global HR Training Institute',
    headline: 'Practical HR Generalist & Payroll Mastery',
    image: '/images/vertical_hr_training.jpg',
    intro:
      'Hands-on HR training that turns candidates into job-ready HR Generalists and Specialists, covering real payroll calculation, statutory compliance, talent acquisition, labor laws and HR portal operations.',
    quote:
      'Real portal experience, labor law mastery and practical payroll processing skills.',
    programsTitle: 'Core programs',
    programs: [
      {
        title: 'Practical Payroll & Tax',
        tagline: 'End-to-end monthly salary administration.',
        desc: 'Compute gross-to-net salary, attendance, CTC breakdowns, TDS deductions, and Form 16 issuance.',
      },
      {
        title: 'Statutory Compliance (PF/ESI)',
        tagline: 'Master regulatory portal filings.',
        desc: 'Generate PF ECR challans, ESI monthly contributions, Professional Tax, and Labor Welfare Fund returns.',
      },
      {
        title: 'Talent Acquisition & Sourcing',
        tagline: 'Master corporate recruitment techniques.',
        desc: 'Learn job portal sourcing (Naukri, LinkedIn), candidate screening, salary negotiations, and offer releases.',
      },
    ],
    modulesTitle: 'Specialized HR modules',
    modules: [
      { icon: '📊', title: 'HR Generalist Operations', tagline: 'Manage day-to-day employee lifecycles.', desc: 'Onboarding, appraisal systems, exit management, and policy documentation.' },
      { icon: '📜', title: 'Labor Laws & Audits', tagline: 'Ensure zero legal non-compliance.', desc: 'Factories Act, Industrial Disputes Act, Shops & Est Act, and statutory audit compliance.' },
      { icon: '💼', title: 'HR Analytics & Excel', tagline: 'Data-driven HR reporting.', desc: 'VLOOKUP, Pivot Tables, HR dashboards, and workforce planning analytics.' },
    ],
    proof: [
      { icon: 'fa-globe', title: 'Live portal access', desc: 'Practice directly on active PF, ESI and Payroll software portals.' },
      { icon: 'fa-handshake-o', title: '100% placement support', desc: 'Direct corporate referrals to leading SCN client partners.' },
      { icon: 'fa-certificate', title: 'Certified HR Generalist', desc: 'Recognized credentials validating your HR generalist capabilities.' },
    ],
    syllabus: '/service-detail/hr-generalist-payroll',
  },
  {
    id: 'it',
    cls: 'ti-it',
    short: 'IT Training',
    institute: 'SCN Global IT Training Institute',
    headline: 'Job-Oriented Technical Training',
    image: '/images/vertical_it_training.jpg',
    intro:
      'Practical, project-based training for students, fresh graduates and working professionals, led by industry veterans to bridge the gap between academic education and what technology employers need.',
    quote:
      '100% practical exposure and placement support for tomorrow’s tech professionals.',
    programsTitle: 'Core programs',
    programs: [
      {
        title: 'Full-Stack Web & Android Development',
        tagline: 'Master modern web & mobile technologies through hands-on development.',
        desc: 'React.js, Android (Kotlin/Java), Node.js, Express, MongoDB, Python, HTML5, CSS3, and Git workflows with live client projects.',
      },
      {
        title: 'UI/UX & Graphic Design',
        tagline: 'Design intuitive interfaces and compelling digital assets.',
        desc: 'Figma, Adobe XD, Photoshop, Illustrator, user research, wireframing, and interactive prototyping.',
      },
      {
        title: 'Digital Marketing Masterclass',
        tagline: 'Master SEO, PPC, and Social Media campaigns.',
        desc: 'Google Analytics, Technical SEO, Google Ads, Social Media Marketing, and Content Strategy.',
      },
    ],
    modulesTitle: 'Specialized skill modules',
    modules: [
      { icon: '📱', title: 'Android & Mobile App Training', tagline: 'Build native Android apps from scratch.', desc: 'Kotlin, Android SDK, Jetpack Compose, REST APIs, Room database, and Google Play Store publishing.' },
      { icon: '🔍', title: 'SEO & Search Analytics', tagline: 'Master search engine algorithms.', desc: 'Keyword research, technical site audits, backlink strategies, and conversion rate optimization.' },
      { icon: '🧪', title: 'Software Testing & QA', tagline: 'Ensure software quality and zero defects.', desc: 'Manual and automated testing using Selenium, Postman, JIRA, and TestNG.' },
    ],
    proof: [
      { icon: 'fa-laptop', title: '100% practical projects', desc: 'Work on real corporate web & Android projects under senior engineering mentors.' },
      { icon: 'fa-handshake-o', title: 'Placement assistance', desc: 'Mock interviews, resume building, and referrals across the SCN partner network.' },
      { icon: 'fa-certificate', title: 'Recognized certification', desc: 'ISO-compliant course completion certificates valued by employers.' },
    ],
    syllabus: '/service-detail/full-stack-web-android',
  },
  {
    id: 'personality',
    cls: 'ti-pd',
    short: 'Personality Development',
    institute: 'SCN Global Personality Development Training',
    headline: 'Build Your Executive Presence',
    image: '/images/vertical_personality_training.jpg',
    intro:
      'Personal transformation and career growth through essential soft skills, corporate etiquette, fluent communication and the confidence to excel in competitive corporate environments.',
    quote:
      'The confidence, articulation and charisma to lead teams and succeed in global interviews.',
    programsTitle: 'Core programs',
    programs: [
      {
        title: 'Corporate Communication',
        tagline: 'Master effective verbal and non-verbal expression.',
        desc: 'Active listening, persuasive speaking, body language awareness, and clear corporate email writing.',
      },
      {
        title: 'Executive Etiquette',
        tagline: 'Develop professional workplace behavior and presence.',
        desc: 'Business meeting etiquette, dress codes, personal branding, and cross-cultural communication.',
      },
      {
        title: 'Leadership & Mindset',
        tagline: 'Build confidence, decision-making, and team leadership.',
        desc: 'Emotional intelligence, conflict resolution strategies, stage confidence, and team motivation tactics.',
      },
    ],
    modulesTitle: 'Core skill development tracks',
    modules: [
      { icon: '🎙️', title: 'Public Speaking & Stage Presence', tagline: 'Overcome stage fear.', desc: 'Interactive speeches, group discussions, and voice modulation exercises.' },
      { icon: '💼', title: 'Interview & Resume Pitching', tagline: 'Ace executive interviews.', desc: 'Mock interview rounds, HR question handling, and elevator pitch crafting.' },
      { icon: '🤝', title: 'Team Dynamics & Emotional Intelligence', tagline: 'Build strong workplace relationships.', desc: 'Empathy training, active listening, and collaborative problem-solving.' },
    ],
    proof: [
      { icon: 'fa-users', title: 'Interactive role play', desc: 'Practice real-life corporate scenarios with experienced mentors.' },
      { icon: 'fa-comments-o', title: 'Personalized feedback', desc: 'One-on-one evaluations to identify strengths and speech improvements.' },
      { icon: 'fa-building-o', title: 'Corporate alignment', desc: 'Curriculum designed in consultation with HR leaders across India.' },
    ],
    syllabus: '/service-detail/corporate-communication',
  },
];

const facts = [
  { lead: '100% practical', text: 'Live portals, real salary sheets and client-style projects.' },
  { lead: '3 to 4 months', text: 'Full-stack web & Android program, weekday and weekend batches.' },
  { lead: 'Up to 12 per batch', text: 'Personality development groups, plus one-on-one feedback.' },
  { lead: 'Placement support', text: 'Resume work, mock interviews and referrals through the SCN partner network.' },
];

const pathway = [
  { title: 'Choose a skill track', text: 'Start with HR Training or IT Training, based on the career you want.' },
  { title: 'Build it hands-on', text: 'Work on live payroll portals or real web and Android projects.' },
  { title: 'Add personality development', text: 'Sharpen communication, etiquette and interview confidence.' },
  { title: 'Certify and get placed', text: 'Earn your certificate, then move into mock interviews and referrals.' },
];

const compare = [
  {
    label: 'Best for',
    values: [
      'Aspiring and working HR professionals',
      'Graduates, final-year students (B.Tech, BCA, MCA, B.Sc) and working professionals',
      'Students, job seekers and professionals building confidence',
    ],
  },
  {
    label: 'Format',
    values: [
      '100% practical, on real salary sheets and portal-style challans',
      '3 to 4 month full-stack program, flexible weekday and weekend batches',
      'Small group batches (max 12) with one-on-one mentor evaluations',
    ],
  },
  {
    label: 'You work with',
    values: [
      'MS Excel, EPFO and ESIC portals, Naukri Resdex, LinkedIn Recruiter, Zoho People',
      'React.js, Kotlin, Node.js, MongoDB, Git & GitHub, Figma, Android Studio',
      'Body language, vocal articulation, presentations, corporate email protocols',
    ],
  },
  {
    label: 'You walk away with',
    values: [
      'An HR Generalist & Payroll Management Certificate and readiness for HR Executive, Payroll Specialist or Talent Acquisition roles',
      'A deployed capstone project and an ISO-compliant course completion certificate',
      'Live executive pitch experience and a personal speech improvement roadmap',
    ],
  },
];

const faqs = [
  { q: 'Who can join the IT training program?', a: 'Any graduate, final-year student (B.Tech, BCA, MCA, B.Sc) or working professional looking to move into a software development role.' },
  { q: 'How long is the full-stack web & Android program?', a: 'It runs for 3 to 4 months, with flexible weekend and weekday batches.' },
  { q: 'Is the HR training theoretical or practical?', a: 'It is 100% practical. You work with real corporate salary sheets, live tax calculators and simulated portal challans.' },
  { q: 'Which roles can I apply for after HR training?', a: 'Graduates secure roles such as HR Executive, HR Generalist, Payroll Specialist, Talent Acquisition Associate and HR Operations Lead.' },
  { q: 'Can personality development help with stage fear?', a: 'Yes. Through progressive exposure and supportive role plays, nervousness turns into confidence.' },
  { q: 'Are personality classes individual or in batches?', a: 'Small interactive group batches of up to 12 learners, supported by one-on-one mentor evaluations.' },
  { q: 'Can I take more than one program?', a: 'Yes, learners often pair a skill track with personality development. Contact our team and we will plan the combination that fits your goal.' },
];

const navItems = [
  { id: 'hr', label: 'HR Training', cls: 'ti-hr' },
  { id: 'it', label: 'IT Training', cls: 'ti-it' },
  { id: 'personality', label: 'Personality Development', cls: 'ti-pd' },
  { id: 'pathway', label: 'Learning path' },
  { id: 'compare', label: 'Compare' },
  { id: 'faq', label: 'FAQ' },
];

/* ------------------------------------------------------------------ */

function TrainingInstitute() {
  const { hash, pathname } = useLocation();
  const [active, setActive] = useState('');

  // Land on the right program when arriving from an old HR / IT / Personality link
  useEffect(() => {
    if (!hash) return undefined;
    const id = hash.slice(1);
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
    return () => clearTimeout(timer);
  }, [hash, pathname]);

  // Highlight the section being read in the sticky menu
  useEffect(() => {
    const els = navItems.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-30% 0px -60% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="ti-page animate-fade-in bg-black text-white min-vh-100">
      {/* Breadcrumb banner (matches the other business pages) */}
      <div className="bradcam_area position-relative">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="bradcam_text">
                <h2 className="display-6 text-white fw-bold mb-2">SCN Global Training Institute</h2>
                <ul className="breadcrumb mb-0">
                  <li><Link to="/" className="text-white opacity-75">Home</Link></li>
                  <li><Link to="/our-business" className="text-white opacity-75">Our Business</Link></li>
                  <li className="text-white fw-bold">Training Institute</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link to="/contact-us" className="btn btn-solid px-4 py-2 fw-bold">
                <i className="fa fa-phone me-2" aria-hidden="true"></i> Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="ti-hero">
        <div className="container">
          <div className="ti-hero-grid">
            <div className="ti-hero-copy">
              <h1>One institute. Three ways to become job-ready.</h1>
              <p className="ti-lead">
                SCN Global Training Institute brings HR, IT and Personality Development training under one roof. Learn a
                skill hands-on, build the confidence to present it, and finish with placement support from the SCN network.
              </p>

              <ul className="ti-hero-tracks">
                {tracks.map((t) => (
                  <li key={t.id} className={t.cls}>
                    <a href={`#${t.id}`}>
                      <span className="ti-dot" aria-hidden="true"></span>
                      <span>
                        <strong>{t.short}</strong>
                        <small>{t.headline}</small>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="#hr" className="btn btn-solid px-4 py-2 fw-bold">Explore all programs</a>
                <Link to="/contact-us" className="btn btn-ghost px-4 py-2 fw-bold">Enquire about a batch</Link>
              </div>
            </div>

            <div className="ti-collage" aria-label="HR, IT and Personality Development training">
              {tracks.map((t) => (
                <a key={t.id} href={`#${t.id}`} className={`ti-collage-item ${t.cls}`}>
                  <img src={t.image} alt={t.institute} />
                  <span className="ti-collage-tag">
                    <span className="ti-dot" aria-hidden="true"></span>
                    {t.short}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <dl className="ti-facts">
            {facts.map((f) => (
              <div key={f.lead}>
                <dt>{f.lead}</dt>
                <dd>{f.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* Sticky section menu */}
      <nav className="ti-subnav" aria-label="Training Institute sections">
        <div className="container">
          <ul>
            {navItems.map((n) => (
              <li key={n.id} className={n.cls || ''}>
                <a href={`#${n.id}`} className={active === n.id ? 'is-active' : ''}>
                  {n.cls && <span className="ti-dot" aria-hidden="true"></span>}
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* The three programs */}
      {tracks.map((t, i) => (
        <section key={t.id} id={t.id} className={`ti-track ${t.cls} ${i % 2 ? 'is-flipped' : ''}`}>
          <div className="container">
            <div className="ti-track-head">
              <figure className="ti-media">
                <img src={t.image} alt={t.institute} loading="lazy" />
              </figure>

              <div className="ti-track-copy">
                <p className="ti-institute"><span className="ti-dot" aria-hidden="true"></span>{t.institute}</p>
                <h2>{t.headline}</h2>
                <p className="ti-intro">{t.intro}</p>
                <blockquote>{t.quote}</blockquote>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to={t.syllabus} className="btn btn-solid px-4 py-2 fw-semibold">View full syllabus</Link>
                  <Link to="/contact-us" className="btn btn-ghost px-4 py-2 fw-semibold">Enquire now</Link>
                </div>
              </div>
            </div>

            <h3 className="ti-subhead">{t.programsTitle}</h3>
            <div className="ti-programs">
              {t.programs.map((p) => (
                <article key={p.title}>
                  <h4>{p.title}</h4>
                  <p className="ti-tagline">{p.tagline}</p>
                  <p>{p.desc}</p>
                </article>
              ))}
            </div>

            <h3 className="ti-subhead">{t.modulesTitle}</h3>
            <div className="ti-modules">
              {t.modules.map((m) => (
                <article key={m.title}>
                  <span className="ti-icon" aria-hidden="true">{m.icon}</span>
                  <div>
                    <h4>{m.title}</h4>
                    <p className="ti-tagline">{m.tagline}</p>
                    <p>{m.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <ul className="ti-proof">
              {t.proof.map((p) => (
                <li key={p.title}>
                  <i className={`fa ${p.icon}`} aria-hidden="true"></i>
                  <div>
                    <strong>{p.title}</strong>
                    <span>{p.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* Learning path */}
      <section id="pathway" className="ti-section">
        <div className="container">
          <div className="ti-section-head">
            <h2>From first class to first job</h2>
            <p>The three programs work well together. Here is a suggested route through the institute.</p>
          </div>
          <ol className="ti-path">
            {pathway.map((s, idx) => (
              <li key={s.title}>
                <span className="ti-step">{idx + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Compare */}
      <section id="compare" className="ti-section ti-section-alt">
        <div className="container">
          <div className="ti-section-head">
            <h2>Compare the three programs</h2>
            <p>Find the program that matches where you are today and where you want to go.</p>
          </div>
          <div className="ti-table-wrap">
            <table className="ti-table">
              <thead>
                <tr>
                  <th scope="col"><span className="visually-hidden">Detail</span></th>
                  {tracks.map((t) => (
                    <th key={t.id} scope="col" className={t.cls}>
                      <span className="ti-dot" aria-hidden="true"></span>{t.short}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compare.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {row.values.map((v, idx) => (
                      <td key={idx}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="ti-section">
        <div className="container">
          <div className="ti-section-head">
            <h2>Questions learners ask us</h2>
          </div>
          <div className="ti-faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="ti-cta">
        <div className="container text-center">
          <h2>Not sure which program fits?</h2>
          <p>Tell us your goal and our counsellors will recommend the right track, or the right combination, for you.</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/contact-us" className="btn btn-solid px-4 py-3 rounded-3 fw-bold">Talk to a counsellor</Link>
            <Link to="/our-business" className="btn btn-ghost px-4 py-3 rounded-3 fw-bold">Explore all business verticals</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TrainingInstitute;