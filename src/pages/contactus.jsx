import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import contact1 from '../assets/contact1.jpg';
import contact2 from '../assets/contact2.jpg';
import contact3 from '../assets/contact3.jpg';
import contactusHeroVideo from '../assets/contactushero.mp4';
import faqImage from '../assets/faq.png';

const ContactUs = () => {
  // Fix: Use state here, not within JSX!
  const [contactSuccess, setContactSuccess] = useState(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Optional: Reset success after N seconds (UX improvement)
  // useEffect(() => {
  //   if (contactSuccess) {
  //     const timer = setTimeout(() => setContactSuccess(false), 4000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [contactSuccess]);

  // Theme state and sync with global/localStorage
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  useEffect(() => {
    const handleThemeChange = () => setTheme(localStorage.getItem('theme') || 'light');
    window.addEventListener('theme-changed', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);
    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  // Remove this effect, as it's now handled in the themeChange handler above

  // Color helpers for Home1 dark theme
  const bgMain = theme === 'dark' ? 'bg-[#1E2A38]' : 'bg-gray-50';
  const bgSection = theme === 'dark' ? 'bg-[#1E2A38]' : 'bg-[#f9f9f4]';
  const bgSectionAlt = theme === 'dark' ? 'bg-[#141B25]' : 'bg-[#fdf9f4]';
  const bgCard = theme === 'dark' ? 'bg-[#1E2A38]' : 'bg-white';
  const textMain = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textSub = theme === 'dark' ? 'text-gray-200' : 'text-gray-700';
  const textAccent = 'text-orange-500';

  return (
    <div className={`min-h-screen ${bgMain} transition-colors duration-300`}>
      {/* Hero Section */}
      <section className={`relative mb-0 h-screen md:h-screen md:py-20 flex flex-col items-center justify-center min-h-[60vh] overflow-hidden`}>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src={contactusHeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for clarity in both themes, very transparent to always show video */}
        <div className="absolute inset-0 z-10 bg-black bg-opacity-30"></div>
        <div className="relative z-20 text-center px-2 sm:px-4 flex flex-col items-center justify-center w-full h-full">
          <motion.h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg text-white"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            Expert Financial Guidance
          </motion.h1>
          <motion.p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed drop-shadow-md text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}>
            Connect with our certified accounting professionals for personalized financial solutions,
            tax planning, and business advisory services tailored to your success.
          </motion.p>
        </div>
      </section>

      {/* Meet Our Support Team */}
      <section className={`w-full ${bgSection} py-8 transition-colors duration-300`}
      style={{ backgroundColor: theme === 'dark' ? '#141B25' : '#fdf9f4' }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className={`text-2xl md:text-3xl font-bold ${textAccent} mb-8 text-center`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            Meet Our Support Team
          </motion.h2>
          <div className="grid lg:grid-cols-3  gap-8 w-full">
            {/* Card 1: Location */}
            <motion.div
              className={`${bgCard} rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 transition-colors duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}>
              <motion.img
                src={contact1}
                alt="Contact Location"
                className="w-full h-56 object-cover rounded-lg mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className={`font-semibold ${theme === 'dark' ? 'text-blue-200' : 'text-blue-900'} text-lg`}>Our Location</div>
              <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm mt-1`}>Hyderabad, Telangana, India</div>
            </motion.div>
            {/* Card 2: Mail */}
            <motion.div
              className={`${bgCard} rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 transition-colors duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              <motion.img
                src={contact2}
                alt="Contact Mail"
                className="w-full h-56 object-cover rounded-lg mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className={`font-semibold ${theme === 'dark' ? 'text-blue-200' : 'text-blue-900'} text-lg`}>Mail Us</div>
              <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm mt-1`}>stackly.in</div>
            </motion.div>
            {/* Card 3: Phone */}
            <motion.div
              className={`${bgCard} rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 transition-colors duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}>
              <motion.img
                src={contact3}
                alt="Contact Phone"
                className="w-full h-56 object-cover rounded-lg mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className={`font-semibold ${theme === 'dark' ? 'text-blue-200' : 'text-blue-900'} text-lg`}>Call Us</div>
              <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm mt-1`}>+91 93905 94407</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className={`py-10 md:py-20 ${bgMain} transition-colors duration-300`}
      style={{ backgroundColor: theme === 'dark' ? '#1E2A38' : '#fff' }}>
        <div className="container mx-auto px-2 sm:px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left Side */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <motion.div
                className="text-orange-500 font-semibold text-sm tracking-wider uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}>
                GET IN TOUCH
              </motion.div>
              <motion.h2
                className={`text-4xl lg:text-5xl font-bold leading-tight ${textMain}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}>
                Needs help? let's get in touch
              </motion.h2>
            </motion.div>
            {/* Right Side - Form */}
            <motion.div
              className={`${bgCard} rounded-2xl shadow-xl p-8 transition-colors duration-300`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}>
              <form
                className="space-y-6"
                onSubmit={e => {
                  e.preventDefault();
                  setContactSuccess(true);
                }}>
                {/* First Row - Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}>
                    <input
                      type="text"
                      placeholder="First Name"
                      className={`w-full px-4 py-4 border ${theme === 'dark' ? 'border-[#223366] bg-[#1E2A38] text-white placeholder-gray-300' : 'border-gray-200 text-gray-700 placeholder-gray-400'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className={`w-full px-4 py-4 border ${theme === 'dark' ? 'border-[#223366] bg-[#1E2A38] text-white placeholder-gray-300' : 'border-gray-200 text-gray-700 placeholder-gray-400'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
                    />
                  </motion.div>
                </div>
                {/* Second Row - Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}>
                    <input
                      type="email"
                      placeholder="Email"
                      className={`w-full px-4 py-4 border ${theme === 'dark' ? 'border-[#223366] bg-[#1E2A38] text-white placeholder-gray-300' : 'border-gray-200 text-gray-700 placeholder-gray-400'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className={`w-full px-4 py-4 border ${theme === 'dark' ? 'border-[#223366] bg-[#1E2A38] text-white placeholder-gray-300' : 'border-gray-200 text-gray-700 placeholder-gray-400'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
                    />
                  </motion.div>
                </div>
                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}>
                  <textarea
                    placeholder="Write A Message"
                    rows="6"
                    className={`w-full px-4 py-4 border ${theme === 'dark' ? 'border-[#223366] bg-[#1E2A38] text-white placeholder-gray-300' : 'border-gray-200 text-gray-700 placeholder-gray-400'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none`}
                  ></textarea>
                </motion.div>
                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}>
                  <motion.button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}>
                    Send Message
                  </motion.button>
                </motion.div>
                {/* Success message below form */}
                {contactSuccess && (
                  <div className="mt-6 text-green-600 font-semibold text-center animate-fade-in">
                    form submitted successfully. Thank you !
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Maps */}
      <section className={`w-full ${bgSectionAlt} mb-12 md:mb-24 px-0 py-6 md:py-8 transition-colors duration-300`}>
        <div className="container mx-auto w-full px-2 sm:px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            className="text-orange-500 font-semibold text-sm tracking-wider uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            LOCATION
          </motion.div>
          <motion.h2
            className={`text-4xl lg:text-5xl font-bold leading-tight ${textMain}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            How To Reach Our Location
          </motion.h2>
          <motion.div
            className={`${bgCard} rounded-2xl h-full w-full shadow-lg p-4 flex flex-col items-center transition-colors duration-300`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}>
            <iframe title="SF Map" src="https://www.google.com/maps?q=456+Market+St,+San+Francisco,+CA+94111&output=embed" className="w-full h-56 rounded-lg border-none"></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`w-full bg-white pb-20 mt-12`}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex lg:flex-col-2 gap-16 items-start">
            <motion.div
              className={`w-full lg:w-1/2 space-y-6`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <div>
                <motion.div
                  className={`${textAccent} font-semibold text-sm tracking-wider uppercase`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}>
                  FREQUENTLY ASKED QUESTIONS
                </motion.div>
                <motion.h2
                  className={`text-4xl lg:text-5xl font-bold leading-tight mt-2 ${textMain}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}>
                  Got Questions? We've Got Answers
                </motion.h2>
              </div>
              <motion.img
                src={faqImage}
                alt="FAQ Support"
                className="w-full h-auto rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2 space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}>
              {[
                {
                  question: "How do I get started with your accounting services?",
                  answer: "Getting started is simple! Contact us for a free consultation where we'll assess your financial needs and recommend the best service package for your business or personal requirements."
                },
                {
                  question: "What types of businesses do you work with?",
                  answer: "We serve businesses of all sizes, from startups and small businesses to large corporations. Our expertise spans various industries including retail, manufacturing, technology, healthcare, and professional services."
                },
                {
                  question: "Do you provide tax planning and preparation services?",
                  answer: "Yes! We offer comprehensive tax services including strategic tax planning, preparation of business and personal tax returns, tax compliance, and representation during audits."
                },
                {
                  question: "How quickly can you respond to urgent financial matters?",
                  answer: "We understand that financial matters can be time-sensitive. Our team typically responds to urgent inquiries within 2-4 hours during business hours, and we offer priority support for critical issues."
                },
                {
                  question: "What makes your accounting firm different?",
                  answer: "Our personalized approach, cutting-edge technology, and deep industry expertise set us apart. We don't just manage your books – we provide strategic insights to help your business grow and succeed."
                }
              ].map((faq, idx) => (
                <motion.details
                  key={idx}
                  className={`group rounded-lg p-6 transition-colors duration-200 ${theme === 'dark' ? 'bg-[#1E2A38] hover:bg-[#223366]' : 'bg-gray-50 hover:bg-gray-100'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}>
                  <summary className={`font-semibold cursor-pointer flex justify-between items-center text-lg ${textMain}`}>
                    {faq.question}
                    <span className="text-orange-500 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <p className={`mt-4 leading-relaxed ${textSub}`}>
                    {faq.answer}
                  </p>
                </motion.details>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className={`py-8 md:py-12 ${bgSectionAlt} transition-colors duration-300`}>
        <div className="container mx-auto px-2 sm:px-4 max-w-3xl text-center">
          <motion.h2
            className={`text-3xl font-semibold mb-4 ${textMain}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            Subscribe to Our Newsletter
          </motion.h2>
          <motion.p
            className={`mb-6 ${textSub}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}>
            Stay updated with the latest financial insights, expert tips, and exclusive offers.
          </motion.p>
          <motion.form
            className="flex flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            onSubmit={e => {
              e.preventDefault();
              setNewsletterSubscribed(true);
            }}>
            <motion.input
              type="email"
              placeholder="Enter your email"
              className={`flex-1 min-w-0 px-4 py-3 rounded-lg border ${theme === 'dark' ? 'border-[#223366] bg-[#1E2A38] text-white placeholder-gray-300' : 'border-gray-300 text-gray-700 placeholder-gray-400'} focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent`}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <motion.button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Subscribe
            </motion.button>
          </motion.form>
          {newsletterSubscribed && (
            <div className="mt-4 text-green-600 font-semibold text-center animate-fade-in">
              Subscribed!
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
