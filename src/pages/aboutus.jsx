import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import aboutHero from "../assets/abouthero.mp4";
import missionImg from "../assets/mission.avif";
import e1 from "../assets/ex1.jpg";
import e2 from "../assets/ex2.webp";
import e3 from "../assets/ex3.jpg";
import e4 from "../assets/ex4.jpg";
import e5 from "../assets/ex5.jpg";
import e6 from "../assets/ex6.jpg";
import awardsImg from "../assets/awards.webp";
import c1 from "../assets/c1.avif";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.webp";
import c5 from "../assets/c5.jpg";
import c6 from "../assets/c6.png";
import c7 from "../assets/c7.png";
import c8 from "../assets/c8.png";
import c9 from "../assets/c9.png";
import c10 from "../assets/c10.jpg";
import mission from "../assets/mission.avif";
import visionImg from "../assets/v.png";
import missionImg1 from "../assets/m.png";

const logos = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10];




const images = [e1, e2, e3, e4, e5, e6];
const team = [
  { img: e1, name: "John Doe", role: "Structural Engineer" },
  { img: e2, name: "Michael Brown", role: "Project Manager" },
  { img: e3, name: "David Johnson", role: "Site Engineer" },
  { img: e4, name: "Emily Davis", role: "Design Engineer" },
  { img: e5, name: "Sarah Wilson", role: "Surveyor" },
  { img: e6, name: "Olivia Smith", role: "Civil Consultant" },
];

const timelineData = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Started with a small but skilled team, focused on delivering reliable residential construction services.",
    align: "left"
  },
  {
    year: "2019",
    title: "First 50 Projects",
    description: "Completed 50+ high-quality residential and commercial projects on time and within budget.",
    align: "right"
  },
  {
    year: "2020",
    title: "Technology Integration",
    description: "Introduced project management software to streamline planning, costing, and execution.",
    align: "left"
  },
  {
    year: "2021",
    title: "Expanded Services",
    description: "Added interior fit-outs and turnkey project solutions to meet client demands.",
    align: "right"
  },
  {
    year: "2022",
    title: "Regional Expansion",
    description: "Began operations in multiple states, successfully delivering large-scale commercial projects.",
    align: "left"
  },
  {
    year: "2023",
    title: "Smart Construction",
    description: "Adopted IoT and AI tools for real-time monitoring and better quality control on projects.",
    align: "right"
  },
  {
    year: "2024",
    title: "500+ Projects Delivered",
    description: "Reached a major milestone of successfully completing over 500 projects across sectors.",
    align: "left"
  },
];
const achievements = [
    "Recognized as Best Infrastructure Company in 2024",
    "Completed 100+ large-scale civil engineering projects",
    "Awarded for Excellence in Sustainable Construction",
    "ISO 9001:2015 Certified for quality management",
    "Top-rated safety performance for three consecutive years",
  ];


export default function AboutPage() {
  // Theme state synced with Header
  const [theme, setTheme] = React.useState('light');
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
      `${theme === 'dark' ? 'min-h-screen bg-black text-white overflow-x-hidden' : 'min-h-screen bg-white text-black overflow-x-hidden'}`
    }>
      
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={aboutHero}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4" data-aos="fade-up" data-aos-duration="1000">
          <h1 
  className="text-4xl md:text-6xl font-bold" 
  style={{ color: theme === 'dark' ? '#fff' : '#fff' }}
>
  Building <span style={{ color: '#facc15' }}>Dreams</span>, Shaping Skylines
