// This file was renamed to BudgetManagement.jsx for URL-safe routing. Please use that file instead.
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import budgetHeroVideo from '../assets/Budget Management.mp4';
import b1 from '../assets/b1.jpeg';
import b2 from '../assets/b2.webp';
import b3 from '../assets/b3.jpeg';

const features = [
  'Expense Tracking & Categorization',
  'Budget Planning & Forecasting',
  'Cash Flow Management',
  'Financial Goal Setting',
  'Spending Analysis & Reports',
  'Budget Optimization Strategies',
];
const clients = [
  'Small Businesses',
  'Startups & Entrepreneurs',
  'Families & Individuals',
  'Nonprofits',
  'Financial Advisors',
  'Accounting Firms',
];
const benefits = [
  'Improved financial control',
  'Better cash flow visibility',
  'Reduced overspending',
  'Achieved financial goals',
  'Enhanced decision making',
  'Increased savings rates',
];
const faqs = [
  {
    q: 'What is Budget Management?',
    a: 'Budget management is the process of creating, monitoring, and adjusting financial plans to control spending, optimize cash flow, and achieve financial goals.'
  },
  {
    q: 'How often should I review my budget?',
    a: 'We recommend monthly budget reviews for most clients, with quarterly deep-dive analysis to ensure your budget aligns with changing financial goals.'
  },
  {
    q: 'Can you work with my existing financial software?',
    a: 'Yes, we integrate with most major accounting and financial management platforms to provide seamless budget management solutions.'
  },
  {
    q: 'Is budget management suitable for small businesses?',
    a: 'Absolutely! Small businesses benefit greatly from proper budget management to control costs, improve profitability, and plan for growth.'
  },
];

const BudgetManagement = () => {
  const getTheme = () => localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = React.useState(() => localStorage.getItem('theme') || 'light');
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100,
    });
    const handleThemeChange = () => setTheme(localStorage.getItem('theme') || 'light');
    window.addEventListener('theme-changed', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);
    window.addEventListener('focus', handleThemeChange);
    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
      window.removeEventListener('focus', handleThemeChange);
    };
  }, []);

  return (
    <section className={theme === 'dark' ? 'w-full p-0 m-0 bg-[#1E2A38] text-white' : 'w-full p-0 m-0 bg-white text-black'}>
      {/* 1. Hero + Brief Intro */}
      <div className="relative w-full h-screen mb-0">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          src={budgetHeroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-center text-center p-8">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Budget Management
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-orange-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Take control of your finances with our comprehensive budget management services. Our experts help you create, monitor, and optimize budgets to achieve your financial goals and improve cash flow.
          </motion.p>
        </div>
      </div>

      {/* 2. What This Service Includes */}
      <section className={theme === 'dark' ? 'py-16 bg-[#141B25]' : 'py-16 bg-[#fdf9f4]'}>
  <div className="max-w-6xl mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12"
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
        src={b1}
        alt="Budget Management Services"
        className="rounded-lg shadow-lg w-full max-h-80 object-cover"
      />
      <motion.ul
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="space-y-4 text-orange-500 text-lg"
      >
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3"
          >
            <span className="w-3 h-3 bg-orange-500 rounded-full inline-block"></span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  </div>
</section>


      {/* 3. Who It's For */}
 <section className={theme === 'dark' ? 'py-16 bg-[#1E2A38]' : 'py-16 bg-white'}>
  <div className="max-w-6xl mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-blue-100' : 'text-orange-500'}`}
    >
      Who It's For
    </motion.h2>
    
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Left: Content Paragraph */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <p className={theme === 'dark' ? 'text-lg text-blue-100 leading-relaxed' : 'text-lg text-orange-900 leading-relaxed'}>
          Our Budget Management service is designed for individuals and businesses who want to take control of their finances and achieve their financial goals. Whether you're a small business owner, startup founder, family, or individual, our solutions help you create sustainable budgets that work for your unique situation.
        </p>
        <p className={theme === 'dark' ? 'text-lg text-blue-100 leading-relaxed' : 'text-lg text-orange-900 leading-relaxed'}>
          We work closely with you to understand your financial objectives, develop realistic budgets, and provide ongoing support to ensure you stay on track and achieve your goals.
        </p>
      </motion.div>
      
      {/* Right: Cards Grid */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-3 gap-4 h-full"
      >
        {clients.map((c, i) => (
          <motion.div
            key={i}
            className={`rounded-xl px-6 py-6 shadow flex flex-col items-center justify-center text-center h-full min-h-[80px] transition-colors duration-300 ${
              theme === 'dark' 
                ? 'bg-[#23344a] border border-blue-900' 
                : 'bg-orange-100 border border-orange-300'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className={theme === 'dark' ? 'text-blue-100 font-semibold text-base' : 'text-orange-900 font-semibold text-base'}>
              {c}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</section>


      {/* 4. Benefits & Outcomes */}
      <div className="relative w-full h-[500px] md:h-screen mb-0 flex items-center justify-center">
        {/* Background Image */}
        <motion.img 
          src={b2} 
          alt="Budget Benefits Illustration" 
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
              Ready to Take Control of Your Finances?
            </motion.h2>
            <motion.p 
              className="mb-6 text-orange-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Book a free consultation and see how our budget management experts can help you achieve your financial goals.
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
              src={b3} 
              alt="Take Control of Your Finances" 
              className="rounded-xl shadow-lg object-cover max-h-64 w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BudgetManagement;
