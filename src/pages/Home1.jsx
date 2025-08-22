import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation, Link } from "react-router-dom";
import heroVideo from "../assets/herohome.mp4";
import impactImg from "../assets/impact.jpg";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import r from "../assets/r1.jpg";
import c from "../assets/c1.jpg";
import i from "../assets/i1.jpg";

// Helper for count up animation
function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let startTime = null;
    function animateCountUp(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        ref.current = requestAnimationFrame(animateCountUp);
      } else {
        setCount(target);
      }
    }
    ref.current = requestAnimationFrame(animateCountUp);
    return () => cancelAnimationFrame(ref.current);
  }, [target, duration]);
  return count;
}

// Animated metric card for Our Impact
function ImpactMetric({ value, suffix, label, delay, color }) {
  const [start, setStart] = useState(false);
  const ref = useRef();
  const count = useCountUp(start ? value : 0, 2000);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let observer;
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStart(true);
          } else {
            setStart(false);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(node);
    }
    return () => {
      if (observer && node) observer.unobserve(node);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="p-6 bg-white bg-opacity-80 rounded-lg shadow"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-4xl font-bold" style={{ color }}>{count}{suffix}</h3>
      <p className="mt-2 text-gray-700">{label}</p>
    </div>
  );
}

// Child component for instructor form

// MAIN COMPONENT
export default function Home1() {
  const location = useLocation();
  useEffect(() => {
  if (location.state?.fromNav) {
    window.scrollTo(0, 0);
  }
}, [location]);
  // Theme state synced with Header
  const [theme, setTheme] = useState('light');
  useEffect(() => {
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
  // Instructor form state and logic (must be at top level, before return)
const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    siteArea: "",
    plotLocation: "",
    construction: "",
    houseType: ""
  });

  const [showToast, setShowToast] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store in localStorage
    const savedForms = JSON.parse(localStorage.getItem("customPackages") || "[]");
    savedForms.push(formData);
    localStorage.setItem("customPackages", JSON.stringify(savedForms));

    // Show toast
    setShowToast(true);
    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false); // start fade-out
    }, 2500);

    setTimeout(() => {
      setShowToast(false); // remove completely
    }, 3000);

    // Reset form
    setFormData({
      name: "",
      phoneNumber: "",
      siteArea: "",
      plotLocation: "",
      construction: "",
      houseType: ""
    });
  };

  // ...existing code...
  const [streak, setStreak] = useState(0);
  const [selected, setSelected] = useState(null);
  const [question, setQuestion] = useState({});
  const [attemptedToday, setAttemptedToday] = useState(false);
  const [area, setArea] = useState("");
  const [floors, setFloors] = useState(1);
  const [quality, setQuality] = useState("standard");
  const [projectLocation, setProjectLocation] = useState("urban");
  const [extras, setExtras] = useState({ interior: false, landscaping: false });
  const [estimate, setEstimate] = useState(null);

  // ✅ Calculation function
  const calculateEstimate = (e) => {
    e.preventDefault();

    const qualityRates = {
      standard: 1500,
      premium: 2000,
      luxury: 3000,
    };

    const locationFactor = {
      urban: 1.2,
      semiUrban: 1.0,
      rural: 0.85,
    };

    let cost = area * floors * qualityRates[quality];
    cost *= locationFactor[projectLocation];

    if (extras.interior) cost += area * 400;
    if (extras.landscaping) cost += area * 200;

    setEstimate(cost.toFixed(2));
  };
  
  // Carousel logic moved to top level
  
