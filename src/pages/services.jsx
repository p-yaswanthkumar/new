import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import serviceHeroVideo from "../assets/service.mp4";
import s1 from "../assets/s1.webp";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.webp";
import s5 from "../assets/s5.webp";
import s6 from "../assets/s6.jpeg";
import ex1 from "../assets/ex1.webp";
import ex2 from "../assets/exm2.jpg";
import ex3 from "../assets/exm3.jpeg";
import ex4 from "../assets/ex4.avif";
import ex5 from "../assets/exm5.webp";
import cta from "../assets/cta.jpg";

import { useTranslation } from 'react-i18next';

const images = [
    { src: ex1, title: "Luxury Villa", desc: "Modern design with premium finish" },
    { src: ex2, title: "Corporate Office", desc: "Functional and elegant spaces" },
    { src: ex3, title: "Retail Store", desc: "Inviting layouts to drive sales" },
    { src: ex4, title: "Urban Apartment", desc: "Smart use of compact space" },
    { src: ex5, title: "Signature Project", desc: "Defining architectural excellence" },
  ];
const communityPrograms = [
  {
    title: "Landmark Projects",
    description:
      "We have successfully completed over 500 residential, commercial, and industrial projects, setting benchmarks in quality and timely delivery.",
    stat: "500+ Projects Delivered",
  },
  {
    title: "Green Construction",
    description:
      "By adopting eco-friendly materials and energy-efficient designs, we've reduced project-related carbon emissions by 30%.",
    stat: "30% Carbon Footprint Reduction",
  },
  {
    title: "Skilled Workforce Training",
    description:
      "We have trained over 1,000 workers and engineers in advanced construction methods, ensuring safety and precision at every site.",
    stat: "1,000+ Workers Trained",
  },
  {
    title: "Community Infrastructure",
    description:
      "We’ve developed schools, hospitals, and community centers, improving access to essential services in underserved areas.",
    stat: "50+ Social Projects",
  },
  {
    title: "Safety First Initiative",
    description:
      "With regular safety drills and strict compliance protocols, we've achieved a remarkable safety record across all projects.",
    stat: "Zero Major Incidents",
  },
  {
    title: "Innovation in Engineering",
    description:
      "Our team leverages modern technology, including BIM and automated machinery, to optimize costs and enhance structural durability.",
    stat: "5+ Cutting-edge Innovations",
  },
];




