

import React from 'react';
import fpVideo from '../assets/Financial Planning & Analysis.mp4';
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpg';

const features = [
  'Budgeting & Forecasting',
  'Financial Modeling',
  'Variance Analysis',
  'KPI Tracking & Reporting',
  'Scenario Planning',
  'Cash Flow Management',
];
const clients = [
  'Startups & Founders',
  'Small & Medium Businesses',
  'Enterprises',
  'Nonprofits',
  'Finance Teams',
  'Consultants & Advisors',
];
const benefits = [
  'Data-driven decision making',
  'Improved cash flow visibility',
  'Strategic resource allocation',
  'Early risk identification properties',
  'Peace of mind for leadership properties',
  'Enhanced forecasting accuracy',
];
const faqs = [
  {
    q: 'What is Financial Planning & Analysis (FP&A)?',
    a: 'FP&A is a set of activities that support budgeting, forecasting, and analysis to help organizations make informed financial decisions.'
  },
  {
    q: 'How often should we update our financial plan?',
    a: 'Best practice is to review and update your plan quarterly, but it can be tailored to your business needs.'
  },
  {
    q: 'Can you work with our existing accounting software?',
    a: 'Yes, we integrate with most major accounting and ERP platforms.'
  },
  {
    q: 'Is this service suitable for startups?',
    a: 'Absolutely! Startups benefit from early financial discipline and scenario planning.'
  },
];

const FinancialPlanningAnalysis = () => (
  <section className="w-full p-0 m-0">
    {/* 1. Hero + Brief Intro */}
    <div className="relative w-full h-screen mb-0">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
        src={fpVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-4">Financial Planning & Analysis</h1>
        <p className="text-lg md:text-xl text-orange-400
        00 max-w-2xl mx-auto">
          Unlock the power of data-driven financial strategies. Our FP&A service delivers expert forecasting, scenario planning, and actionable insights to help you make smarter business decisions and achieve sustainable growth.
        </p>
      </div>
    </div>

    {/* 2. What This Service Includes */}
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <h2 className="text-2xl font-bold text-orange-500 text-center mt-12 mb-12">What This Service Includes</h2>
      <div className="flex flex-row md:flex-col items-center gap-10">
        <img src={f1} alt="Financial Planning Illustration" className="w-full md:w-1/2 max-h-80  max-w-100 rounded-xl shadow-lg object-cover mb-6 md:mb-0" />
        <ul className="md:w-1/2 grid grid-cols-1 gap-4 text-orange-500 text-lg">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-orange-500 rounded-full"></span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* 3. Who It's For */}
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <h2 className="text-2xl font-bold text-orange-500  text-center mt-12 mb-8">Who It's For</h2>
      <div className="flex flex-row md:flex-row gap-8 items-start">
        {/* Left: Content Paragraph */}
        <div className="flex-1 flex flex-col gap-4 justify-center">
          <p className="text-lg text-orange-900 leading-relaxed">
            Our Financial Planning & Analysis service is designed for a wide range of organizations and leaders who want to make smarter, data-driven decisions. Whether you're a startup founder, a growing business, a nonprofit, or an established enterprise, our solutions are tailored to help you gain clarity, control, and confidence in your financial future.
          </p>
          <p className="text-lg text-orange-900 leading-relaxed">
            We partner closely with your team to understand your unique goals and challenges, delivering actionable insights and robust financial models that empower you to plan for growth.
          </p>
        </div>
        {/* Right: Cards */}
        <div className="flex-1 flex flex-col mb-12 justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
            {clients.map((c, i) => (
              <div key={i} className="bg-orange-100 border border-orange-300 rounded-xl px-6 py-6 shadow flex flex-col items-center justify-center text-center h-full min-h-[80px]">
                <span className="text-orange-900 font-semibold text-base">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* 4. Benefits & Outcomes */}
    <div className="relative w-full h-[500px] md:h-screen mb-0 flex items-center justify-center">
      {/* Background Image */}
      <img src={f2} alt="Benefits Illustration" className="absolute top-0 left-0 w-full h-full object-cover object-center z-0" style={{filter: 'brightness(0.7)'}} />
      {/* Orange overlay for cards */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-200/60 to-orange-100/60 z-10"></div>
      {/* Content */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-10">Benefits & Outcomes</h2>
        <div className="w-full max-w-5xl grid grid-cols-3 md:grid-cols-3 gap-8">
          {benefits.slice(0,3).map((b, i) => (
            <div key={i} className="bg-orange-100 backdrop-blur-md border border-orange-300 rounded-xl p-6 shadow-lg flex flex-col items-center text-center">
              <span className="text-orange-500 font-semibold text-lg drop-shadow">{b}</span>
            </div>
          ))}
        </div>
        <div className="w-full max-w-5xl grid grid-cols-3 md:grid-cols-3 gap-8 mt-8">
          {benefits.slice(3,6).map((b, i) => (
            <div key={i+3} className="bg-orange-100 backdrop-blur-md border border-orange-300 rounded-xl p-6 shadow-lg flex flex-col items-center text-center">
              <span className="text-orange-500 font-semibold text-lg drop-shadow">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* 5. FAQs About This Service */}
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <h2 className="text-2xl font-bold text-center mt-12 text-orange-500 mb-6">FAQs About This Service</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col">
            <div className="font-semibold text-orange-700 mb-2 text-lg flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-orange-500 rounded-full"></span>
              {faq.q}
            </div>
            <div className="text-orange-900 text-base">{faq.a}</div>
          </div>
        ))}
      </div>
    </div>

    {/* 6. Get Started / Free Consultation CTA */}
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <div className="flex flex-row md:flex-row items-center gap-10">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Ready to Transform Your Finances?</h2>
          <p className="mb-6 text-orange-900">Book a free consultation and see how our FP&A experts can help you plan, analyze, and grow.</p>
          <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition">Get Free Consultation</button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center mt-20 items-center">
          <img src={f3} alt="Transform Your Finances" className="rounded-xl shadow-lg object-cover max-h-64 w-full md:w-auto" />
        </div>
      </div>
    </div>
  </section>
);

export default FinancialPlanningAnalysis;