const categories = {
  Residential: {
  img: r,
  heading: "Residential Projects",
  desc: "Our residential projects are designed with families in mind, blending comfort, functionality, and aesthetics to create homes that truly enhance everyday living. From contemporary apartments and gated communities to luxury villas and independent houses, we bring architectural elegance and structural durability together. Every project is carefully planned with attention to detail from high quality  utilization that maximizes natural light, ventilation, and energy efficiency. We also focus on integrating modern amenities and future-ready designs, ensuring homes that not only meet today’s lifestyle needs but also add long-term value. Whether it’s a full-scale renovation or a new build from the ground up, our team is committed to on-time delivery, superior craftsmanship,  security, and pride of ownership.",
},

Commercial: {
  img: c,
  heading: "Commercial Projects",
  desc: "We deliver high-performance commercial spaces that balance design excellence with business functionality, helping enterprises grow in dynamic markets. Our portfolio includes office complexes, retail outlets, shopping malls, co-working hubs, and mixed-use developments — all engineered to meet modern business requirements. We emphasize efficient layouts that improve workflow, cutting-edge designs that enhance brand identity, and sustainable solutions that reduce operational costs. Each project is built with advanced technology, strong compliance with international safety standards, and premium finishes to ensure long-term durability. By collaborating  also boost productivity, inspire employees, and position businesses for long-term success in competitive industries.",
},

  Industrial: {
    img: i,
    heading: "Industrial Projects",
    desc: "Industrial construction demands strength, reliability, and scalability — and that’s where we excel. Our projects range from warehouses and manufacturing units to logistics hubs and large-scale industrial complexes. We prioritize structural safety, operational efficiency, and compliance with regulatory standards to deliver facilities that withstand demanding environments. With advanced engineering techniques and high-grade materials, we ensure every project supports heavy-duty operations while allowing room for future expansion. Our industrial solutions empower businesses to scale faster, operate smoothly, and achieve long-term growth.",
  },
};


  const [activeCategory, setActiveCategory] = useState("Residential");


  

  
  return (
    <div className={
      `${theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-white'}`
    }>
      
      {/* Hero Section - Full width */}
      <section
        className="relative w-full h-screen overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4" data-aos="fade-up" data-aos-duration="1000">
          <h1 
  className="text-4xl md:text-6xl font-bold" 
  style={{ color: theme === 'dark' ? '#fff' : '#fff' }}
>
  Build Your Dream with <span style={{ color: '#facc15' }}>Expert Construction</span>
</h1>

<p 
  className={`mt-4 max-w-4xl text-lg md:text-xl ${
    theme === 'dark' ? 'text-fff' : 'text-fff'
  }`}
  data-aos="fade-up" data-aos-delay="200"
>
  From homes to commercial spaces, we deliver top-quality construction solutions 
  that stand the test of time. With expert engineers, skilled craftsmen, and 
  modern technology, we ensure every project is built with precision, safety, 
  and durability. Whether you’re planning a new build, renovation, or 
  infrastructure project, we bring your vision to life — on time and within budget.
</p>

          <button
            onClick={() => window.scrollTo({ top: document.getElementById('project-categories').offsetTop, behavior: 'smooth' })}
            className={
              `${theme === 'dark' ? 'bg-[#facc15] text-white hover:bg-[#ca8a04]' : 'bg-[#facc15] text-white hover:bg-[#ca8a04]'} px-6 py-3 mt-5 rounded-lg transition-colors font-semibold`
            }
            data-aos="zoom-in" data-aos-delay="400"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Daily Question - Centered container */}
     <section
  className={`w-full py-16 sm:py-20 ${
    theme === "dark" ? "bg-[#222]" : "bg-[#FFF]"
  } overflow-hidden`}
  id="project-categories"
  data-aos="fade-up"
  data-aos-delay="100"
