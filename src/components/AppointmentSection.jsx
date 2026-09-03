import React, { useState } from 'react';
import { Calendar, Phone, Car, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const AppointmentSection = () => {
  const { businessInfo } = useBusiness();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    serviceNeeded: 'Brake Repair & Inspection',
    preferredDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const services = [
    'Brake Repair & Inspection',
    'Computer Check-Engine Diagnostics',
    'Full Synthetic Oil & Filter Service',
    'A/C & Heating Climate Control',
    'Steering, Shocks & Suspension',
    'Transmission & Drivetrain Service',
    'Battery, Alternator & Electrical',
    'Factory Scheduled Maintenance (30k/60k/90k)',
    'Other Service / Not Sure'
  ];

  return (
    <section id="appointment" className="section-spacing" style={{ backgroundColor: '#090d16' }}>
      <div className="container">
        
        <div style={{
          background: 'linear-gradient(135deg, rgba(22, 32, 51, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '20px',
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Value proposition & Phone quick dial */}
          <div>
            <div className="section-eyebrow" style={{ marginBottom: '1rem' }}>
              <span>Fast & Friendly Scheduling</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.18,
              marginBottom: '1rem'
            }}>
              Need Your <span className="highlight">Car Fixed?</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '2rem' }}>
              Tell us what your vehicle needs and we’ll help you with the next step. No pressure, no obligations—just honest advice from local automotive specialists in {businessInfo.city}.
            </p>

            {/* Direct Phone Call Alternative */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '1.25rem 1.5rem',
              marginBottom: '2rem'
            }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>
                Prefer to speak directly with a service advisor?
              </span>
              <a
                href={`tel:${businessInfo.phoneClean}`}
                id="appointment-direct-phone"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: '#34d399',
                  textDecoration: 'none'
                }}
              >
                <Phone size={22} />
                <span>{businessInfo.phone}</span>
              </a>
              <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>
                Mon-Fri: 7:30 AM - 6:00 PM • Sat: 8:00 AM - 3:00 PM
              </span>
            </div>

            {/* Bullet guarantees */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e2e8f0', fontSize: '0.9rem' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Honest price estimates before any repair starts</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e2e8f0', fontSize: '0.9rem' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Backed by our {businessInfo.warranty}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e2e8f0', fontSize: '0.9rem' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Clean, air-conditioned waiting area with Wi-Fi</span>
              </div>
            </div>
          </div>

          {/* Right Column: In-page Form or Confirmation State */}
          <div style={{
            backgroundColor: '#090d16',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>
                  Request an Estimate
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                  Fill out this quick form and we’ll contact you promptly.
                </p>

                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Robert Smith"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      background: '#131c2e',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                {/* Phone & Email Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        background: '#131c2e',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="robert@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        background: '#131c2e',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>
                </div>

                {/* Vehicle Year, Make, Model */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                    Vehicle (Year, Make, Model) *
                  </label>
                  <input
                    type="text"
                    name="vehicle"
                    required
                    placeholder="e.g. 2019 Toyota Highlander"
                    value={formData.vehicle}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      background: '#131c2e',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                {/* Service Needed & Date */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                      Service Needed
                    </label>
                    <select
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        background: '#131c2e',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '0.875rem'
                      }}
                    >
                      {services.map((svc) => (
                        <option key={svc} value={svc} style={{ background: '#090d16', color: '#fff' }}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        background: '#131c2e',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '0.875rem'
                      }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                    Describe Vehicle Issue / Notes
                  </label>
                  <textarea
                    name="message"
                    rows="2"
                    placeholder="Provide any details on sounds, warning lights, or mileage..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      background: '#131c2e',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.875rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="inpage-quote-submit-btn"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.95rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  {loading ? 'Submitting Your Request...' : 'Request a Quote'}
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '2px solid #10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981',
                  margin: '0 auto 1.25rem'
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                  Quote Request Sent!
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.925rem', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  Thank you! Our service team at <strong>{businessInfo.name}</strong> will contact you promptly at <strong>{formData.phone}</strong> with pricing and schedule availability.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
