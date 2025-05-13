import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);
  
  // Gallery images with your actual image paths
  const galleryImages = [
    '/gall1.webp',
    '/gall2.webp',
    '/gall3.webp',
    '/gall4.webp',
    '/gall5.webp',
    '/gall6.webp',
    '/gall7.webp'
  ];

  // Function to handle infinite loop scrolling
  const scrollToImage = (index) => {
    if (galleryRef.current) {
      // Get the normalized index (handles looping)
      const normalizedIndex = ((index % galleryImages.length) + galleryImages.length) % galleryImages.length;
      
      const scrollAmount = galleryRef.current.children[normalizedIndex].offsetLeft 
                          - galleryRef.current.offsetLeft;
      galleryRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    // Loop back to the last image if at the first image
    const newIndex = currentIndex <= 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToImage(newIndex);
  };

  const handleNext = () => {
    // Loop back to the first image if at the last image
    const newIndex = currentIndex >= galleryImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToImage(newIndex);
  };

  const handleScroll = () => {
    // No longer tracking arrow visibility, so this can be removed or left empty
  };

  useEffect(() => {
    const galleryElement = galleryRef.current;
    if (galleryElement) {
      galleryElement.addEventListener('scroll', handleScroll);
      return () => galleryElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Set up auto-rotate effect for the gallery
  useEffect(() => {
    const autoRotateInterval = setInterval(() => {
      // Use functional update to avoid stale closure
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex >= galleryImages.length - 1 ? 0 : prevIndex + 1;
        scrollToImage(newIndex);
        return newIndex;
      });
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(autoRotateInterval);
  }, []);

  return (
    <section id="gallery" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 lg:pr-80">
        {/* Section Title with Red Text and Underline */}
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-8">
          Goel Ganga New Town Dhanori - Gallery
          <div className="w-24 h-1 bg-gray-300 mx-auto mt-2"></div>
        </h2>

        {/* Gallery Container with Navigation Arrows */}
        <div className="relative">
          {/* Left Navigation Arrow - Outside the gallery */}
          <div className="glide_arrows flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-10 z-10">
            <button 
              onClick={handlePrev}
            className="glide_arrow glide_arrow--left flex items-center justify-center bg-gray-300 rounded-full py-3 shadow-lg focus:outline-none hover:bg-gray-400 transition"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Gallery Scroll Container */}
          <div 
            ref={galleryRef}
            className="flex overflow-x-auto gap-6 pb-4"
            onScroll={handleScroll}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="flex-none w-full sm:w-1/2 md:w-2/5 lg:w-1/3 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Image Card with Diagonal Curve */}
                <div className="relative overflow-hidden rounded-3xl shadow-lg">
                  {/* Image */}
                  <img 
                    src={image} 
                    alt={`Property Gallery Image ${index + 1}`} 
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Diagonal Curve Overlay - Bottom Left to Top Right (matches screenshot) */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg 
                      viewBox="0 0 100 100" 
                      preserveAspectRatio="none" 
                      className="w-full h-full"
                    >
                      <path 
                        d="M0,100 L100,0 L0,0 Z" 
                        fill="rgba(255,255,255,0.15)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow - Outside the gallery */}
          <div className="glide_arrows flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-10 z-10">
            <button 
              onClick={handleNext}
            className="glide_arrow glide_arrow--right flex items-center justify-center bg-gray-300 rounded-full py-2 shadow-lg focus:outline-none hover:bg-gray-400 transition "
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Custom scrollbar style for browsers that support it */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Gallery;