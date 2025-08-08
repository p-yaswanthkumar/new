import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import auditHeroVideo from '../assets/Audit & Compliance.mp4';
import a1 from '../assets/a1.jpeg';
import a2 from '../assets/a2.webp';
import a3 from '../assets/a3.jpeg';

const features = [
  'Financial Statement Audits',
  'Internal Control Reviews',
  'Compliance Assessments',
  'Risk Management Audits',
  'Regulatory Compliance',
  'Process Optimization',
];
const clients = [
  'Public Companies',
  'Private Corporations',
  'Nonprofit Organizations',
  'Government Entities',
  'Financial Institutions',
  'Healthcare Providers',
];
const benefits = [
  'Enhanced financial transparency',
  'Improved internal controls',
  'Regulatory compliance assurance',
  'Risk mitigation strategies',
  'Operational efficiency gains',
  'Stakeholder confidence building',
];
const faqs = [
  {
    q: 'What is Audit & Compliance?',
    a: 'Audit & Compliance services ensure your organization meets regulatory requirements, maintains accurate financial records, and operates with proper internal controls to minimize risks and ensure transparency.'
  },
  {
    q: 'How often should audits be conducted?',
    a: 'Annual audits are typically required for most organizations, with quarterly reviews recommended for high-risk areas. We customize audit frequency based on your industry and regulatory requirements.'
  },
  {
    q: 'What types of compliance do you cover?',
    a: 'We cover financial reporting compliance, industry-specific regulations, internal control frameworks, and risk management standards to ensure comprehensive compliance coverage.'
  },
  {
    q: 'How do you ensure audit independence?',
    a: 'We maintain strict independence standards, follow professional audit guidelines, and provide objective assessments while maintaining confidentiality and professional ethics.'
  },
];

const AuditCompliance = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="w-full p-0 m-0">
      {/* 1. Hero + Brief Intro */}
      <div className="relative w-full h-screen mb-0">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          src={auditHeroVideo}
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
            Audit & Compliance
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-orange-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Ensure your organization's integrity and compliance with our comprehensive audit and compliance services. Our expert auditors help you maintain transparency, meet regulatory requirements, and build stakeholder confidence.
          </motion.p>
        </div>
      </div>

      {/* 2. What This Service Includes */}
      <section className="py-16 bg-[#fdf9f4]">
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
        src={a1}
        alt="Audit & Compliance Services"
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
    <div className="container mx-auto px-4 py-10 max-w-5xl">
  <motion.h2
    className="text-2xl font-bold text-orange-500 text-center mt-12 mb-8"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    Who It's For
  </motion.h2>
  <div className="flex flex-col md:flex-row gap-8 items-start">
    {/* Left: Content Paragraph */}
    <motion.div
      className="flex-1 flex flex-col gap-4 justify-center"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.p
        className="text-lg text-orange-900 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Our Audit & Compliance service is designed for organizations that need to ensure regulatory compliance, maintain financial transparency, and build stakeholder trust. Whether you're a public company, private corporation, or nonprofit, our solutions help you navigate complex regulatory requirements.
      </motion.p>
      <motion.p
        className="text-lg text-orange-900 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        We work closely with you to understand your industry requirements, assess compliance gaps, and implement robust audit procedures that ensure your organization operates with integrity and meets all regulatory standards.
      </motion.p>
    </motion.div>
    {/* Right: Cards */}
    <motion.div
      className="flex-1 flex flex-col mb-12 justify-center"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full">
        {clients.map((c, i) => (
          <motion.div
            key={i}
            className="bg-orange-100 border border-orange-300 rounded-xl px-6 py-6 shadow flex flex-col items-center justify-center text-center h-full min-h-[80px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-900 font-semibold text-base">{c}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</div>


      {/* 4. Benefits & Outcomes */}
      <div className="relative w-full h-[500px] md:h-screen mb-0 flex items-center justify-center">
        {/* Background Image */}
        <motion.img 
          src={a2} 
          alt="Audit Benefits Illustration" 
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
              Ready to Ensure Your Compliance?
            </motion.h2>
            <motion.p 
              className="mb-6 text-orange-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Book a free consultation and see how our audit and compliance experts can help you maintain regulatory standards and build stakeholder confidence.
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
              src={a3} 
              alt="Ensure Your Compliance" 
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

export default AuditCompliance;