>
  <div className="max-w-7xl mx-auto px-4">
    {/* Heading */}
    <h2
      className="text-4xl font-bold text-center mb-4"
      style={{ color: theme === "dark" ? "#fff" : "#000" }}
      data-aos="fade-up"
    >
      Explore Our Expertise
    </h2>
    <p
      className={`text-lg text-center mb-12 ${
        theme === "dark" ? "text-gray-300" : "text-gray-600"
      }`}
      data-aos="fade-up" data-aos-delay="200"
    >
      From homes to industries — discover the categories of projects we proudly
      deliver with quality and precision.
    </p>

    {/* Filter Buttons */}
    <div className="flex justify-center gap-6 mb-12" data-aos="fade-up" data-aos-delay="400">
      {Object.keys(categories).map((name) => (
        <button
          key={name}
          onClick={() => setActiveCategory(name)}
          className={`px-6 py-2 rounded-lg font-medium transition ${
            activeCategory === name
              ? "bg-yellow-400 text-black"
              : theme === "dark"
              ? "bg-[#111] text-gray-300 hover:bg-[#222]"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          data-aos="zoom-in"
        >
          {name}
        </button>
      ))}
    </div>

    {/* Content Layout */}
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Left Image */}
      <div className="w-full" data-aos="fade-right" data-aos-delay="200">
        <img
          src={categories[activeCategory].img}
          alt={categories[activeCategory].heading}
          className="w-full h-[350px] object-cover rounded-2xl shadow-lg transition-all duration-500"
        />
      </div>

      {/* Right Content */}
      <div className="text-left" data-aos="fade-left" data-aos-delay="400">
        <h3 className="text-3xl font-semibold mb-4 text-yellow-400">
          {categories[activeCategory].heading}
        </h3>
        <p
          className={`text-lg text-justify ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {categories[activeCategory].desc}
        </p>
      </div>
    </div>
  </div>
</section>


      

      {/* Why Choose Us - Full width grid */}
<section
      className={`w-full py-16 sm:py-20 ${
        theme === "dark" ? "bg-[#000]" : "bg-gray-100"
      } overflow-hidden`}
      id="services"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2
          className="text-4xl font-bold mb-4"
          style={{ color: theme === "dark" ? "#facc15" : "#facc15" }}
        >
          We Provide Services
        </h2>
        <p
          className={`text-lg mb-12 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          From planning to execution, we deliver high-quality construction
          solutions tailored to your needs.
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3" >
          {/* Residential */}
          <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition bg-white" style={{ backgroundColor: theme === "dark" ? "#222" : "#fff" }}>
            <img src={img1} alt="Residential" className="h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold  text-black mb-4" style={{ color: theme === "dark" ? "#fff" : "#000" }}>Residential</h3>
            <p className="text-gray-600 mb-6" style={{ color: theme === "dark" ? "#fff" : "#000" }}>
              From modern homes to luxury apartments, we build spaces that are
              stylish, functional, and durable.
            </p>
<Link to="/contactus" className="bg-[#fed700] text-black font-medium py-2 px-6 rounded-lg hover:bg-[#e5c400] transition ">
  Get Started
</Link>
          </div>

          {/* Interior Designs */}
          <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition bg-white" style={{ backgroundColor: theme === "dark" ? "#222" : "#fff" }}>
            <img src={img2} alt="Interior Designs" className="h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-black mb-4" style={{ color: theme === "dark" ? "#fff" : "#000" }}>Interior Designs</h3>
            <p className="text-gray-600 mb-6" style={{ color: theme === "dark" ? "#fff" : "#000" }}>
              Creative and functional designs that transform your interiors into
              elegant and comfortable spaces.
            </p>
            <Link to="/contactus" className="bg-[#fed700] text-black font-medium py-2 px-6 rounded-lg hover:bg-[#e5c400] transition ">
  Get Started
</Link>
          </div>

          {/* Structural Repair */}
          <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition bg-white" style={{ backgroundColor: theme === "dark" ? "#222" : "#fff" }}>
            <img src={img3} alt="Structural Repair" className="h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-black mb-4" style={{ color: theme === "dark" ? "#fff" : "#000" }}>Structural Repair</h3>
            <p className="text-gray-600 mb-6" style={{ color: theme === "dark" ? "#fff" : "#000" }}>
              Reliable repair and strengthening services to ensure safety and
              long-term stability of your structures.
            </p>
         <Link to="/contactus" className="bg-[#fed700] text-black font-medium py-2 px-6 rounded-lg hover:bg-[#e5c400] transition ">
  Get Started
</Link>
          </div>
        </div>
      </div>
    </section>




      {/* Add your other sections here... */}

   <section className={`w-full min-h-screen flex items-center justify-center  
  ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} overflow-hidden`}
    data-aos="fade-up"
    data-aos-delay="300"
  >
  <div className={`rounded-2xl shadow-2xl w-full max-w-4xl p-8 
    ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
    
    {/* Section Heading */}
    <h2 
      className="text-3xl md:text-4xl font-bold text-center mb-6"
      style={{ color: theme === "dark" ? "#facc15" : "#facc15" }}
    >
      Construction Cost Estimator
    </h2>

    <form
      onSubmit={calculateEstimate}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* Area */}
      <div>
        <label 
          className={`block mb-2 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Built-up Area (sqft)
        </label>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          required
          className={`w-full px-4 py-2 rounded-lg border 
            ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} 
            focus:ring-2 focus:ring-yellow-400 outline-none transition`}
        />
      </div>

      {/* Floors */}
      <div>
        <label 
          className={`block mb-2 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Number of Floors
        </label>
        <input
          type="number"
          min="1"
          value={floors}
          onChange={(e) => setFloors(e.target.value)}
          required
          className={`w-full px-4 py-2 rounded-lg border 
            ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} 
            focus:ring-2 focus:ring-yellow-400 outline-none transition`}
        />
      </div>

      {/* Quality */}
      <div>
        <label 
          className={`block mb-2 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Construction Quality
        </label>
        <select
          value={quality}
          onChange={(e) => setQuality(e.target.value)}
          className={`w-full px-4 py-2 rounded-lg border 
            ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} 
            focus:ring-2 focus:ring-yellow-400 outline-none transition`}
        >
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
          <option value="luxury">Luxury</option>
        </select>
      </div>

      {/* Location */}
      <div>
        <label 
          className={`block mb-2 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Project Location
        </label>
        <select
          value={projectLocation}
          onChange={(e) => setProjectLocation(e.target.value)}
          className={`w-full px-4 py-2 rounded-lg border 
            ${theme === 'dark' ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} 
            focus:ring-2 focus:ring-yellow-400 outline-none transition`}
        >
          <option value="urban">Urban</option>
          <option value="semiUrban">Semi-Urban</option>
          <option value="rural">Rural</option>
        </select>
      </div>

      {/* Extras */}
      <div className="md:col-span-2 flex flex-col gap-3">
        <label 
          className={`block mb-2 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Additional Services
        </label>
        <div className="flex gap-6 flex-wrap">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={extras.interior}
              onChange={(e) =>
                setExtras({ ...extras, interior: e.target.checked })
              }
              className="accent-yellow-400"
            />
            Interior Work (+ ₹400/sqft)
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={extras.landscaping}
              onChange={(e) =>
                setExtras({ ...extras, landscaping: e.target.checked })
              }
              className="accent-yellow-400"
            />
            Landscaping (+ ₹200/sqft)
          </label>
        </div>
      </div>

      {/* Button */}
      <div className="md:col-span-2 flex justify-center">
        <button
          type="submit"
          className="px-8 py-3 rounded-lg bg-yellow-400 text-gray-900 font-semibold 
                     hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-300 transition"
        >
          Calculate Estimate
        </button>
      </div>
    </form>

    {/* Result */}
    {estimate && (
      <div className="mt-8 text-center">
        <h3 
          className="text-2xl font-bold"
          style={{ color: theme === "dark" ? "#facc15" : "#facc15" }}
        >
          Estimated Cost
        </h3>
        <p 
          className="text-3xl font-extrabold mt-2"
          style={{ color: theme === "dark" ? "#facc15" : "#facc15" }}
        >
          ₹ {estimate}
        </p>
      </div>
    )}
  </div>
</section>

    





    

    {/* Testimonial Carousel Section */}
    

<section
  className="w-full relative py-16 overflow-hidden"
  style={{
    backgroundImage: `url(${impactImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  data-aos="fade-up"
  data-aos-delay="400"
>
  {/* Overlay gradient */}
  <div 
  className="absolute inset-0" 
  style={{ background: 'rgba(250,204,21,0.3)' }} // yellow-400 with transparency
></div>

<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
  <h2 
  className="text-5xl font-bold text-center mb-12" 
  style={{ color: '#fff' }}
>
  Building a Legacy of Excellence
</h2>


  <div className="grid lg:grid-cols-4  rounded-full gap-8 text-center">
    {/* Metric 1 */}
    <ImpactMetric 
      value={250} 
      suffix="+" 
      label="Projects Completed" 
      delay={100} 
      color="#000" // yellow-400
    />
    {/* Metric 2 */}
    <ImpactMetric 
      value={50} 
      suffix="+" 
      label="Ongoing Constructions" 
      delay={200} 
      color="#000" 
    />
    {/* Metric 3 */}
    <ImpactMetric 
      value={30} 
      suffix="+" 
      label="Cities Served" 
      delay={300} 
      color="#000" 
    />
    {/* Metric 4 */}
    <ImpactMetric 
      value={98} 
      suffix="%" 
      label="Client Satisfaction" 
      delay={400} 
      color="#000" 
    />
  </div>
</div>
</section>

<div className="relative" data-aos="fade-up" data-aos-delay="500">
  {/* FORM */}
  <div className={`max-w-full mx-auto shadow-lg rounded-xl p-6 
    ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-gray-900'}`}>
      
    <h2 className={`text-4xl font-bold text-center mb-6 mt-10
      ${theme === 'dark' ? 'text-[#fed700]' : 'text-yellow-400'}`}>
      Need A Custom Package?
    </h2>

    <p className={`text-center mb-10 
      ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
      Please submit the following form and we will get back to you with the best quotation.
    </p>

    <form onSubmit={handleSubmit} 
      className={`p-8 rounded-lg shadow-lg space-y-6 
        ${theme === 'dark' ? 'bg-[#1f1f1f]' : 'bg-white'}`}>
      
      {/* Name */}
      <div>
        <label className="block font-semibold mb-2">Name</label>
        <input 
          type="text" 
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
            ${theme === 'dark' 
              ? 'bg-[#181818] text-white border-gray-600 focus:ring-[#fed700]' 
              : 'bg-white text-black border-gray-300 focus:ring-yellow-400'}`}
          required 
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="block font-semibold mb-2">Phone Number</label>
        <input 
          type="tel" 
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
            ${theme === 'dark' 
              ? 'bg-[#181818] text-white border-gray-600 focus:ring-[#fed700]' 
              : 'bg-white text-black border-gray-300 focus:ring-yellow-400'}`}
          required 
        />
      </div>

      {/* Site Area */}
      <div>
        <label className="block font-medium mb-2">Site Area (Sq.ft)</label>
        <input 
          type="text" 
          name="siteArea"
          placeholder="Enter site area in Sq.ft"
          value={formData.siteArea}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
            ${theme === 'dark' 
              ? 'bg-[#181818] text-white border-gray-600 focus:ring-[#fed700]' 
              : 'bg-white text-black border-gray-300 focus:ring-yellow-400'}`}
          required
        />
      </div>

      {/* Plot Location */}
      <div>
        <label className="block font-medium mb-2">Plot Location</label>
        <input 
          type="text" 
          name="plotLocation"
          placeholder="Enter plot location"
          value={formData.plotLocation}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
            ${theme === 'dark' 
              ? 'bg-[#181818] text-white border-gray-600 focus:ring-[#fed700]' 
              : 'bg-white text-black border-gray-300 focus:ring-yellow-400'}`}
        />
      </div>

      {/* Construction Type */}
      <div>
        <label className="block font-medium mb-2">Construction Type</label>
        <select 
          name="construction"
          value={formData.construction}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
            ${theme === 'dark' 
              ? 'bg-[#181818] text-white border-gray-600 focus:ring-[#fed700]' 
              : 'bg-white text-black border-gray-300 focus:ring-yellow-400'}`}
        >
          <option value="">Select</option>
          <option value="Residential construction">Residential construction</option>
          <option value="Commercial construction">Commercial construction</option>
        </select>
      </div>

      {/* House Type */}
      <div>
        <label className="block font-medium mb-2">House Type</label>
        <select 
          name="houseType"
          value={formData.houseType}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
            ${theme === 'dark' 
              ? 'bg-[#181818] text-white border-gray-600 focus:ring-[#fed700]' 
              : 'bg-white text-black border-gray-300 focus:ring-yellow-400'}`}
        >
          <option value="">Select</option>
          <option value="Ground floor">Ground floor</option>
          <option value="Duplex">Duplex</option>
          <option value="Triplex">Triplex</option>
        </select>
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        className={`w-full font-bold py-3 rounded 
          ${theme === 'dark' 
            ? 'bg-[#fed700] text-black hover:bg-yellow-500' 
            : 'bg-yellow-400 text-black hover:bg-yellow-500'}`}
      >
        Submit
      </button>
    </form>
  </div>

  {/* TOAST */}
  {showToast && (
    <div
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg transition-all duration-500 
        ${toastVisible 
          ? 'opacity-100 translate-y-0 bg-green-600 text-white' 
          : 'opacity-0 translate-y-4 bg-green-600 text-white'}`}
    >
      Your details have been saved!
    </div>
  )}
</div>



    

    </div>
  );
}
