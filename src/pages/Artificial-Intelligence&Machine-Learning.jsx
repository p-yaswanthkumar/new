
import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aihero from "../assets/r.mp4";
import a1 from "../assets/r1.webp"; // your AI/ML service image
import a2 from "../assets/r2.webp"; // another AI/ML service 

const benefits = [
    {
      title: "Customized Design",
      description: "Every home is tailored to your lifestyle and preferences.",
    },
    {
      title: "Premium Materials",
      description: "We use high-quality, durable materials for long-term value.",
    },
    {
      title: "Energy Efficiency",
      description: "Homes designed to reduce energy consumption and costs.",
    },
    {
      title: "On-Time Delivery",
      description: "Efficient project management ensures timely handovers.",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden charges — clear and upfront cost estimates.",
    },
    {
      title: "Expert Craftsmanship",
      description: "Skilled teams deliver superior quality in every detail.",
    },
  ];

const steps = [
    "Initial consultation to understand your vision",
    "Detailed design and planning with 3D previews",
    "Transparent cost estimation and approvals",
    "Material selection and quality checks",
    "On-site execution with expert supervision",
    "Final handover with post-construction support",
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
      // Initialize AOS for section animations
      AOS.init({ once: false, duration: 800 });
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
      `${theme === 'dark' ? 'min-h-screen bg-black text-white overflow-hidden' : 'min-h-screen bg-white text-black overflow-hidden'}`
    }>
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-screen grid place-items-center text-center overflow-hidden" style={{ color: theme === 'dark' ? '#fff' : '#fff' }} data-aos="fade-up" data-aos-duration="1000">
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
         <h1 
  className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug" 
  style={{ color: theme === 'dark' ? '#fff' : '#fff' }}
>
  Transforming Homes with{' '}
  <span style={{ color: '#facc15' /* Tailwind yellow-400 */ }}>Residential Construction</span>
</h1>

<p 
  className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}
>
  From concept to completion, we craft modern, durable, and energy-efficient 
  homes tailored to your lifestyle — delivering projects on time and within budget.
</p>

        </div>
      </section>



<section 
  className={`w-full py-16 ${theme === "dark" ? "bg-[#222]" : "bg-white"}`}
  data-aos="fade-up" data-aos-delay="100"
