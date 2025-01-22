import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUsers, faClock, faCheck } from '@fortawesome/free-solid-svg-icons';
import contacticon from "./src/ass./src/assets/contactus.webp";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 font-sans p-8" style={{paddingTop:"150px"}}>
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Left Column: Image */}
        <div className="flex justify-center">
          <img src={contacticon} alt="Contact Us" className="w-full h-auto rounded-lg shadow-md" />
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white p-24 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea className="w-full p-2 border rounded" rows="4" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-8">
        <h2 className="text-4xl font-semibold text-center mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 border rounded-lg bg-blue-50 shadow-md hover:shadow-lg transition-shadow">
            <FontAwesomeIcon icon={faSearch} className="text-9xl text-blue-600 mb-4" />
            <h3 className="font-semibold">Comprehensive Search</h3>
            <p>Easily find and filter accountants based on your specific needs..</p>
          </div>
          <div className="p-6 border rounded-lg bg-blue-50 shadow-md hover:shadow-lg transition-shadow">
             <FontAwesomeIcon icon={faUsers} className="text-9xl text-red-600 mb-4"   />
          <h3 className="text-xl font-semibold">Detailed Profiles</h3>
          <p>Access complete information about each accountant.</p>
          </div>
          <div className="p-6 border rounded-lg bg-blue-50 shadow-md hover:shadow-lg transition-shadow">
             <FontAwesomeIcon icon={faClock} className="text-9xl mb-4 " />
          <h3 className="text-xl font-semibold">24/7 Support</h3>
          <p>Get assistance anytime with our responsive support team.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
