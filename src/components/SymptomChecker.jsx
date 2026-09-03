import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Volume2, 
  AlertCircle, 
  Thermometer, 
  Compass, 
  BatteryWarning, 
  ArrowRight,
  ShieldAlert,
  Calendar
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const SymptomChecker = () => {
  const { businessInfo, openQuoteModal } = useBusiness();
  const [activeSymptomIndex, setActiveSymptomIndex] = useState(0);

  const symptoms = [
    {
      id: 'noises',
      icon: Volume2,
      shortTitle: 'Unusual Squealing or Grinding',
      urgency: 'Medium - High',
      urgencyColor: '#f59e0b',
      driverComplaint: '“I hear a high-pitched squeak or metal grinding when stepping on the brakes, or clicking sounds when making turns.”',
      likelyCause: 'Severely worn brake friction pads down to wear indicators, warped brake discs, or failing constant velocity (CV) axle joints.',
      ourSolution: 'Complete physical brake system and axle inspection, rotor thickness measurement, and ceramic pad replacement before metal damages calipers.',
      recommendedService: 'Brake Repair & Inspection'
    },
    {
      id: 'check-engine',
      icon: AlertCircle,
      shortTitle: 'Check Engine Light On',
      urgency: 'High (Immediate if Flashing)',
      urgencyColor: '#ef4444',
      driverComplaint: '“A yellow or amber engine symbol appeared on my dash, and the car feels a bit sluggish or idles rough.”',
      likelyCause: 'Oxygen (O2) sensor failure, engine cylinder misfire, catalytic converter restriction, or loose evaporative gas cap seal.',
      ourSolution: 'Digital OBD-II diagnostic computer scan, live sensor telemetry analysis, and pinpoint fault isolation to prevent catalytic converter damage.',
      recommendedService: 'Computer Check-Engine Diagnostics'
    },
    {
      id: 'ac-warm',
      icon: Thermometer,
      shortTitle: 'A/C Blowing Lukewarm Air',
      urgency: 'Convenience / Seasonal',
      urgencyColor: '#38bdf8',
      driverComplaint: '“I turn on the A/C max cold, but the vents only blow warm air, or it takes 20 minutes to feel slightly cool.”',
      likelyCause: 'Refrigerant (Freon) leak, worn A/C compressor magnetic clutch, clogged cabin filter, or malfunctioning blend door actuator.',
      ourSolution: 'System pressure test, ultraviolet leak detection dye, compressor electrical test, and precision refrigerant evacuation & recharge.',
      recommendedService: 'A/C & Heating Climate Control'
    },
    {
      id: 'vibration',
      icon: Compass,
      shortTitle: 'Car Pulling or Vibrating',
      urgency: 'Medium',
      urgencyColor: '#f59e0b',
      driverComplaint: '“The car pulls to the left or right when driving straight, or the steering wheel shakes above 50 mph.”',
      likelyCause: 'Imbalanced wheel weights, uneven tire wear, bent rim, or worn tie rods and control arm suspension bushings.',
      ourSolution: 'Laser 4-wheel alignment check, high-speed dynamic wheel balancing, and suspension component wear test.',
      recommendedService: 'Steering, Shocks & Suspension'
    },
    {
      id: 'battery-crank',
      icon: BatteryWarning,
      shortTitle: 'Slow Cranking or Won’t Start',
      urgency: 'High',
      urgencyColor: '#ef4444',
      driverComplaint: '“Turning the key causes a rapid clicking sound, the dashboard lights flicker, or the engine cranks very slowly.”',
      likelyCause: 'Dead or degraded 12V battery cells, corroded battery terminals, failing alternator diode, or faulty starter motor.',
      ourSolution: 'Cold cranking amps (CCA) load test, parasitic battery drain test, and alternator voltage regulator verification.',
      recommendedService: 'Battery, Alternator & Electrical'
    }
  ];

  const currentSymptom = symptoms[activeSymptomIndex];

  return (
    <section id="symptoms" className="section-spacing" style={{ backgroundColor: '#0b101d' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>Vehicle Symptom Matcher</span>
          </div>
          <h2 className="section-title">
            Not Sure What's Wrong? <span className="highlight">Match Your Symptom</span>
          </h2>
          <p className="section-description">
            Cars give warning signs before major breakdowns occur. Select what you are experiencing below to see the most likely cause and recommended fix.
          </p>
        </div>

        {/* Interactive Layout: Left list of buttons, Right diagnostic card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch'
        }}>
          {/* Left Column: Symptom Selectors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {symptoms.map((symptom, idx) => {
              const Icon = symptom.icon;
              const isSelected = activeSymptomIndex === idx;

              return (
                <button
                  key={symptom.id}
                  onClick={() => setActiveSymptomIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.15rem 1.35rem',
                    borderRadius: '12px',
                    background: isSelected 
                      ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)' 
                      : 'rgba(15, 23, 42, 0.5)',
                    border: isSelected ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.07)',
                    color: '#ffffff',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 8px 24px rgba(245, 158, 11, 0.2)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      backgroundColor: isSelected ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isSelected ? '#f59e0b' : '#94a3b8'
                    }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <span style={{
                        display: 'block',
                        fontWeight: 700,
                        fontSize: '0.975rem',
                        color: isSelected ? '#ffffff' : '#cbd5e1'
                      }}>
                        {symptom.shortTitle}
                      </span>
                      <span style={{
                        display: 'inline-block',
                        fontSize: '0.725rem',
                        fontWeight: 600,
                        color: symptom.urgencyColor,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}>
                        Urgency: {symptom.urgency}
                      </span>
                    </div>
                  </div>

                  <ArrowRight size={18} color={isSelected ? '#f59e0b' : '#64748b'} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Diagnostic & Solution Card */}
          <div className="card-glass" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2.25rem',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            background: 'linear-gradient(135deg, rgba(19, 28, 46, 0.95) 0%, rgba(12, 17, 29, 0.98) 100%)'
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.25rem'
              }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  background: 'rgba(245, 158, 11, 0.15)',
                  color: '#f59e0b',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px'
                }}>
                  <ShieldAlert size={14} /> Diagnostic Insight
                </span>

                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: currentSymptom.urgencyColor
                }}>
                  ● {currentSymptom.urgency}
                </span>
              </div>

              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.25 }}>
                {currentSymptom.shortTitle}
              </h3>

              {/* What driver notices */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                borderLeft: '3px solid #64748b',
                padding: '0.85rem 1rem',
                borderRadius: '0 8px 8px 0',
                marginBottom: '1.25rem'
              }}>
                <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 700, marginBottom: '0.2rem' }}>
                  What you notice:
                </span>
                <p style={{ color: '#e2e8f0', fontSize: '0.9rem', fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
                  {currentSymptom.driverComplaint}
                </p>
              </div>

              {/* What is likely causing it */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', color: '#f59e0b', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                  Likely Cause:
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.925rem', lineHeight: 1.55 }}>
                  {currentSymptom.likelyCause}
                </p>
              </div>

              {/* How our team fixes it */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', color: '#34d399', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                  How {businessInfo.name} Solves It:
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.925rem', lineHeight: 1.55 }}>
                  {currentSymptom.ourSolution}
                </p>
              </div>
            </div>

            {/* Direct Action */}
            <div style={{
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>
                  Recommended Service
                </span>
                <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>
                  {currentSymptom.recommendedService}
                </strong>
              </div>

              <button
                onClick={() => openQuoteModal(currentSymptom.recommendedService)}
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.4rem' }}
              >
                <Calendar size={16} />
                <span>Get Free Diagnostic Quote</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