>
  <div className="text-center mb-6">
    <h2 
      className={`text-4xl md:text-5xl font-extrabold leading-tight mb-4 
      ${theme === "dark" ? "text-white" : "text-gray-900"}`}
      data-aos="fade-up" data-aos-delay="120"
    >
      Our Residential Construction Process
    </h2>
    <p 
      className={`text-lg leading-relaxed 
      ${theme === "dark" ? "text-white" : "text-gray-700"}`}
      data-aos="fade-up" data-aos-delay="140"
    >
      We make the entire process simple and transparent — 
      from your first meeting to the final handover.
    </p>
  </div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    {/* LEFT CONTENT */}
    <div className="flex flex-col justify-around text-justify texh-full">
      <ul className="space-y-4">
        {steps.map((step, index) => (
          <li 
            key={index} 
            className="flex items-start"
            data-aos="fade-up" data-aos-delay={160 + index * 40}
          >
            <span 
              className={`w-6 h-6 rounded-full text-white flex items-center justify-center text-sm font-semibold mr-4 shadow 
              ${theme === "dark" ? "bg-yellow-400" : "bg-yellow-400"}`}
            >
              {index + 1}
            </span>
            <p 
              className={`text-base leading-relaxed 
              ${theme === "dark" ? "text-white" : "text-gray-700"}`}
            >
              {step}
            </p>
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <button 
        className={`px-6 py-3 w-[200px] rounded-xl font-semibold text-lg shadow-md transition duration-300 mt-6
        ${theme === "dark" 
          ? "bg-yellow-400 text-black hover:bg-yellow-500" 
          : "bg-yellow-400 text-black hover:bg-yellow-500"
        }`}
        data-aos="fade-up" data-aos-delay={160 + steps.length * 40}
        onClick={() => {
          const el = document.getElementById('pricing');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Start Your Project
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="300">
      <img 
        src={a2} 
        alt="Residential Construction" 
        className="w-full h-full object-cover rounded-2xl shadow-lg"
      />
    </div>
  </div>
</section>
      {/* Service Includes Section */}
<section 
  className="w-full py-16" 
  style={{ backgroundColor: theme === 'dark' ? '#000' : '#f3f4f6' }}
  data-aos="fade-up" data-aos-delay="400"
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12  items-center">
    {/* LEFT CONTENT */}
    <div data-aos="fade-up" data-aos-delay="420">
      <h2 
        className="text-4xl font-bold mb-4 text-justify"
        style={{ color: '#FACC15' }} // yellow-400
      >
        Benefits of Choosing the Our Residential Construction
      </h2>
      
      <p 
        className="mb-6 leading-relaxed text-justify" 
        style={{ color: theme === 'dark' ? '#ddd' : '#444' }}
      >
        We go beyond just building homes. Our approach ensures a there
        stress-free experience, superior quality, and long-lasting value. 
        Every project combines smart planning, reliable execution, and 
        your personal touch.
      </p>
      
     

      {/* EXTRA PARAGRAPH */}
      <p 
        className="leading-relaxed text-justify" 
        style={{ color: theme === 'dark' ? '#ddd' : '#444' }}
      >
        With our transparent process and detailed supervision, you’ll 
        always know what’s happening at every stage finds no surprises, just 
        reliable results.
      </p>
      <p 
        className="mb-6 leading-relaxed text-justify" 
        style={{ color: theme === 'dark' ? '#ddd' : '#444' }}
      >
        Whether you're planning a villa, apartment, or individual house, 
        we focus on delivering a space  no long that reflects your dreams, backed 
        by our proven track record.ong-lasting value. there
        Every project combines smart planning, reliable execution, and 
        your personal touch.
      </p>
    </div>

    {/* RIGHT CARDS - 6 BENEFITS IN GRID */}
    <div className="grid sm:grid-cols-2 gap-6">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300"
          style={{ 
            backgroundColor: theme === 'dark' ? '#111' : '#fff',
            color: theme === 'dark' ? '#ddd' : '#444'
          }}
          data-aos="fade-up" data-aos-delay={440 + index * 40}
        >
          <h3 
            className="text-lg font-semibold mb-2"
            style={{ color: '#FACC15' }} // yellow-400
          >
            {benefit.title}
          </h3>
          <p className="text-sm leading-relaxed">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

     

     
 
<section className={`w-full py-20 ${theme === "dark" ? "bg-[#222]" : "bg-white"}`} data-aos="fade-up" data-aos-delay="600">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === "dark" ? "text-yellow-400" : "text-yellow-400"}`} data-aos="fade-up" data-aos-delay="620">
      Cost Estimator – Residential Construction
    </h2>
    <p className={`text-lg mb-8 max-w-3xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`} data-aos="fade-up" data-aos-delay="640">
      Here’s an approximate pricing guide based on property size, construction quality, and additional features.
      Final estimates are provided after a detailed site evaluation.
    </p>

    <div className="overflow-x-auto" data-aos="fade-up" data-aos-delay="660">
      <table className={`min-w-full border rounded-lg overflow-hidden text-left 
        ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}>
        <thead className={`${theme === "dark" ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"}`}>
          <tr>
            <th className="px-4 py-3">Property Size</th>
            <th className="px-4 py-3">Construction Quality</th>
            <th className="px-4 py-3">Estimated Cost (₹)</th>
            <th className="px-4 py-3">Timeline</th>
            <th className="px-4 py-3">Optional Add-Ons</th>
          </tr>
        </thead>
        <tbody>
          <tr className={`${theme === "dark" ? "bg-black text-gray-300" : "bg-white"}`}>
            <td className="px-4 py-3">1000 sq.ft</td>
            <td className="px-4 py-3">Standard</td>
            <td className="px-4 py-3">₹18 – ₹22 Lakhs</td>
            <td className="px-4 py-3">6 – 7 months</td>
            <td className="px-4 py-3">Basic Interiors, Landscaping</td>
          </tr>
          <tr className={`${theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-gray-100"}`}>
            <td className="px-4 py-3">1500 sq.ft</td>
            <td className="px-4 py-3">Premium</td>
            <td className="px-4 py-3">₹30 – ₹38 Lakhs</td>
            <td className="px-4 py-3">8 – 9 months</td>
            <td className="px-4 py-3">Modular Kitchen, False Ceiling</td>
          </tr>
          <tr className={`${theme === "dark" ? "bg-black text-gray-300" : "bg-white"}`}>
            <td className="px-4 py-3">2000 sq.ft</td>
            <td className="px-4 py-3">Luxury</td>
            <td className="px-4 py-3">₹45 – ₹55 Lakhs</td>
            <td className="px-4 py-3">10 – 12 months</td>
            <td className="px-4 py-3">Smart Home Setup, Designer Interiors</td>
          </tr>
          <tr className={`${theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-gray-100"}`}>
            <td className="px-4 py-3">2500+ sq.ft</td>
            <td className="px-4 py-3">Custom</td>
            <td className="px-4 py-3">On Request</td>
            <td className="px-4 py-3">Custom Timeline</td>
            <td className="px-4 py-3">Swimming Pool, Solar Panels, Automation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className={`text-sm mt-4 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} data-aos="fade-up" data-aos-delay="680">
      * Prices are indicative and may vary depending on location, materials, and customization.  
    </p>
  </div>
</section>


 




<section
  className={`w-full py-16 sm:py-20 ${
    theme === "dark" ? "bg-[#000]" : "bg-gray-100"
  }`}
  id="case-study"
  data-aos="fade-up" data-aos-delay="700"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 items-center gap-12 md:gap-16">
    <div className="grid justify-center" data-aos="fade-up" data-aos-delay="720">
      <img
        src={a1} // import your image at top: import caseStudyImg from "../assets/casestudy.jpg";
        alt="Case Study"
        className="rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
      />
    </div>
    
    {/* LEFT CONTENT */}
    <div data-aos="fade-up" data-aos-delay="740">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-4 sm:mb-6 leading-snug">
        Case Study 
      </h2>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-4 sm:mb-6 leading-snug">
         Modern Residential Villa
      </h2>
      
      <p
        className={`text-base sm:text-lg md:text-xl mb-4 sm:mb-6  text-justify leading-relaxed ${
          theme === "dark" ? "text-white" : "text-gray-800"
        }`}
      >
        This project showcases our ability to blend contemporary design with 
        long-lasting structural integrity. Every detail — from planning to 
        execution — was carefully managed to ensure exceptional results.
      </p>
      <ul
        className={`space-y-3 sm:space-y-4 text-base sm:text-lg ${
          theme === "dark" ? "text-white" : "text-gray-800"
        }`}
      >
        <li className="grid grid-cols-[auto_1fr] gap-2">
          <span className="text-yellow-400">•</span>
          5,000 sq.ft luxury villa completed in 10 months.
        </li>
        <li className="grid grid-cols-[auto_1fr] gap-2">
          <span className="text-yellow-400">•</span>
          Used energy-efficient materials and smart home automation.
        </li>
        <li className="grid grid-cols-[auto_1fr] gap-2">
          <span className="text-yellow-400">•</span>
          Delivered under budget with zero safety incidents.
        </li>
      </ul>
    </div>

    {/* RIGHT IMAGE */}
    
  </div>
</section>


<section className={`w-full py-20 font-sans antialiased ${theme === "dark" ? "bg-[#222]" : "bg-[#FFF]"}`} data-aos="fade-up" data-aos-delay="800" id="pricing">
  {/* SECTION HEADER */}
  <div className="text-center mb-12">
    <h2 className={`text-4xl md:text-5xl font-extrabold leading-tight mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`} data-aos="fade-up" data-aos-delay="820">
      Our Pricing Plans
    </h2>
    <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`} data-aos="fade-up" data-aos-delay="840">
      Transparent and flexible pricing for every stage of your residential construction project.
    </p>
  </div>

  {/* PRICING GRID */}
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8" id="pricing">
    {/* CARD 1 */}
    <div className={`border rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`} data-aos="fade-up" data-aos-delay="860">
      <div className="bg-yellow-400 rounded-t-2xl p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900">Basic</h3>
        <p className="text-xl font-semibold text-gray-800 mt-2">₹1,200 / sq.ft</p>
      </div>
      <ul className={`p-6 flex-1 space-y-4 text-base leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        <li>Standard Materials</li>
        <li>Basic Design Consultation</li>
        <li>Quality Workmanship</li>
        <li>On-Time Delivery</li>
      </ul>
      <div className="p-6 text-center">
        <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow hover:bg-yellow-300 transition duration-300">
          Choose Plan
        </button>
      </div>
    </div>

    {/* CARD 2 (HIGHLIGHTED) */}
    <div className={`border rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col ${theme === "dark" ? "border-yellow-400" : "border-yellow-400"}`} data-aos="fade-up" data-aos-delay="900">
      <div className="bg-yellow-400 rounded-t-2xl p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900">Premium</h3>
        <p className="text-xl font-semibold text-gray-900 mt-2">₹1,800 / sq.ft</p>
      </div>
      <ul className={`p-6 flex-1 space-y-4 text-base leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        <li>Premium Materials</li>
        <li>Custom Design Support</li>
        <li>Site Supervision</li>
        <li>Extended Warranty</li>
      </ul>
      <div className="p-6 text-center">
        <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow hover:bg-yellow-300 transition duration-300">
          Choose Plan
        </button>
      </div>
    </div>

    {/* CARD 3 */}
    <div className={`border rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`} data-aos="fade-up" data-aos-delay="940">
      <div className="bg-yellow-400 rounded-t-2xl p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900">Luxury</h3>
        <p className="text-xl font-semibold text-gray-800 mt-2">₹2,500 / sq.ft</p>
      </div>
      <ul className={`p-6 flex-1 space-y-4 text-base leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
        <li>Luxury-Grade Materials</li>
        <li>End-to-End Design Support</li>
        <li>Dedicated Project Manager</li>
        <li>5-Year Warranty</li>
      </ul>
      <div className="p-6 text-center">
        <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow hover:bg-yellow-300 transition duration-300">
          Choose Plan
        </button>
      </div>
    </div>
  </div>
</section>


    

  </div>
  );
}