</h1>
<p 
  className={`mt-4 max-w-3xl text-lg md:text-xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}
>
  We specialize in bringing your vision to life with expert design, precise planning, and flawless execution.  
  From concept to completion, we deliver projects built to last — with quality, transparency, and on-time delivery at every step.
</p>
        </div>
      </section>

    {/* Our Instructors Section */}
    
    {/* CTA Section */}
    
      {/* Vision, Mission, Values Cards Section */}
      

      {/* Vision & Mission Section */}
     
    {/* Our Growth Through Years Timeline Section */}
    <section className={`w-full py-16 overflow-hidden ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#fff]'}`}> 
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-14 text-yellow-400" data-aos="fade-up" data-aos-delay="100">
      Our Journey Through the Years
    </h2>
    <div className="relative">
      <div className="absolute left-1/2 top-0 w-1 bg-yellow-400 h-full transform -translate-x-1/2"></div>
      <div className="flex flex-col gap-16">
        {timelineData.map((item) => {
          const isLeft = item.align === "left";
          return (
            <div
              key={item.year}
              className="relative flex items-center min-h-[180px]"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {/* Left side */}
              {isLeft && (
                <div className="w-1/2 flex justify-end pr-8">
                  <div
                    className={
                      `rounded-lg shadow-lg p-8 w-full max-w-md ml-auto ` +
                      (theme === 'dark' ? 'bg-[#222]' : 'bg-white')
                    }
                  >
                    <div className="font-bold mb-2 text-yellow-400">{item.year}</div>
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>
                      {item.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Year circle */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center z-10">
                <span className="bg-yellow-400 text-white rounded-full px-4 py-2 font-bold text-lg shadow-lg">
                  {item.year}
                </span>
              </div>

              {/* Right side */}
              {!isLeft && <div className="w-1/2"></div>}
              {item.align === "right" && (
                <div className="w-1/2 flex justify-start pl-8">
                  <div
                    className={
                      `rounded-lg shadow-lg p-8 w-full max-w-md mr-auto ` +
                      (theme === 'dark' ? 'bg-[#222]' : 'bg-white')
                    }
                  >
                    <div className="font-bold mb-2 text-yellow-400">{item.year}</div>
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
              {isLeft && <div className="w-1/2"></div>}
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>

<div className={`w-full py-16 relative font-sans antialiased ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-gray-100 text-gray-800'}`}> 
  <div className="container mx-auto px-6">

    {/* Title and description */}
    <div className="mb-12 text-center lg:text-left" data-aos="fade-up" data-aos-delay="200">
      <h1 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-400'}`}>
        Our Mission and Vision Statement
      </h1>
      <p className={`mt-2 max-w-4xl mx-auto lg:mx-0 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
        This slide shows the mission and vision statement of a construction company 
        describing its desired future position, purpose, goals, and expertise.
      </p>
    </div>

    {/* Main grid */}
    <div className="grid lg:grid-cols-3 gap-8 items-stretch">

      {/* Vision Card */}
      <div className={`p-8 rounded-3xl shadow-lg flex flex-col items-center text-center lg:text-left lg:items-start ${theme === 'dark' ? 'bg-[#222]' : 'bg-white'}`} data-aos="fade-up" data-aos-delay="250">
        <div className="p-4 bg-yellow-400 rounded-full mb-4">
          <img 
            src={visionImg} 
            alt="Vision icon" 
            className="w-8 h-8 object-contain"
          />
        </div>
        <h3 className={`text-xl md:text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Vision
        </h3>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          To become a globally recognized construction leader by driving innovation 
          and delivering projects of unmatched quality and precision.
        </p>
      </div>

      {/* Center Image */}
      <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="300">
        <img 
          src={mission} 
          alt="Team collaboration" 
          className="w-full h-full object-cover rounded-3xl shadow-2xl max-h-[400px]"
        />
      </div>

      {/* Mission Card */}
      <div className={`p-8 rounded-3xl shadow-lg flex flex-col items-center text-center lg:text-left lg:items-start ${theme === 'dark' ? 'bg-[#222]' : 'bg-white'}`} data-aos="fade-up" data-aos-delay="350">
        <div className="p-4 bg-yellow-400 rounded-full mb-4">
          <img 
            src={missionImg1} 
            alt="Mission icon" 
            className="w-8 h-8 object-contain"
          />
        </div>
        <h3 className={`text-xl md:text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Mission
        </h3>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          To deliver cost-effective, sustainable, and customer-centric construction 
          solutions while maintaining excellence and integrity.
        </p>
      </div>

    </div>
  </div>
</div>



   
   



    {/* End Timeline Section */}
    {/* Awards & Certificates Section */}
    <section className={`py-20 ${theme === "dark" ? "bg-[#000]" : "bg-white"} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center" data-aos="fade-up" data-aos-delay="300">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              theme === "dark" ? "text-yellow-400" : "text-yellow-400"
            }`}
          >
            Our Achievements & Awards
          </h2>
          <p 
            className={`text-lg leading-relaxed text-justify ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Over the years, we’ve been recognized for delivering world-class 
            construction projects with unmatched quality and precision. Our 
            awards highlight our commitment to excellence, innovation, and 
            sustainable engineering practices.
          </p>
          <ul className="space-y-3 list-disc pl-5">
            {achievements.map((item, index) => (
              <li 
                key={index} 
                className={`text-lg leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center" data-aos="fade-up" data-aos-delay="350">
          <img 
            src={awardsImg} 
            alt="Awards and Achievements" 
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>

  <section className={`py-20 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'} overflow-hidden`}>
  <div className="max-w-7xl mx-auto px-6">
    <h2 className={`text-3xl md:text-4xl font-bold text-center mb-14 ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-400'}`} data-aos="fade-up" data-aos-delay="400">
      Meet Our Civil Engineers
    </h2>

    <div className="grid lg:grid-cols-3 gap-10">
      {team.map((member, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl shadow-lg group"
          data-aos="fade-up"
          data-aos-delay={450 + index * 50}
        >
          {/* Team Member Image */}
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
          />

          {/* Yellow overlay on hover */}
          <div className="absolute inset-0 bg-yellow-400/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-4">
            <a href="#" className={`text-black text-2xl hover:text-white`}>
              <FaLinkedin />
            </a>
            <a href="#" className={`text-black text-2xl hover:text-white`}>
              <FaTwitter />
            </a>
            <a href="#" className={`text-black text-2xl hover:text-white`}>
              <FaInstagram />
            </a>
          </div>

          {/* Name and Role */}
          <div className={`absolute bottom-0 left-0 right-0 ${theme === 'dark' ? 'bg-black/80' : 'bg-white/90'} text-center py-4`}>
            <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-yellow-400' : 'text-gray-900'}`}>
              {member.name}
            </h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {member.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



    <section
      className={`w-full py-12 relative w-full ${theme === "dark" ? "bg-[#000]" : "bg-[#f9f9f9]"} overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
  className={`text-3xl font-bold text-center ${
    theme === "dark" ? "text-yellow-400" : "text-gray-800"
  }`}
  data-aos="fade-up" data-aos-delay="500"
>
  Our Trusted Partners
</h2>
<p
  className={`text-lg text-center mt-2 mb-8 ${
    theme === "dark" ? "text-gray-400" : "text-gray-600"
  }`}
  data-aos="fade-up" data-aos-delay="520"
>
  Collaborating with industry leaders to build a better tomorrow.
</p>


        {/* SCROLLING CONTAINER */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll hover:[animation-play-state:paused] ">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-48 h-28 flex hover:scale-110 transition duration-500 items-center justify-center mx-4"
              >
                <img
                  src={logo}
                  alt={`Partner ${idx + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INLINE CSS BELOW SECTION */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>

    

    
    </div>
  );
}
