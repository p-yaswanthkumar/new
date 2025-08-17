
import React, { useState } from "react";

import aihero from "../assets/aihero.mp4";
import a1 from "../assets/a1.jpg"; // your AI/ML service image
import a2 from "../assets/a2.jpeg"; // another AI/ML service 
import a3 from "../assets/a3.jpg";
const faqs = [
  {
    question: "What industries can benefit from AI/ML services?",
    answer:
      "AI/ML can benefit almost every industry including healthcare, finance, retail, education, manufacturing, and more by enabling smarter decision-making, automation, and personalization.",
  },
  {
    question: "Do you provide customized AI/ML solutions?",
    answer:
      "Yes! We design and train models specifically tailored to your business goals, ensuring they align with your workflows and industry needs.",
  },
  {
    question: "How secure is the data used in AI/ML projects?",
    answer:
      "We follow strict data privacy and security standards to ensure that your sensitive data remains protected throughout the AI/ML lifecycle.",
  },
  {
    question: "Can AI/ML solutions scale as my business grows?",
    answer:
      "Absolutely. Our AI/ML systems are designed to be scalable, adapting to increasing data, users, and business requirements as you expand.",
  },
  {
    question: "Do you offer  maintenance after deployment?",
    answer:
      "Yes, we provide continuous support, monitoring, and model optimization to ensure your AI/ML solutions perform reliably over time.",
  },
  {
    question: "How long does it take to implement an AI/ML solution?",
    answer:
      "The timeline depends on project complexity, but most AI/ML solutions take between a few weeks to several months, covering data preparation, model training, testing, and deployment.",
  },
];

 

export default function AIServicePage() {
  // Theme state synced with Header
  const [theme, setTheme] = useState('light');
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
      };
    }
  }, []);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className={
      `${theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}`
    }>
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-screen grid place-items-center text-center overflow-hidden" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={aihero}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            Empowering the Future with{' '}
            <span style={{ color: '#00bfff' }}>AI/ML</span>
          </h1>
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            Unlock the power of artificial intelligence and machine learning to
            drive smarter decisions, automate processes, and build innovative
            solutions that transform industries.
          </p>
        </div>
      </section>

      {/* Service Includes Section */}
      <section className={
        `py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00bfff]'}`
      }>
        <div className="max-w-6xl mx-auto grid  md:grid-cols-2 gap-10 items-center px-6">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={a1}
              alt="AI/ML Services"
              className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl  px-4 py-2 rounded-lg font-bold mb-8 md:whitespace-nowrap" style={{ color: '#fff' }}>
              What Our AI/ML Service Includes
            </h2>

            <ul className="space-y-4 text-base sm:text-lg">
              {[
                'Predictive Analytics & Forecasting',
                'Natural Language Processing (NLP)',
                'Computer Vision Solutions',
                'AI-Powered Chatbots & Virtual Assistants',
                'Model Training & Optimization',
              ].map((item, idx) => (
                <li className="flex items-center" key={item}>
                  <span className={`w-3 h-3 rounded-full mr-3 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>



      <section className={
        `py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
      }>
      <div className="max-w-6xl mx-auto grid  md:grid-cols-2 gap-10 px-6 items-center">
        
        {/* Left Side Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug" style={{ color: theme === 'dark' ? '#00bfff' : '#222' }}>
            Who It’s For?
          </h2>
         <p className={`text-lg mb-6  text-justify ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
            Our <span className="font-semibold" style={{ color: '#00bfff' }}>AI/ML services</span> are 
            designed for organizations of all sizes—from fast-moving startups to large-scale 
            enterprises—who want to harness the power of data. Whether it’s automating routine 
            operations, generating deeper business insights, or building intelligent products, 
            we help transform complex challenges into scalable solutions. With a focus on 
            innovation, efficiency, and measurable outcomes, we empower industries to move 
            faster, make smarter decisions, and stay ahead in an increasingly competitive world.
         </p>

        </div>

        {/* Right Side Cards */}
        <div className="grid  lg:grid-cols-2 gap-6">
          {[
            { title: 'Startups', desc: 'Kickstart innovation with AI-powered solutions tailored to small teams.' },
            { title: 'Enterprises', desc: 'Scale processes and decision-making with advanced ML models.' },
            { title: 'Educators', desc: 'Enhance learning experiences with AI-driven personalization.' },
            { title: 'Healthcare', desc: 'Improve diagnostics and patient care with data intelligence.' },
          ].map((card, idx) => (
            <div key={card.title} className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition ` + (theme === 'dark' ? 'bg-[#222]' : 'bg-[#fdfcf9]')}>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#00bfff' }}>{card.title}</h3>
              <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>


     <section
      className="relative w-full bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${a2})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: theme === 'dark' ? 'rgba(0,191,255,0.7)' : 'rgba(0,191,255,0.7)' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center" style={{ color: '#fff' }}>
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 drop-shadow-lg">
          Benefits of Choosing Our AI/ML Services
        </h2>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { title: 'Smarter Decisions', desc: 'Leverage data-driven intelligence to make faster, more reliable, and impactful business choices.' },
            { title: 'Cost Efficiency', desc: 'Automate repetitive tasks to reduce operational costs and maximize resource utilization.' },
            { title: 'Personalized Solutions', desc: 'Deliver customized AI/ML models tailored to your business goals and industry needs.' },
            { title: 'Scalable Systems', desc: 'Build AI-powered platforms that grow seamlessly with your organization’s evolving demands.' },
            { title: 'Competitive Edge', desc: 'Stay ahead in the market by adopting cutting-edge AI innovations before your competitors.' },
            { title: 'Future-Ready', desc: 'Future-proof your business by integrating AI/ML technologies that adapt with market changes.' },
          ].map((card, idx) => (
            <div key={card.title} className={`backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition ` + (theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black')}>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

     <section className={
      `py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
    }>
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#00bfff' }}>
          Frequently Asked Questions
        </h2>

        {/* FAQ Grid */}
        <div className="grid  lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-md p-6 cursor-pointer transition hover:shadow-lg ` + (theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black')}
              onClick={() => toggleFAQ(index)}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="font-bold text-xl" style={{ color: '#00bfff' }}>
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className={theme === 'dark' ? 'mt-4 text-gray-200' : 'mt-4 text-gray-600'}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>


 <section className={
      `py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00bfff]'}`
    }>
      <div className="max-w-7xl mx-auto grid  lg:grid-cols-2 gap-10 items-center px-6">
        {/* Left Content */}
        <div className="space-y-6 flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to <span style={{ color: '#fff' }}>Transform</span> Your Business with AI/ML?
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
          >
            Partner with us to unlock innovative AI/ML solutions that empower smarter decisions, 
            automate workflows, and accelerate growth. Let’s build the future, together.
          </p>
          <button className={
            `px-8 py-4 font-semibold rounded-xl shadow-md transition self-start lg:self-auto ` +
            (theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-[#fff] text-black hover:bg-[#0099cc]')
          }>
            Get Started Today
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center h-full">
          <img
            src={a3}
            alt="AI/ML CTA"
            className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
          />
        </div>
      </div>
    </section>

  </div>
  );
}
