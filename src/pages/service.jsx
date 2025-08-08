import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import servicevideo from '../assets/servicehero.mp4';
import fpImg from '../assets/Financial Planning & Analysis.jpg';
import bookImg from '../assets/Bookkeeping & Accounting.jpg';
import taxImg from '../assets/Tax Preparation & Filing.jpg';
import budgetImg from '../assets/budget.jpg';
import investImg from '../assets/Investment Advisory.jpg';
import auditImg from '../assets/Audit & Compliance.jpg';

const categories = ['Consulting', 'Planning', 'Analysis', 'Support', 'Education'];
const comparisonRows = [
  ['Personalized Advice', 'Yes', 'Limited'],
  ['24/7 Support', 'Yes', 'No'],
  ['Transparent Fees', 'Yes', 'No'],
  ['Certified Experts', 'Yes', 'Sometimes'],
  ['Comprehensive Reports', 'Yes', 'No'],
];
const workflowSteps = [
  { title: 'Contact Us', desc: 'Reach out via our website or phone to discuss your needs.' },
  { title: 'Initial Consultation', desc: 'We assess your situation and goals in a free session.' },
  { title: 'Proposal & Agreement', desc: 'Receive a tailored plan and transparent pricing.' },
  { title: 'Implementation', desc: 'Our experts execute the plan, keeping you informed at every step.' },
  { title: 'Ongoing Support', desc: 'We provide continuous monitoring, updates, and support.' },
];
const challenges = [
  'Confusing financial regulations and compliance requirements',
  'Lack of personalized financial planning',
  'Unclear investment strategies and risk management',
  'Difficulty tracking expenses and budgeting',
  'Limited access to expert advice and support',
];