export default function ServiceHero() {

  // Theme state synced with Header
  const [theme, setTheme] = React.useState('light');
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.0.title', 'Residential Construction'),
      description: t('services.0.description', 'From concept to completion, we deliver high-quality homes tailored to your lifestyle and budget. Our residential construction services cover architectural design, structural planning, material selection, and on-site project management to ensure your dream home is delivered on time and to the highest standard. Whether it’s a luxury villa, modern apartment, or budget-friendly housing, we provide end-to-end solutions including interior finishing, landscaping, and smart home integrations. We focus on sustainability, energy efficiency, and safety, ensuring your home is both beautiful and future-ready.'),
      image: s1,
      link: "/residential-construction",
    },
    {
      title: t('services.1.title', 'Commercial Construction'),
      description: t('services.1.description', 'We design and build commercial spaces that drive business success. From office complexes and retail outlets to restaurants and mixed-use developments, our team manages every detail with precision. We ensure compliance with building codes, accessibility standards, and energy efficiency requirements, delivering modern, functional spaces tailored to your brand and operational needs. Our approach emphasizes durability, cost control, and seamless coordination between architects, engineers, and contractors to ensure timely delivery with no compromise on quality.'),
      image: s2,
      link: "/commercial-construction",
    },
    {
      title: t('services.2.title', 'Interior Fit-outs'),
      description: t('services.2.description', 'Transform any space into a fully functional and aesthetically pleasing environment. Our interior fit-out services include space planning, custom furniture, modular solutions, lighting design, false ceilings, flooring, and high-end finishes. We specialize in both residential and commercial interiors, ensuring optimized layouts, premium material usage, and flawless execution. With a focus on modern design trends and ergonomic solutions, we create interiors that enhance productivity, comfort, and visual appeal while maintaining budgetary efficiency.'),
      image: s3,
      link: "/interior-fitouts",
    },
    {
      title: t('services.3.title', 'Renovation & Remodeling'),
      description: t('services.3.description', 'Breathe new life into old spaces with our renovation and remodeling expertise. We handle structural upgrades, modern redesigns, plumbing and electrical rewiring, and complete interior overhauls. Whether it\'s modernizing a home, upgrading office interiors, or restoring heritage properties, our team ensures minimal disruption while delivering stunning results. We emphasize sustainable materials, space optimization, and innovative design approaches that increase property value, functionality, and aesthetics, tailored exactly to your vision.'),
      image: s4,
      link: "/renovation-remodeling",
    },
    {
      title: t('services.4.title', 'Design, Planning & Execution'),
      description: t('services.4.description', 'Get comprehensive construction solutions under one roof. We provide architectural design, structural engineering, 3D visualization, and complete project execution. Our planning process ensures accurate budgeting, efficient resource allocation, and timely delivery, avoiding delays and cost overruns. By integrating advanced project management tools, we maintain transparency at every stage, giving clients real-time updates on progress. Our goal is to bring your vision to life with precision, creativity, and uncompromised quality.'),
      image: s5,
      link: "/design-planning-execution",
    },
    {
      title: t('services.5.title', 'Project Management & Consultation'),
      description: t('services.5.description', 'Our expert consultation and project management services ensure that your construction projects run smoothly, efficiently, and within budget. We provide feasibility studies, cost estimation, contract management, vendor coordination, and quality audits to ensure compliance with all safety and legal standards. Using modern tools for scheduling, monitoring, and reporting, we help you avoid delays, manage risks effectively, and achieve optimal results. Whether for small developments or large-scale infrastructure projects, our expertise guarantees flawless delivery.'),
      image: s6,
      link: "/project-management-consultation",
    },
  ];
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
  return (
    <div className={
      `${theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}`
    }>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={serviceHeroVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-5xl md:text-6xl font-bold" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
  Build Your <span style={{ color: '#facc15' }}>Vision</span>
</h1>
<p
  className={`mt-6 text-xl md:text-2xl max-w-3xl ${
    theme === 'dark' ? 'text-white' : 'text-white'
  }`}
>
  Discover expert solutions in <span className="text-yellow-400 font-semibold">Project Management</span>, 
  <span className="text-yellow-400 font-semibold"> Design & Planning</span>, 
  and <span className="text-yellow-400 font-semibold">Construction Execution</span>.  
  We turn concepts into reality — on time, on budget, with uncompromising quality.
</p>

        </div>
      </section>
      {/* Service Steps Section */}
      

      {/* Services Section */}
      <section
  className={`py-16 ${theme === 'dark' ? 'bg-[#111111]' : 'bg-[#f9fafb]'}`}
>
  <div className="container mx-auto px-4">
    <h2
      className="text-4xl font-bold text-center mb-12"
      style={{ color: '#fecc15' }}
      data-aos="fade-up" data-aos-delay="100"
    >
      Explore Our Construction Expertise
    </h2>

    <div className="grid gap-16">
      {services.map((service, index) => (
        <div
          key={index}
          className="grid md:grid-cols-2 items-center gap-8"
          data-aos="fade-up" data-aos-delay={120 + index * 40}
        >
          {/* Image */}
          <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-80 object-cover rounded-2xl shadow-xl border border-gray-300"
              data-aos="fade-up" data-aos-delay={140 + index * 40}
            />
          </div>

          {/* Content */}
          <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
            <h3
              className="text-3xl font-semibold mb-4"
              style={{ color: '#fecc15' }}
              data-aos="fade-up" data-aos-delay={160 + index * 40}
            >
              {service.title}
            </h3>
            <p
              className={
                (theme === 'dark'
                  ? 'text-gray-300 mb-6'
                  : 'text-gray-800 mb-6') + ' text-justify leading-relaxed'
              }
              data-aos="fade-up" data-aos-delay={180 + index * 40}
            >
              {service.description}
            </p>
            <Link
              to={service.link}
              className={
                `px-6 py-3 font-semibold rounded-lg transition inline-block shadow-md ` +
                (theme === 'dark'
                  ? 'bg-[#fecc15] text-black hover:bg-yellow-400'
                  : 'bg-yellow-400 text-white hover:bg-blue-500')
              }
              data-aos="fade-up" data-aos-delay={200 + index * 40}
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      <section className={
  `py-16 ${theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-[#f5f5f5]'}`
}>
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12" style={{ color: theme === 'dark' ? '#FFD700' : '#333' }} data-aos="fade-up" data-aos-delay="300">
      How to Get Started
    </h2>
    <div className="grid md:grid-cols-4 gap-10">
      {/* Step 1 */}
      <div className="flex flex-col items-center hover:scale-105 transition transform text-center" data-aos="fade-up" data-aos-delay="320">
        <div className={
          `rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ` +
          (theme === 'dark' ? 'bg-[#333]' : 'bg-[#fff]')
        }>
          <span className="text-3xl font-bold" style={{ color: '#FFD700' }}>1</span>
        </div>
        <h3 className="text-xl font-semibold mb-2" style={{ color: theme === 'dark' ? '#FFD700' : '#333' }}>
          Share Your Vision
        </h3>
        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
          Tell us about your project—whether it's a home, office, or commercial space.
        </p>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-center hover:scale-105 transition transform text-center" data-aos="fade-up" data-aos-delay="360">
        <div className={
          `rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ` +
          (theme === 'dark' ? 'bg-[#333]' : 'bg-[#fff]')
        }>
          <span className="text-3xl font-bold" style={{ color: '#FFD700' }}>2</span>
        </div>
        <h3 className="text-xl font-semibold mb-2" style={{ color: theme === 'dark' ? '#FFD700' : '#333' }}>
          Get a Custom Plan
        </h3>
        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
          Our team designs a tailored plan including cost estimates and timelines.
        </p>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-center hover:scale-105 transition transform text-center" data-aos="fade-up" data-aos-delay="400">
        <div className={
          `rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ` +
          (theme === 'dark' ? 'bg-[#333]' : 'bg-[#fff]')
        }>
          <span className="text-3xl font-bold" style={{ color: '#FFD700' }}>3</span>
        </div>
        <h3 className="text-xl font-semibold mb-2" style={{ color: theme === 'dark' ? '#FFD700' : '#333' }}>
          Watch Us Build
        </h3>
        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
          Sit back while we handle construction, ensuring quality at every stage.
        </p>
      </div>

      {/* Step 4 */}
      <div className="flex flex-col items-center hover:scale-105 transition transform text-center" data-aos="fade-up" data-aos-delay="440">
        <div className={
          `rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ` +
          (theme === 'dark' ? 'bg-[#333]' : 'bg-[#fff]')
        }>
          <span className="text-3xl font-bold" style={{ color: '#FFD700' }}>4</span>
        </div>
        <h3 className="text-xl font-semibold mb-2" style={{ color: theme === 'dark' ? '#FFD700' : '#333' }}>
          Move In & Enjoy
        </h3>
        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
          Get the keys to your finished project, built exactly to your expectations.
        </p>
      </div>
    </div>
  </div>
</section>

 {/* Projects Section */}
<section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-50'} overflow-hidden`}>
  {/* Section heading */}
  <div className="text-center mb-12">
    <h2
      className={`text-4xl md:text-5xl font-bold ${
        theme === 'dark' ? 'text-white' : 'text-gray-800'
      }`}
      data-aos="fade-up" data-aos-delay="400"
    >
      Our <span className="text-yellow-400">Projects</span>
    </h2>
    <p
      className={`mt-4 text-lg md:text-xl ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}
      data-aos="fade-up" data-aos-delay="420"
    >
      A glimpse of our finest construction and design works
    </p>
  </div>

  {/* Grid container */}
  <div className="max-w-6xl mx-auto grid  lg:grid-cols-3 gap-6">
    {/* ex5 big image (on desktop spans 2 rows, single col on mobile) */}
    <div className="relative group overflow-hidden rounded-2xl shadow-lg md:row-span-2" data-aos="fade-up" data-aos-delay="440">
      <img
        src={images[4].src}
        alt={images[4].title}
        className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
        data-aos="fade-up" data-aos-delay="460"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto bg-yellow-400 transition-all duration-500">
        <h3 className="text-2xl font-bold text-black px-4 py-2 rounded-lg mb-2">{images[4].title}</h3>
        <p className="text-lg text-black px-3 py-1 rounded">{images[4].desc}</p>
      </div>
    </div>

    {/* Other images */}
    {images.slice(0, 4).map((img, idx) => (
      <div key={idx} className="relative group overflow-hidden rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay={500 + idx * 40}>
        <img
          src={img.src}
          alt={img.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
          data-aos="fade-up" data-aos-delay={520 + idx * 40}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto bg-yellow-400 transition-all duration-500">
          <h3 className="text-xl font-bold text-black px-3 py-1 rounded mb-1">{img.title}</h3>
          <p className="text-black px-2 py-1 rounded">{img.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Community Impact Section */}
<section className={`py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-100'} overflow-hidden`}>
  <div className="container mx-auto px-4">
    {/* Heading */}
    <h2 className={`text-4xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-black'}`} data-aos="fade-up" data-aos-delay="600">
      Community Impact & <span style={{ color: '#fecc15' }}>Social Responsibility</span>
    </h2>

    {/* Grid */}
    <div className="grid gap-8 md:grid-cols-3">
      {communityPrograms.map((program, index) => (
        <div
          key={index}
          className={`pt-3 pb-6 px-6 rounded-lg shadow-md flex flex-col justify-between ${theme === 'dark' ? 'bg-[#222]' : 'bg-white'}`}
          data-aos="fade-up" data-aos-delay={620 + index * 40}
        >
          <div>
            <h3 className={`text-xl text-justify font-semibold mb-2 ${theme === 'dark' ? 'text-[#fecc15]' : 'text-black'}`} data-aos="fade-up" data-aos-delay={640 + index * 40}>
              {program.title}
            </h3>
            <p className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} text-justify mb-3`} data-aos="fade-up" data-aos-delay={660 + index * 40}>
              {program.description}
            </p>
          </div>
          <div className="flex justify-center">
            <span className="inline-block bg-[#fecc15] rounded-full text-white font-semibold align-middle px-4 py-2" data-aos="fade-up" data-aos-delay={680 + index * 40}>
              {program.stat}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>






     

      {/* Technology & Tools Section */}
     <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#fff]'} overflow-hidden`}>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
    {/* LEFT CONTENT */}
    <div>
      <h2 
        className="text-4xl md:text-5xl font-bold mb-6 leading-tight" 
        style={{ color: '#facc15' }}
        data-aos="fade-up" data-aos-delay="700"
      >
        Ready to Build With Us?
      </h2>
      <p 
        className={`text-lg md:text-xl mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
        data-aos="fade-up" data-aos-delay="720"
      >
        Join hands with our expert team to bring your vision to life — from concept to completion.  
        Let's create something extraordinary, together.
      </p>
      <a 
        href="/contactus" 
        className={
          `inline-block font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ` +
          (theme === 'dark' 
            ? 'bg-yellow-400 text-black hover:bg-[#00BFFF] hover:text-white' 
            : 'bg-yellow-400 text-black hover:bg-[#00BFFF] hover:text-white'
          )
        }
        data-aos="fade-up" data-aos-delay="740"
      >
        Contact Us
      </a>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center" data-aos="fade-up" data-aos-delay="760">
      <img 
        src={cta} 
        alt="Join our journey" 
        className="rounded-2xl shadow-lg w-full md:w-[90%] object-cover"
      />
    </div>
  </div>
</section>

    </div>
  );
}
