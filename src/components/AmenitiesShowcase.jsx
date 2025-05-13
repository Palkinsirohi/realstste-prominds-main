import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AmenitiesShowcase() {
  const [currentPage, setCurrentPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use actual images from the reference
  const amenities = [
    {
      title: "pool deck",
      image: "https://hgtvhome.sndimg.com/content/dam/images/hgrm/fullset/2012/12/14/0/TS-92073051_above-ground-pool-deck_s4x3.jpg.rend.hgtvcom.1280.960.85.suffix/1405468164276.webp",
    },
    {
      title: "indoor games room",
      image: "https://bizzoppo.com/wp-content/uploads/2020/12/indoor-games-room-interior-design-ideas-3.jpg",
    },
    {
      title: "library",
      image: "https://cf.ltkcdn.net/garden/images/orig/331530-2121x1414-woman-meditating-in-garden.jpg",
    },
    {
      title: "Study Room",
      image: "https://images.squarespace-cdn.com/content/v1/5c3c4ca8365f02e708cc7c8c/98e2e333-3d1c-4e9e-bd6d-4be3cbb393e3/the+eden+bedroom2-min.jpg",
    },
    {
      title: "party hall",
      image: "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3312/x_0,y_250,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/jenneys-residency-coimbatore/fron_t_view_of_a_banquet_hall4_xl5gmo",
    },
    {
      title: "pool room",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlJTIwZ3ltfGVufDB8fDB8fHww",
    },
    {
      title: "kids play area",
      image: "https://media.vyaparify.com/vcards/blogs/96110/whg-play-area-1-1600.jpg",
    },
    {
      title: "yoga space",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3DCQWARxsJH7IsaJc0F4lsKNF6hKj4dtefw&s",
    },
    {
      title: "tennis court",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0frGxORXeM6Eyzc087F9GXbojkP-0oShUXQ&s",
    },
    {
      title: "jogging track",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM-7GKsk8R6xuZUpSIClAwQkBFDB8WlF3P3A&s",
    },
    {
      title: "meditation garden",
      image: "https://cf.ltkcdn.net/garden/images/orig/331530-2121x1414-woman-meditating-in-garden.jpg",
    },
    {
      title: "coffee lounge",
      image: "https://i.ytimg.com/vi/9MwupSu7vKQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDFj7FCgQBnbA6YmtWQOmgqF9Zp3g",
    },
  ];

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth < 1024;
  
  // Items per row configuration
  const itemsPerRow = isMobile ? 1 : 3;
  const rowsPerPage = 2;
  const itemsPerPage = itemsPerRow * rowsPerPage;
  const totalPages = Math.ceil(amenities.length / itemsPerPage);
  
  const next = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };
  
  // Get visible amenities for current page
  const getVisibleAmenities = () => {
    const startIdx = currentPage * itemsPerPage;
    const endIdx = Math.min(startIdx + itemsPerPage, amenities.length);
    return amenities.slice(startIdx, endIdx);
  };
  
  // Split visible amenities into rows
  const getRows = () => {
    const visible = getVisibleAmenities();
    const rows = [];
    
    for (let i = 0; i < rowsPerPage; i++) {
      const startIdx = i * itemsPerRow;
      const endIdx = Math.min(startIdx + itemsPerRow, visible.length);
      if (startIdx < visible.length) {
        rows.push(visible.slice(startIdx, endIdx));
      }
    }
    
    return rows;
  };

  return (
    <div className="bg-white py-6 px-4">
      {/* Main container - centered on all screen sizes up to 1024px */}
      <div className={`w-full ${isTablet ? 'mx-auto px-4' : 'md:w-3/4 pr-4 pl-4 md:pl-8'}`}>
        <h1 className="text-3xl font-bold text-center text-red-600 mb-2">
          Goel Ganga New Town Dhanori - Amenities
        </h1>
        
        <div className="flex justify-center mb-4">
          <hr className="w-16 border-t-2 border-red-600" />
        </div>
        
        <div className="relative">
          {/* Navigation buttons positioned outside the carousel for better visibility */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-5">
            <button 
              onClick={prev}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2 focus:outline-none shadow-md"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-5">
            <button 
              onClick={next}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2 focus:outline-none shadow-md"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Amenities content with proper spacing for arrows */}
          <div className="mx-12">
            {getRows().map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {row.map((amenity, index) => (
                  <div key={index} className="rounded-bl-3xl rounded-tr-3xl overflow-hidden shadow-md relative">
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full">
                      <div className="bg-white bg-opacity-80 px-4 py-2">
                        <p className="text-gray-800 text-sm font-medium">{amenity.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-6">
        <hr className="w-16 border-t border-gray-400"/>
</div>
        </div>
      </div>
    </div>
  );
}