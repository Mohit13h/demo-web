import React from 'react';
import { Wrench, Phone, Menu, X, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const Header = () => {
  const { businessInfo, openQuoteModal, isMobileNavOpen, setIsMobileNavOpen } = useBusiness();

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Symptom Checker', href: '#symptoms' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'About', href: '#about' },
    { label: 'Location & Hours', href: '#location' },
  ];

  const handleNavClick = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'rgba(9, 13, 22, 0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      transition: 'all 0.2s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '74px',
      }}>
        {/* Brand / Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'var(--accent-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-accent)',
            flexShrink: 0
          }}>
            <Wrench size={22} color="#0b0f19" strokeWidth={2.5} />
          </div>
          <div>
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(1rem, 3.5vw, 1.2rem)',
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
              {businessInfo.name}
            </span>
            <span className="header-subtext" style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#f59e0b',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Auto Repair & Diagnostics • {businessInfo.city}, {businessInfo.state}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.75rem',
            listStyle: 'none'
          }}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA actions */}
        <div className="desktop-ctas">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
            {/* Direct Phone Call Button */}
            <a
              href={`tel:${businessInfo.phoneClean}`}
              id="header-call-btn"
              className="btn btn-secondary"
              style={{ padding: '0.65rem 1.1rem', fontSize: '0.9rem' }}
              title="Call shop directly"
            >
              <Phone size={16} color="#34d399" />
              <span>{businessInfo.phone}</span>
            </a>

            {/* Request Quote Button */}
            <button
              onClick={() => openQuoteModal()}
              id="header-quote-btn"
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}
            >
              <Calendar size={16} />
              <span>Get a Free Quote</span>
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="mobile-toggle-wrapper" style={{ alignItems: 'center', gap: '0.5rem' }}>
          <a
            href={`tel:${businessInfo.phoneClean}`}
            id="mobile-header-call-icon"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#34d399'
            }}
            aria-label="Call shop"
          >
            <Phone size={18} />
          </a>

          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-subtle)',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            {isMobileNavOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileNavOpen && (
        <div style={{
          backgroundColor: '#0c121e',
          borderBottom: '1px solid var(--border-strong)',
          padding: '1.25rem 1.5rem 1.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          animation: 'slideUp 0.2s ease-out'
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  style={{
                    display: 'block',
                    padding: '0.75rem 0',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#e2e8f0',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    minHeight: '44px'
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => {
                setIsMobileNavOpen(false);
                openQuoteModal();
              }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Calendar size={18} />
              <span>Get a Free Quote</span>
            </button>

            <a
              href={`tel:${businessInfo.phoneClean}`}
              className="btn btn-call"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Phone size={18} />
              <span>Call {businessInfo.phone}</span>
            </a>
          </div>
        </div>
      )}

      {/* Inline styles for responsive media queries */}
      <style>{`
        .header-subtext {
          display: block;
        }
        @media (max-width: 420px) {
          .header-subtext {
            display: none;
          }
        }
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          .desktop-ctas { display: flex !important; }
          .mobile-toggle-wrapper { display: none !important; }
        }
        @media (max-width: 959px) {
          .desktop-nav { display: none !important; }
          .desktop-ctas { display: none !important; }
          .mobile-toggle-wrapper { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

