import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import qr from '../../public/qr.png';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 lg:pr-72">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center">
        <img src={logo} alt="Logo" className="mx-auto mb-4 h-16" />
        <img src={qr} alt="Scanner QR" className="mx-auto mb-4 h-24" />
        <p className="text-xs mb-2 text-gray-800">
          Agent MahaRERA No. – A51700000043<br />
          Project MahaRERA No. – P52100019275<br />
          ( <a href="https://maharera.maharashtra.gov.in/" className="underline hover:text-red-600" target="_blank" rel="noopener noreferrer">https://maharera.maharashtra.gov.in/</a> )
        </p>
        <p className="text-xs mb-2 text-justify text-gray-800">
          Disclaimer : The information provided on this website is intended exclusively for informational purposes and should not be construed as an offer of services. This site is managed by a RERA authorized affiliate partner / real estate agent (for multiple real estate developers) namely Propertypistol Realty Private Limited. The pricing information presented on this website is subject to alteration without advance notification, and the assurance of property availability cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with maharashtra Real Estate Regulatory Authority (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us. All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.
        </p>
        <p className="text-xs mb-2 text-gray-800">
          <Link to="/privacy-policy" className="text-indigo-600 hover:text-indigo-800">Privacy Policy</Link> | <Link to="/terms" className="text-indigo-600 hover:text-indigo-800">Terms & Conditions</Link>
        </p>
        
      </div>
      <div className="bg-red-800 text-white text-center text-xs py-3 mt-6">
        &copy; {new Date().getFullYear()} Propertypistol Realty Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
