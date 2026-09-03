import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Phone, Car, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const QuoteModal = () => {
  const { businessInfo, isQuoteModalOpen, closeQuoteModal, initialQuoteService } = useBusiness();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleYear: '2020',
    vehicleMake: '',
    vehicleModel: '',
    serviceNeeded: initialQuoteService || 'Brake Repair & Rotor Service',
    preferredDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialQuoteService) {
      setFormData(prev => ({ ...prev, serviceNeeded: initialQuoteService }));
    }
  }, [initialQuoteService]);

  if (!isQuoteModalOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast realistic network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    closeQuoteModal();
  };

  const serviceOptions = [
    'Brake Repair & Rotor Service',
    'Computer Check-Engine Diagnostics',
    'Full Synthetic Oil & Filter Service',
    'A/C & Heating Climate Control',
    'Steering, Shocks & Suspension',
    'Transmission & Drivetrain Service',
    'Battery, Alternator & Electrical',
    'Factory Scheduled Maintenance (30k/60k/90k)',
    'Pre-Purchase Used Car Inspection',
    'General Vehicle Inspection / Strange Noise'
  ];

  return (
    <div className="modal-backdrop" onClick={closeQuoteModal}>
      <div 
        className="modal-content" 
        onClick={e => e.stopPropagation()}
        style={{ padding: '2rem' }}
      >
        {/* Close Button */}
        <button
          onClick={closeQuoteModal}
          id="close-quote-modal-btn"
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#cbd5e1',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
        >
          <X size={20} />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div style={{ marginBottom: '1.5rem', paddingRight: '2rem' }}>
              <span style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#f59e0b',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                display: 'block',
                marginBottom: '0.25rem'
              }}>
                Fast & Transparent Response
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.25 }}>
                Request a Free Quote or Appointment
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '0.35rem' }}>
                Tell us about your vehicle and what you need. Our team at <strong>{businessInfo.name}</strong> will get back to you with an honest estimate.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Vehicle Row */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                padding: '1rem'
              }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.65rem' }}>
                  <Car size={15} color="#f59e0b" />
                  <span>Vehicle Information</span>
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1.5fr', gap: '0.6rem' }}>
                  <div>
                    <input
                      type="text"
                      name="vehicleYear"
                      placeholder="Year"
                      required
                      value={formData.vehicleYear}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.75rem',
                        background: '#090d16',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '6px',
                        color: '#ffffff',
                        fontSize: '0.875rem'
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="vehicleMake"
                      placeholder="Make (e.g. Ford, Toyota)"
                      required
                      value={formData.vehicleMake}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.75rem',
                        background: '#090d16',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '6px',
                        color: '#ffffff',
                        fontSize: '0.875rem'
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="vehicleModel"
                      placeholder="Model (e.g. F-150, Camry)"
                      required
                      value={formData.vehicleModel}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.75rem',
                        background: '#090d16',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '6px',
                        color: '#ffffff',
                        fontSize: '0.875rem'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Service & Preferred Date */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '0.75rem' }}>
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
                      padding: '0.65rem 0.75rem',
                      background: '#090d16',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '6px',
                      color: '#ffffff',
                      fontSize: '0.875rem'
                    }}
                  >
                    {serviceOptions.map((svc) => (
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
                      padding: '0.65rem 0.75rem',
                      background: '#090d16',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '6px',
                      color: '#ffffff',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.75rem',
                      background: '#090d16',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '6px',
                      color: '#ffffff',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                    Phone Number (for quote) *
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
                      padding: '0.65rem 0.75rem',
                      background: '#090d16',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '6px',
                      color: '#ffffff',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                  Email Address (optional)
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.75rem',
                    background: '#090d16',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.875rem'
                  }}
                />
              </div>

              {/* Message / Symptoms */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                  Describe what your vehicle is experiencing (optional)
                </label>
                <textarea
                  name="message"
                  rows="2"
                  placeholder="e.g. Squeaking noise when braking from high speeds, check engine light came on 2 days ago..."
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.75rem',
                    background: '#090d16',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="submit-quote-btn"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', marginTop: '0.5rem' }}
              >
                {isSubmitting ? (
                  <span>Processing Your Request...</span>
                ) : (
                  <>
                    <Calendar size={18} />
                    <span>Request Free Estimate</span>
                  </>
                )}
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.75rem', color: '#64748b' }}>
                🔒 Your information is confidential. We never spam or sell client data.
              </div>
            </form>
          </div>
        ) : (
          /* Realistic Success State */
          <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              border: '2px solid #10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10b981',
              margin: '0 auto 1.25rem'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
              Estimate Request Received!
            </h3>
            
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '440px', margin: '0 auto 1.5rem auto' }}>
              Thank you, <strong>{formData.name || 'valued customer'}</strong>. Our service advisor at <strong>{businessInfo.name}</strong> has received your vehicle details and will reach out shortly.
            </p>

            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              padding: '1rem',
              maxWidth: '440px',
              margin: '0 auto 1.5rem auto',
              textAlign: 'left',
              fontSize: '0.85rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ color: '#94a3b8' }}>Vehicle:</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>{formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel || 'Vehicle'}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ color: '#94a3b8' }}>Service:</span>
                <span style={{ color: '#f59e0b', fontWeight: 600 }}>{formData.serviceNeeded}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#94a3b8' }}>Expected Callback:</span>
                <span style={{ color: '#34d399', fontWeight: 600 }}>Within 15 mins (Shop Hours)</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '320px', margin: '0 auto' }}>
              <a
                href={`tel:${businessInfo.phoneClean}`}
                className="btn btn-call"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Phone size={16} />
                <span>Need faster service? Call {businessInfo.phone}</span>
              </a>

              <button
                onClick={handleReset}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
