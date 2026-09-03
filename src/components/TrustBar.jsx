import React from 'react';
import { Shield, FileText, Wrench, Clock, Camera, Coffee, Check } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const TrustBar = () => {
  const { businessInfo } = useBusiness();

  const trustPoints = [
    {
      icon: FileText,
      title: 'Honest & Upfront Estimates',
      description: 'You will always know what needs immediate attention versus what can safely wait. No sudden price surprises or hidden fees.'
    },
    {
      icon: Camera,
      title: 'Digital Vehicle Inspections',
      description: 'We send clear photos and inspection notes straight to your smartphone so you can see exactly what our technician sees.'
    },
    {
      icon: Shield,
      title: 'Quality Parts & Workmanship',
      description: `Every repair is backed by our ${businessInfo.warranty}. We install premium OEM-equivalent parts built for longevity.`
    },
    {
      icon: Wrench,
      title: 'Advanced Computer Diagnostics',
      description: 'We invest in state-of-the-art scan tools to pinpoint electrical and engine faults quickly, preventing costly trial-and-error.'
    },
    {
      icon: Clock,
      title: 'Convenient & Timely Scheduling',
      description: 'We respect your schedule with quick check-ins, timely repair turnaround, and frequent progress text updates.'
    },
    {
      icon: Coffee,
      title: 'Customer-First Comfort',
      description: 'Clean, modern client lounge with complimentary high-speed Wi-Fi, premium coffee, and local rideshare coordination.'
    }
  ];

  return (
    <section id="why-us" className="section-spacing" style={{ backgroundColor: '#0c111d' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>Why Choose {businessInfo.name}</span>
          </div>
          <h2 className="section-title">
            Auto Repair Done With <span className="highlight">Honesty & Transparency</span>
          </h2>
          <p className="section-description">
            We understand taking your car to a mechanic can be stressful. Our goal is simple: provide expert automotive repair in {businessInfo.city} with clear communication and zero guesswork.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid-3">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="card-glass"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  padding: '1.85rem'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f59e0b'
                }}>
                  <Icon size={22} />
                </div>

                <div>
                  <h3 style={{
                    fontSize: '1.18rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    lineHeight: 1.3
                  }}>
                    {point.title}
                  </h3>
                  <p style={{
                    fontSize: '0.925rem',
                    color: '#94a3b8',
                    lineHeight: 1.6
                  }}>
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
