import React from 'react';
import { ShieldCheck, Award, HeartHandshake, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const AboutSection = () => {
  const { businessInfo, openQuoteModal } = useBusiness();

  const values = [
    {
      title: 'Digital Transparency',
      desc: 'We photograph and film any worn parts or trouble areas so you can review them on your smartphone with our technician’s notes.'
    },
    {
      title: 'ASE-Certified Expertise',
      desc: 'Our technicians undergo continuous diagnostic training across modern hybrid, domestic, European, and Asian vehicle systems.'
    },
    {
      title: 'Zero High-Pressure Sales',
      desc: 'We prioritize issues by safety severity: what needs attention now, what can wait, and what to keep an eye on down the road.'
    },
    {
      title: 'Local Community Commitment',
      desc: `Proudly serving vehicle owners throughout ${businessInfo.city}, ${businessInfo.state} with reliable mechanical service.`
    }
  ];

  return (
    <section id="about" className="section-spacing" style={{ backgroundColor: '#0c111d' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Image with Floating Experience Badge */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6)',
              position: 'relative'
            }}>
              <img
                src="/images/about.jpg"
                alt={`ASE Certified Master Technician at ${businessInfo.name}`}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.25rem',
                background: 'linear-gradient(to top, rgba(9, 13, 22, 0.95) 0%, rgba(9, 13, 22, 0) 100%)',
                color: '#ffffff'
              }}>
                <span style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: 700, textTransform: 'uppercase' }}>
                  ASE Master Certified Technicians
                </span>
                <p style={{ fontSize: '0.9rem', color: '#e2e8f0', margin: 0 }}>
                  Hands-on precision diagnostics and repair right here in {businessInfo.city}.
                </p>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              backgroundColor: '#0f172a',
              border: '2px solid #f59e0b',
              borderRadius: '12px',
              padding: '0.875rem 1.25rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              maxWidth: '220px'
            }}>
              <Award size={28} color="#f59e0b" />
              <div>
                <strong style={{ display: 'block', fontSize: '1rem', color: '#ffffff', lineHeight: 1.1 }}>
                  {businessInfo.warranty}
                </strong>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  Nationwide peace of mind
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div>
            <div className="section-eyebrow">
              <span>About {businessInfo.name}</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.18,
              marginBottom: '1.25rem'
            }}>
              A Local Repair Team You Can <span className="highlight">Count On</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              At <strong>{businessInfo.name}</strong>, we believe local auto repair should be simple, honest, and completely transparent. Whether you come in for a routine synthetic oil change or an elusive check-engine electrical issue, you get straightforward answers and quality workmanship every single time.
            </p>

            <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '2rem' }}>
              Our workshop is equipped with dealer-level computerized scan tools and modern repair bays, allowing us to service all makes and models—foreign and domestic—while preserving your vehicle’s factory warranty.
            </p>

            {/* 4 Values Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.25rem'
            }}>
              {values.map((v, i) => (
                <div key={i} style={{
                  padding: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '10px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                    <CheckCircle2 size={16} color="#f59e0b" />
                    <h4 style={{ fontSize: '0.925rem', fontWeight: 700, color: '#ffffff' }}>
                      {v.title}
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.825rem', color: '#94a3b8', margin: 0, lineHeight: 1.45 }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                onClick={() => openQuoteModal()}
                className="btn btn-primary"
              >
                <Calendar size={18} />
                <span>Schedule an Inspection</span>
              </button>

              <a
                href={`tel:${businessInfo.phoneClean}`}
                className="btn btn-secondary"
              >
                <Phone size={18} color="#34d399" />
                <span>Call Our Shop</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
