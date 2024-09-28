import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">JobQuest</h2>
          <p className="mt-4 text-gray-300">
            1234 Career Path Blvd, Suite 5678<br />
            Tech City, Innovation State, 98765
          </p>
          <p className="mt-2 text-gray-300">Phone: (123) 456-7890</p>
          <p className="mt-2 text-gray-300">Email: info@jobquest.com</p>
          <Link to="/contact" className="text-yellow-400 hover:underline mt-4 block">
            Contact Us
          </Link>
        </div>

{/*          
        <div className="w-full md:w-1/3 flex justify-center items-center">
  <img 
    src= '../assets/image.png'
    alt="JobQuest Logo"
    className="w-20 h-20 object-contain" // Adjust the size as needed
  />
</div> */}

        {/* Quote and Social Links */}
        <div className="text-center">
          <p className="text-lg font-medium">
            "Success starts with the right opportunity, and the journey begins
            with the right preparation."
          </p>
          <Link to="/about" className="text-yellow-400 hover:underline mt-4 block">
            Learn More About Us
          </Link>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-yellow-400">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-yellow-400">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-yellow-400">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} JobQuest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
