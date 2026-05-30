import { useState } from "react";
import "./App.css";

const images = {
  hero: "/portfolio-assets/saurav-hero.jpeg",
  qualityGate: "/portfolio-assets/saurav-quality-gate.jpeg",
  germanDiesel:
    "https://www.germandieselexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-engine.8b67e6ac.jpg&w=1920&q=75",
  germanTeam:
    "https://www.germandieselexperts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam-engine.1b8c6f9a.jpg&w=1200&q=75",
  motherson:
    "https://www.motherson.com/storage/home-page/menu/20240517_14-29-05_R3PP8404_240x220.jpg",
  mothersonCrimp: "/portfolio-assets/motherson/motherson-crimp-close.jpg",
  mothersonTesting: "/portfolio-assets/motherson/motherson-process-2.jpg",
  indicaDie:
    "https://www.indicaindustries.com/images/manufacturing_solutions/die_cutting_1.jpg",
  indicaLamination:
    "https://www.indicaindustries.com/images/manufacturing_solutions/lamination_1.jpg",
  indicaPu:
    "https://www.indicaindustries.com/images/manufacturing_solutions/pu_moulding_1.jpg",
  tractor:
    "https://media.cnh.com/multimedia/image:44365928-0c74-45cf-8d2e-bf0b5a97270c",
};

function fallbackImage(label) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="760" viewBox="0 0 1200 760">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#f8fafc"/>
          <stop offset="1" stop-color="#dbeafe"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="760" fill="url(#bg)"/>
      <rect x="76" y="86" width="1048" height="588" rx="22" fill="none" stroke="#0f766e" stroke-width="5"/>
      <path d="M150 528h900M220 438h760M300 348h600" stroke="#94a3b8" stroke-width="8" stroke-linecap="round"/>
      <circle cx="290" cy="528" r="72" fill="none" stroke="#0f766e" stroke-width="12"/>
      <circle cx="910" cy="528" r="72" fill="none" stroke="#0f766e" stroke-width="12"/>
      <rect x="390" y="276" width="420" height="160" rx="18" fill="#ffffff" stroke="#0f766e" stroke-width="8"/>
      <text x="120" y="170" fill="#0f766e" font-family="Segoe UI, Arial" font-size="32" font-weight="800">ISO | LEAN | QUALITY</text>
      <text x="120" y="246" fill="#0f172a" font-family="Segoe UI, Arial" font-size="58" font-weight="900">${label}</text>
    </svg>
  `)}`;
}

function industryImageProps(src, label) {
  return {
    src,
    alt: label,
    onError: (event) => {
      event.currentTarget.onerror = null;
      event.currentTarget.src = fallbackImage(label);
    },
  };
}

const achievements = [
  { value: "95%", label: "FTT after Lean quality improvement projects" },
  { value: "0 PPM", label: "Defects maintained for 2 years" },
  { value: "80%", label: "Customer satisfaction improvement" },
  { value: "5+ yrs", label: "QMS, QHSE, automotive and manufacturing" },
];

const skills = [
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
  "ISO 50001",
  "IATF 16949",
  "VDA 6.3",
  "Lean Six Sigma",
  "Kaizen",
  "5S",
  "Muda Mura Muri",
  "8D",
  "CAPA",
  "RCA",
  "5 Why",
  "Fishbone",
  "Pareto",
  "APQP",
  "PPAP",
  "PFMEA",
  "MSA",
  "SPC",
  "Warranty Claims",
  "Supplier Audits",
  "Customer Complaints",
  "ECO",
  "IMDS",
  "SAP",
];

