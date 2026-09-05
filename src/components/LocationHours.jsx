import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, ShieldCheck, Car } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const LocationHours = () => {
  const { businessInfo } = useBusiness();

  const schedule = [
    { day: 'Monday', hours: '7:30 AM – 6:00 PM', open: true },
    { day: 'Tuesday', hours: '7:30 AM – 6:00 PM', open: true },
    { day: 'Wednesday', hours: '7:30 AM – 6:00 PM', open: true },
    { day: 'Thursday', hours: '7:30 AM – 6:00 PM', open: true },
    { day: 'Friday', hours: '7:30 AM – 6:00 PM', open: true },
    { day: 'Saturday', hours: '8:00 AM – 3:00 PM', open: true },
    { day: 'Sunday', hours: 'Closed (Emergency Towing Line Open)', open: false }
  ];

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.address)}`;

  return (
    <section id="location" className="section-spacing" style={{ backgroundColor: '#0c111d' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>Visit Our Workshop</span>
          </div>
          <h2 className="section-title">
            Convenient Location & <span className="highlight">Operating Hours</span>
          </h2>
          <p className="section-description">
            Easy access in {businessInfo.city} with ample customer parking, key drop-box for after-hours drop-offs, and comfortable client waiting lounge.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'start'
        }}>
          
          {/* Left Column: Address & Hours Info */}
          <div className="card-glass" style={{ padding: 'clamp(1.25rem, 3.5vw, 2.25rem)' }}>
            {/* Live Status Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              padding: '0.35rem 0.75rem',
              borderRadius: '9999px',
              marginBottom: '1.25rem'
            }}>
              <span className="pulse-dot"></span>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#34d399' }}>
                Open Today • Accepting Walk-Ins
              </span>
            </div>

            {/* Shop Address */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.725rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.2rem' }}>
                Shop Location
              </span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.3rem' }}>
                {businessInfo.name}
              </h3>
              <p style={{ fontSize: '0.925rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '0.85rem' }}>
                {businessInfo.address}
              </p>
              <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="get-directions-btn"
                  className="btn btn-primary btn-sm mobile-btn-full"
                >
                  <Navigation size={14} />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={`tel:${businessInfo.phoneClean}`}
                  className="btn btn-secondary btn-sm mobile-btn-full"
                >
                  <Phone size={14} color="#34d399" />
                  <span>Call {businessInfo.phone}</span>
                </a>
              </div>
            </div>

            {/* Key Drop & Parking amenities */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              padding: '0.75rem 0.875rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem'
            }}>
              <Car size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.4 }}>
                <strong>After-Hours Drop Box:</strong> Drop your vehicle and keys anytime 24/7 using our secure lockbox.
              </span>
            </div>

            {/* Weekly Schedule */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                <Clock size={15} color="#f59e0b" />
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>
                  Weekly Operating Schedule
                </h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {schedule.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.4rem 0.55rem',
                      borderRadius: '6px',
                      backgroundColor: idx === 0 ? 'rgba(245, 158, 11, 0.08)' : 'transparent',
                      fontSize: '0.825rem'
                    }}
                  >
                    <span style={{ color: idx === 0 ? '#ffffff' : '#cbd5e1', fontWeight: idx === 0 ? 700 : 500 }}>
                      {item.day}
                    </span>
                    <span style={{ color: item.open ? (idx === 0 ? '#f59e0b' : '#94a3b8') : '#64748b', fontWeight: item.open ? 600 : 400 }}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Stylized Interactive Map Preview */}
          <div className="location-map-container" style={{
            height: '100%',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            position: 'relative',
            backgroundColor: '#111827',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-md)'
          }}>
            {/* Dark Styled Map Graphic Background */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                radial-gradient(circle at 50% 50%, rgba(30, 41, 59, 0.8) 0%, #0b0f19 100%),
                linear-gradient(rgba(245, 158, 11, 0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245, 158, 11, 0.04) 1px, transparent 1px)
              `,
              backgroundSize: '100% 100%, 36px 36px, 36px 36px',
              opacity: 0.95
            }} />

            {/* Simulated Road Lines & Grid for authentic GPS feel */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }}>
              <line x1="0" y1="35%" x2="100%" y2="40%" stroke="#475569" strokeWidth="12" />
              <line x1="0" y1="35%" x2="100%" y2="40%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="45%" y1="0" x2="52%" y2="100%" stroke="#475569" strokeWidth="14" />
              <line x1="45%" y1="0" x2="52%" y2="100%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 6" />
              <line x1="15%" y1="75%" x2="85%" y2="20%" stroke="#334155" strokeWidth="6" />
              <circle cx="50%" cy="42%" r="90" fill="none" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="1.5" />
              <circle cx="50%" cy="42%" r="150" fill="none" stroke="rgba(245, 158, 11, 0.1)" strokeWidth="1" />
            </svg>

            {/* Map Top Bar */}
            <div style={{
              position: 'relative',
              zIndex: 5,
              padding: '0.75rem 1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(9, 13, 22, 0.8)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#e2e8f0', fontSize: '0.8rem' }}>
                <MapPin size={15} color="#f59e0b" />
                <span style={{ fontWeight: 600 }}>{businessInfo.city}, {businessInfo.state} Service Radius</span>
              </div>
              <span className="gps-coordinates" style={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                GPS: 30.2205° N, 97.7712° W
              </span>
            </div>

            {/* Center Pin Marker */}
            <div style={{
              position: 'absolute',
              top: '42%',
              left: '50%',
              transform: 'translate(-50%, -100%)',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              animation: 'slideUp 0.3s ease'
            }}>
              <div style={{
                background: '#0f172a',
                border: '1px solid #f59e0b',
                borderRadius: '8px',
                padding: '0.35rem 0.75rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.8)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.775rem',
                whiteSpace: 'nowrap',
                marginBottom: '6px'
              }}>
                📍 {businessInfo.name}
              </div>
              
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: '#f59e0b',
                border: '3px solid #ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 25px rgba(245, 158, 11, 0.7)'
              }}>
                <Navigation size={16} color="#0b0f19" />
              </div>
            </div>

            {/* Map Bottom Card CTA */}
            <div style={{
              position: 'relative',
              zIndex: 5,
              padding: '1rem',
              backgroundColor: 'rgba(15, 23, 42, 0.92)',
              backdropFilter: 'blur(10px)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.725rem', color: '#94a3b8' }}>
                  Tap below to open navigation
                </span>
                <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>
                  {businessInfo.address}
                </span>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm mobile-btn-full"
              >
                <span>Navigate via Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .location-map-container {
          min-height: 420px;
        }
        @media (max-width: 768px) {
          .location-map-container {
            min-height: 280px;
          }
          .gps-coordinates {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

