import './Hero.css';
import profilePhoto from '../assets/profile-photo.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-elements">
        <div className="hero-circle hero-circle-1"></div>
        <div className="hero-circle hero-circle-2"></div>
        <div className="hero-circle hero-circle-3"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for opportunities
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Shashikant Yadav</span>
            <br />
            <span className="typewriter">MERN Stack Developer</span>
          </h1>
          
          <p className="hero-description">
            MERN Stack Developer with strong frontend expertise in React.js and hands-on 
            experience building responsive, real-time web applications. Passionate about 
            writing clean code and contributing to impactful projects.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22 6 12 13 2 6"/>
              </svg>
              Get In Touch
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">BCA</span>
              <span className="stat-label">Graduate 2024</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <div className="hero-image-container">
              <img src={profilePhoto} alt="Shashikant Yadav" className="hero-profile-photo" />
            </div>
            
            {/* Floating Tech Icons */}
            <div className="floating-icon floating-icon-1">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              React.js
            </div>
            <div className="floating-icon floating-icon-2">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
              Node.js
            </div>
            <div className="floating-icon floating-icon-3">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l-1 1v8l1-1 1 1v-8l-1-1zm-1 11v9l1 1 1-1v-9l-1 1-1-1z"/>
              </svg>
              MongoDB
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="mouse-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