const experiences = [
  {
    id: "german-diesel",
    company: "Al Salehi German Diesel Experts",
    role: "Engineer - Quality & Engineering",
    period: "April 2026 - Present",
    location: "Dubai, UAE",
    image: images.germanDiesel,
    source: "https://alsalehi.ae/",
    accent: "Diesel engine/fuel Injection repair, diagnostics Bosch diesel services, QHSE and warranty control",
    bullets: [
      "Drive workshop QHSE compliance, inspection discipline and repair-release quality.",
      "Support ISO 9001, ISO 14001 and ISO 45001 documentation, internal audits and legal compliance.",
      "Coordinate CAPA, RCA, warranty claims, parts quarantine and supplier technical clarification.",
      "Apply process control thinking to diagnostics, rebuilding, testing, reporting and equipment repair workflow.",
    ],
  },
  {
    id: "motherson",
    company: "Motherson PKC Wiring Harness Systems",
    role: "Senior Quality Engineer",
    period: "February 2024 - March 2026",
    location: "UAE",
    image: images.mothersonTesting,
    source: "https://www.motherson.com/company/business-divisions/wiring-harness",
    accent: "Wiring harness assembly, crimp quality, testing and digital inspection",
    bullets: [
      "Led QA/QC for wiring harness systems under ISO, IATF, VDA, ISO 45001 and ISO 50001 requirements.",
      "Improved FTT from 72% to 95% using Lean problem solving, quality gates and focused rework reduction.",
      "Worked across customer concerns for AGCO, John Deere, CNH, Deutz, BRP, Volvo and Isuzu.",
      "Supported digital inspection, barcode traceability, assembly boards, crimp tooling and electrical testing controls.",
    ],
  },
  {
    id: "indica",
    company: "Indica Industries Private Ltd",
    role: "Quality Engineer",
    period: "October 2020 - February 2024",
    location: "Noida, India",
    image: images.indicaDie,
    source: "https://www.indicaindustries.com/manufacturing_solutions.html",
    accent: "PU foam blocks, die cutting, lamination, adhesives and automotive NVH parts",
    bullets: [
      "Managed quality for automotive components, PU foam packaging and NVH-related manufacturing processes.",
      "Controlled quality across die cutting, splitting, heat lamination, PU moulding, adhesives and tape applications.",
      "Prepared PPAP documents for Maruti, CNH, Tata Motors and other OEM customer requirements.",
      "Led RCA, CAPA, PPM reporting, supplier audits and IATF / ISO / VDA audit non-conformity closure.",
    ],
  },
  {
    id: "cnhi",
    company: "CNH Industrial India Pvt Ltd",
    role: "Industrial Trainee",
    period: "October 2019 - April 2020",
    location: "Noida, India",
    image: images.tractor,
    source:
      "https://www.cnh.com/",
    accent: "Tractor assembly quality, 5W1H, 5 Why and Kaizen",
    bullets: [
      "Reduced Average Defect per Unit on tractor assembly using 5W1H, 5 Why and 4M analysis.",
      "Removed human errors and non-value-added activities using Muda, Mura and Muri thinking.",
      "Developed Standard Kaizens and golden zone operator areas to reduce operating cost.",
      "Built early practical grounding in line balancing, assembly standards and defect prevention.",
    ],
  },
];

const mediaHighlights = [
  ["PU foam blocks and NVH parts", images.indicaPu],
  ["Flat die cutting and tool-die control", images.indicaDie],
  ["Heat lamination and adhesive process quality", images.indicaLamination],
  ["Crimp tooling and harness production engineering", images.mothersonCrimp],
  ["Electrical testing and digital inspection controls", images.mothersonTesting],
  ["CNH / New Holland tractor assembly quality", images.tractor],
  ["Diesel engine diagnostics and rebuilding", images.germanDiesel],
  ["Workshop repair, dyno testing and release quality", images.germanTeam],
];

const projects = [
  "Lean FTT improvement from 72% to 95% across two production lines",
  "Digital quality inspection with barcode and mobile traceability",
  "0 PPM performance for 2 years with zero customer complaints",
  "Supplier process digitalization recognized by JDF Supplier Innovation Award 2025",
  "PPAP submissions for new SOPs passed with zero observations",
  "Warranty, parts quarantine and CAPA system for diesel repair operations",
];

const certificates = [
  "ISO 9001:2015 Lead Auditor Course - In Progress",
  "ISO 50001 Internal Auditor - EHS Consultant",
  "ISO 45001 Internal Auditor - EHS Consultant",
  "Product Safety and Conformity Representative - PSCR",
];

