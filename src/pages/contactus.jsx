// src/components/ContactUs.jsx
import React from 'react';
import contact1 from '../assets/contact1.jpg';
import contact2 from '../assets/contact2.jpg';
import contact3 from '../assets/contact3.jpg';
import contactusHeroVideo from '../assets/contactushero.mp4';
import faqImage from '../assets/faq.png';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative mb-20 text-white h-screen py-20 flex flex-col items-center justify-center min-h-[60vh] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={contactusHeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        {/* Content */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
            Expert Financial Guidance
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-100 drop-shadow-md">
            Connect with our certified accounting professionals for personalized financial solutions,
            tax planning, and business advisory services tailored to your success.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 mt-20 py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-8 text-center">Meet Our Support Team</h2>
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[contact1, contact2, contact3].map((img, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4">
              <img src={img} alt={`Contact ${idx + 1}`} className="w-full h-56 object-cover rounded-lg mb-4" />
              <div className="font-semibold text-blue-900 text-lg">Support Specialist {idx + 1}</div>
              <div className="text-gray-600 text-sm mt-1">support{idx + 1}@finance.com</div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                GET IN TOUCH
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Needs help? let's get in touch
              </h2>
            </div>
            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form className="space-y-6">
                {/* First Row - Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                    />
                  </div>
                </div>
                {/* Second Row - Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                    />
                  </div>
                </div>
                {/* Message Field */}
                <div>
                  <textarea
                    placeholder="Write A Message"
                    rows="6"
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400 resize-none"
                  ></textarea>
                </div>
                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Location Maps */}
      <section className="container mx-auto mb-24 px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
          LOCATION
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          How To Reach Our Location
        </h2>
        <div className="bg-white rounded-2xl h-full w-full shadow-lg p-4 flex flex-col items-center">
          <iframe title="SF Map" src="https://www.google.com/maps?q=456+Market+St,+San+Francisco,+CA+94111&output=embed" className="w-full h-56 rounded-lg border-none"></iframe>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-row lg:flex-row gap-16 items-start">
            {/* Left Side - Heading + Image */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Heading */}
              <div>
                <div className="text-orange-500 font-semibold text-sm tracking-wider uppercase">
                  FREQUENTLY ASKED QUESTIONS
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mt-2">
                  Got Questions? We've Got Answers
                </h2>
              </div>
              {/* Image Below Heading */}
              <img
                src={faqImage}
                alt="FAQ Support"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            {/* Right Side - FAQ Content */}
            <div className="w-full lg:w-1/2 space-y-4">
              <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
                <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center text-lg">
                  How do I get started with your accounting services?
                  <span className="text-orange-500 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Getting started is simple! Contact us for a free consultation where we'll assess your financial needs and recommend the best service package for your business or personal requirements.
                </p>
              </details>
              <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
                <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center text-lg">
                  What types of businesses do you work with?
                  <span className="text-orange-500 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  We serve businesses of all sizes, from startups and small businesses to large corporations. Our expertise spans various industries including retail, manufacturing, technology, healthcare, and professional services.
                </p>
              </details>
              <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
                <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center text-lg">
                  Do you provide tax planning and preparation services?
                  <span className="text-orange-500 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Yes! We offer comprehensive tax services including strategic tax planning, preparation of business and personal tax returns, tax compliance, and representation during audits.
                </p>
              </details>
              <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
                <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center text-lg">
                  How quickly can you respond to urgent financial matters?
                  <span className="text-orange-500 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  We understand that financial matters can be time-sensitive. Our team typically responds to urgent inquiries within 2-4 hours during business hours, and we offer priority support for critical issues.
                </p>
              </details>
              <details className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
                <summary className="font-semibold text-gray-900 cursor-pointer flex justify-between items-center text-lg">
                  What makes your accounting firm different?
                  <span className="text-orange-500 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Our personalized approach, cutting-edge technology, and deep industry expertise set us apart. We don't just manage your books – we provide strategic insights to help your business grow and succeed.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-700 mb-6">
            Stay updated with the latest financial insights, expert tips, and exclusive offers.
          </p>
          <form className="flex flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 min-w-0 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;