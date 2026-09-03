import React from 'react';
import { Phone, Clock, MapPin, ShieldCheck, Zap } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const TopBar = () => {
  const { businessInfo } = useBusiness();

  return (
    <div style={{
      backgroundColor: '#070a10',
      borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
      fontSize: '0.8125rem',
      color: '#94a3b8',
      padding: '0.45rem 0',
      position: 'relative',
      zIndex: 40
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        {/* Left: Location & Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#e2e8f0' }}>
            <MapPin size={14} color="#f59e0b" />
            <span>Serving <strong>{businessInfo.city}, {businessInfo.state}</strong> & Surrounding Areas</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <span className="pulse-dot"></span>
            <span style={{ color: '#34d399', fontWeight: 600 }}>Open Today: 7:30 AM – 6:00 PM</span>
          </div>
        </div>

        {/* Right: Same day badge & Direct Call */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#cbd5e1' }}>
            <Zap size={14} color="#f59e0b" />
            <span style={{ display: 'none', '@media (min-width: 640px)': { display: 'inline' } }}>Same-Day Diagnostics Available</span>
          </div>

          <a
            href={`tel:${businessInfo.phoneClean}`}
            id="topbar-call-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#f59e0b',
              fontWeight: 700,
              textDecoration: 'none'
            }}
          >
            <Phone size={13} />
            <span>Call Now: {businessInfo.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
