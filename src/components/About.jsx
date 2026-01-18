import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">
          Passionate developer crafting digital experiences that make a difference
        </p>

        <div className="about-grid">
          <div className="about-image-section">
            <div className="about-image-wrapper">
              <div className="about-image-bg"></div>
              <div className="about-image-container">
                <div className="about-avatar">
                  <span>👨‍💻</span>
                </div>
              </div>
              <div className="experience-badge">
                <span className="exp-number">BCA</span>
                <span className="exp-text">Graduate 2024</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <h3 className="about-heading">
              I'm a Full Stack Developer with a passion for creating 
              <span className="gradient-text"> impactful web solutions</span>
            </h3>

            <p className="about-text">
              Hey there! I'm Shashikant Yadav, a MERN Stack Developer based in Noida, India. 
              I have strong frontend expertise in React.js and hands-on experience building 
              responsive, real-time web applications.
            </p>

            <p className="about-text">
              Skilled in RESTful API integration, state management using Redux and Context API, 
              and modern UI design with Tailwind CSS. Experienced in full-stack development with 
              Node.js, Express, and MongoDB. Passionate about writing clean code, learning new 
              technologies, and contributing to impactful projects.
            </p>

            <div className="about-info-grid">
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <span className="info-label">Email</span>
                  <span className="info-value">yshashikant231217@gmail.com</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">Sector-51, Noida</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📱</span>
                <div>
                  <span className="info-label">Phone</span>
                  <span className="info-value">+91 6392771323</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🎓</span>
                <div>
                  <span className="info-label">Degree</span>
                  <span className="info-value">BCA (2021-2024)</span>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <a href="#contact" className="btn btn-primary">
                Let's Work Together
              </a>
              <a href="https://github.com/shashikant347" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
