import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODMwMjg2Mnww&ixlib=rb-4.1.0&q=80&w=400',
    content:
      'Exceptional work! The web application exceeded our expectations. Fast, scalable, and beautifully designed. Highly recommend for any complex project.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Digital Solutions Co.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    content:
      'Outstanding technical expertise and communication. Delivered on time and went above and beyond to ensure our platform was production-ready.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'InnovateLab',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    content:
      'A true professional who understands both the technical and business aspects. The e-commerce platform has significantly improved our conversion rates.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'CTO',
    company: 'CloudSync Systems',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    content:
      'Incredibly skilled developer with a keen eye for detail. The API integration was seamless and the documentation was thorough. Will definitely work together again.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'Marketing Director',
    company: 'BrandVision',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    content:
      'Transformed our outdated website into a modern, high-performing platform. The results speak for themselves - our engagement metrics have doubled.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Entrepreneur',
    company: 'StartupHub',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    content:
      'Best decision we made for our MVP development. Professional, responsive, and delivered a product that impressed our investors. Highly skilled engineer.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-glow testimonials-glow-1" />
      <div className="testimonials-glow testimonials-glow-2" />

      <div className="testimonials-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="testimonials-header"
        >
          <h2 className="testimonials-title">
            <span className="testimonials-title-gradient">
              Client Testimonials
            </span>
          </h2>
          <p className="testimonials-description">
            What clients say about working together
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="testimonial-card"
            >
              <div className="testimonial-quote-icon">
                <Quote className="quote-icon" />
              </div>

              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-icon" />
                ))}
              </div>

              <p className="testimonial-content">
                "{testimonial.content}"
              </p>

              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div>
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="testimonials-stats"
        >
          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '30+', label: 'Happy Clients' },
            { value: '5', label: 'Years Experience' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-value">
                {stat.value}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
