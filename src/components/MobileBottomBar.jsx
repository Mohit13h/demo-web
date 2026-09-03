import React from 'react';
import { Phone, Calendar, Navigation } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const MobileBottomBar = () => {
  const { businessInfo, openQuoteModal } = useBusiness();

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.address)}`;

  return (
    <div
      id="mobile-sticky-bar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        backgroundColor: 'rgba(9, 13, 22, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.12)',
        padding: '0.65rem 1rem calc(0.65rem + env(safe-area-inset-bottom, 0px))',
        boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.7)'
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1.3fr 0.9fr',
        gap: '0.5rem',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        {/* 1-Tap Call */}
        <a
          href={`tel:${businessInfo.phoneClean}`}
          id="mobile-bottom-call-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
            backgroundColor: 'rgba(16, 185, 129, 0.18)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            color: '#34d399',
            borderRadius: '8px',
            padding: '0.65rem 0.25rem',
            fontWeight: 700,
            fontSize: '0.875rem',
            textDecoration: 'none'
          }}
        >
          <Phone size={16} />
          <span>Call Now</span>
        </a>

        {/* Get Quote Modal */}
        <button
          onClick={() => openQuoteModal()}
          id="mobile-bottom-quote-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
            background: 'var(--accent-gradient)',
            border: 'none',
            color: '#0b0f19',
            borderRadius: '8px',
            padding: '0.65rem 0.25rem',
            fontWeight: 800,
            fontSize: '0.875rem',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-accent)'
          }}
        >
          <Calendar size={16} />
          <span>Get Quote</span>
        </button>

        {/* Directions */}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bottom-maps-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#ffffff',
            borderRadius: '8px',
            padding: '0.65rem 0.25rem',
            fontWeight: 600,
            fontSize: '0.825rem',
            textDecoration: 'none'
          }}
        >
          <Navigation size={15} color="#f59e0b" />
          <span>Map</span>
        </a>
      </div>

      {/* Hide on desktop, show only on mobile */}
      <style>{`
        @media (min-width: 769px) {
          #mobile-sticky-bar {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          #mobile-sticky-bar {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};
