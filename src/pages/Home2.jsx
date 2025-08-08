import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import home2hero from '../assets/home2hero.mp4';
import logo11 from '../assets/11.png';
import logo12 from '../assets/12.png';
import logo13 from '../assets/13.png';
import logo14 from '../assets/14.png';
import logo15 from '../assets/15.png';
import logo16 from '../assets/16.png';
import logo17 from '../assets/17.png';
import logo18 from '../assets/18.png';
import ceoImg from '../assets/ceo.jpg'; // Make sure this image exists in assets
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';

const partnerLogos = [logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18];

const Home2 = () => {
  // Theme sync (like Home1)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  useEffect(() => {
    const handleThemeChange = () => setTheme(localStorage.getItem('theme') || 'light');
    window.addEventListener('theme-changed', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);
    AOS.init({ once: true, duration: 1000, offset: 80 });
    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  // Section bg alternation
  const bgColors = theme === 'dark' ? ['#1E2A38', '#141B25'] : ['#ffffff', '#FDF9F4'];
  let sectionIndex = 0;

  const [openModal, setOpenModal] = useState(null); // 'emi' | 'tax' | 'retirement' | null

  // Simple EMI Calculator
  const [emiPrincipal, setEmiPrincipal] = useState('');
  const [emiRate, setEmiRate] = useState('');
  const [emiTenure, setEmiTenure] = useState('');
  const [emiResult, setEmiResult] = useState(null);
  const calculateEMI = () => {
    const P = parseFloat(emiPrincipal);
    const r = parseFloat(emiRate) / 12 / 100;
    const n = parseFloat(emiTenure) * 12;
    if (!P || !r || !n) return setEmiResult('Please fill all fields');
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmiResult(`Monthly EMI: ₹${emi.toFixed(2)}`);
  };

  // Simple Tax Calculator
  const [taxIncome, setTaxIncome] = useState('');
  const [taxResult, setTaxResult] = useState(null);
  const calculateTax = () => {
    const income = parseFloat(taxIncome);
    if (!income) return setTaxResult('Please enter income');
    let tax = 0;
    if (income <= 250000) tax = 0;
    else if (income <= 500000) tax = (income - 250000) * 0.05;
    else if (income <= 1000000) tax = 12500 + (income - 500000) * 0.2;
    else tax = 112500 + (income - 1000000) * 0.3;
    setTaxResult(`Estimated Tax: ₹${tax.toFixed(2)}`);
  };

  // Simple Retirement Planner
  const [retireAge, setRetireAge] = useState('');
  const [currentAge, setCurrentAge] = useState('');
  const [monthlySave, setMonthlySave] = useState('');
  const [retireResult, setRetireResult] = useState(null);
  const calculateRetirement = () => {
    const ca = parseInt(currentAge);
    const ra = parseInt(retireAge);
    const ms = parseFloat(monthlySave);
    if (!ca || !ra || !ms || ra <= ca) return setRetireResult('Please fill all fields correctly');
    const months = (ra - ca) * 12;
    const total = ms * months;
    setRetireResult(`Total Savings by Retirement: ₹${total.toLocaleString()}`);
  };

  // Helper to reset all calculator states
  const resetCalculators = () => {
    setEmiPrincipal('');
    setEmiRate('');
    setEmiTenure('');
    setEmiResult(null);
    setTaxIncome('');
    setTaxResult(null);
    setCurrentAge('');
    setRetireAge('');
    setMonthlySave('');
    setRetireResult(null);
  };

  // Smooth scroll to next section
  const handleScrollToNext = () => {
    const nextSection = document.getElementById('tools-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className={`relative h-screen flex items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-gray-900 text-white'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={home2hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center text-white max-w-3xl mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 whitespace-nowrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Finance & Accounting Solutions for Growth
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Unlock the full potential of your business with expert accounting, tax planning, and financial consulting. We deliver clarity, compliance, and growth for individuals and organizations alike.
          </motion.p>
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-colors duration-200 shadow-lg"
            onClick={handleScrollToNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </section>
      {/* Insights Section */}
      

      {/* CEO Message Section */}
      

      {/* Tool/Calculator Preview Section */}
      <section 
        id="tools-section"
        className={`py-16 ${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-gradient-to-r from-blue-50 to-purple-100 text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-delay="100"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold text-center mb-10 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore Our Financial Tools & Calculators
          </motion.h2>
          <div className="grid  lg:grid-cols-3 gap-8 w-full max-w-full">
            {/* Tool Card 1 */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition min-w-[280px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="bg-orange-100 rounded-full p-4 mb-4 flex items-center justify-center">
                <img src={img4} alt="EMI Calculator" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">EMI Calculator</h3>
              <p className="text-gray-600 mb-4 text-center">Quickly estimate your monthly loan payments and plan your finances with ease.</p>
              <motion.button 
                onClick={() => { resetCalculators(); setOpenModal('emi'); }} 
                className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Now
              </motion.button>
            </motion.div>
            {/* Tool Card 2 */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition min-w-[280px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="bg-orange-100 rounded-full p-4 mb-4 flex items-center justify-center">
                <img src={img5} alt="Tax Calculator" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Tax Calculator</h3>
              <p className="text-gray-600 mb-4 text-center">Calculate your tax liability and optimize your tax planning for the year.</p>
              <motion.button 
                onClick={() => { resetCalculators(); setOpenModal('tax'); }} 
                className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Now
              </motion.button>
            </motion.div>
            {/* Tool Card 3 */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition min-w-[280px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="bg-orange-100 rounded-full p-4 mb-4 flex items-center justify-center">
                <img src={img6} alt="Retirement Planner" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Retirement Planner</h3>
              <p className="text-gray-600 mb-4 text-center">Plan your retirement savings and visualize your future financial security.</p>
              <motion.button 
                onClick={() => { resetCalculators(); setOpenModal('retirement'); }} 
                className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      <section 
        className={`relative py-20 overflow-hidden ${theme === 'dark' ? 'bg-[#1E2A38] text-white' : ''}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-delay="200"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover h-[750px] bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${ceoImg})`,
            filter: 'brightness(1)'
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-orange bg-opacity-30"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div 
            className="max-w-2xl bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-black-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              A Message from Our CEO
            </motion.h2>
            <motion.blockquote 
              className="text-lg md:text-xl text-black-400  leading-relaxed mb-6 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              "At our core, we believe that financial success should be accessible to everyone. Our mission is to empower individuals and businesses with the tools, insights, and expertise they need to achieve their financial goals. With over a decade of experience in the industry, we're committed to delivering personalized solutions that drive real results."
            </motion.blockquote>
            <motion.div 
              className="text-black-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="text-lg font-semibold">John Smith</p>
              <p className="text-black-400">Chief Executive Officer</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partner Logos Slider */}
      <section 
        className={`py-10 ${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-white text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-delay="300"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className={`text-2xl md:text-3xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trusted by Leading Businesses & Financial Partners
          </motion.h2>
          <div className="overflow-hidden">
            <div className="flex items-center animate-scroll-x space-x-12">
              {partnerLogos.map((logo, idx) => (
                <motion.img
                  key={idx}
                  src={logo}
                  alt={`Partner ${idx + 11}`}
                  className="h-40 w-auto object-contain  hover:scale-110 transition duration-200"
                  style={{ minWidth: '200px' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Simple slider animation */}
        <style>{`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-x {
            animation: scroll-x 20s linear infinite;
            width: max-content;
          }
        `}</style>
      </section>


      {/* Industries We Serve Section */}
      <section 
        className={`py-16 ${theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-[#FDF9F4] text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-delay="400"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Industries We Serve
          </motion.h2>
          <motion.p 
            className="text-center text-gray-400 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We are proud to be driving a digital revolution across various industry verticals.
          </motion.p>
          <div className="grid grid-rows-2 grid-cols-5 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
            {/* Logistics */}
            <motion.div 
              className="flex flex-col items-center transition-transform duration-300 hover:scale-110 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="bg-orange-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
                <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 17v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><circle cx="12" cy="7" r="4"/><path d="M5 21h14"/></svg>
              </span>
              <div className="font-semibold text-center">Logistics</div>
            </motion.div>
            {/* Social Networking */}
            <motion.div 
              className="flex flex-col items-center transition-transform duration-300 hover:scale-110 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="bg-orange-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
                <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M2 20c0-4 8-6 10-6s10 2 10 6"/></svg>
              </span>
              <div className="font-semibold text-center">Social Networking</div>
            </motion.div>
            {/* Healthcare */}
            <motion.div 
              className="flex flex-col items-center transition-transform duration-300 hover:scale-110 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="bg-orange-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
                <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
              </span>
              <div className="font-semibold text-center">Healthcare</div>
            </motion.div>
            {/* Restaurant */}
            <motion.div 
              className="flex flex-col items-center transition-transform duration-300 hover:scale-110 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="bg-orange-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
                <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7v10M16 7v10M5 7h14M7 21h10"/></svg>
              </span>
              <div className="font-semibold text-center">Restaurant</div>
            </motion.div>
            {/* Wellness & Fitness */}
            <motion.div 
              className="flex flex-col items-center transition-transform duration-300 hover:scale-110 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="bg-orange-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
                <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              </span>
              <div className="font-semibold text-center">Wellness & Fitness</div>
            </motion.div>
            {/* Sports */}
            <motion.div 
              className="flex flex-col items-center transition-transform duration-300 hover:scale-110 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="bg-orange-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
                <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 17l-4-4-4 4"/><path d="M12 3v10"/></svg>
              </span>
              <div className="font-semibold text-center">Sports</div>
            </motion.div>
            {/* Ecommerce */}
            <motion.div 
              className="flex flex-col items-center transition-transform duration-300 hover:scale-110 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="bg-orange-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
                <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="10" rx="2"/><circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/></svg>
              </span>
              <div className="font-semibold text-center">Ecommerce</div>
            </motion.div>
            {/* Real Estate */}
            <motion.div 
              className="flex flex-col items-center transition-transform duration-300 hover:scale-110 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="bg-orange-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
                <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="7" y="10" width="10" height="8" rx="2"/><path d="M12 4v6"/><path d="M9 10V4h6v6"/></svg>
              </span>
              <div className="font-semibold text-center">Real Estate</div>
            </motion.div>
            {/* Education */}
            <motion.div 
              className="flex flex-col items-center transition-transform duration-300 hover:scale-110 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="bg-orange-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
                <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="2"/><path d="M12 8v8"/></svg>
              </span>
              <div className="font-semibold text-center">Education</div>
            </motion.div>
            {/* Travel */}
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="bg-orange-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
                <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5a8.38 8.38 0 0 1-1.9.5A8.5 8.5 0 1 1 12 3.5c.17 0 .34.01.5.02"/><path d="M12 8v4l3 3"/></svg>
              </span>
              <div className="font-semibold text-center">Travel</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calculator Modals */}
      {openModal === 'emi' && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-orange-50 rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button 
              onClick={() => setOpenModal(null)} 
              className="absolute top-3 right-3 text-orange-400 hover:text-red-500 text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              &times;
            </motion.button>
            <h3 className="text-2xl font-bold mb-4 text-orange-600">EMI Calculator</h3>
            <div className="space-y-3">
              <input type="number" placeholder="Principal (₹)" value={emiPrincipal} onChange={e => setEmiPrincipal(e.target.value)} className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
              <input type="number" placeholder="Annual Interest Rate (%)" value={emiRate} onChange={e => setEmiRate(e.target.value)} className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
              <input type="number" placeholder="Tenure (years)" value={emiTenure} onChange={e => setEmiTenure(e.target.value)} className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
              <motion.button 
                onClick={calculateEMI} 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Calculate
              </motion.button>
              {emiResult && <div className="text-center text-lg font-semibold text-orange-700 mt-2">{emiResult}</div>}
            </div>
          </motion.div>
        </motion.div>
      )}
      {openModal === 'tax' && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-orange-50 rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button 
              onClick={() => setOpenModal(null)} 
              className="absolute top-3 right-3 text-orange-400 hover:text-red-500 text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              &times;
            </motion.button>
            <h3 className="text-2xl font-bold mb-4 text-orange-600">Tax Calculator</h3>
            <div className="space-y-3">
              <input type="number" placeholder="Annual Income (₹)" value={taxIncome} onChange={e => setTaxIncome(e.target.value)} className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
              <button onClick={calculateTax} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg">Calculate</button>
              {taxResult && <div className="text-center text-lg font-semibold text-orange-700 mt-2">{taxResult}</div>}
            </div>
          </motion.div>
        </motion.div>
      )}
      {openModal === 'retirement' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-orange-50 rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
            <button onClick={() => setOpenModal(null)} className="absolute top-3 right-3 text-orange-400 hover:text-red-500 text-2xl">&times;</button>
            <h3 className="text-2xl font-bold mb-4 text-orange-600">Retirement Planner</h3>
            <div className="space-y-3">
              <input type="number" placeholder="Current Age" value={currentAge} onChange={e => setCurrentAge(e.target.value)} className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
              <input type="number" placeholder="Retirement Age" value={retireAge} onChange={e => setRetireAge(e.target.value)} className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
              <input type="number" placeholder="Monthly Savings (₹)" value={monthlySave} onChange={e => setMonthlySave(e.target.value)} className="w-full border border-orange-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400" />
              <button onClick={calculateRetirement} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg">Calculate</button>
              {retireResult && (
                <div className="text-center text-lg font-semibold text-orange-700 mt-2">{retireResult}</div>
              )}
            </div>
          </div>
        </div>
      )}
      <section 
        className={`py-16 ${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-white text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-delay="500"
      >
  <div className="max-w-6xl mx-auto px-4 flex flex-row items-start gap-12">
    {/* Left Content */}
    <div className="w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900  mb-4">Insights</h2>
      <p className="text-gray-600 text-justify dark:text-orange-400 mb-6">
      In today’s there rapidly changing financial landscape, staying informed is the key to long-term success. 
  Our insights go beyond surface-level tips — we provide in-depth guidance on tax strategies, 
  compliance updates, and smart money management tailored to businesses of all sizes. 
  From navigating complex regulations to identifying new growth opportunities, 
  our expert team delivers practical, easy-to-apply advice that helps you make confident financial decisions. 
  Whether you’re a startup looking to establish a strong foundation or an established business aiming to scale, 
  our articles, case studies, and professional perspectives will keep you one step ahead in achieving your goals.
      </p>
      <a
        href="/blog"
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow"
      >
        Read More Insights
      </a>
    </div>

    {/* Right 2x2 Cards */}
    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-orange-50 rounded-2xl shadow p-6 flex items-center justify-between min-h-[140px]">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Tax Planning Tips</h3>
          <p className="text-sm text-gray-500">Discover effective strategies to minimize your tax liability and maximize savings.</p>
        </div>
      </div>
      <div className="bg-orange-50 rounded-2xl shadow p-6 flex items-center justify-between min-h-[140px]">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">SME Growth Hacks</h3>
          <p className="text-sm text-gray-500">Unlock growth opportunities for small and medium enterprises with proven tactics.</p>
        </div>
      </div>
      <div className="bg-orange-50 rounded-2xl shadow p-6 flex items-center justify-between min-h-[140px]">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Compliance Essentials</h3>
          <p className="text-sm text-gray-500">Stay compliant with the latest regulations and avoid costly penalties for your business.</p>
        </div>
      </div>
      <div className="bg-orange-50 rounded-2xl shadow p-6 flex items-center justify-between min-h-[140px]">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Personal Finance 101</h3>
          <p className="text-sm text-gray-500">Master the basics of budgeting, saving, and investing for a secure financial future.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* AOS handles animation styles */}
    </>
  );
};

export default Home2;