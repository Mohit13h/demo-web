import React from 'react';
import { BusinessProvider } from './context/BusinessContext';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesGrid } from './components/ServicesGrid';
import { SymptomChecker } from './components/SymptomChecker';
import { AppointmentSection } from './components/AppointmentSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationHours } from './components/LocationHours';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { QuoteModal } from './components/QuoteModal';
import { DemoToolbar } from './components/DemoToolbar';

function MainLayout() {
  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Notification Strip */}
      <TopBar />

      {/* Primary Sticky Header */}
      <Header />

      {/* Main Conversion Flow */}
      <main style={{ flex: 1 }}>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <SymptomChecker />
        <AppointmentSection />
        <AboutSection />
        <ReviewsSection />
        <LocationHours />
        <EmergencyBanner />
      </main>

      {/* Localized Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Action Bar */}
      <MobileBottomBar />

      {/* Interactive Global Quote & Estimate Modal */}
      <QuoteModal />

      {/* Live Prospect Demo Switcher */}
      <DemoToolbar />
    </div>
  );
}

export default function App() {
  return (
    <BusinessProvider>
      <MainLayout />
    </BusinessProvider>
  );
}
