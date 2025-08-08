import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import bookkeepingHeroVideo from '../assets/Bookkeeping & Accounting.mp4';
import book1 from '../assets/book.jpg';
import book2 from '../assets/book2.jpg';
import book3 from '../assets/book3.jpg';

const features = [
  'Daily Transaction Recording',
  'Bank & Account Reconciliation',
  'Accounts Payable & Receivable Management',
  'Payroll Processing',
  'Financial Statement Preparation',
  'Expense Tracking & Categorization',
];
const clients = [
  'Small Businesses',
  'Entrepreneurs',
  'Freelancers',
  'Nonprofits',
  'Corporates',
  'Accounting Firms',
];
const benefits = [
  'Accurate and up-to-date records',
  'Stress-free tax season',
  'Improved cash flow management',
  'Time savings for business owners',
  'Better financial decision making',
  'Audit-ready documentation',
];
const faqs = [
  {
    q: 'What does bookkeeping include?',
    a: 'Bookkeeping includes recording daily transactions, reconciling accounts, managing invoices, and preparing financial statements.'
  },
  {
    q: 'How often do you update the books?',
    a: 'We update your books regularly—daily, weekly, or monthly—based on your business needs.'
  },
  {
    q: 'Can you work with my current accounting software?',
    a: 'Yes, we work with all major accounting platforms and can adapt to your preferred tools.'
  },
  {
    q: 'Is this service suitable for small businesses?',
    a: 'Absolutely! Our services are tailored for businesses of all sizes, including startups and small businesses.'
  },
];

const BookkeepingAccounting = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bookkeepingHeroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Bookkeeping & Accounting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-orange-300 max-w-3xl mx-auto"
          >
            Stay organized and compliant with our expert bookkeeping and accounting services. We handle your daily transactions, reconciliations, and reporting so you can focus on growing your business with confidence.
          </motion.p>
        </div>
      </section>

      {/* What This Service Includes */}
      <section className="py-16 bg-[#fdf9f4]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            What This Service Includes
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              src={book1}
              alt="Bookkeeping Services"
              className="rounded-lg shadow-lg w-full"
            />
            <motion.ul
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-lg"
                >
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Who It's For
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Our Bookkeeping & Accounting service is designed for businesses and professionals who want to ensure their finances are always accurate and up-to-date. Whether you're a small business owner, freelancer, or nonprofit, our solutions are tailored to your needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We work closely with you to understand your unique requirements, providing reliable support and clear financial records that empower you to make informed decisions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center"
                >
                  <span className="text-orange-800 font-semibold">{client}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits & Outcomes */}
      <div className="relative w-full h-[500px] md:h-screen mb-0 flex items-center justify-center">
              {/* Background Image */}
              <motion.img 
                src={book2} 
                alt="Benefits Illustration" 
                className="absolute top-0 left-0 w-full h-full object-cover object-center z-0" 
                style={{filter: 'brightness(0.7)'}}
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
              {/* Orange overlay for cards */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-200/60 to-orange-100/60 z-10"></div>
              {/* Content */}
              <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center p-8">
                <motion.h2 
                  className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Benefits & Outcomes
                </motion.h2>
                <div className="w-full max-w-5xl grid grid-cols-3 md:grid-cols-3 gap-8">
                  {benefits.slice(0,3).map((b, i) => (
                    <motion.div 
                      key={i} 
                      className="bg-orange-100 backdrop-blur-md border border-orange-300 rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-orange-500 font-semibold text-lg drop-shadow">{b}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="w-full max-w-5xl grid grid-cols-3 md:grid-cols-3 gap-8 mt-8">
                  {benefits.slice(3,6).map((b, i) => (
                    <motion.div 
                      key={i+3} 
                      className="bg-orange-100 backdrop-blur-md border border-orange-300 rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.6, delay: (i+3) * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-orange-500 font-semibold text-lg drop-shadow">{b}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
      
            {/* 5. FAQs About This Service */}
            <div className="container mx-auto px-4 py-10 max-w-4xl">
              <motion.h2 
                className="text-2xl font-bold text-center mt-12 text-orange-500 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                FAQs About This Service
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {faqs.map((faq, i) => (
                  <motion.div 
                    key={i} 
                    className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="font-semibold text-orange-700 mb-2 text-lg flex items-center gap-2">
                      <span className="inline-block w-3 h-3 bg-orange-500 rounded-full"></span>
                      {faq.q}
                    </div>
                    <div className="text-orange-900 text-base">{faq.a}</div>
                  </motion.div>
                ))}
              </div>
            </div>
      
            {/* 6. Get Started / Free Consultation CTA */}
            <div className="w-full bg-[#fdf9f4] py-10">
              <div className="container mx-auto px-4 flex flex-row md:flex-row items-center gap-10 max-w-6xl">
                {/* Left: Content */}
                <motion.div 
                  className="flex-1 flex flex-col items-start justify-center"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.h2 
                    className="text-2xl font-bold text-orange-500 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Ready to Transform Your Finances?
                  </motion.h2>
                  <motion.p 
                    className="mb-6 text-orange-900"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Book a free consultation and see how our FP&A experts can help you plan, analyze, and grow.
                  </motion.p>
                  <motion.button 
                    className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Free Consultation
                  </motion.button>
                </motion.div>
                {/* Right: Image */}
                <motion.div 
                  className="flex-1 flex justify-center mt-20 items-center"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.img 
                    src={book3} 
                    alt="Transform Your Finances" 
                    className="rounded-xl shadow-lg object-cover max-h-64 w-full md:w-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
            </div>
    </div>
  );
};

export default BookkeepingAccounting;