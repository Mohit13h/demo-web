import React from 'react';
import { Wrench, Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const Footer = () => {
  const { businessInfo, openQuoteModal } = useBusiness();

  return (
    <footer style={{
      backgroundColor: '#05070d',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      color: '#94a3b8',
      fontSize: '0.9rem',
      paddingTop: '4.5rem',
      paddingBottom: '5.5rem' /* room for mobile bottom bar */
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* Column 1: Brand & Philosophy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'var(--accent-gradient)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-accent)'
              }}>
                <Wrench size={20} color="#0b0f19" strokeWidth={2.5} />
              </div>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1.2rem',
                color: '#ffffff',
                letterSpacing: '-0.02em'
              }}>
                {businessInfo.name}
              </span>
            </div>

            <p style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.875rem' }}>
              Local ASE-certified auto repair and computerized vehicle diagnostics in {businessInfo.city}, {businessInfo.state}. Honest evaluations, transparent pricing, and quality workmanship you can depend on.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e2e8f0', fontSize: '0.825rem' }}>
              <ShieldCheck size={16} color="#f59e0b" />
              <span>Backing every repair with our {businessInfo.warranty}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { label: 'Home', href: '#' },
                { label: 'Auto Services', href: '#services' },
                { label: 'Vehicle Symptom Matcher', href: '#symptoms' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'Customer Reviews', href: '#reviews' },
                { label: 'About Our Team', href: '#about' },
                { label: 'Location & Hours', href: '#location' },
              ].map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.15s ease' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#f59e0b'}
                    onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Services */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
              {[
                'Brake Repair & Inspection',
                'Check Engine Diagnostics',
                'Synthetic Oil Change Service',
                'A/C & Heating Climate Repair',
                'Suspension & Wheel Alignment',
                'Transmission Fluid Service',
                'Battery & Starting Systems',
                'Factory Scheduled Maintenance'
              ].map(svc => (
                <li key={svc}>
                  <button
                    onClick={() => openQuoteModal(svc)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: '#cbd5e1',
                      cursor: 'pointer',
                      fontSize: 'inherit',
                      textAlign: 'left',
                      transition: 'color 0.15s ease'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#f59e0b'}
                    onMouseLeave={e => e.currentTarget.style.color = '#cbd5e1'}
                  >
                    {svc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Shop Contact
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{businessInfo.address}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={18} color="#34d399" style={{ flexShrink: 0 }} />
                <a
                  href={`tel:${businessInfo.phoneClean}`}
                  style={{ color: '#ffffff', fontWeight: 700, textDecoration: 'none' }}
                >
                  {businessInfo.phone}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
                <a
                  href={`mailto:${businessInfo.email}`}
                  style={{ color: '#cbd5e1', textDecoration: 'none' }}
                >
                  {businessInfo.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Clock size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <span style={{ display: 'block', color: '#ffffff', fontWeight: 600 }}>Mon - Fri: 7:30 AM - 6:00 PM</span>
                  <span style={{ display: 'block', color: '#94a3b8' }}>Sat: 8:00 AM - 3:00 PM</span>
                  <span style={{ display: 'block', color: '#64748b' }}>Sun: Closed (Key Drop Available)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & local SEO statement */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} {businessInfo.name}. All rights reserved. Professional Automotive Diagnostics & Repair in {businessInfo.city}, {businessInfo.state}.
          </div>

          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Accessibility</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
