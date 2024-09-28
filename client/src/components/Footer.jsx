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

        {/* Map Section */}
        <div className="w-full md:w-1/3">
          <iframe
            className="rounded-lg w-full h-56"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8582979150537!2d-122.41941508468291!3d37.77492927975806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581537a9f0df9%3A0x1f5dfb49f2f72c12!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1634140494851!5m2!1sen!2sin"
            loading="lazy"
            title="JobQuest Location"
          ></iframe>
        </div>

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
