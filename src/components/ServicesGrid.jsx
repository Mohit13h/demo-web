import React from 'react';
import { 
  Disc, 
  Cpu, 
  Droplet, 
  Wind, 
  Settings, 
  Activity, 
  BatteryCharging, 
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';

export const ServicesGrid = () => {
  const { businessInfo, openQuoteModal } = useBusiness();

  const services = [
    {
      id: 'brakes',
      icon: Disc,
      name: 'Brake Repair & Rotor Service',
      problemStatement: 'Squeaking, grinding noises, vibrating steering wheel, or soft brake pedal when slowing down.',
      solution: 'Comprehensive pad replacement, rotor resurfacing/replacement, brake fluid flush, and hydraulic caliper testing for responsive stopping power.',
      features: ['Ceramic low-dust pads', 'Digital rotor runout check', 'Brake fluid health test']
    },
    {
      id: 'diagnostics',
      icon: Cpu,
      name: 'Computer Check-Engine Diagnostics',
      problemStatement: 'Check Engine light illuminated, engine stutter, sluggish acceleration, or strange misfire.',
      solution: 'OEM-level computerized diagnostic scans to pinpoint exact trouble codes (DTCs), faulty sensors, electrical grounds, and emission issues accurately.',
      features: ['Live data sensor stream', 'Pinpoint circuit tracing', 'Clear explanation of fault']
    },
    {
      id: 'oil-change',
      icon: Droplet,
      name: 'Full Synthetic Oil & Filter Service',
      problemStatement: 'Overdue mileage maintenance, dark dirty oil, or engine protection reminder message.',
      solution: 'Premium synthetic motor oil tailored to your vehicle manufacturer specs, new high-efficiency filter, fluid top-offs, and complete 32-point inspection.',
      features: ['OEM-grade synthetic oil', 'Fluid top-offs included', 'Complimentary 32-pt inspection']
    },
    {
      id: 'ac-climate',
      icon: Wind,
      name: 'A/C & Heating Climate Control',
      problemStatement: 'Warm air blowing when AC is on, weak airflow, musty cabin odor, or heater not warming up.',
      solution: 'System leak dye tests, compressor clutch diagnostics, cabin air filter replacement, and precision refrigerant recharge to factory PSI.',
      features: ['Refrigerant pressure test', 'Leak UV dye detection', 'Cabin filter check']
    },
    {
      id: 'suspension',
      icon: Activity,
      name: 'Steering, Shocks & Suspension',
      problemStatement: 'Bouncy rough ride over bumps, vehicle pulling to one side, or clunking sounds over turns.',
      solution: 'Inspection and replacement of worn shocks, struts, ball joints, control arms, tie rods, plus computer-guided 4-wheel alignment.',
      features: ['Laser wheel alignment check', 'Strut & shock inspection', 'Bushings & tie-rod safety']
    },
    {
      id: 'transmission',
      icon: Settings,
      name: 'Transmission & Drivetrain Service',
      problemStatement: 'Hesitation or rough slipping when shifting gears, transmission fluid leaks, or high RPMs.',
      solution: 'Transmission fluid exchanges, solenoid diagnostic testing, torque converter analysis, and electronic shifting calibration for smooth driving.',
      features: ['Fluid flush & exchange', 'Filter replacement', 'Shifting diagnostics']
    },
    {
      id: 'battery-electrical',
      icon: BatteryCharging,
      name: 'Battery, Alternator & Electrical',
      problemStatement: 'Slow cranking engine, battery warning light on dash, dim headlights, or dead battery after sitting.',
      solution: 'Full electrical system load test, alternator output verification, starter draw measurement, and heavy-duty battery replacement with terminal cleaning.',
      features: ['Cranks load capacity test', 'Alternator voltage test', 'Corrosion-free installation']
    },
    {
      id: 'preventive',
      icon: CalendarCheck,
      name: 'Factory Scheduled Maintenance (30k / 60k / 90k)',
      problemStatement: 'Approaching recommended factory service intervals and wanting to keep manufacturer warranty intact.',
      solution: 'Comprehensive manufacturer-recommended servicing including spark plugs, serpentine belts, coolant flushes, transmission service, and filter renewals.',
      features: ['Maintains warranty records', 'Manufacturer mileage checklists', 'Multi-point digital report']
    }
  ];

  return (
    <section id="services" className="section-spacing" style={{ backgroundColor: '#090d16' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span>Complete Automotive Solutions</span>
          </div>
          <h2 className="section-title">
            Expert Auto Care Focused on <span className="highlight">Solving Problems</span>
          </h2>
          <p className="section-description">
            From routine factory maintenance to complex engine and electrical diagnostics, our ASE-certified mechanics in {businessInfo.city} ensure your vehicle runs smoothly and safely.
          </p>
        </div>

        {/* Featured Brake Service Spotlight Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(22, 32, 51, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '16px',
          padding: 'clamp(1.25rem, 3.5vw, 2rem)',
          marginBottom: '2.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem',
          alignItems: 'center',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.4)'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#f59e0b',
              fontSize: '0.775rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.75rem'
            }}>
              <ShieldCheck size={16} />
              <span>Safety Spotlight • Certified Brake Service</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.25 }}>
              Is Your Car Squeaking or Taking Longer to Stop?
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Your brakes are your vehicle's most critical safety system. Our certified technicians perform comprehensive brake inspections with exact rotor thickness measurements, premium ceramic pads, and a full hydraulic check.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#e2e8f0', fontSize: '0.825rem' }}>
                <CheckCircle2 size={15} color="#10b981" /> Ceramic Low-Dust Pads
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#e2e8f0', fontSize: '0.825rem' }}>
                <CheckCircle2 size={15} color="#10b981" /> Rotor Resurfacing & Replacement
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#e2e8f0', fontSize: '0.825rem' }}>
                <CheckCircle2 size={15} color="#10b981" /> {businessInfo.warranty}
              </span>
            </div>
            <button
              onClick={() => openQuoteModal('Brake Repair & Rotor Service')}
              className="btn btn-primary mobile-btn-full"
            >
              <span>Book Brake Inspection & Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)', maxHeight: '240px' }}>
            <img
              src="/images/brakes.jpg"
              alt={`Certified Brake Repair at ${businessInfo.name}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Services Grid (8 Services) */}
        <div className="grid-3">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="card-glass"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.5rem'
                }}
              >
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(245, 158, 11, 0.12)',
                      border: '1px solid rgba(245, 158, 11, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#f59e0b'
                    }}>
                      <Icon size={20} />
                    </div>

                    <span style={{
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      color: '#34d399',
                      background: 'rgba(16, 185, 129, 0.12)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '6px'
                    }}>
                      Warranty Backed
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    lineHeight: 1.3
                  }}>
                    {svc.name}
                  </h3>

                  {/* Problem Notice */}
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderLeft: '3px solid #f59e0b',
                    padding: '0.55rem 0.75rem',
                    borderRadius: '0 6px 6px 0',
                    marginBottom: '0.875rem'
                  }}>
                    <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: 0, fontStyle: 'italic' }}>
                      <strong>Common sign:</strong> {svc.problemStatement}
                    </p>
                  </div>

                  {/* Solution summary */}
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#94a3b8',
                    lineHeight: 1.5,
                    marginBottom: '1rem'
                  }}>
                    {svc.solution}
                  </p>

                  {/* Key checklist items */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {svc.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#e2e8f0' }}>
                        <CheckCircle2 size={14} color="#f59e0b" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => openQuoteModal(svc.name)}
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    justifyContent: 'space-between',
                    padding: '0.65rem 0.85rem',
                    fontSize: '0.825rem'
                  }}
                >
                  <span>Request Quote for {svc.name.split('&')[0].trim()}</span>
                  <ArrowRight size={14} style={{ flexShrink: 0, marginLeft: '0.35rem' }} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

