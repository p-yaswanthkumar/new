import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';

import aihero from "../assets/com.mp4";
import a1 from "../assets/com1.webp"; // your AI/ML service image
import a2 from "../assets/com2.jpg"; // another AI/ML service 

const benefits = [
  {
    title: "Tailored Business Solutions",
    description: "We design spaces aligned with your industry needs and brand identity.",
  },
  {
    title: "High-Grade Materials",
    description: "Durable, low-maintenance materials built for heavy use and longevity.",
  },
  {
    title: "Efficient Layouts",
    description: "Optimized designs to maximize productivity and operational flow.",
  },
  {
    title: "On-Schedule Completion",
    description: "Robust project management to ensure timely delivery.",
  },
  {
    title: "Transparent Costing",
    description: "Clear, upfront pricing with no hidden expenses.",
  },
  {
    title: "Proven Expertise",
    description: "Experienced teams delivering precision and quality in every project.",
  },
];
const steps = [
  "Consultation to understand your business requirements",
  "Comprehensive design and planning with detailed layouts",
  "Clear cost estimation and approvals",
  "Material procurement with strict quality standards",
  "Expert-led construction and site supervision",
  "Final delivery with full compliance and support",
];


export default function AIServicePage() {
  const { t } = useTranslation();
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
      // Initialize AOS to animate every time section comes into view
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
  Building the Future of{' '}
  <span style={{ color: '#facc15' /* Tailwind yellow-400 */ }}>Commercial Spaces</span>
</h1>

<p 
  className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}
>
  We design and construct functional, innovative, and sustainable commercial 
  buildings — helping businesses thrive with projects delivered on time and within budget.
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
      Our Commercial Construction Process
    </h2>
    <p 
      className={`text-lg leading-relaxed 
      ${theme === "dark" ? "text-white" : "text-gray-700"}`}
      data-aos="fade-up" data-aos-delay="140"
    >
      From planning to project delivery, we ensure efficiency, 
      quality, and transparency — helping your business space take shape seamlessly.
    </p>
  </div>


  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    {/* LEFT CONTENT */}
    <div className="flex flex-col justify-around text-justify h-full">
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
        className="text-4xl font-bold mb-4"
        style={{ color: '#FACC15' }} // yellow-400
      >
        Why Choose Our Residential Construction Services
      </h2>
      
      <p 
        className="mb-6 leading-relaxed text-justify" 
        style={{ color: theme === 'dark' ? '#ddd' : '#444' }}
      >
        We don’t just build houses — we create homes designed around you. 
        Our process ensures a stress-free experience, exceptional quality, 
        and lasting value through careful planning and expert execution.
      </p>

      <p 
        className="leading-relaxed text-justify" 
        style={{ color: theme === 'dark' ? '#ddd' : '#444' }}
      >
        With a transparent workflow and continuous supervision, you’ll always 
        know exactly what’s happening at every stage — no hidden surprises, 
        only reliable results.
      </p>
      
      <p 
        className="mb-6 leading-relaxed text-justify" 
        style={{ color: theme === 'dark' ? '#ddd' : '#444' }}
      >
        Whether it’s a villa, apartment, or individual home, we deliver 
        spaces that reflect your vision, supported by our proven track record 
        of precision, quality, and on-time completion.
      </p>
      <p 
        className="mb-6 leading-relaxed text-justify" 
        style={{ color: theme === 'dark' ? '#ddd' : '#444' }}
      >
        From concept to completion, we combine modern design tools with 
        traditional craftsmanship. Our dedicated team works closely with you 
        at every stage to ensure your dream home is built to perfection — 
        functional, beautiful, and built to last.
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
      Residential Construction Cost Guide – 2025
    </h2>
    <p className={`text-lg mb-8 max-w-3xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`} data-aos="fade-up" data-aos-delay="640">
      Explore our updated cost projections for modern homes, tailored to your preferences. 
      These figures serve as a preliminary reference before detailed architectural and site planning.
    </p>

    <div className="overflow-x-auto" data-aos="fade-up" data-aos-delay="660">
      <table className={`min-w-full border rounded-lg overflow-hidden text-left 
        ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}>
        <thead className={`${theme === "dark" ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"}`}>
          <tr>
            <th className="px-4 py-3">Home Size</th>
            <th className="px-4 py-3">Finish Level</th>
            <th className="px-4 py-3">Approx. Budget (₹)</th>
            <th className="px-4 py-3">Build Duration</th>
            <th className="px-4 py-3">Upgrades Available</th>
          </tr>
        </thead>
        <tbody>
          <tr className={`${theme === "dark" ? "bg-black text-gray-300" : "bg-white"}`}>
            <td className="px-4 py-3">1200 sq.ft</td>
            <td className="px-4 py-3">Economy</td>
            <td className="px-4 py-3">₹20 – ₹24 Lakhs</td>
            <td className="px-4 py-3">6 – 7 months</td>
            <td className="px-4 py-3">Basic Flooring, Standard Fixtures</td>
          </tr>
          <tr className={`${theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-gray-100"}`}>
            <td className="px-4 py-3">1600 sq.ft</td>
            <td className="px-4 py-3">Standard</td>
            <td className="px-4 py-3">₹32 – ₹38 Lakhs</td>
            <td className="px-4 py-3">7 – 8 months</td>
            <td className="px-4 py-3">Wardrobes, Premium Paints</td>
          </tr>
          <tr className={`${theme === "dark" ? "bg-black text-gray-300" : "bg-white"}`}>
            <td className="px-4 py-3">2000 sq.ft</td>
            <td className="px-4 py-3">Premium</td>
            <td className="px-4 py-3">₹45 – ₹55 Lakhs</td>
            <td className="px-4 py-3">9 – 10 months</td>
            <td className="px-4 py-3">Modular Kitchen, Designer Lighting</td>
          </tr>
          <tr className={`${theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-gray-100"}`}>
            <td className="px-4 py-3">2500+ sq.ft</td>
            <td className="px-4 py-3">Luxury / Custom</td>
            <td className="px-4 py-3">On Request</td>
            <td className="px-4 py-3">Custom Timeline</td>
            <td className="px-4 py-3">Home Automation, Solar Energy, Pool</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className={`text-sm mt-4 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} data-aos="fade-up" data-aos-delay="680">
      * These are guideline prices. Exact estimates depend on soil conditions, location, 
      material availability, and architectural design.  
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
     Contemporary Urban Residence
  </h2>
  
  <p
    className={`text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-justify leading-relaxed ${
      theme === "dark" ? "text-white" : "text-gray-800"
    }`}
  >
    This residence exemplifies how innovative design and precise execution 
    can transform a compact urban plot into a spacious, light-filled home. 
    Our team handled every phase with meticulous planning and seamless coordination.
  </p>
  <ul
    className={`space-y-3 sm:space-y-4 text-base sm:text-lg ${
      theme === "dark" ? "text-white" : "text-gray-800"
    }`}
  >
    <li className="grid grid-cols-[auto_1fr] gap-2">
      <span className="text-yellow-400">•</span>
      3,800 sq.ft modern home completed in just 8 months.
    </li>
    <li className="grid grid-cols-[auto_1fr] gap-2">
      <span className="text-yellow-400">•</span>
      Integrated passive ventilation and solar energy systems for sustainability.
    </li>
    <li className="grid grid-cols-[auto_1fr] gap-2">
      <span className="text-yellow-400">•</span>
      Achieved premium finishes while maintaining strict cost control.
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
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
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
