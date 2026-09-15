import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import './ServiceDetail.css';

const servicesDatabase = {
  'web-development': {
    title: 'Custom Web Design & Full-Stack Development',
    category: 'IT Services & Engineering',
    tagline: 'High-performance, secure, and conversion-optimized enterprise web applications.',
    heroImage: '/images/it_engineering_detail.jpg',
    parentVertical: { name: 'IT Services', slug: 'it-services' },
    overview: 'In today’s digital-first economy, your website is your primary business storefront and operational engine. SCN Global designs and builds scalable, ultra-responsive web applications engineered for speed, search visibility, and seamless user experiences across desktop, tablet, and mobile platforms.',
    highlights: [
      { icon: '🚀', title: 'Modern JAMstack & MERN', desc: 'Crafted with React, Next.js, Node.js, and modern cloud architectures for sub-second loading.' },
      { icon: '🔒', title: 'Enterprise Security', desc: 'Bank-grade SSL, CSRF protection, OWASP security standards, and encrypted database connections.' },
      { icon: '📈', title: 'Conversion Rate Optimized', desc: 'Strategic UI layouts designed with clear user funnels to turn casual visitors into paying clients.' },
      { icon: '📱', title: '100% Mobile Responsive', desc: 'Flawless visual layout adaptability across all smartphone screens and operating systems.' },
      { icon: '🔍', title: 'Built-in Technical SEO', desc: 'Clean schema markup, optimized meta tags, XML sitemaps, and core web vitals optimization.' },
      { icon: '⚡', title: 'CMS & API Integrations', desc: 'Effortless integration with headless CMS, payment gateways, ERPs, and custom REST APIs.' }
    ],
    process: [
      { step: '01', title: 'Discovery & Wireframing', desc: 'User persona research, information architecture planning, and interactive Figma mockups.' },
      { step: '02', title: 'Full-Stack Engineering', desc: 'Clean, modular frontend and backend coding with automated CI/CD pipeline integration.' },
      { step: '03', title: 'Quality Assurance & Auditing', desc: 'Rigorous cross-browser testing, accessibility (WCAG), performance, and security audits.' },
      { step: '04', title: 'Deployment & SLA Support', desc: 'Zero-downtime deployment, DNS management, automated backups, and 24/7 technical monitoring.' }
    ],
    techStack: ['React.js', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind / Vanilla CSS', 'PostgreSQL', 'MongoDB', 'AWS / Cloudflare', 'Docker', 'REST / GraphQL'],
    faqs: [
      { q: 'How long does a custom web development project take?', a: 'Standard corporate websites typically take 2 to 4 weeks, while complex full-stack web applications and SaaS platforms take 6 to 12 weeks depending on custom feature requirements.' },
      { q: 'Do you provide ongoing maintenance and security patches?', a: 'Yes, we offer comprehensive monthly SLA support packages covering security patches, backups, speed monitoring, and feature upgrades.' },
      { q: 'Can you migrate our legacy website to a modern tech stack?', a: 'Absolutely. We specialize in legacy refactoring, migrating outdated PHP or CMS websites to high-speed React or Next.js architectures with zero data loss.' }
    ]
  },

  'android-mobile-app': {
    title: 'Native Android & Cross-Platform Mobile Solutions',
    category: 'Mobile App Engineering',
    tagline: 'High-performance mobile apps built with Kotlin, Flutter, and scalable cloud backends.',
    heroImage: '/images/it_engineering_detail.jpg',
    parentVertical: { name: 'IT Services', slug: 'it-services' },
    overview: 'SCN Global crafts cutting-edge mobile solutions engineered to deliver exceptional performance on smartphones and tablets. Whether building native Android apps with Kotlin or cross-platform apps with Flutter, we turn your business vision into an intuitive, high-ranking mobile product.',
    highlights: [
      { icon: '📱', title: 'Native Kotlin & Jetpack', desc: 'Leveraging modern Android architecture components, coroutines, and declarative Jetpack Compose.' },
      { icon: '🌐', title: 'Cross-Platform Flutter', desc: 'Single codebase deployment across both Android and iOS with native 60fps performance.' },
      { icon: '⚡', title: 'Offline Data Sync', desc: 'Room database and local caching enabling smooth user experiences even without active internet.' },
      { icon: '🔔', title: 'Push Notifications & Messaging', desc: 'Firebase Cloud Messaging integration for real-time customer engagement and lifecycle re-targeting.' },
      { icon: '💳', title: 'Secure Payment Gateways', desc: 'UPI, Razorpay, Stripe, and Google Pay integrations with end-to-end tokenized transactions.' },
      { icon: '🚀', title: 'Google Play Store Launch', desc: 'Complete release management, Play Console policy compliance, and App Store Optimization (ASO).' }
    ],
    process: [
      { step: '01', title: 'Mobile UX & Architecture', desc: 'Touch-friendly mobile interaction flows, gesture designs, and scalable architecture definition.' },
      { step: '02', title: 'Agile Mobile Sprints', desc: 'Bi-weekly builds delivered via Firebase App Distribution for immediate client testing and feedback.' },
      { step: '03', title: 'Device Lab Testing', desc: 'Testing across 50+ real Android devices of varying screen sizes, RAM capacities, and OS versions.' },
      { step: '04', title: 'Store Publishing & ASO', desc: 'Publishing to Google Play Store with keyword optimization, privacy policies, and release rollout.' }
    ],
    techStack: ['Kotlin', 'Java', 'Flutter', 'Jetpack Compose', 'Firebase', 'Room DB', 'Retrofit', 'Google Cloud APIs', 'Razorpay SDK', 'GitLab CI'],
    faqs: [
      { q: 'Can you build both Android and iOS apps from one codebase?', a: 'Yes! Using Flutter or React Native, we engineer unified cross-platform codebases that compile natively for both Android and iOS devices, saving significant development cost and time.' },
      { q: 'Do you handle the entire Google Play Store approval process?', a: 'Yes, we manage Google Play Console account setup, App Bundles, signing keys, privacy compliance, and store listing approvals.' },
      { q: 'How do you handle background sync and offline mode?', a: 'We implement local SQLite/Room caching and background worker tasks that automatically sync data whenever a device reconnects to Wi-Fi or cellular networks.' }
    ]
  },

  'digital-marketing': {
    title: 'Data-Backed Digital Marketing & SEO Growth',
    category: 'Digital Growth & Analytics',
    tagline: 'Supercharge online visibility, brand authority, and customer acquisition funnels.',
    heroImage: '/images/service_digital_marketing.jpg',
    parentVertical: { name: 'IT Services', slug: 'it-services' },
    overview: 'Grow your enterprise with data-driven digital marketing campaigns. From technical search engine optimization (SEO) and high-ROI Google Ads to LinkedIn B2B campaigns and content marketing, SCN Global accelerates your organic and paid customer acquisition.',
    highlights: [
      { icon: '🔍', title: 'High-Intent SEO Ranking', desc: 'Targeting commercial search queries that generate qualified enterprise leads and recurring sales.' },
      { icon: '🎯', title: 'High-ROI PPC Campaigns', desc: 'Precision Google Ads & Meta campaigns with strict conversion tracking and negative keyword pruning.' },
      { icon: '💼', title: 'LinkedIn B2B Lead Gen', desc: 'Account-based marketing (ABM) connecting your sales team directly with C-level corporate decision makers.' },
      { icon: '📊', title: 'Real-Time Analytics Dashboards', desc: 'Google Looker Studio dashboards giving transparent, 24/7 visibility into conversions and CPA.' },
      { icon: '✍️', title: 'Thought Leadership Content', desc: 'Authoritative whitepapers, blog posts, case studies, and PR articles establishing industry authority.' },
      { icon: '🔄', title: 'Funnel Optimization (CRO)', desc: 'A/B testing landing pages to continuously maximize user signup rates and enquiry conversions.' }
    ],
    process: [
      { step: '01', title: 'Audience & Competitor Audit', desc: 'Deep keyword research, competitor backlink profiling, and conversion bottleneck analysis.' },
      { step: '02', title: 'Campaign Architecture', desc: 'Landing page creation, ad copywriting, pixel setup, and conversion funnel configuration.' },
      { step: '03', title: 'Multichannel Execution', desc: 'Simultaneous deployment across Google Search, Display, LinkedIn, and organic search channels.' },
      { step: '04', title: 'Daily Optimization & Scaling', desc: 'Continuous bid adjustments, budget reallocation toward top-performing creatives, and weekly reporting.' }
    ],
    techStack: ['Google Search Console', 'Google Analytics 4', 'Ahrefs', 'SEMrush', 'Google Ads', 'Meta Business Suite', 'Looker Studio', 'Hotjar', 'HubSpot'],
    faqs: [
      { q: 'How quickly can we expect to see results from SEO?', a: 'Technical SEO improvements and initial keyword ranking gains typically show in 6 to 10 weeks, while significant organic traffic compounding occurs within 3 to 6 months.' },
      { q: 'What is the difference between PPC and SEO?', a: 'PPC provides immediate top-of-page visibility and instant leads through paid clicks, while SEO builds permanent organic authority that brings high-converting leads without paying per click.' },
      { q: 'Do you provide detailed monthly performance reports?', a: 'Yes, every client receives a dedicated live Looker Studio dashboard and an executive monthly review session covering impressions, clicks, leads, and cost-per-acquisition (CPA).' }
    ]
  },

  'network-engineering': {
    title: 'Enterprise Network Engineering & Infrastructure',
    category: 'Cloud & Infrastructure',
    tagline: 'Resilient, high-bandwidth networks and cloud connectivity for enterprise continuity.',
    heroImage: '/images/it_engineering_detail.jpg',
    parentVertical: { name: 'IT Services', slug: 'it-services' },
    overview: 'A dependable IT infrastructure is the lifeblood of modern enterprise productivity. SCN Global designs, builds, and maintains secure LAN/WAN networks, VPNs, cloud VPC connections, and server architectures that keep your workforce connected without downtime.',
    highlights: [
      { icon: '🌐', title: 'Structured Cabling & LAN/WAN', desc: 'High-speed fiber optic and Cat6 cabling, managed switches, and enterprise Wi-Fi 6 access points.' },
      { icon: '🛡️', title: 'Firewall & Zero-Trust Security', desc: 'Next-Gen hardware firewalls (Fortinet, Cisco), intrusion prevention (IPS), and DDoS mitigation.' },
      { icon: '☁️', title: 'Cloud Infrastructure & VPC', desc: 'Seamless hybrid cloud architecture connecting on-premise headquarters to AWS, Azure, or GCP.' },
      { icon: '🔑', title: 'Secure Remote Access (VPN)', desc: 'Encrypted multi-factor authentication (MFA) VPN tunnels enabling secure work-from-home workflows.' },
      { icon: '💾', title: 'Disaster Recovery & Redundancy', desc: 'Dual-ISP failover configuration and automated offsite backups ensuring business continuity.' },
      { icon: '📊', title: '24/7 Network Monitoring (NOC)', desc: 'Real-time telemetry alerting our engineers to bandwidth spikes, latency, or packet drops.' }
    ],
    process: [
      { step: '01', title: 'Site Survey & Heatmap', desc: 'Comprehensive infrastructure audit, bandwidth analysis, and wireless RF signal heat-mapping.' },
      { step: '02', title: 'Network Topology Architecture', desc: 'Designing VLAN segmentation, QoS traffic priorities, and redundant router failovers.' },
      { step: '03', title: 'Hardware Staging & Deployment', desc: 'Server rack installations, switch provisioning, firewall rule enforcement, and cable labeling.' },
      { step: '04', title: '24/7 NOC Monitoring', desc: 'Continuous telemetry monitoring with sub-15 minute response times for any network incidents.' }
    ],
    techStack: ['Cisco', 'Fortinet', 'Ubiquiti UniFi', 'MikroTik', 'AWS VPC', 'Azure ExpressRoute', 'WireGuard', 'OpenVPN', 'Zabbix', 'Wireshark'],
    faqs: [
      { q: 'Can you configure failover between multiple internet service providers?', a: 'Yes! We configure dual-WAN load balancing and automatic failover so if one ISP goes down, your network instantly switches to the secondary line without dropping active calls.' },
      { q: 'How do you safeguard our internal network against ransomware?', a: 'We implement strict VLAN isolation, zero-trust network access (ZTNA), next-generation hardware firewalls with deep packet inspection, and continuous endpoint monitoring.' }
    ]
  },

  'it-development': {
    title: 'Custom Enterprise IT Software Development',
    category: 'Enterprise IT Solutions',
    tagline: 'Bespoke corporate software, ERP/CRM systems, and legacy modernization.',
    heroImage: '/images/it_engineering_detail.jpg',
    parentVertical: { name: 'IT Services', slug: 'it-services' },
    overview: 'Off-the-shelf software often forces your business into rigid workflows. SCN Global builds bespoke enterprise software platforms tailored precisely to your operational needs—automating manual tasks, connecting disparate data systems, and driving exponential productivity.',
    highlights: [
      { icon: '⚙️', title: 'Custom ERP & Operations Systems', desc: 'Tailored inventory, procurement, billing, and resource management software for your exact business rules.' },
      { icon: '🔄', title: 'Legacy Modernization', desc: 'Re-platforming brittle, on-prem legacy databases into scalable, secure cloud-native web microservices.' },
      { icon: '🔌', title: 'Custom API Ecosystems', desc: 'Building secure REST and GraphQL APIs that bridge third-party logistics, payment, and banking services.' },
      { icon: '👥', title: 'Role-Based Access Control', desc: 'Granular permissions, multi-tenant architectures, and audit logging for regulatory governance.' },
      { icon: '📊', title: 'Executive BI & Reporting', desc: 'Automated data pipelines feeding real-time financial, sales, and employee efficiency dashboards.' },
      { icon: '🛡️', title: 'ISO & Compliance Ready', desc: 'Engineered in compliance with ISO 27001 data protection and corporate IT governance guidelines.' }
    ],
    process: [
      { step: '01', title: 'Requirements Engineering', desc: 'Deep dive into operational bottlenecks, data workflows, and user journey mapping.' },
      { step: '02', title: 'Domain-Driven Architecture', desc: 'Designing database schemas, microservice boundaries, and robust API contracts.' },
      { step: '03', title: 'Iterative Development', desc: 'Sprint-based agile engineering with automated unit, integration, and security test suites.' },
      { step: '04', title: 'Data Migration & Go-Live', desc: 'Careful migration of existing databases, user training sessions, and dedicated hypercare support.' }
    ],
    techStack: ['Node.js', 'Python / Django', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'RabbitMQ', 'JIRA'],
    faqs: [
      { q: 'Do we own 100% of the source code and intellectual property?', a: 'Yes. Upon project completion and final settlement, complete ownership of all source code, databases, and IP is transferred to your organization.' },
      { q: 'Can our existing staff be trained to use the new system?', a: 'Yes, we provide recorded video walkthroughs, comprehensive user manuals, and hands-on staff training workshops.' }
    ]
  },

  'full-stack-web-android': {
    title: 'Full-Stack Web & Android Training Program',
    category: 'Skill Academy & Training',
    tagline: '100% job-oriented practical coding boot camp led by senior software engineering mentors.',
    heroImage: '/images/hr_training_detail.jpg',
    parentVertical: { name: 'IT Training', slug: 'it-training' },
    overview: 'Bridge the gap between academic theory and real software engineering jobs. SCN Global IT Training Institute trains students and working professionals in Full-Stack Web Development and Native Android App Development through hands-on project building and direct placement drives.',
    highlights: [
      { icon: '💻', title: 'Live Client Projects', desc: 'Work on actual commercial codebases, pull requests, and Git workflows instead of toy examples.' },
      { icon: '📱', title: 'Android Kotlin & React', desc: 'Dual-track curriculum mastering modern React frontends and native Android mobile apps.' },
      { icon: '🎓', title: 'Senior Developer Mentors', desc: 'Daily 1-on-1 code reviews and architectural guidance from software engineers with 10+ years experience.' },
      { icon: '🤝', title: '100% Placement Assistance', desc: 'Resume crafting, technical interview prep, mock whiteboarding, and direct corporate referrals.' },
      { icon: '📜', title: 'Recognized Certification', desc: 'Earn an industry-recognized certificate validating practical coding competence.' },
      { icon: '🏢', title: 'Corporate Referral Network', desc: 'Immediate interview opportunities across SCN Global’s 1000+ client partner companies.' }
    ],
    process: [
      { step: '01', title: 'Foundations & Git', desc: 'HTML5, CSS3, modern JavaScript (ES6+), data structures, algorithms, and Git version control.' },
      { step: '02', title: 'Frontend & Mobile UI', desc: 'React.js component state, hooks, Tailwind, and Android Kotlin UI layout development.' },
      { step: '03', title: 'Backend APIs & Databases', desc: 'Node.js, Express, REST APIs, MongoDB, Room DB, authentication (JWT), and cloud hosting.' },
      { step: '04', title: 'Capstone & Placement Drives', desc: 'Deploying a full-stack project to the cloud and Android store, followed by recruitment interviews.' }
    ],
    techStack: ['JavaScript', 'React.js', 'Kotlin', 'Node.js', 'Express', 'MongoDB', 'Git & GitHub', 'Postman', 'VS Code', 'Android Studio'],
    faqs: [
      { q: 'Who is eligible to join this training program?', a: 'Any graduate, final-year student (B.Tech, BCA, MCA, B.Sc), or working professional looking to transition into a high-paying software development role.' },
      { q: 'What is the duration of the training program?', a: 'Our practical full-stack program runs for 3 to 4 months with flexible weekend and weekday batches available.' },
      { q: 'Do you guarantee job interviews after completion?', a: 'Yes! Students who maintain 85%+ attendance and complete their capstone projects receive guaranteed interview opportunities through the SCN placement cell.' }
    ]
  },

  'hr-generalist-payroll': {
    title: 'Practical HR Generalist & Payroll Certification',
    category: 'Corporate HR Academy',
    tagline: 'Master end-to-end payroll processing, labor laws, and statutory compliance on live portals.',
    heroImage: '/images/hr_training_detail.jpg',
    parentVertical: { name: 'HR Training', slug: 'hr-training' },
    overview: 'The SCN Global HR Training Institute equips aspiring and working HR professionals with the practical, hands-on operational skills required by top employers. Learn salary computation, PF/ESI portal filings, income tax TDS, and labor laws from seasoned HR Directors.',
    highlights: [
      { icon: '💰', title: 'End-to-End Payroll Math', desc: 'Hands-on calculation of CTC structures, basic salary, allowances, HRA, gross-to-net, and bonus.' },
      { icon: '⚖️', title: 'Live PF & ESI Portal Filings', desc: 'Generating monthly ECR challans, employee UAN generation, KYC updates, and ESI returns.' },
      { icon: '📄', title: 'TDS & Form 16 Preparation', desc: 'Income tax slabs, Chapter VI-A deductions, TDS calculation on salary, and quarter return filing.' },
      { icon: '🤝', title: 'Talent Acquisition Mastery', desc: 'Advanced boolean search on Naukri, LinkedIn Recruiter, headhunting, and candidate offer release.' },
      { icon: '📜', title: 'Labor Laws & Audits', desc: 'Factories Act, Shops & Establishment Act, Gratuity Act, and statutory registers maintenance.' },
      { icon: '📊', title: 'Advanced HR Analytics & Excel', desc: 'Mastering VLOOKUP, Pivot Tables, headcount dashboards, and attrition rate modeling in Excel.' }
    ],
    process: [
      { step: '01', title: 'Core HR & Talent Sourcing', desc: 'Job descriptions, screening techniques, interview scheduling, and compensation benchmarking.' },
      { step: '02', title: 'Payroll Mathematics', desc: 'Live spreadsheet exercises computing complex payroll with overtime, leaves, and deductions.' },
      { step: '03', title: 'Government Portal Operations', desc: 'Step-by-step training on EPFO, ESIC, and State Labor Welfare Fund official portals.' },
      { step: '04', title: 'Mock HR Interviews & Placement', desc: 'Simulated corporate HR rounds, executive resume polishing, and direct placement drives.' }
    ],
    techStack: ['MS Excel (Advanced)', 'EPFO Unified Portal', 'ESIC Online Portal', 'Tally Prime / Payroll', 'Naukri Resdex', 'LinkedIn Recruiter', 'Zoho People', 'HRIS Dashboards'],
    faqs: [
      { q: 'Is this training theoretical or practical?', a: 'It is 100% practical. You will work directly with real corporate salary sheets, live tax calculators, and simulated portal challans.' },
      { q: 'Will I receive a course completion certificate?', a: 'Yes, an industry-accredited HR Generalist & Payroll Management Certificate will be awarded upon graduation.' },
      { q: 'What types of roles can I apply for after this course?', a: 'Graduates successfully secure roles as HR Executive, HR Generalist, Payroll Specialist, Talent Acquisition Associate, and HR Operations Lead.' }
    ]
  },

  'corporate-communication': {
    title: 'Executive Communication & Personality Development',
    category: 'Leadership & Soft Skills',
    tagline: 'Master executive presence, persuasive speaking, corporate etiquette, and stage confidence.',
    heroImage: '/images/hr_training_detail.jpg',
    parentVertical: { name: 'Personality Training', slug: 'personality-development' },
    overview: 'Technical knowledge gets you in the door, but communication and executive presence propel you into leadership. SCN Global’s Personality Development Training equips individuals with fluent corporate articulation, poise, presentation mastery, and self-confidence.',
    highlights: [
      { icon: '🎙️', title: 'Public Speaking & Stage Presence', desc: 'Overcome nervousness and deliver captivating presentations with vocal modulation and posture.' },
      { icon: '👔', title: 'Corporate Etiquette & Poise', desc: 'Business meeting etiquette, professional dress codes, corporate diplomacy, and networking skills.' },
      { icon: '💼', title: 'Executive Interview Mastery', desc: 'Acing competency-based interviews, behavioral questions, and delivering memorable elevator pitches.' },
      { icon: '✍️', title: 'High-Impact Email Writing', desc: 'Writing concise, professional business emails, proposal briefs, and formal correspondence.' },
      { icon: '🧠', title: 'Emotional Intelligence (EQ)', desc: 'Managing workplace stress, navigating conflict constructively, and building rapport across teams.' },
      { icon: '📈', title: '1-on-1 Feedback Sessions', desc: 'Personalized video speech evaluations with personalized speech improvement roadmaps.' }
    ],
    process: [
      { step: '01', title: 'Speech & Posture Diagnosis', desc: 'Initial assessment of body language, filler words, pitch, articulation, and stage confidence.' },
      { step: '02', title: 'Interactive Group Discussions', desc: 'Simulated corporate roundtables, extempore speeches, and debate sessions.' },
      { step: '03', title: 'Mock Executive Interviews', desc: 'Rigorous behavioral interview simulations with real-time video feedback.' },
      { step: '04', title: 'Graduation Presentation', desc: 'Delivering a live executive pitch in front of peers and corporate evaluators.' }
    ],
    techStack: ['Body Language Mastery', 'Vocal Articulation', 'Speech Framing Tools', 'PowerPoint Presentation', 'Corporate Email Protocols', 'Conflict Resolution Frameworks'],
    faqs: [
      { q: 'Can this program help me overcome stage fear and nervousness?', a: 'Yes! Over 80% of our participants join specifically to overcome stage anxiety. Through progressive exposure and supportive roleplays, fear is transformed into confidence.' },
      { q: 'Are classes conducted individually or in batches?', a: 'We offer small, interactive group batches (maximum 12 students) to ensure ample speaking practice, supplemented by 1-on-1 mentor evaluations.' }
    ]
  },

  'us-technical-recruitment': {
    title: 'Offshore US IT Technical Recruitment & Staffing',
    category: 'Global Talent Acquisition',
    tagline: 'Dedicated night-shift offshore recruiter pods delivering 60%+ cost savings for US clients.',
    heroImage: '/images/us_recruitment_detail.jpg',
    parentVertical: { name: 'US Staffing', slug: 'us-staffing' },
    overview: 'SCN Global U.S. Staffing bridges American technology companies, staffing agencies, and Prime Vendors with seasoned offshore technical recruiters operating in EST, CST, and PST time zones. We provide full-desk recruiters and bench sales marketers specialized in US tax terms and niche tech roles.',
    highlights: [
      { icon: '🇺🇸', title: 'Deep US Tax & Visa Expertise', desc: 'Thorough understanding of W2, C2C, 1099, H1B, OPT/CPT, TN, Green Card, and US Citizen rules.' },
      { icon: '🕒', title: '100% EST/PST Night Shift Sync', desc: 'Recruiters work in direct real-time alignment with North American business hours for instant submissions.' },
      { icon: '🎯', title: 'Sub-24hr Candidate Submission', desc: 'Access to extensive US candidate databases ensuring fast turnaround on urgent requisitions.' },
      { icon: '💰', title: '60% Reduction in Cost Per Hire', desc: 'Access top-tier senior technical recruiters at a fraction of US onshore recruiter compensation.' },
      { icon: '📞', title: 'Rigorous Candidate Vetting', desc: 'Two-stage candidate screening covering technical competencies, visa verification, and rate negotiation.' },
      { icon: '📈', title: 'Dedicated Recruiter Pods', desc: 'Hire dedicated recruiter pods equipped with US VoIP dialers, Dice, Monster, and LinkedIn access.' }
    ],
    process: [
      { step: '01', title: 'Requirement Intake & SLA Setup', desc: 'Understanding your open job orders, client billing rates, tech requirements, and turnaround goals.' },
      { step: '02', title: 'Recruiter Pod Assignment', desc: 'Allocating trained US IT recruiters with experience matching your domain (Cloud, Data, Java, etc.).' },
      { step: '03', title: 'Daily Candidate Sourcing', desc: 'Boolean search sourcing across premium US portals, cold-calling candidates, and vetting rates.' },
      { step: '04', title: 'Submission & Interview Closure', desc: 'Formatted RTR submissions, candidate prep for client interviews, and offer onboarding support.' }
    ],
    techStack: ['Dice', 'Monster', 'CareerBuilder', 'LinkedIn Recruiter', 'Ceipal ATS', 'JobDiva', 'Bullhorn', 'RingCentral VoIP', 'MS Teams'],
    faqs: [
      { q: 'How do you ensure candidate quality and work authorization verification?', a: 'Our recruiters verify work permits, check visa validity dates (I-797/I-20), confirm location flexibility, and conduct detailed pre-screening calls before sending candidate submissions.' },
      { q: 'Can we interview and select our offshore recruiters?', a: 'Yes, we provide candidate profiles of our recruiters and facilitate video interview rounds so you select only those who match your company culture.' },
      { q: 'What hours do your recruiters work?', a: 'Our team works standard US business hours: 8:00 AM to 5:00 PM EST or CST, ensuring continuous daily communication with your account managers.' }
    ]
  },

  'flexi-general-staffing': {
    title: 'Flexi-Staffing & Pan-India Workforce Deployment',
    category: 'Workforce Solutions',
    tagline: 'Rapid temporary, contractual, and permanent workforce deployment with 100% statutory shield.',
    heroImage: '/images/solutions_hero.jpg',
    parentVertical: { name: 'General Staffing', slug: 'general-staffing' },
    overview: 'Navigate seasonal demand spikes, expansion plans, and administrative workforce overhead with agility. SCN Global General Staffing provides end-to-end contractual and permanent staffing across industrial, logistics, retail, and corporate sectors across India.',
    highlights: [
      { icon: '⚡', title: 'Rapid Turnaround Bulk Hiring', desc: 'Mobilize dozens or hundreds of verified associates within days for peak season demands.' },
      { icon: '⚖️', title: 'Co-Employment Shield', desc: 'Complete legal protection—SCN Global manages payroll, employment contracts, PF, and ESI compliance.' },
      { icon: '🗺️', title: 'Pan-India Delivery Footprint', desc: 'Sourcing and deployment capabilities covering Metro, Tier-1, Tier-2, and Tier-3 industrial hubs.' },
      { icon: '🏭', title: 'Industrial & Blue-Collar Staffing', desc: 'Certified machine operators, warehouse associates, packaging workers, and logistics coordinators.' },
      { icon: '👔', title: 'White-Collar Support Staff', desc: 'Data entry operators, front-office executives, back-office coordinators, and retail sales staff.' },
      { icon: '📊', title: 'Transparent Attendance & MIS', desc: 'Biometric and digital attendance tracking integrated directly with monthly billing summaries.' }
    ],
    process: [
      { step: '01', title: 'Workforce Demand Planning', desc: 'Analyzing site shifts, required skill certifications, headcount numbers, and deployment schedules.' },
      { step: '02', title: 'Candidate Mobilization & KYC', desc: 'Aadhaar, background checks, medical verification, and employment agreement execution.' },
      { step: '03', title: 'On-Site Deployment & Induction', desc: 'Site onboarding, safety orientation, and operational shift assignment.' },
      { step: '04', title: 'Ongoing Payroll & Compliance', desc: 'Monthly salary disbursal, statutory challan generation, and replacement guarantee.' }
    ],
    techStack: ['Digital KYC Portals', 'Biometric Shift Tracking', 'EPFO & ESIC Challans', 'Workforce ERP', 'Automated Payslip Engine', 'SLA Performance Dashboards'],
    faqs: [
      { q: 'What happens if a deployed associate leaves or underperforms?', a: 'SCN Global provides an immediate replacement guarantee within 24 to 48 hours to ensure zero operational downtime.' },
      { q: 'Who bears the statutory liabilities for contractual staff?', a: 'SCN Global acts as the principal employer for on-roll associates, assuming full compliance liability for PF, ESI, gratuity, and labor law regulations.' }
    ]
  },

  'corporate-domestic-support-staffing': {
    title: 'Corporate Domestic Support Staffing',
    category: 'Workforce & Support Staffing',
    tagline: 'Reliable, skilled, and efficient support staff for organizations, facilities, and households.',
    heroImage: '/images/vertical_general_staffing.jpg',
    parentVertical: { name: 'General Staffing', slug: 'general-staffing' },
    overview: 'We provide reliable Corporate Domestic Support Staffing solutions to help organizations and households find skilled, trustworthy, and efficient support staff for their daily operational needs. We connect you with the right people to ensure smooth operations, productivity, and reliable day-to-day support.',
    staffingSolutions: [
      'BPO Tele Caller',
      'Office Boys & Office Support Staff',
      'Housekeeping Staff',
      'Pantry Boys & Tea/Coffee Staff',
      'Drivers / Cook',
      'Security & Support Personnel',
      'Facility Management Staff',
      'Domestic Helpers',
      'Caretakers & Other Support Staff'
    ],
    solutionGoal: 'We connect you with the right people to ensure smooth operations, productivity, and reliable day-to-day support.',
    process: [
      { step: '01', title: 'Staffing Needs Analysis', desc: 'Identifying your exact operational shift schedules, role specifications, and daily support requirements.' },
      { step: '02', title: 'KYC & Police Clearance Checks', desc: 'Aadhaar authentication, permanent address verification, prior background checks, and medical screening.' },
      { step: '03', title: 'Service Orientation & Induction', desc: 'Professional workplace etiquette, hygiene protocols, safety standards, and role-specific briefing.' },
      { step: '04', title: 'Deployment & SLA Guarantee', desc: 'Seamless on-site deployment, attendance monitoring, and immediate replacement support within 24 to 48 hours.' }
    ],
    techStack: ['Aadhaar KYC Verification', 'Police Clearance Checks', 'Biometric Shift Tracking', 'EPFO & ESIC Compliance', '24/7 Support Desk', 'Replacement SLA Engine'],
    faqs: [
      { q: 'How do you verify the background of domestic and office support staff?', a: 'All personnel undergo strict multi-tier verification including Aadhaar authentication, permanent address proof, prior employer verification, and police clearance.' },
      { q: 'What happens if a support staff member is absent or on leave?', a: 'SCN Global maintains a standby bench and provides an immediate backup replacement within 24 to 48 hours to ensure zero operational disruption.' },
      { q: 'Do you provide staffing for both corporate offices and private residences?', a: 'Yes! We cater to corporate enterprises, IT parks, commercial complexes, and private households with tailored staffing solutions.' },
      { q: 'Who manages the payroll and compliance for deployed personnel?', a: 'SCN Global acts as the principal employer on record, managing monthly salary disbursals, PF/ESIC deductions, insurance, and labor law compliance.' }
    ]
  },

  'industrial-blue-collar-staffing': {
    title: 'Industrial & Blue-Collar Staffing Solutions',
    category: 'Workforce Solutions & Blue-Collar Staffing',
    tagline: 'Reliable, skilled, and productive blue-collar workforce for manufacturing, logistics, and facilities.',
    heroImage: '/images/industrial_blue_collar_staffing.jpg',
    parentVertical: { name: 'General Staffing', slug: 'general-staffing' },
    overview: 'We provide reliable Industrial and Blue-Collar Staffing solutions to help businesses quickly build a skilled, dependable, and productive workforce. From manufacturing and construction to logistics, warehousing, and facility management, we connect organizations with the right talent to meet their operational needs. We help businesses reduce hiring challenges and maintain a reliable workforce, enabling smoother operations and improved productivity.',
    staffingSolutions: [
      'Skilled & Semi-Skilled Workers',
      'Machine Operators & Technicians',
      'Electricians, Plumbers & Carpenters',
      'Warehouse & Logistics Staff',
      'Helpers & General Workers',
      'Drivers & Delivery Executives',
      'Security & Facility Management Staff',
      'Contract & Permanent Staffing'
    ],
    solutionGoal: 'We help businesses reduce hiring challenges and maintain a reliable workforce, enabling smoother operations and improved productivity.',
    process: [
      { step: '01', title: 'Operational Requirement Mapping', desc: 'Understanding plant headcount needs, shift schedules, skill certifications, and deployment timelines.' },
      { step: '02', title: 'KYC & Trade Skill Vetting', desc: 'Aadhaar verification, background checks, trade competency evaluation, and medical screening.' },
      { step: '03', title: 'On-Site Induction & Safety Briefing', desc: 'Safety gear (PPE) issuance, site induction, workplace rules alignment, and shift assignment.' },
      { step: '04', title: 'Shift Management & Compliance', desc: 'Biometric attendance tracking, monthly statutory challan filings, and immediate replacement guarantee.' }
    ],
    techStack: ['Biometric Shift Clocks', 'Aadhaar KYC Verification', 'EPFO & ESIC Challans', 'Safety Standards (PPE)', 'Workforce ERP', 'Replacement SLA Engine'],
    faqs: [
      { q: 'How quickly can industrial and blue-collar workers be deployed?', a: 'We can deploy vetted associates within 3 to 5 business days for bulk requirements, and within 24 to 48 hours for immediate replacement needs.' },
      { q: 'Who is legally responsible for PF, ESI, and statutory benefits?', a: 'SCN Global acts as the principal employer on record, assuming complete statutory responsibility for PF, ESI, gratuity, and labor law regulations.' },
      { q: 'Do you manage on-site attendance and payroll processing?', a: 'Yes, we provide digital and biometric attendance tracking integrated with automated monthly payroll and transparent client billing.' },
      { q: 'What happens if a worker leaves or is absent?', a: 'We provide an immediate replacement guarantee within 24 to 48 hours to prevent any disruption to your production schedule.' }
    ]
  },

  'corporate-white-collar-staffing': {
    title: 'Corporate White-Collar Support Staffing',
    category: 'Corporate Talent & Professional Staffing',
    tagline: 'Professional corporate talent acquisition across management, IT, finance, sales, HR, and operations.',
    heroImage: '/images/corporate_white_collar_staffing.jpg',
    parentVertical: { name: 'General Staffing', slug: 'general-staffing' },
    overview: 'We deliver professional Corporate Blue & White-Collar Staffing solutions that help organizations attract, hire, and retain the right talent across functions and industries. From entry-level professionals to experienced executives, we provide workforce solutions aligned with your business goals. Our goal is to connect businesses with the right people, reduce hiring time, and build high-performing teams that drive sustainable growth.',
    staffingSolutions: [
      'Executive & Management Hiring',
      'Sales & Business Development',
      'HR & Administration',
      'Finance & Accounting',
      'IT & Software Professionals',
      'Customer Support & Operations',
      'Marketing & Digital Marketing',
      'Supply Chain & Logistics',
      'Back-Office & Front-Office Staff',
      'Contract, Temporary & Permanent Staffing'
    ],
    solutionGoal: 'Our goal is to connect businesses with the right people, reduce hiring time, and build high-performing teams that drive sustainable growth.',
    process: [
      { step: '01', title: 'Role Profiling & Talent Benchmarking', desc: 'Aligning on specific technical skill sets, culture fit, performance milestones, and compensation bounds.' },
      { step: '02', title: 'Multi-Channel Sourcing & Screening', desc: 'Searching extensive talent databases, LinkedIn Recruiter networks, and conducting rigorous technical screens.' },
      { step: '03', title: 'Shortlisting & Client Interviews', desc: 'Presenting pre-screened candidate dossiers, coordinating interview rounds, and gathering feedback.' },
      { step: '04', title: 'Offer Rollout & Day-One Onboarding', desc: 'Managing offer acceptance, salary discussions, background verifications, and seamless onboarding.' }
    ],
    techStack: ['LinkedIn Recruiter', 'Naukri Resdex', 'Enterprise ATS', 'Automated KYC Checks', 'HRIS / Payroll Engine', 'SLA Performance Portals'],
    faqs: [
      { q: 'What functional departments do you recruit for?', a: 'We provide corporate talent across Executive Management, Sales & Marketing, HR & Administration, Finance & Accounting, IT & Software, Supply Chain, and Customer Operations.' },
      { q: 'Can we hire candidates on contract before offering permanent roles?', a: 'Yes! We offer flexible Contract-to-Hire (C2H) arrangements where you can evaluate candidate performance on-the-job before conversion.' },
      { q: 'How do you vet candidate credentials and backgrounds?', a: 'We conduct multi-tier candidate evaluations including education verification, previous employment validation, identity KYC, and professional reference checks.' },
      { q: 'What is the standard turnaround time for presenting candidates?', a: 'For most white-collar corporate roles, we submit qualified and verified candidate profiles within 48 to 72 hours.' }
    ]
  },

  'bpo-customer-care': {
    title: '24/7 Omnichannel BPO & Contact Center Support',
    category: 'Customer Experience Operations',
    tagline: 'World-class inbound customer care, outbound sales, live chat, and back-office operations.',
    heroImage: '/images/solutions_hero.jpg',
    parentVertical: { name: 'BPO Services', slug: 'bpo-services' },
    overview: 'Deliver unforgettable customer service experiences that drive retention and repeat business. SCN Global operates modern, 24/7 contact centers equipped with trained multilingual agents, advanced predictive dialers, and strict First Contact Resolution (FCR) protocols.',
    highlights: [
      { icon: '📞', title: '24/7 Inbound Voice Support', desc: 'Professional, empathetic query resolution, technical troubleshooting, order status, and helpdesks.' },
      { icon: '🎯', title: 'Outbound Telesales & Lead Gen', desc: 'Targeted telemarketing drives, customer feedback collection, renewals, and survey campaigns.' },
      { icon: '💬', title: 'Live Chat & WhatsApp Support', desc: 'Instant digital query handling across web live chat, WhatsApp Business API, and social media.' },
      { icon: '🗣️', title: 'Multilingual Capabilities', desc: 'Fluent communication in English, Hindi, and leading Indian regional languages.' },
      { icon: '🎧', title: 'Modern Cloud Telephony', desc: 'Predictive dialers, IVR routing, 100% call recording, and real-time supervisor whisper coaching.' },
      { icon: '📈', title: 'Rigorous Quality Audits', desc: 'Dedicated QA analysts monitoring CSAT, Net Promoter Score (NPS), Average Handle Time (AHT), and FCR.' }
    ],
    process: [
      { step: '01', title: 'Process Mapping & Knowledge Base', desc: 'Building comprehensive product FAQs, escalation matrices, and standard operating procedures (SOPs).' },
      { step: '02', title: 'Agent Onboarding & Simulation', desc: 'Intensive voice-and-accent coaching, mock customer calls, and product knowledge certification.' },
      { step: '03', title: 'Pilot Launch & Fine-Tuning', desc: 'Controlled call volume rollout with close QA supervision and calibration sessions.' },
      { step: '04', title: '24/7 Scale & Reporting', desc: 'Round-the-clock shift execution with daily SLA, call volume, and customer satisfaction reports.' }
    ],
    techStack: ['Vicidial / Cloud PBX', 'Zendesk', 'Freshdesk', 'Zoho Desk', 'WhatsApp Business API', 'Speech Analytics', 'Looker Dashboards', 'Call Recording Servers'],
    faqs: [
      { q: 'Can you handle overnight and 24/7 shift operations?', a: 'Yes! Our contact centers operate 24 hours a day, 365 days a year across rotational morning, evening, and night shifts.' },
      { q: 'Do you provide recorded calls for audit and training purposes?', a: 'Yes, 100% of calls are recorded, encrypted, and stored with secure web portal access for your management team to review at any time.' }
    ]
  },

  'commercial-real-estate': {
    title: 'Commercial Real Estate Advisory & Office Leasing',
    category: 'Corporate Property Services',
    tagline: 'Prime corporate office spaces, IT park leasing, and plug-and-play managed workspace solutions.',
    heroImage: '/images/solutions_hero.jpg',
    parentVertical: { name: 'Real Estate', slug: 'real-estate' },
    overview: 'Finding the ideal corporate workspace is a pivotal strategic decision. SCN Global Real Estate assists growing corporations, startups, and IT enterprises in finding, negotiating, and acquiring prime office spaces across Noida Sector 63, Delhi NCR, and major Indian commercial hubs.',
    highlights: [
      { icon: '🏢', title: 'Grade-A IT Park Office Leasing', desc: 'Curated commercial office spaces equipped with 100% power backup, high-speed fiber, and security.' },
      { icon: '🤝', title: 'Commercial Lease Negotiations', desc: 'Securing optimal rental rates, rent-free fit-out periods, favorable lock-ins, and flexible exit clauses.' },
      { icon: '🛠️', title: 'Plug-and-Play Managed Workspaces', desc: 'Ready-to-move corporate setups with premium workstations, conference rooms, and cafeteria facilities.' },
      { icon: '⚖️', title: '100% Clear Title Verification', desc: 'Exhaustive legal title diligence, occupancy certificate checks, and dispute-free property verification.' },
      { icon: '📍', title: 'Strategic Location Access', desc: 'Prime listings along Noida Expressway, Sector 62/63 IT Hubs, Gurugram Cyber City, and Delhi.' },
      { icon: '📐', title: 'Space Planning & Fit-Out Advisory', desc: 'Guidance on ergonomic layout planning, HVAC optimization, and acoustic conference design.' }
    ],
    process: [
      { step: '01', title: 'Requirements & Budget Briefing', desc: 'Determining seating headcount, square footage requirements, budget caps, and location preferences.' },
      { step: '02', title: 'Curated Property Shortlisting', desc: 'Presenting pre-screened Grade-A commercial properties with verified carpet area measurements.' },
      { step: '03', title: 'Site Inspections & Commercial Terms', desc: 'Guided walkthroughs and aggressive negotiation on rental rates, security deposits, and maintenance.' },
      { step: '04', title: 'Lease Execution & Handover', desc: 'Drafting robust lease agreements, legal stamping, and smooth property handover.' }
    ],
    techStack: ['Commercial Property Databases', 'AutoCAD Layouts', 'Legal Diligence Tooling', 'Lease Model Calculators', 'Facility Inspection Frameworks'],
    faqs: [
      { q: 'What sizes of office spaces do you deal with?', a: 'We handle everything from 1,500 sq.ft boutique offices to 50,000+ sq.ft independent commercial campus facilities.' },
      { q: 'Are there hidden brokerage charges?', a: 'No, our pricing model is completely transparent and discussed upfront with zero hidden fees.' }
    ]
  },

  'corporate-event-management': {
    title: 'Corporate Events, Trade Shows & Custom Exhibits',
    category: 'Event & MICE Operations',
    tagline: 'End-to-end corporate event planning, exhibition stall fabrication, and brand activations.',
    heroImage: '/images/solutions_hero.jpg',
    parentVertical: { name: 'Event Management', slug: 'event-management' },
    overview: 'Make your corporate events memorable, impactful, and seamless. SCN Global Event Management handles the complete planning, custom fabrication, AV production, and on-ground coordination for conferences, trade show exhibits, annual days, and brand activations.',
    highlights: [
      { icon: '🎪', title: 'Custom Exhibition Booth Design', desc: 'Bespoke 3D stall fabrication and interactive brand exhibits that attract high footfall at trade shows.' },
      { icon: '🎤', title: 'Conferences & Product Launches', desc: 'Complete stage design, LED videowalls, concert-grade sound, and flawless run-of-show execution.' },
      { icon: '🚀', title: 'BTL Brand Activations', desc: 'Experiential on-ground roadshows, corporate mall activations, and customer engagement campaigns.' },
      { icon: '🌐', title: 'Full MICE Coordination', desc: 'Delegate registration, luxury hotel bookings, airport transfers, and gala dinners across India.' },
      { icon: '📋', title: 'End-to-End Vendor Management', desc: 'Single-point accountability covering catering, security, permits, lighting, and stage production.' },
      { icon: '📸', title: 'Media, Video & Photography', desc: 'High-definition multi-camera live streaming, drone footage, and recap highlight videos.' }
    ],
    process: [
      { step: '01', title: 'Concept & 3D Spatial Design', desc: 'Theme ideation, 3D photorealistic stage/booth renders, and budget allocation.' },
      { step: '02', title: 'Fabrication & Production', desc: 'High-quality carpentry, graphics printing, lighting rigs, and technical testing in advance.' },
      { step: '03', title: 'On-Ground Execution', desc: 'Round-the-clock project managers overseeing setup, rehearsals, VIP handling, and show delivery.' },
      { step: '04', title: 'Dismantling & Post-Event Wrap', desc: 'Safe dismantling, inventory recovery, delegate analytics, and highlight reels delivery.' }
    ],
    techStack: ['3D 3ds Max / Blender', 'AutoCAD', 'High-Lumen Projectors & LED Walls', 'Line Array Audio', 'RFID Registration Systems', 'Live Streaming Tech'],
    faqs: [
      { q: 'How far in advance should we book a corporate event or exhibition stall?', a: 'For major trade exhibitions and national conferences, 4 to 8 weeks advance booking ensures optimal venue booking and bespoke stall fabrication.' },
      { q: 'Can you handle multi-city roadshows across India?', a: 'Yes! We have fabrication and production partner hubs across Delhi NCR, Mumbai, Bengaluru, Hyderabad, and Chennai to execute synchronized multi-city campaigns.' }
    ]
  },

  'payroll-outsourcing': {
    title: 'Comprehensive Payroll & Statutory Compliance Outsourcing',
    category: 'Payroll & HR Administration',
    tagline: '100% error-free salary disbursals, statutory PF/ESI compliance, and executive payroll reporting.',
    heroImage: '/images/solutions_hero.jpg',
    parentVertical: { name: 'About SCN', slug: 'about-us' },
    overview: 'Payroll is a critical operational responsibility requiring precision, absolute confidentiality, and strict adherence to changing labor laws. SCN Global provides end-to-end payroll outsourcing covering attendance capture, salary calculation, payslip delivery, tax deductions, and compliance filings.',
    highlights: [
      { icon: '⚡', title: 'Error-Free Monthly Processing', desc: 'Rigorous 4-eye audit checks guaranteeing zero calculation errors in salary payments.' },
      { icon: '⚖️', title: '100% Statutory Compliance', desc: 'Timely filing of Provident Fund (PF), ESIC, Professional Tax, Labor Welfare Fund, and TDS returns.' },
      { icon: '📱', title: 'Employee Self-Service Portal', desc: 'Secure cloud portal and mobile app where employees can download payslips and Form 16 anytime.' },
      { icon: '🔒', title: 'Confidentiality & Data Security', desc: 'ISO 27001-grade security and role-based access control protecting sensitive executive salary data.' },
      { icon: '🤝', title: 'Full & Final (F&F) Settlements', desc: 'Fast, smooth exit settlements covering gratuity, leave encashment, and no-dues clearance.' },
      { icon: '📊', title: 'Executive Payroll MIS', desc: 'Comprehensive monthly variance reports, cost center allocation, and audit-ready spreadsheets.' }
    ],
    process: [
      { step: '01', title: 'Input Collection & Attendance Freeze', desc: 'Consolidation of monthly shift rosters, biometric attendance, overtime, and salary revisions.' },
      { step: '02', title: 'Computation & Audit Check', desc: 'Automated gross-to-net calculation, tax deductions, and variance comparison against previous month.' },
      { step: '03', title: 'Client Approval & Salary Disbursal', desc: 'Management sign-off followed by automated bank disbursement advice upload.' },
      { step: '04', title: 'Payslip Generation & Statutory Returns', desc: 'Immediate digital payslips released to employees and government portal challan filings.' }
    ],
    techStack: ['Cloud Payroll Engines', 'EPFO Unified Portal', 'ESIC Portal', 'Bank Disbursement APIs', 'Advanced Tax Estimators', 'Biometric Sync APIs'],
    faqs: [
      { q: 'How do you handle salary confidentiality?', a: 'Salary data is stored in encrypted databases with restricted role-based permissions. Only designated client signing authorities can access compensation records.' },
      { q: 'Can you handle companies with employees across multiple Indian states?', a: 'Yes! We manage state-specific Professional Tax (PT) rules and Labor Welfare Fund (LWF) regulations across all 28 states and union territories.' }
    ]
  }
};

function ServiceDetail({ onEnquireClick }) {
  const { slug } = useParams();
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Fallback alias mapping for various button slugs
  const aliasMap = {
    'web-dev': 'web-development',
    'web-development-solutions': 'web-development',
    'mobile-solutions': 'android-mobile-app',
    'mobile-dev': 'android-mobile-app',
    'android-app': 'android-mobile-app',
    'it-training': 'full-stack-web-android',
    'it-training-modules': 'full-stack-web-android',
    'hr-training': 'hr-generalist-payroll',
    'hr-generalist': 'hr-generalist-payroll',
    'payroll': 'payroll-outsourcing',
    'payroll-management': 'payroll-outsourcing',
    'personality-training': 'corporate-communication',
    'personality-development': 'corporate-communication',
    'us-staffing': 'us-technical-recruitment',
    'general-staffing': 'flexi-general-staffing',
    'corporate-domestic-support-staffing': 'corporate-domestic-support-staffing',
    'domestic-support-staffing': 'corporate-domestic-support-staffing',
    'domestic-staffing': 'corporate-domestic-support-staffing',
    'corporate-domestic-staffing': 'corporate-domestic-support-staffing',
    'industrial-blue-collar-staffing': 'industrial-blue-collar-staffing',
    'blue-collar-staffing': 'industrial-blue-collar-staffing',
    'industrial-staffing': 'industrial-blue-collar-staffing',
    'industrial-blue-collar': 'industrial-blue-collar-staffing',
    'blue-collar': 'industrial-blue-collar-staffing',
    'corporate-white-collar-staffing': 'corporate-white-collar-staffing',
    'white-collar-staffing': 'corporate-white-collar-staffing',
    'corporate-staffing': 'corporate-white-collar-staffing',
    'white-collar-support-staffing': 'corporate-white-collar-staffing',
    'white-collar': 'corporate-white-collar-staffing',
    'bpo': 'bpo-customer-care',
    'bpo-services': 'bpo-customer-care',
    'real-estate': 'commercial-real-estate',
    'event-management': 'corporate-event-management'
  };

  const resolvedSlug = aliasMap[slug] || slug;
  const service = servicesDatabase[resolvedSlug];

  if (!service) {
    return <Navigate to="/our-business" replace />;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="service-detail-page animate-fade-in">
      {/* Top Banner / Breadcrumb Area */}
      <div className="bradcam_area position-relative">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="bradcam_text">
                <span className="badge bg-primary px-3 py-1 mb-2 text-uppercase fw-semibold" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                  {service.category}
                </span>
                <h1 className="display-6 text-white fw-bold mb-2">{service.title}</h1>
                <ul className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="/" className="text-white opacity-75 text-decoration-none">Home</Link></li>
                  {service.parentVertical && (
                    <li className="breadcrumb-item">
                      <Link to={`/our-business/${service.parentVertical.slug}`} className="text-white opacity-75 text-decoration-none">
                        {service.parentVertical.name}
                      </Link>
                    </li>
                  )}
                  <li className="breadcrumb-item active text-white fw-bold" aria-current="page">
                    {service.title}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link 
                to="/contact-us"
                className="btn btn-solid px-4 py-2 fw-bold"
              >
                <i className="fa fa-phone me-2"></i> Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Overview Section */}
      <section className="service-hero-banner py-5">
        <div className="container py-3">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="pe-lg-3">
                <div className="service-hero-badge mb-3">
                  <i className="fa fa-check-circle"></i> SCN Global Specialized Service
                </div>
                <h2 className="display-6 fw-bold text-white mb-3" style={{ fontSize: '28px', lineHeight: '1.3' }}>
                  {service.tagline}
                </h2>
                <p className="text-light opacity-80 mb-4" style={{ lineHeight: '1.75', fontSize: '16px' }}>
                  {service.overview}
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link 
                    to="/contact-us" 
                    className="btn btn-solid px-4 py-3 fw-semibold"
                  >
                    Contact Specialist & Schedule Demo
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="service-hero-img-wrap">
                <img 
                  src={service.heroImage} 
                  alt={service.title} 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-5">
        <div className="container py-2">
          <div className="row g-5">
            {/* Left Column: Core Features & Process */}
            <div className="col-lg-8">
              {/* Featured Staffing Solutions Grid if present */}
              {service.staffingSolutions && (
                <div className="mb-5 p-4 rounded-4 bg-dark border border-secondary border-opacity-25 shadow-sm">
                  <div className="d-flex align-items-center mb-3">
                    <span className="badge bg-primary px-3 py-1 text-uppercase me-2" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                      Scope of Talent
                    </span>
                    <h3 className="h5 fw-bold text-white mb-0">Our Staffing Solutions Include</h3>
                  </div>
                  <div className="row g-2 mt-2">
                    {service.staffingSolutions.map((item, idx) => (
                      <div className="col-md-6" key={idx}>
                        <div className="p-2 px-3 rounded-2 bg-black border border-secondary border-opacity-25 d-flex align-items-center">
                          <i className="fa fa-check-circle text-primary me-2"></i>
                          <span className="text-white small fw-medium">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {service.solutionGoal && (
                    <div className="mt-3 pt-3 border-top border-secondary border-opacity-25">
                      <p className="text-light opacity-80 small mb-0 fst-italic">
                        <i className="fa fa-quote-left text-primary me-2"></i>
                        {service.solutionGoal}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Deliverables Section */}
              {service.highlights && service.highlights.length > 0 && (
                <div className="mb-5">
                  <div className="mb-4">
                    <span className="text-primary fw-bold text-uppercase small" style={{ letterSpacing: '1px' }}>
                      What We Deliver
                    </span>
                    <h3 className="h3 fw-bold text-white mt-1">Key Capabilities & Deliverables</h3>
                    <p className="text-light opacity-75">Engineered to exceed corporate performance benchmarks and deliver immediate ROI.</p>
                  </div>

                  <div className="row g-3">
                    {service.highlights.map((item, idx) => (
                      <div className="col-md-6" key={idx}>
                        <div className="service-feature-card h-100 d-flex flex-column">
                          <div className="service-icon-box">
                            <span>{item.icon}</span>
                          </div>
                          <h4 className="h6 fw-bold text-white mb-2" style={{ fontSize: '17px' }}>{item.title}</h4>
                          <p className="text-light opacity-75 small mb-0" style={{ lineHeight: '1.65' }}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies / Tools Badges */}
              {service.techStack && (
                <div className="mb-5 pt-4 border-top border-secondary border-opacity-25">
                  <h4 className="h5 fw-bold text-white mb-3">Technologies, Tools & Frameworks</h4>
                  <div className="d-flex flex-wrap gap-2">
                    {service.techStack.map((tech, idx) => (
                      <span className="tech-tool-badge" key={idx}>
                        <i className="fa fa-cube text-primary"></i> {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Section */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="pt-4 border-top border-secondary border-opacity-25">
                  <div className="mb-4">
                    <span className="text-primary fw-bold text-uppercase small" style={{ letterSpacing: '1px' }}>
                      Frequently Asked Questions
                    </span>
                    <h3 className="h3 fw-bold text-white mt-1">Common Questions About {service.title}</h3>
                  </div>

                  <div className="faq-accordion-group">
                    {service.faqs.map((faq, idx) => {
                      const isOpen = activeFaq === idx;
                      return (
                        <div className={`faq-accordion-item ${isOpen ? 'active' : ''}`} key={idx}>
                          <button 
                            type="button" 
                            className="faq-accordion-trigger"
                            onClick={() => toggleFaq(idx)}
                          >
                            <span>{faq.q}</span>
                            <i className={`fa ${isOpen ? 'fa-minus text-primary' : 'fa-plus text-white-50'}`}></i>
                          </button>
                          {isOpen && (
                            <div className="faq-accordion-body animate-fade-in">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Consultation Form */}
            <div className="col-lg-4">
              <div className="consultation-card">
                <span className="badge bg-primary px-3 py-1 mb-3 text-uppercase fw-bold" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                  Direct Inquiry
                </span>
                <h4 className="h5 fw-bold text-white mb-2">Request Service Consultation</h4>
                <p className="small text-light opacity-75 mb-4">
                  Speak directly with an SCN specialist for pricing, scope estimation, and technical feasibility.
                </p>

                {submitted ? (
                  <div className="alert alert-success p-3 rounded-3 text-center my-3 bg-black border-success text-white">
                    <div className="fs-3 mb-1">✅</div>
                    <h6 className="fw-bold mb-1 text-white">Inquiry Received!</h6>
                    <p className="small text-white-50 mb-0">Our account lead will call you back within 2 business hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="d-flex flex-column gap-3">
                    <div>
                      <label className="form-label small text-white fw-semibold">Your Name *</label>
                      <input 
                        type="text" 
                        className="form-control shadow-none bg-dark text-white border-secondary"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="form-label small text-white fw-semibold">Work Email *</label>
                      <input 
                        type="email" 
                        className="form-control shadow-none bg-dark text-white border-secondary"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="form-label small text-white fw-semibold">Contact Phone *</label>
                      <input 
                        type="tel" 
                        className="form-control shadow-none bg-dark text-white border-secondary"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="form-label small text-white fw-semibold">Requirement Notes</label>
                      <textarea 
                        className="form-control shadow-none bg-dark text-white border-secondary"
                        rows="3"
                        placeholder={`Tell us about your requirements for ${service.title}...`}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-solid py-3 fw-bold rounded-3 mt-2 shadow-sm"
                    >
                      Submit Service Inquiry
                    </button>
                  </form>
                )}

                <div className="mt-4 pt-3 border-top border-secondary border-opacity-25">
                  <p className="small text-white-50 mb-2">Need immediate assistance?</p>
                  <a href="tel:+919891910542" className="d-flex align-items-center gap-2 text-white text-decoration-none fw-semibold">
                    <i className="fa fa-phone text-primary"></i> +91 9891910542
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Cross-Sell CTA */}
      <section className="py-5 border-top border-secondary border-opacity-25" style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)' }}>
        <div className="container text-center py-3">
          <h3 className="fw-bold text-white mb-2">Explore Related Business Verticals</h3>
          <p className="text-light opacity-75 mx-auto mb-4" style={{ maxWidth: '600px' }}>
            SCN Global provides end-to-end multi-disciplinary corporate solutions across staffing, IT, and training.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/our-business" className="btn btn-solid px-4 py-2 fw-semibold">
              View All 9 Business Verticals
            </Link>
            <Link to="/about-us" className="btn btn-ghost px-4 py-2 fw-semibold">
              About SCN Global
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
