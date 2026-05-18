import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import AlertBanner from '../components/sections/AlertBanner';
import TrailsSection from '../components/sections/TrailsSection';
import AccommodationSection from '../components/sections/AccommodationSection';
import ExperiencesSection from '../components/sections/ExperiencesSection';
import EventsSection from '../components/sections/EventsSection';
import MapSection from '../components/sections/MapSection';

const PublicSite: React.FC = () => {
  return (
    <div className="public-site">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <div className="container" style={{ marginTop: -60, position: 'relative', zIndex: 10 }}>
          <AlertBanner />
        </div>
        <TrailsSection />
        <MapSection />
        <AccommodationSection />
        <ExperiencesSection />
        <EventsSection />
      </main>
      <Footer />
      
      <style>{`
        .public-site {
          min-height: 100vh;
          background: var(--dark-bg);
          color: var(--white);
        }
      `}</style>
    </div>
  );
};

export default PublicSite;
