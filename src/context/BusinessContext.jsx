import React, { createContext, useContext, useState, useEffect } from 'react';

export const PRESETS = {
  austin: {
    id: 'austin',
    name: 'Apex Auto Care & Diagnostics',
    city: 'Austin',
    state: 'TX',
    phone: '(512) 893-4120',
    phoneClean: '5128934120',
    address: '4820 South Congress Ave, Austin, TX 78745',
    email: 'service@apexautocare-austin.com',
    googleRating: '4.9',
    reviewCount: '348',
    warranty: '24-Month / 24,000-Mile Warranty',
    tagline: 'Reliable Vehicle Diagnostics & Auto Repair in Austin, TX',
    subtagline: 'Professional vehicle service, computer diagnostics, preventive maintenance, and honest repairs from your neighborhood ASE-certified team.',
  },
  denver: {
    id: 'denver',
    name: 'Summit Peak Car Care',
    city: 'Denver',
    state: 'CO',
    phone: '(303) 719-2044',
    phoneClean: '3037192044',
    address: '2150 E Colfax Ave, Denver, CO 80206',
    email: 'help@summitpeakcarcare.com',
    googleRating: '4.9',
    reviewCount: '412',
    warranty: '36-Month / 36,000-Mile Warranty',
    tagline: 'Trusted Mountain-Tested Auto Repair in Denver, CO',
    subtagline: 'Complete automotive diagnostics, brake systems, winterization, and transparent mechanical care for Colorado drivers.',
  },
  charlotte: {
    id: 'charlotte',
    name: 'Silverline Automotive & Brakes',
    city: 'Charlotte',
    state: 'NC',
    phone: '(704) 628-9310',
    phoneClean: '7046289310',
    address: '3410 South Blvd, Charlotte, NC 28209',
    email: 'info@silverlinecharlotte.com',
    googleRating: '4.8',
    reviewCount: '286',
    warranty: '24-Month / 24,000-Mile Warranty',
    tagline: 'Master Mechanic Auto Service in Charlotte, NC',
    subtagline: 'Precision engine diagnostics, transmission care, brake service, and factory scheduled maintenance with zero surprises.',
  }
};

const BusinessContext = createContext();

export const BusinessProvider = ({ children }) => {
  const [selectedPreset, setSelectedPreset] = useState('austin');
  const [businessInfo, setBusinessInfo] = useState(PRESETS.austin);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [initialQuoteService, setInitialQuoteService] = useState('');
  const [isPersonalizerOpen, setIsPersonalizerOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const applyPreset = (presetKey) => {
    if (PRESETS[presetKey]) {
      setSelectedPreset(presetKey);
      setBusinessInfo(PRESETS[presetKey]);
    }
  };

  const updateBusinessField = (field, value) => {
    setBusinessInfo((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === 'phone') {
        updated.phoneClean = value.replace(/\D/g, '');
      }
      return updated;
    });
  };

  const openQuoteModal = (service = '') => {
    setInitialQuoteService(service);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setInitialQuoteService('');
  };

  // Sync document title and meta description dynamically
  useEffect(() => {
    document.title = `${businessInfo.name} | Auto Repair in ${businessInfo.city}, ${businessInfo.state}`;
    const descEl = document.getElementById('seo-description');
    if (descEl) {
      descEl.setAttribute(
        'content',
        `Trusted local auto repair and vehicle diagnostics in ${businessInfo.city}, ${businessInfo.state}. ASE-certified mechanics, brake repair, oil changes, engine diagnostics, and same-day service. Call ${businessInfo.phone} for a free estimate.`
      );
    }
  }, [businessInfo]);

  return (
    <BusinessContext.Provider
      value={{
        businessInfo,
        updateBusinessField,
        applyPreset,
        selectedPreset,
        isQuoteModalOpen,
        openQuoteModal,
        closeQuoteModal,
        initialQuoteService,
        isPersonalizerOpen,
        setIsPersonalizerOpen,
        isMobileNavOpen,
        setIsMobileNavOpen
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusiness = () => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error('useBusiness must be used within a BusinessProvider');
  }
  return context;
};
