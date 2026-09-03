import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquare, ThumbsUp, Filter, ExternalLink } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const ReviewsSection = () => {
  const { businessInfo } = useBusiness();
  const [activeCategory, setActiveCategory] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'David Thornton',
      category: 'brakes',
      serviceTag: 'Brake Rotor & Pad Replacement',
      vehicle: '2018 Ford F-150',
      date: '2 weeks ago',
      rating: 5,
      content: `I had metal-on-metal grinding when braking. The team at ${businessInfo.name} got me in first thing in the morning, sent photos of the worn rotors directly to my phone with a fair price quote, and had my truck ready by 3 PM. Honest, fast, and no pushy upselling.`
    },
    {
      id: 2,
      name: 'Sarah Jenkins',
      category: 'diagnostics',
      serviceTag: 'Check Engine Diagnostics & O2 Sensor',
      vehicle: '2020 Honda CR-V',
      date: '1 month ago',
      rating: 5,
      content: `The dealer wanted to charge an outrageous diagnostic fee just to scan my Check Engine light. Stopped by here and they diagnosed a bad sensor within 45 minutes, gave me a clear written estimate, and resolved it the same day. Great local repair shop!`
    },
    {
      id: 3,
      name: 'Marcus Ramirez',
      category: 'ac',
      serviceTag: 'A/C Evacuation & Recharge',
      vehicle: '2017 Toyota Tacoma',
      date: '3 weeks ago',
      rating: 5,
      content: `A/C stopped cooling completely in the summer heat. They ran a UV dye test, found a hairline O-ring leak, replaced it, and recharged the Freon. Blows ice cold now. Very professional front desk communication.`
    },
    {
      id: 4,
      name: 'Elena Rostova',
      category: 'maintenance',
      serviceTag: '60k Factory Scheduled Maintenance',
      vehicle: '2019 Subaru Outback',
      date: '2 months ago',
      rating: 5,
      content: `Took my Subaru in for its 60k service. They gave me a detailed digital inspection report with tire tread depths and battery condition before doing anything. Clean lobby, great coffee, and saved me over 30% compared to dealership quotes.`
    },
    {
      id: 5,
      name: 'Brian Henderson',
      category: 'diagnostics',
      serviceTag: 'Alternator & Electrical System',
      vehicle: '2016 Chevrolet Silverado',
      date: '1 month ago',
      rating: 5,
      content: `Truck battery died twice in one week. They tested the charging system, discovered the alternator regulator was failing intermittently, and replaced it under warranty. These guys know what they are doing.`
    },
    {
      id: 6,
      name: 'Rachel Adams',
      category: 'brakes',
      serviceTag: 'Complete Brake System Overhaul',
      vehicle: '2021 Hyundai Tucson',
      date: '3 weeks ago',
      rating: 5,
      content: `Super transparent team. They explained that my rear brakes still had 40% life left and only needed the front pads replaced—most shops would have charged me for all four! That level of honesty earned a customer for life.`
    }
  ];

  const filteredReviews = activeCategory === 'all' 
    ? reviews 
    : reviews.filter(r => r.category === activeCategory);

  return (
    <section id="reviews" className="section-spacing" style={{ backgroundColor: '#090d16' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>Customer Feedback</span>
          </div>
          <h2 className="section-title">
            Real Reviews From <span className="highlight">Local Drivers</span>
          </h2>
          <p className="section-description">
            See what vehicle owners in {businessInfo.city} say about our service, transparent pricing, and diagnostic turnaround.
          </p>
        </div>

        {/* Google Summary Header Card */}
        <div style={{
          backgroundColor: '#0f172a',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '1.75rem 2rem',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            {/* Google Logo Icon badge */}
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '12px',
              backgroundColor: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.6rem',
              color: '#4285F4',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}>
              G
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                  {businessInfo.googleRating}
                </span>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
              </div>
              <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                Based on <strong>{businessInfo.reviewCount} verified Google Reviews</strong> in {businessInfo.city}
              </span>
            </div>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'brakes', label: 'Brakes' },
              { id: 'diagnostics', label: 'Diagnostics' },
              { id: 'ac', label: 'A/C Service' },
              { id: 'maintenance', label: 'Maintenance' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: activeCategory === cat.id ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: activeCategory === cat.id ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                  color: activeCategory === cat.id ? '#f59e0b' : '#cbd5e1',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid-3">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="card-glass"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem'
              }}
            >
              <div>
                {/* Header: Stars & Date */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.875rem' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {rev.date}
                  </span>
                </div>

                {/* Service Tag */}
                <div style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#f59e0b',
                  backgroundColor: 'rgba(245, 158, 11, 0.1)',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '4px',
                  marginBottom: '1rem'
                }}>
                  {rev.serviceTag}
                </div>

                {/* Content */}
                <p style={{
                  fontSize: '0.925rem',
                  color: '#e2e8f0',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '1.5rem'
                }}>
                  “{rev.content}”
                </p>
              </div>

              {/* Author Footer */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '0.875rem'
              }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                    {rev.name}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    {rev.vehicle}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#34d399', fontSize: '0.75rem', fontWeight: 600 }}>
                  <CheckCircle size={14} />
                  <span>Verified Driver</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
