import './Skills.css';

export default function Skills() {
  const skills = [
    { 
      category: 'Frontend', 
      icon: '🎨',
      color: '#61dafb',
      items: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 88 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 92 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Redux', level: 80 },
      ]
    },
    { 
      category: 'Backend', 
      icon: '⚙️',
      color: '#68a063',
      items: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'RESTful APIs', level: 88 },
        { name: 'Socket.io', level: 80 },
        { name: 'JWT Auth', level: 82 },
        { name: 'Middleware', level: 80 },
      ]
    },
    { 
      category: 'Database', 
      icon: '🗄️',
      color: '#47a248',
      items: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 75 },
        { name: 'Mongoose', level: 82 },
      ]
    },
    { 
      category: 'Tools & Others', 
      icon: '🛠️',
      color: '#f97316',
      items: [
        { name: 'Git/GitHub', level: 88 },
        { name: 'Postman', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Context API', level: 85 },
        { name: 'React Hooks', level: 88 },
        { name: 'Responsive Design', level: 90 },
      ]
    },
  ];

  const techLogos = [
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Express', icon: '🚂' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '💚' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="gradient-text">Proficiencies</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I use to bring ideas to life
        </p>

        {/* MERN Stack Highlight */}
        <div className="mern-stack">
          <h3 className="mern-title">MERN Stack Expertise</h3>
          <div className="mern-logos">
            {techLogos.map((tech, index) => (
              <div key={tech.name} className="mern-logo" style={{'--delay': `${index * 0.1}s`}}>
                <span className="mern-icon">{tech.icon}</span>
                <span className="mern-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="skill-card glass-card">
              <div className="skill-card-header">
                <span className="skill-category-icon">{skillGroup.icon}</span>
                <h3 className="skill-category">{skillGroup.category}</h3>
              </div>
              <div className="skill-items">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          background: skillGroup.color 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
