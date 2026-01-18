import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">Shashikant</span>
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer-description">
              MERN Stack Developer with strong frontend expertise in React.js, 
              building responsive, real-time web applications with modern technologies.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <span>📧</span>
                <a href="mailto:yshashikant231217@gmail.com">yshashikant231217@gmail.com</a>
              </li>
              <li>
                <span>📱</span>
                <a href="tel:+916392771323">+91 6392771323</a>
              </li>
              <li>
                <span>📍</span>
                <span>Sector-51, Noida, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} <span className="gradient-text">Shashikant Yadav</span>. All rights reserved.
          </p>
          <p className="footer-credit">
            Built with 💜 using React
          </p>
        </div>
      </div>
    </footer>
  );
}
