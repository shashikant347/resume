import './Experience.css';

export default function Experience() {
  const education = [
    {
      id: 1,
      title: 'Bachelor of Computer Applications (BCA)',
      institution: 'United Institute of Management, Naini, Prayagraj',
      period: 'Sept 2021 – Aug 2024',
      description: 'Completed BCA with focus on software development, web technologies, and database management. Built strong foundation in programming and computer science fundamentals.',
    },
  ];

  const certifications = [
    {
      id: 1,
      title: 'Complete Coding – React.js and Redux',
      institution: 'by Prashant Sir',
      link: 'https://www.knowledgegate.ai/certificate/8ABE47D5',
    },
    {
      id: 2,
      title: 'Delta – Full Stack Web Development',
      institution: 'Apna College',
      link: 'https://drive.google.com/file/d/1tnxVBHUDs28iv__egmBIww7DlTt5Giu5/view?usp=drivesdk',
    },
    {
      id: 3,
      title: 'NodeJs + ExpressJs + MongoDB',
      institution: 'KnowledgeGate',
      link: 'https://www.knowledgegate.ai/certificate/BFEB7A2A',
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">
          Education & <span className="gradient-text">Certifications</span>
        </h2>
        <p className="section-subtitle">
          My educational background and professional certifications
        </p>

        <div className="timeline-container">
          {/* Education */}
          <div className="timeline-section">
            <h3 className="timeline-heading">
              <span className="timeline-icon">🎓</span>
              Education
            </h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div 
                  key={edu.id} 
                  className="timeline-item"
                  style={{ '--delay': `${index * 0.15}s` }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content glass-card">
                    <span className="timeline-period">{edu.period}</span>
                    <h4 className="timeline-title">{edu.title}</h4>
                    <p className="timeline-company">{edu.institution}</p>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="timeline-section">
            <h3 className="timeline-heading">
              <span className="timeline-icon">📜</span>
              Certifications
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <a 
                  key={cert.id} 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-card glass-card"
                  style={{ '--delay': `${index * 0.15}s` }}
                >
                  <div className="cert-icon">🏆</div>
                  <div className="cert-content">
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">{cert.institution}</p>
                  </div>
                  <div className="cert-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
