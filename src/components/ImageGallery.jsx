// import { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// export default function ImageGallery() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalSlides = 6; // Adjust based on how many total images you have
  
//   // Sample gallery images - replace with your actual images
//   const galleryImages = [
//     {
//       id: 1,
//       src: "/gall6.webp",
//       alt: "Apartment Complex Aerial View"
//     },
//     {
//       id: 2,
//       src: "/gall6.webp",
//       alt: "Modern Living Room Interior"
//     },
//     {
//       id: 3,
//       src: "/gall6.webp",
//       alt: "Building Entrance with Car"
//     },
//     {
//       id: 4,
//       src: "/gall6.webp",
//       alt: "Building Exterior"
//     },
//     {
//       id: 5,
//       src: "/gall6.webp",
//       alt: "Amenities Area"
//     },
//     {
//       id: 6,
//       src: "/gall6.webp",
//       alt: "Bedroom Interior"
//     }
//   ];

//   const visibleImages = 3; // Number of images visible at once
//   const maxIndex = Math.ceil(galleryImages.length / visibleImages) - 1;

//   // Handle next and previous buttons
//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
//   };

//   // Auto scroll effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const getVisibleImages = () => {
//     const startIdx = currentIndex * visibleImages;
//     const visibleItems = galleryImages.slice(startIdx, startIdx + visibleImages);
    
//     // If we don't have enough images to fill the view, add from the beginning
//     if (visibleItems.length < visibleImages) {
//       const remainingCount = visibleImages - visibleItems.length;
//       const additionalItems = galleryImages.slice(0, remainingCount);
//       return [...visibleItems, ...additionalItems];
//     }
    
//     return visibleItems;
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-8">
//       {/* Heading with underline styled exactly like the example */}
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-12">
//         Goel Ganga New Town Dhanori - Gallery
//         <div className="h-0.5 w-20 bg-gray-300 mx-auto mt-3"></div>
//       </h1>

//       {/* Gallery container with navigation */}
//       <div className="relative px-6 md:px-12">
//         {/* Left scroll button */}
//         <button 
//           onClick={handlePrevious}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-gray-300"
//           aria-label="Previous images"
//         >
//           <ChevronLeft size={28} className="text-gray-700" />
//         </button>

//         {/* Images container */}
//         <div className="flex justify-between gap-4 md:gap-6 overflow-hidden">
//           {getVisibleImages().map((image, index) => (
//             <div 
//               key={image.id} 
//               className="w-full transition-all duration-500 ease-in-out overflow-hidden rounded-xl"
//             >
//               <img 
//                 src={image.src} 
//                 alt={image.alt} 
//                 className="w-full h-64 object-cover rounded-xl shadow-md"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Right scroll button */}
//         <button 
//           onClick={handleNext}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-gray-300"
//           aria-label="Next images"
//         >
//           <ChevronRight size={28} className="text-gray-700" />
//         </button>
//       </div>
//     </div>
//   );
// }