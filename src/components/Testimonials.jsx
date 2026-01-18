import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      avatar: '👩‍💼',
      content: 'Shashikant delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, DataFlow',
      avatar: '👨‍💻',
      content: 'Working with Shashikant was a fantastic experience. He built our dashboard application with incredible precision and was always responsive to feedback and changes.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, CreativeHub',
      avatar: '👩‍🎨',
      content: 'An outstanding developer who truly understands both the technical and creative aspects of web development. The final product was beautiful and highly functional.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">
          Client <span className="gradient-text">Testimonials</span>
        </h2>
        <p className="section-subtitle">
          What my clients say about working with me
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card glass-card"
              style={{ '--delay': `${index * 0.15}s` }}
            >
              <div className="testimonial-quote">
                <svg viewBox="0 0 24 24" fill="currentColor" className="quote-icon">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>
              
              <p className="testimonial-content">{testimonial.content}</p>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>

              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