const Service = () => {
  // Theme sync (like Home1)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  useEffect(() => {
    const handleThemeChange = () => setTheme(localStorage.getItem('theme') || 'light');
    window.addEventListener('theme-changed', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100,
    });
    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  // Section bg alternation
  const bgColors = theme === 'dark' ? ['#1E2A38', '#141B25'] : ['#ffffff', '#FDF9F4'];
  let sectionIndex = 0;

  return (
    <section className={`w-full p-0 m-0 ${theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-[#FDF9F4] text-black'}`}>
      {/* 1. Hero + Brief Intro */}
      <div className="relative w-full h-screen mb-0" data-aos="fade-in" data-aos-duration="1500">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          src={servicevideo}
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
            Expert Financial Services
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Unlock growth, efficiency, and peace of mind with our tailored financial solutions for businesses of all sizes.<br />
            From strategic consulting and hands-on analysis to ongoing support, our team empowers you to make smarter decisions, streamline operations, and stay ahead in a rapidly changing financial landscape. Experience the difference of expert guidance, transparent processes, and a partnership built for your long-term success.
          </motion.p>
        </div>
      </div>

      {/* Our Services Section - Alternating Image/Content */}
      <div 
        className={`w-full py-16 ${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-[#FDF9F4] text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-duration="1200"
      >
  <div className="container mx-auto px-4 max-w-5xl">
    <motion.h2 
      className="text-3xl font-bold text-center text-orange-500 mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      Our Services
    </motion.h2>

    {/* 1 */}
    <motion.div 
      className="grid lg:grid-cols-2 gap-10 items-center mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.img 
        src={fpImg} 
        alt="Financial Planning & Analysis" 
        className="w-full max-h-74 rounded-xl shadow-lg object-cover"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className=""
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-orange-600 mb-4">Financial Planning & Analysis</h3>
        <p className="text-white dark:text-orange text-lg mb-2">Strategic budgeting, forecasting, and scenario analysis to help you make informed decisions and drive business growth. Our FP&A experts provide actionable insights, monitor KPIs, and ensure your financial plans align with your long-term goals.</p>
        <p className="text-white dark:text-orange text text-lg mb-2">We work closely with your leadership team to develop robust financial models, identify growth opportunities, and mitigate risks before they impact your bottom line. Our approach combines advanced analytics with real-world business experience, giving you a clear roadmap for sustainable success.</p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="/financial-planning-analysis" className="mt-2 px-4 py-1 text-sm bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition inline-block">
            Read More
          </a>
        </motion.button>
      </motion.div>
    </motion.div>

    {/* 2 - reversed order */}
    <motion.div 
      className="grid lg:grid-cols-2 gap-10 items-center mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* For reverse layout: place text first on md, image second */}
      <motion.div
        className="order-2 md:order-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-orange-600 mb-4">Bookkeeping & Accounting</h3>
        <p className="text-white dark:text-orange text-lg mb-2">Accurate, timely bookkeeping and accounting services to keep your records organized and compliant. We handle everything from daily transactions to monthly reconciliations, so you can focus on running your business with confidence.</p>
        <p className="text-white dark:text-orange text-lg mb-2">Our team leverages the latest accounting software and best practices to ensure your financial data is always up-to-date and audit-ready. We provide detailed financial statements, manage accounts payable/receivable, and offer ongoing support for all your accounting needs.</p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="/Bookkeeping & Accounting" className="mt-2 px-4 py-1 text-sm bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition inline-block">
            Read More
          </a>
        </motion.button>
      </motion.div>
      <motion.img
        className="order-1 md:order-2 w-full max-h-74 rounded-xl shadow-lg object-cover"
        src={bookImg}
        alt="Bookkeeping & Accounting"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      />
    </motion.div>

    {/* 3 */}
    <motion.div 
      className="grid lg:grid-cols-2 gap-10 items-center mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.img 
        src={taxImg} 
        alt="Tax Preparation & Filing" 
        className="w-full max-h-74 rounded-xl shadow-lg object-cover"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-orange-600 mb-4">Tax Preparation & Filing</h3>
        <p className="text-white dark:text-orange text-lg mb-2">Comprehensive tax planning, preparation, and filing for businesses and individuals. We maximize deductions, ensure compliance, and minimize your tax liability, keeping you up-to-date with the latest regulations.</p>
        <p className="text-white dark:text-orange text-lg mb-2">Our tax experts stay current with changing tax laws and leverage technology to streamline the filing process. We handle federal, state, and local taxes, and provide proactive advice to help you plan for future obligations and avoid costly penalties.</p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="/Tax Preparation & Filing" className="mt-2 px-4 py-1 text-sm bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition inline-block">
            Read More
          </a>
        </motion.button>
      </motion.div>
    </motion.div>

    {/* 4 - reversed */}
    <motion.div 
      className="grid lg:grid-cols-2 gap-10 items-center mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="order-2 md:order-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-orange-600 mb-4">Budget Management</h3>
        <p className="text-white dark:text-orange text-lg mb-2">Effective budget creation, monitoring, and adjustment to help you control costs and achieve your financial targets. Our team works with you to set realistic budgets and track performance throughout the year.</p>
        <p className="text-white dark:text-orange text-lg mb-2">We analyze historical data, forecast future trends, and provide actionable recommendations to optimize your spending. Our approach ensures you have the financial discipline and flexibility to adapt to changing business conditions.</p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="/Budget Management" className="mt-2 px-4 py-1 text-sm bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition inline-block">
            Read More
          </a>
        </motion.button>
      </motion.div>
      <motion.img 
        className="order-1 md:order-2 w-full max-h-74 rounded-xl shadow-lg object-cover"
        src={budgetImg} 
        alt="Budget Management" 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      />
    </motion.div>

    {/* 5 */}
    <motion.div 
      className="grid lg:grid-cols-2 gap-10 items-center mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.img 
        src={investImg} 
        alt="Investment Advisory" 
        className="w-full max-h-74 rounded-xl shadow-lg object-cover"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-orange-600 mb-4">Investment Advisory</h3>
        <p className="text-white dark:text-orange text-lg mb-2">Personalized investment strategies and portfolio management to grow and protect your wealth. We help you navigate market opportunities, assess risk, and make informed investment decisions for the future.</p>
        <p className="text-white dark:text-orange text-lg mb-2">Our advisors work with you to define your financial goals, risk tolerance, and time horizon, building a diversified portfolio that aligns with your objectives. We monitor market trends, rebalance portfolios, and provide regular performance updates.</p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="/Investment Advisory" className="mt-2 px-4 py-1 text-sm bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition inline-block">
            Read More
          </a>
        </motion.button>
      </motion.div>
    </motion.div>

    {/* 6 - reversed */}
    <motion.div 
      className="grid lg:grid-cols-2 gap-10 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="order-2 md:order-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-orange-600 mb-4">Audit & Compliance</h3>
        <p className="text-white dark:text-orange text-lg mb-2">Thorough audit and compliance services to ensure your business meets regulatory standards and industry best practices. We identify risks, recommend improvements, and help you maintain transparency and trust.</p>
        <p className="text-white dark:text-orange text-lg mb-2">Our experienced auditors conduct detailed reviews of your financial records, internal controls, and operational processes. We help you prepare for external audits, address compliance gaps, and implement best practices for ongoing risk management.</p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="/Audit & Compliance" className="mt-2 px-4 py-1 text-sm bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition inline-block">
            Read More
          </a>
        </motion.button>
      </motion.div>
      <motion.img 
        className="order-1 md:order-2 w-full max-h-74 rounded-xl shadow-lg object-cover"
        src={auditImg} 
        alt="Audit & Compliance" 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      />
    </motion.div>

  </div>
</div>

      {/* 3. Comparison Grid (Features Only) */}
      <div 
        className={`w-full mt-20 py-10 ${theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-[#FDF9F4] text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-duration="1200"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-orange-500 mt-10 mb-6" data-aos="fade-up" data-aos-delay="200">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <motion.table 
              className={`w-full rounded-xl shadow-lg ${theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-white text-black'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <thead className={theme === 'dark' ? 'bg-[#23344a]' : 'bg-orange-100'}>
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold">Our Service</th>
                  <th className="px-4 py-3 text-left font-semibold">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <motion.tr 
                    key={i} 
                    className={`border-b last:border-b-0 ${theme === 'dark' ? 'border-[#23344a]' : ''}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                  >
                    <td className={`px-4 py-3 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{row[0]}</td>
                    <td className={`px-4 py-3 font-semibold ${theme === 'dark' ? 'text-green-300' : 'text-green-700'}`}>{row[1]}</td>
                    <td className={`px-4 py-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{row[2]}</td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>
      </div>
      <div 
        className={`w-full mt-20 py-10 ${theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-[#FDF9F4] text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-duration="1200"
      >
        <div className="container mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left Side: Heading and Description */}
            <div className="mb-6 md:mb-0" data-aos="slide-right" data-aos-delay="300">
              <h2 className="text-2xl font-bold mt-20 text-orange-500 mb-4">Top Challenges We Solve</h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-blue-100' : 'text-gray-700'}`}>We help you overcome the most common and complex financial obstacles faced by businesses and individuals. Our team brings deep industry knowledge and a proactive approach to every engagement, ensuring you receive practical solutions that deliver measurable results. Whether you are struggling with regulatory compliance, seeking to optimize your financial planning, or need guidance on investment strategies, we tailor our services to your unique needs. By partnering with us, you gain access to expert advice, innovative tools, and ongoing support that empower you to make confident decisions, streamline operations, and achieve your long-term goals. Let us help you turn financial challenges into opportunities for growth and success.</p>
            </div>
            {/* Right Side: Cards */}
            <div className="mt-20 mb-20 grid grid-cols-1 gap-4" data-aos="slide-left" data-aos-delay="400">
              {challenges.map((c, i) => (
                <motion.div 
                  key={i} 
                  className={`rounded-xl shadow-md p-5 border-l-4 border-orange-400 flex items-start ${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-white text-black'}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-orange-500 text-xl mr-3 mt-1">•</span>
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>{c}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* 4. Workflow Process (Step-by-step as Cards) */}
      <div 
        className={`w-full py-10 ${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-[#FDF9F4] text-black'}`}
        style={{ backgroundColor: bgColors[sectionIndex++ % 2] }}
        data-aos="fade-up" data-aos-duration="1200"
      >
        <div className="container mx-auto px-4 w-full">
          <h2 className="text-2xl font-bold text-center text-orange-500 mt-20 mb-8" data-aos="fade-up" data-aos-delay="200">How It Works</h2>
          <div className="grid lg:grid-2 gap-8">
            {workflowSteps.map((step, i) => (
              <motion.div 
                key={i} 
                className={`rounded-xl shadow-md p-6 flex flex-col items-start border-t-4 border-orange-400 relative ${theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-white text-black'}`}
                data-aos="fade-up" 
                data-aos-delay={300 + (i * 100)}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -top-5 left-5 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md">{i+1}</div>
                <h3 className={`text-xl font-semibold mb-2 mt-6 ${theme === 'dark' ? 'text-blue-200' : 'text-blue-900'}`}>{step.title}</h3>
                <p className={`text-base ${theme === 'dark' ? 'text-blue-100' : 'text-gray-700'}`}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Top Challenges We Solve */}
      

      {/* 6. Start Free Evaluation CTA (Styled like Home1) */}
      <section 
        className="relative py-16 flex items-center justify-center overflow-hidden"
        style={{
          backgroundColor: theme === 'dark' ? '#1E2A38' : '#fff'
        }}
      >
        <div 
          className="relative z-10 max-w-3xl mx-auto text-center px-6"
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          data-aos-once="false"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4`} style={{color: theme === 'dark' ? 'white' : '#1F2937'}}>
            Ready to Transform Your Finances?
          </h2>
          <p className="text-lg mb-8" style={{color: theme === 'dark' ? '#BBF7D0' : '#4B5563'}}>
            Partner with us for expert financial guidance, innovative solutions, and a team that cares about your success. Take the next step toward financial clarity and growth today.
          </p>
          <a 
            href="/contactus" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-lg text-lg shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Get Your Free Consultation
          </a>
        </div>
      </section>
    </section>
  );
};

export default Service;