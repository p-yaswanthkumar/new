import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';

import aihero from "../assets/d.mp4";
import a1 from "../assets/d1.jpg"; // your AI/ML service image
import a2 from "../assets/d2.jpg"; // another AI/ML service 

const benefits = [
  {
    title: "End-to-End Interior Solutions",
    description: "From conceptual designs to flawless execution, we handle every stage of your project.",
  },
  {
    title: "Bespoke Design for Every Space",
    description: "Tailored layouts and styles that reflect your personality, lifestyle, or brand identity.",
  },
  {
    title: "Efficient Space Optimization",
    description: "Smart planning ensures every square foot is functional and aesthetically pleasing.",
  },
  {
    title: "On-Time Delivery Commitment",
    description: "Meticulous project scheduling keeps timelines on track without compromising quality.",
  },
  {
    title: "Transparent Costing",
    description: "Accurate estimates upfront with no hidden charges or last-minute surprises.",
  },
  {
    title: "Experienced Interior Specialists",
    description: "A skilled team ensures high-quality finishes, precise detailing, and seamless execution.",
  },
];
const steps = [
  "Understanding your vision and requirements through detailed consultation",
  "Developing customized design concepts and 3D visualizations",
  "Providing clear project timelines and budget approval",
  "Coordinating materials, finishes, and vendor sourcing",
  "Executing fit-outs with precision and continuous quality checks",
  "Final walkthrough, adjustments, and project handover with after-service support",
];


export default function AIServicePage() {
  const { t } = useTranslation();
  React.useEffect(() => {
    AOS.init({ once: false });
  }, []);
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
      `${theme === 'dark' ? 'min-h-screen bg-black text-white overflow-hidden' : 'min-h-screen bg-white text-black overflow-hidden'}`
    }>
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-screen grid place-items-center text-center overflow-hidden" style={{ color: theme === 'dark' ? '#fff' : '#fff' }} data-aos="fade-up" data-aos-delay="100">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={aihero}
          autoPlay
          loop
          muted
          playsInline
          data-aos="fade"
          data-aos-delay="120"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" data-aos="fade" data-aos-delay="140"></div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6" data-aos="fade-up" data-aos-delay="160">
  <h1 
    className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug" 
    style={{ color: theme === 'dark' ? '#fff' : '#fff' }}
    data-aos="fade-up" data-aos-delay="180"
  >
    Transforming Spaces with{' '}
    <span style={{ color: '#facc15' /* Tailwind yellow-400 */ }} data-aos="zoom-in" data-aos-delay="200">Design, Planning & Execution</span>
  </h1>

<p 
  className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}
  data-aos="fade-up" data-aos-delay="220"
>
  We craft interiors that blend aesthetics with functionality — 
  from concept to completion, ensuring tailored designs, superior finishes, 
  and seamless delivery for your dream home or workspace.
</p>


</div>

      </section>



<section 
  className={`w-full py-16 ${theme === "dark" ? "bg-[#222]" : "bg-white"}`}
  data-aos="fade-up" data-aos-delay="240"
>
  <div className="text-center mb-6" data-aos="fade-up" data-aos-delay="260">
   <h2 
    className={`text-4xl md:text-5xl font-extrabold leading-tight mb-4 
    ${theme === "dark" ? "text-white" : "text-gray-900"}`}
    data-aos="fade-up" data-aos-delay="280"
  >
    Your Journey to a Reimagined Space
  </h2>
<p 
  className={`text-lg leading-relaxed 
  ${theme === "dark" ? "text-white" : "text-gray-700"}`}
  data-aos="fade-up" data-aos-delay="300"
>
  We guide you through every step — from the first consultation to the final reveal — 
  ensuring your renovation or remodel is seamless, transparent, and perfectly aligned with your vision.