function App() {
  const [activeExperience, setActiveExperience] = useState(experiences[0]);

  return (
    <main>
      <nav className="topbar" aria-label="Portfolio sections">
        <a className="brand" href="#home" aria-label="Saurav Tiwari home">
          <span>ST</span>
          <strong>Saurav Tiwari</strong>
        </a>
        <div className="navLinks">
          {["Profile", "Experience", "ISO System", "Certificates", "Contact"].map(
            (item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}>
                {item}
              </a>
            ),
          )}
        </div>
      </nav>

      <section
        className="hero"
        id="home"
        style={{ "--hero-photo": `url(${images.hero})` }}
      >
        <div className="heroBackdrop" aria-hidden="true" />
        <div className="heroContent">
          <p className="qualityQuote">
            "Quality is never an accident; it is the result of disciplined
            systems, clear standards and daily improvement."
          </p>
          <h1>Quality Specialist for ISO-driven, Lean manufacturing excellence.</h1>
          <p className="heroText">
            QHSE and automotive quality professional with 5+ years across wiring
            harnesses, PU foam and adhesive processes, tractor assembly and
            diesel engine repair. I turn defects, claims and audit findings into
            controlled systems that teams can trust.
          </p>
          <div className="heroActions">
            <a className="primaryAction" href="#experience">
              Click to explore my industry experience
            </a>
            <a
              className="secondaryAction"
              href="https://linkedin.com/in/sauravtiwari-13b534106"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn profile
            </a>
          </div>
        </div>
        <aside className="heroPanel" aria-label="Career highlights">
          {achievements.map((item) => (
            <div key={item.value} className="metric">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </aside>
      </section>

      <section className="section profile" id="profile">
        <div className="sectionHeader">
          <p className="eyebrow">Profile</p>
          <h2>Quality leadership built on ISO discipline, Lean action and customer confidence.</h2>
        </div>
        <div className="profileGrid">
          <article>
            <h3>What I bring</h3>
            <p>
              I lead quality assurance, customer concern handling, supplier
              quality, audits, warranty claims, CAPA and shop-floor improvement
              with a practical engineering approach. My work spans European,
              Indian and Japanese customers including AGCO, John Deere, CNH,
              Deutz, BRP, Volvo and Isuzu.
            </p>
          </article>
          <article>
            <h3>Quality stack</h3>
            <div className="skillCloud">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="sectionHeader">
          <p className="eyebrow">Experience</p>
          <h2>Click below to see my quality journey across different industries.</h2>
          <p className="sectionLead">
            Diesel repair, wiring harness, PU foam and tractor assembly - each
            industry strengthened my approach to prevention, traceability,
            Lean Six Sigma thinking and ISO-ready systems.
          </p>
        </div>
        <div className="experienceLayout">
          <div className="experienceList" aria-label="Experience selector">
            {experiences.map((experience) => (
              <button
                className={
                  activeExperience.id === experience.id
                    ? "experienceButton active"
                    : "experienceButton"
                }
                key={experience.id}
                onClick={() => setActiveExperience(experience)}
              >
                <span>{experience.company}</span>
                <small>{experience.accent}</small>
              </button>
            ))}
          </div>

          <article className="experienceDetail">
            <a
              className="experienceImageLink"
              href={activeExperience.source}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open source page for ${activeExperience.company}`}
            >
              <img
                {...industryImageProps(
                  activeExperience.image,
                  activeExperience.accent,
                )}
              />
            </a>
            <div className="experienceCopy">
              <p className="eyebrow">{activeExperience.period}</p>
              <h3>{activeExperience.company}</h3>
              <p className="roleLine">
                {activeExperience.role} | {activeExperience.location}
              </p>
              <ul>
                {activeExperience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="imageBand" aria-label="Industry process visuals">
        {mediaHighlights.map(([label, src]) => (
          <article key={label}>
            <img {...industryImageProps(src, label)} />
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="section isoSystem" id="iso-system">
        <div className="sectionHeader">
          <p className="eyebrow">ISO System</p>
          <h2>A future-ready quality profile, designed around standards and measurable control.</h2>
        </div>
        <div className="aiGrid">
          {[
            ["Define", "Translate ISO, IATF, VDA and customer requirements into clear process standards."],
            ["Measure", "Use FTT, PPM, COPQ, audit findings and warranty trends to see real process health."],
            ["Improve", "Apply Lean Six Sigma, 8D, RCA, PFMEA and CAPA to remove repeat defects."],
            ["Control", "Lock improvements through audits, training, digital inspection and management review."],
          ].map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects">
        <div className="sectionHeader">
          <p className="eyebrow">Proof points</p>
          <h2>Selected quality achievements</h2>
        </div>
        <div className="projectList">
          {projects.map((project) => (
            <div key={project}>{project}</div>
          ))}
        </div>
      </section>

      <section className="section certificates" id="certificates">
        <div className="sectionHeader">
          <p className="eyebrow">Certificates</p>
          <h2>My certifications</h2>
        </div>
        <div className="certificateNameGrid">
          {certificates.map((certificate) => (
            <a key={certificate} href="#certificates">
              {certificate}
            </a>
          ))}
          <a
            href="https://linkedin.com/in/sauravtiwari-13b534106"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
            <span>Open profile</span>
          </a>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Available for quality, QHSE and manufacturing excellence roles.</h2>
        </div>
        <div className="contactLinks">
          <a href="tel:+971543670265">+971 54 367 0265</a>
          <a href="mailto:Sauravtiwari997@gmail.com">Sauravtiwari997@gmail.com</a>
          <a
            href="https://linkedin.com/in/sauravtiwari-13b534106"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/sauravtiwari-13b534106
          </a>
          <span>Dubai, UAE</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
