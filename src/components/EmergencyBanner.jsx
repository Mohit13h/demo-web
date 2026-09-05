import React from 'react';
import { Phone, Calendar, AlertTriangle, ShieldCheck, Clock } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const EmergencyBanner = () => {
  const { businessInfo, openQuoteModal } = useBusiness();

  return (
    <section style={{
      position: 'relative',
      backgroundColor: '#070a10',
      padding: '3rem 0',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '250px',
        background: 'radial-gradient(ellipse, rgba(245, 158, 11, 0.15) 0%, rgba(7, 10, 16, 0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          maxWidth: '820px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: 'rgba(239, 68, 68, 0.12)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#f87171',
            padding: '0.35rem 0.85rem',
            borderRadius: '9999px',
            fontSize: '0.775rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1rem'
          }}>
            <AlertTriangle size={15} />
            <span>Don't Risk Stranded Roadside Emergencies</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            Need Auto Repair in {businessInfo.city}?
          </h2>

          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
            color: '#cbd5e1',
            lineHeight: 1.6,
            maxWidth: '640px',
            margin: '0 auto 1.75rem auto'
          }}>
            Don’t wait until a small squeak or glowing check engine light turns into an expensive breakdown. Our local certified mechanics are ready to inspect your car today.
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.875rem',
            marginBottom: '1.75rem'
          }}>
            <a
              href={`tel:${businessInfo.phoneClean}`}
              id="emergency-call-btn"
              className="btn btn-call btn-lg mobile-btn-full"
              style={{
                backgroundColor: '#10b981',
                color: '#090d16',
                boxShadow: '0 8px 30px rgba(16, 185, 129, 0.4)'
              }}
            >
              <Phone size={19} />
              <span>Call Now: {businessInfo.phone}</span>
            </a>

            <button
              onClick={() => openQuoteModal()}
              id="emergency-quote-btn"
              className="btn btn-primary btn-lg mobile-btn-full"
            >
              <Calendar size={19} />
              <span>Request a Fast Quote</span>
            </button>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            fontSize: '0.825rem',
            color: '#94a3b8'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={15} color="#f59e0b" /> Fast response time
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <ShieldCheck size={15} color="#f59e0b" /> {businessInfo.warranty}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

