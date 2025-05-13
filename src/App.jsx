import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components for Home Page
import Navbar from './components/Navbar';
import HeroImageSlider from './components/HeroImageSlider';
import PropertyInfo from './components/PropertyInfo';
import PropertyCard from './components/PropertyCard';
import AboutGoelGanga from './components/AboutGoelGanga';
import AmenitiesShowcase from './components/AmenitiesShowcase';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
// import ImageGallery from './components/ImageGallery';

// Pages
import PrivacyPolicy from './components/PrivacyPolicy';

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="relative w-full h-[500px]">
        {/* Image Carousel */}
        <HeroImageSlider />

        {/* Optional dark overlay for better readability */}
        <div className="absolute inset-0 " />

        {/* Property Info Card Positioned */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
          <PropertyInfo />
        </div>
      </div>
      <AboutGoelGanga />
      <PropertyCard />
      <AmenitiesShowcase />
      {/* <ImageGallery/> */}
      <Gallery />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;