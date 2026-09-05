import React from 'react';
import { Phone, Calendar, Star, ShieldCheck, Clock, CheckCircle2, Award, Zap } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const Hero = () => {
  const { businessInfo, openQuoteModal } = useBusiness();

  const trustBadges = [
    {
      icon: Award,
      title: 'ASE Master Certified',
      subtitle: 'Factory-trained technicians'
    },
    {
      icon: Zap,
      title: 'Same-Day Diagnostics',
      subtitle: 'Quick computer scan & report'
    },
    {
      icon: CheckCircle2,
      title: 'Digital Vehicle Inspection',
      subtitle: 'Photos sent directly to your phone'
    },
    {
      icon: ShieldCheck,
      title: businessInfo.warranty,
      subtitle: 'Nationwide parts & labor peace of mind'
    }
  ];

  return (
    <section className="hero-section" style={{
      position: 'relative',
      minHeight: '82vh',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#090d16',
      backgroundImage: `
        linear-gradient(to right, rgba(9, 13, 22, 0.96) 20%, rgba(9, 13, 22, 0.85) 65%, rgba(9, 13, 22, 0.65) 100%),
        linear-gradient(to top, rgba(9, 13, 22, 1) 0%, rgba(9, 13, 22, 0) 30%),
        url('/images/hero.jpg')
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center right',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
      paddingTop: '3rem',
      paddingBottom: '3.5rem'
    }}>
      {/* Subtle ambient lighting orb */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(9, 13, 22, 0) 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '780px' }}>
          
          {/* Live Trust & Google Rating Pill */}
          <div className="hero-trust-pill" style={{
            display: 'inline-flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            background: 'rgba(15, 23, 42, 0.88)',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            backdropFilter: 'blur(10px)',
            padding: '0.45rem 0.9rem',
            borderRadius: '9999px',
            marginBottom: '1.25rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#fbbf24" color="#fbbf24" />
              ))}
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>
              {businessInfo.googleRating}
            </span>
            <span style={{ fontSize: '0.825rem', color: '#94a3b8' }}>
              from <strong>{businessInfo.reviewCount}+ Google Reviews</strong> in {businessInfo.city}
            </span>
            <span className="pill-divider" style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: '#475569',
              display: 'inline-block'
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span className="pulse-dot"></span>
              <span style={{ fontSize: '0.825rem', color: '#34d399', fontWeight: 600 }}>
                Open Today
              </span>
            </div>
          </div>

          {/* Main H1 Headline */}
          <h1 style={{
            fontSize: 'clamp(1.85rem, 5.5vw, 3.65rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: '#ffffff',
            marginBottom: '1.25rem'
          }}>
            Reliable Auto Repair & Diagnostics in{' '}
            <span style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              {businessInfo.city}, {businessInfo.state}
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.25rem)',
            lineHeight: 1.6,
            color: '#cbd5e1',
            marginBottom: '2rem',
            maxWidth: '680px'
          }}>
            {businessInfo.subtagline}
          </p>

          {/* Dual Action CTAs */}
          <div className="hero-cta-group" style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.875rem',
            marginBottom: '2.25rem'
          }}>
            {/* Primary CTA */}
            <button
              onClick={() => openQuoteModal()}
              id="hero-primary-quote-btn"
              className="btn btn-primary btn-lg mobile-btn-full"
              style={{
                fontSize: '1rem',
                padding: '0.95rem 1.75rem',
                boxShadow: '0 8px 30px rgba(245, 158, 11, 0.45)'
              }}
            >
              <Calendar size={19} />
              <span>Get Free Quote & Time Slot</span>
            </button>

            {/* Secondary CTA */}
            <a
              href={`tel:${businessInfo.phoneClean}`}
              id="hero-secondary-call-btn"
              className="btn btn-secondary btn-lg mobile-btn-full"
              style={{
                fontSize: '1rem',
                padding: '0.95rem 1.6rem'
              }}
            >
              <Phone size={18} color="#34d399" />
              <span>Call {businessInfo.phone}</span>
            </a>
          </div>

          {/* Micro-guarantee text */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            color: '#94a3b8',
            fontSize: '0.825rem',
            marginBottom: '2.5rem'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <CheckCircle2 size={15} color="#10b981" /> No work without your approval
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <CheckCircle2 size={15} color="#10b981" /> Clear upfront estimates
            </span>
          </div>

        </div>

        {/* 4 Pillars Trust Bar inside Hero Base */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '0.875rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.75rem 0.85rem',
                  background: 'rgba(15, 23, 42, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px'
                }}
              >
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  <Icon size={17} color="#f59e0b" />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.15rem' }}>
                    {badge.title}
                  </h4>
                  <p style={{ fontSize: '0.775rem', color: '#94a3b8', margin: 0, lineHeight: 1.35 }}>
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 480px) {
          .pill-divider {
            display: none !important;
          }
          .hero-trust-pill {
            border-radius: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

