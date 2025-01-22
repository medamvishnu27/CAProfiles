
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUsers, faClock, faCheck } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className="bg-gray-100 font-sans">
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center bg-gradient-to-r from-black to-[#2D3436] text-white text-center py-20">
            <h1 className="text-5xl font-bold mb-4">Find Expert Chartered Accountants Near You</h1>
            <p className="text-lg mb-6">Your one-stop platform for trusted financial guidance and accounting solutions.</p>
            <NavLink to="/account" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
              Find Now
            </NavLink>
          </section>
    
          {/* Features Section */}
          <div className="py-16 px-8 bg-gradient-to-r from-gray-800 to-gray-900">
            <h2 className="text-4xl font-extralight text-center mb-10 text-white">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="p-6 border rounded-lg bg-blue-50 shadow-md hover:shadow-lg transition-shadow">
                <FontAwesomeIcon icon={faCheck} className="text-6xl text-green-600 mb-4 "  />
                <h3 className="text-xl font-semibold  text-center">Verified Accountants</h3>
                <p>All accountants are certified and reviewed for trust and reliability.</p>
              </div>
              <div className="p-6 border rounded-lg bg-blue-50 shadow-md hover:shadow-lg transition-shadow">
                <FontAwesomeIcon icon={faSearch} className="text-6xl text-blue-600 mb-4" style={{marginLeft:"100px"}}   />
                <h3 className="text-xl font-semibold  text-center">Comprehensive Search</h3>
                <p>Easily find and filter accountants based on your specific needs.</p>
              </div>
              <div className="p-6 border rounded-lg bg-blue-50 shadow-md hover:shadow-lg transition-shadow">
                <FontAwesomeIcon icon={faUsers} className="text-6xl text-red-600 mb-4" style={{marginLeft:"100px"}}   />
                <h3 className="text-xl font-semibold  text-center">Detailed Profiles</h3>
                <p>Access complete information about each accountant.</p>
              </div>
              <div className="p-6 border rounded-lg bg-blue-50 shadow-md hover:shadow-lg transition-shadow">
                <FontAwesomeIcon icon={faClock} className="text-6xl mb-4"  style={{marginLeft:"100px"}}   />
                <h3 className="text-xl font-semibold text-center">24/7 Support</h3>
                <p>Get assistance anytime with our responsive support team.</p>
              </div>
            </div>
          </div>
    
          {/* Testimonials Section */}
          <div className="py-16 px-8 bg-gradient-to-r from-black to-[#2D3436]">
            <h2 className="text-4xl font-thin text-center mb-10 text-gray-100">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="p-6 border rounded-lg bg-blue-50 shadow-md hover:shadow-lg">
                <p className="italic text-gray-700">"This platform helped me find the right accountant for my startup quickly and efficiently!"</p>
                <h4 className="font-semibold mt-6">— John Doe</h4>
              </div>
              <div className="p-6 border rounded-lg bg-blue-50 shadow-md hover:shadow-lg transition-shadow">
                <p className="italic text-gray-700">"Highly recommend! The accountants I found here were professional and knowledgeable."</p>
                <h4 className="font-semibold mt-6">— Jane Smith</h4>
              </div>
              <div className="p-6 border rounded-lg bg-blue-50 shadow-md hover:shadow-lg transition-shadow">
                <p className="italic text-gray-700">"Fantastic user experience and excellent customer support. Truly top-notch."</p>
                <h4 className="font-semibold mt-6">— Sarah Lee</h4>
              </div>
            </div>
          </div>
    
          {/* Contact Section */}
          <div className="py-16 px-8 text-center">
            <h2 className="text-4xl font-semibold mb-4">Ready to Get Started?</h2>
            <NavLink to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
              Contact Us
            </NavLink>
          </div>
        </div>
      );
    };

export default Home