</p>



  </div>

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center" data-aos="fade-up" data-aos-delay="320">
  {/* LEFT CONTENT */}
  <div className="flex flex-col justify-between h-full" data-aos="fade-right" data-aos-delay="340">
    <ul className="space-y-5" data-aos="fade-up" data-aos-delay="360">
      {steps.map((step, index) => (
        <li 
          key={index} 
          className="flex items-start"
          data-aos="fade-up" data-aos-delay={380 + index * 20}
        >
          <span 
            className="w-6 h-6 rounded-full bg-yellow-400 text-black flex items-center justify-center text-sm font-semibold mr-4 shadow"
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
    <div className="flex justify-center items-center" data-aos="fade-left" data-aos-delay="420">
      <img 
        src={a1} 
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
  data-aos="fade-up" data-aos-delay="440"
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12  items-center">
    {/* LEFT CONTENT */}
    <div data-aos="fade-right" data-aos-delay="460">
     <h2 
      className="text-4xl font-bold mb-4"
      style={{ color: '#FACC15' }} // yellow-400
      data-aos="fade-up" data-aos-delay="480"
    >
      Why Choose Our Design, Planning & Execution Services
    </h2>

<p 
  className="mb-6 leading-relaxed text-justify" 
  style={{ color: theme === 'dark' ? '#ddd' : '#444' }}
  data-aos="fade-up" data-aos-delay="500"
>
  We do more than just create designs — we deliver complete, end-to-end 
  solutions. With precise planning, innovative ideas, and flawless execution, 
  we ensure every project is smooth, transparent, and tailored to your vision. 
  The result: exceptional spaces built on time, within budget, and beyond expectations.
</p>


<p 
  className="mb-6 leading-relaxed text-justify" 
  style={{ color: theme === 'dark' ? '#ddd' : '#444' }}
>
  With a transparent process and detailed supervision, you’ll always 
  know what’s happening at every stage no surprises, just reliable 
  results and beautifully executed interiors.
</p>

<p 
  className="leading-relaxed text-justify" 
  style={{ color: theme === 'dark' ? '#ddd' : '#444' }}
>
  Whether it's a modern apartment, luxury villa, or commercial space, 
  we focus on delivering designs that elevate your everyday living, 
  backed by our proven track record of creating functional and timeless interiors.
</p>
<p 
  className="mb-6 leading-relaxed text-justify" 
  style={{ color: theme === 'dark' ? '#ddd' : '#444' }}
>
  We go beyond just decorating spaces. Our approach ensures a stress-free 
  experience, superior quality, and interiors that truly reflect your lifestyle. 
  Every project combines smart planning, innovative design, and your personal touch.
</p>
<p 
  className="leading-relaxed text-justify" 
  style={{ color: theme === 'dark' ? '#ddd' : '#444' }}
>
  Whether it's a modern apartment, luxury villa, or commercial space, 
  we focus on delivering designs that elevate your everyday living, 
  backed by our proven track record of creating functional and timeless interiors.
</p>


    </div>

    {/* RIGHT CARDS - 6 BENEFITS IN GRID */}
    <div className="grid sm:grid-cols-2 gap-6" data-aos="fade-left" data-aos-delay="520">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300"
          style={{ 
            backgroundColor: theme === 'dark' ? '#111' : '#fff',
            color: theme === 'dark' ? '#ddd' : '#444'
          }}
          data-aos="zoom-in" data-aos-delay={540 + index * 20}
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
  <div className="max-w-7xl mx-auto px-6" data-aos="fade-up" data-aos-delay="620">
    <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === "dark" ? "text-yellow-400" : "text-yellow-400"}`} data-aos="fade-up" data-aos-delay="640"> 
      Cost Estimator – Design, Planning & Execution
    </h2>
    <p className={`text-lg mb-8 max-w-3xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`} data-aos="fade-up" data-aos-delay="660"> 
      Get a quick estimate by sharing your name and phone number. We’ll reach out to provide tailored guidance
      on floor area, design style, and material selection.
    </p>

    {/* Name and Phone Inputs */}
    
    {/* Table stays same */}
    <div className="overflow-x-auto" data-aos="fade-up" data-aos-delay="680">
      <table className={`min-w-full border rounded-lg overflow-hidden text-left 
        ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}>
        <thead className={`${theme === "dark" ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"}`}>
          <tr>
            <th className="px-4 py-3">Floor Area</th>
            <th className="px-4 py-3">Interior Style</th>
            <th className="px-4 py-3">Estimated Cost (₹)</th>
            <th className="px-4 py-3">Timeline</th>
            <th className="px-4 py-3">Key Inclusions</th>
          </tr>
        </thead>
        <tbody>
          <tr className={`${theme === "dark" ? "bg-black text-gray-300" : "bg-white"}`}>
            <td className="px-4 py-3">500 – 800 sq.ft</td>
            <td className="px-4 py-3">Basic</td>
            <td className="px-4 py-3">₹6 – ₹9 Lakhs</td>
            <td className="px-4 py-3">4 – 6 weeks</td>
            <td className="px-4 py-3">False Ceiling, Wardrobes, Basic Lighting</td>
          </tr>
          <tr className={`${theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-gray-100"}`}>
            <td className="px-4 py-3">800 – 1200 sq.ft</td>
            <td className="px-4 py-3">Premium</td>
            <td className="px-4 py-3">₹10 – ₹15 Lakhs</td>
            <td className="px-4 py-3">6 – 8 weeks</td>
            <td className="px-4 py-3">Modular Kitchen, Designer Lighting, Wallpaper</td>
          </tr>
          <tr className={`${theme === "dark" ? "bg-black text-gray-300" : "bg-white"}`}>
            <td className="px-4 py-3">1200 – 1800 sq.ft</td>
            <td className="px-4 py-3">Luxury</td>
            <td className="px-4 py-3">₹18 – ₹25 Lakhs</td>
            <td className="px-4 py-3">8 – 10 weeks</td>
            <td className="px-4 py-3">Premium Finishes, Custom Furniture, Smart Lighting</td>
          </tr>
          <tr className={`${theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-gray-100"}`}>
            <td className="px-4 py-3">1800+ sq.ft</td>
            <td className="px-4 py-3">Custom</td>
            <td className="px-4 py-3">On Request</td>
            <td className="px-4 py-3">Custom Timeline</td>
            <td className="px-4 py-3">Home Automation, Designer Art, Imported Materials</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className={`text-sm mt-4 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} data-aos="fade-up" data-aos-delay="700"> 
      * Prices are indicative and may vary depending on city, material brands, and customization level.  
    </p>
  </div>
</section>


 




<section
  className={`w-full py-16 sm:py-20 ${
    theme === "dark" ? "bg-[#000]" : "bg-gray-100"
  }`}
  id="case-study"
  data-aos="fade-up" data-aos-delay="720"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 items-center gap-12 md:gap-16">
    <div className="grid justify-center" data-aos="fade-up" data-aos-delay="740">
      <img
        src={a2} // import your image at top: import caseStudyImg from "../assets/casestudy.jpg";
        alt="Case Study"
        className="rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
      />
    </div>
    
    {/* LEFT CONTENT */}
   <div data-aos="fade-up" data-aos-delay="760">
 <h2 
  className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-4 sm:mb-6 leading-snug"
>
  Case Study
</h2>



<p
  className={`text-base sm:text-lg md:text-xl text-justify mb-4 sm:mb-6 leading-relaxed ${
    theme === "dark" ? "text-white" : "text-gray-800"
  }`}
>
  Our integrated approach ensures every project moves seamlessly from 
  concept to completion. By combining innovative design, meticulous 
  planning, and flawless execution, we deliver interiors that exceed 
  expectations — on time and within budget.
</p>

<ul
  className={`space-y-3 sm:space-y-4 text-base sm:text-lg ${
    theme === "dark" ? "text-white" : "text-gray-800"
  }`}
>
  <li className="grid grid-cols-[auto_1fr] gap-2">
    <span className="text-yellow-400">•</span>
    Design — Creative concepts tailored to your vision and lifestyle.
  </li>
  <li className="grid grid-cols-[auto_1fr] gap-2">
    <span className="text-yellow-400">•</span>
    Planning — Detailed project roadmaps ensuring cost and time efficiency.
  </li>
  <li className="grid grid-cols-[auto_1fr] gap-2">
    <span className="text-yellow-400">•</span>
    Execution — Precise implementation with high-quality workmanship.
  </li>
</ul>


</div>

    {/* RIGHT IMAGE */}
    
  </div>
</section>


<section className={`w-full py-20 font-sans antialiased ${theme === "dark" ? "bg-[#222]" : "bg-[#FFF]"}`} data-aos="fade-up" data-aos-delay="800" id="pricing"> 
  {/* SECTION HEADER */}
  <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="820">
    <h2 className={`text-4xl md:text-5xl font-extrabold leading-tight mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`} data-aos="fade-up" data-aos-delay="840"> 
      Our Pricing Plans
    </h2>
    <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`} data-aos="fade-up" data-aos-delay="860"> 
      Transparent and flexible pricing for every stage of your residential construction project.
    </p>
  </div>

  {/* PRICING GRID */}
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="880">
    {/* CARD 1 */}
    <div className={`border rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`} data-aos="zoom-in" data-aos-delay="900">
      <div className="bg-yellow-400 rounded-t-2xl p-6 text-center" data-aos="fade-up" data-aos-delay="920">
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
    <div className={`border rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col ${theme === "dark" ? "border-yellow-400" : "border-yellow-400"}`} data-aos="zoom-in" data-aos-delay="940">
      <div className="bg-yellow-400 rounded-t-2xl p-6 text-center" data-aos="fade-up" data-aos-delay="960">
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
    <div className={`border rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`} data-aos="zoom-in" data-aos-delay="980">
      <div className="bg-yellow-400 rounded-t-2xl p-6 text-center" data-aos="fade-up" data-aos-delay="1000">
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
