import React, { useState } from 'react';
import { Sliders, X, Sparkles, Building2, MapPin, Phone, Star, Check } from 'lucide-react';
import { useBusiness, PRESETS } from '../context/BusinessContext';

export const DemoToolbar = () => {
  const { 
    businessInfo, 
    updateBusinessField, 
    applyPreset, 
    selectedPreset,
    isPersonalizerOpen,
    setIsPersonalizerOpen
  } = useBusiness();

  const [isMinimized, setIsMinimized] = useState(false);

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        title="Open Prospect Demo Customizer"
        className="demo-floating-trigger"
        style={{
          position: 'fixed',
          zIndex: 90,
          background: 'var(--accent-gradient)',
          border: '2px solid rgba(255,255,255,0.2)',
          borderRadius: '50%',
          width: '46px',
          height: '46px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0b0f19',
          boxShadow: '0 8px 25px rgba(245, 158, 11, 0.5)',
          cursor: 'pointer'
        }}
      >
        <Sliders size={20} />
      </button>
    );
  }

  return (
    <>
      {/* Floating Pill Trigger */}
      {!isPersonalizerOpen && (
        <div className="demo-floating-trigger" style={{
          position: 'fixed',
          zIndex: 90,
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem'
        }}>
          <button
            onClick={() => setIsPersonalizerOpen(true)}
            id="open-demo-customizer-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#0f172a',
              border: '1px solid #f59e0b',
              color: '#ffffff',
              padding: '0.55rem 0.95rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.8rem',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)'
            }}
          >
            <Sparkles size={15} color="#f59e0b" />
            <span>Customize Demo</span>
          </button>

          <button
            onClick={() => setIsMinimized(true)}
            title="Minimize toolbar"
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Slide-out Customizer Drawer */}
      {isPersonalizerOpen && (
        <div
          className="demo-drawer-content"
          style={{
            position: 'fixed',
            backgroundColor: '#0f172a',
            border: '2px solid rgba(245, 158, 11, 0.4)',
            borderRadius: '16px',
            padding: '1.25rem',
            zIndex: 100,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9)',
            animation: 'slideUp 0.25s ease'
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} color="#f59e0b" />
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>
                Pitch Demo Customizer
              </h3>
            </div>
            <button
              onClick={() => setIsPersonalizerOpen(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#cbd5e1',
                cursor: 'pointer'
              }}
            >
              <X size={16} />
            </button>
          </div>

          <p style={{ fontSize: '0.775rem', color: '#94a3b8', lineHeight: 1.4, marginBottom: '0.875rem' }}>
            Instantly personalize this demo during client meetings to show how it looks tailored to their auto shop.
          </p>

          {/* Preset Buttons */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.725rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
              1-Click US City Presets
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {Object.keys(PRESETS).map(key => {
                const p = PRESETS[key];
                const isActive = selectedPreset === key;
                return (
                  <button
                    key={key}
                    onClick={() => applyPreset(key)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.45rem 0.65rem',
                      borderRadius: '6px',
                      background: isActive ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                      border: isActive ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
                      color: isActive ? '#ffffff' : '#cbd5e1',
                      fontSize: '0.775rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span>{p.name} ({p.city}, {p.state})</span>
                    {isActive && <Check size={14} color="#f59e0b" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Editable Fields */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <label style={{ display: 'block', fontSize: '0.725rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase' }}>
              Direct Edit Prospect Info
            </label>

            <div>
              <label style={{ display: 'block', fontSize: '0.725rem', color: '#94a3b8', marginBottom: '0.15rem' }}>Business Name</label>
              <input
                type="text"
                value={businessInfo.name}
                onChange={e => updateBusinessField('name', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.4rem 0.55rem',
                  background: '#090d16',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontSize: '0.8rem'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.45rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.725rem', color: '#94a3b8', marginBottom: '0.15rem' }}>City</label>
                <input
                  type="text"
                  value={businessInfo.city}
                  onChange={e => updateBusinessField('city', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.4rem 0.55rem',
                    background: '#090d16',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.8rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.725rem', color: '#94a3b8', marginBottom: '0.15rem' }}>State</label>
                <input
                  type="text"
                  value={businessInfo.state}
                  onChange={e => updateBusinessField('state', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.4rem 0.55rem',
                    background: '#090d16',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.8rem'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.725rem', color: '#94a3b8', marginBottom: '0.15rem' }}>Phone Number</label>
              <input
                type="text"
                value={businessInfo.phone}
                onChange={e => updateBusinessField('phone', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.4rem 0.55rem',
                  background: '#090d16',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontSize: '0.8rem'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.45rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.725rem', color: '#94a3b8', marginBottom: '0.15rem' }}>Google Rating</label>
                <input
                  type="text"
                  value={businessInfo.googleRating}
                  onChange={e => updateBusinessField('googleRating', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.4rem 0.55rem',
                    background: '#090d16',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.8rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.725rem', color: '#94a3b8', marginBottom: '0.15rem' }}>Review Count</label>
                <input
                  type="text"
                  value={businessInfo.reviewCount}
                  onChange={e => updateBusinessField('reviewCount', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.4rem 0.55rem',
                    background: '#090d16',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.8rem'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.725rem', color: '#94a3b8', marginBottom: '0.15rem' }}>Street Address</label>
              <input
                type="text"
                value={businessInfo.address}
                onChange={e => updateBusinessField('address', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.4rem 0.55rem',
                  background: '#090d16',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontSize: '0.8rem'
                }}
              />
            </div>
          </div>

          <button
            onClick={() => setIsPersonalizerOpen(false)}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.55rem', marginTop: '1rem', fontSize: '0.825rem' }}
          >
            Apply & Close
          </button>
        </div>
      )}

      <style>{`
        .demo-floating-trigger {
          bottom: 20px;
          right: 20px;
        }
        .demo-drawer-content {
          bottom: 20px;
          right: 20px;
          width: 90%;
          max-width: 380px;
          max-height: 85vh;
          overflow-y: auto;
        }
        @media (max-width: 768px) {
          .demo-floating-trigger {
            bottom: 76px !important;
            right: 14px !important;
          }
          .demo-drawer-content {
            bottom: 70px !important;
            right: 5% !important;
            width: 90% !important;
            max-height: 80vh !important;
          }
        }
      `}</style>
    </>
  );
};

