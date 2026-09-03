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
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
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
        <div style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
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
              padding: '0.6rem 1rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)'
            }}
          >
            <Sparkles size={16} color="#f59e0b" />
            <span>Customize Demo for Prospect</span>
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
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '90%',
            maxWidth: '380px',
            maxHeight: '85vh',
            overflowY: 'auto',
            backgroundColor: '#0f172a',
            border: '2px solid rgba(245, 158, 11, 0.4)',
            borderRadius: '16px',
            padding: '1.5rem',
            zIndex: 100,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9)',
            animation: 'slideUp 0.25s ease'
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={18} color="#f59e0b" />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>
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

          <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.4, marginBottom: '1rem' }}>
            Instantly personalize this demo during client meetings to show how it looks tailored to their auto shop.
          </p>

          {/* Preset Buttons */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
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
                      padding: '0.5rem 0.75rem',
                      borderRadius: '6px',
                      background: isActive ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                      border: isActive ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
                      color: isActive ? '#ffffff' : '#cbd5e1',
                      fontSize: '0.8rem',
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase' }}>
              Direct Edit Prospect Info
            </label>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.2rem' }}>Business Name</label>
              <input
                type="text"
                value={businessInfo.name}
                onChange={e => updateBusinessField('name', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.45rem 0.6rem',
                  background: '#090d16',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontSize: '0.825rem'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.2rem' }}>City</label>
                <input
                  type="text"
                  value={businessInfo.city}
                  onChange={e => updateBusinessField('city', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.45rem 0.6rem',
                    background: '#090d16',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.825rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.2rem' }}>State</label>
                <input
                  type="text"
                  value={businessInfo.state}
                  onChange={e => updateBusinessField('state', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.45rem 0.6rem',
                    background: '#090d16',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.825rem'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.2rem' }}>Phone Number</label>
              <input
                type="text"
                value={businessInfo.phone}
                onChange={e => updateBusinessField('phone', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.45rem 0.6rem',
                  background: '#090d16',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontSize: '0.825rem'
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.2rem' }}>Google Rating</label>
                <input
                  type="text"
                  value={businessInfo.googleRating}
                  onChange={e => updateBusinessField('googleRating', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.45rem 0.6rem',
                    background: '#090d16',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.825rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.2rem' }}>Review Count</label>
                <input
                  type="text"
                  value={businessInfo.reviewCount}
                  onChange={e => updateBusinessField('reviewCount', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.45rem 0.6rem',
                    background: '#090d16',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.825rem'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.2rem' }}>Street Address</label>
              <input
                type="text"
                value={businessInfo.address}
                onChange={e => updateBusinessField('address', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.45rem 0.6rem',
                  background: '#090d16',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontSize: '0.825rem'
                }}
              />
            </div>
          </div>

          <button
            onClick={() => setIsPersonalizerOpen(false)}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.65rem', marginTop: '1.25rem', fontSize: '0.85rem' }}
          >
            Apply & Close
          </button>
        </div>
      )}
    </>
  );
};
