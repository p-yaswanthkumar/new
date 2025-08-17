
import { Link } from "react-router-dom";
import React from "react";


import home2Video from "../assets/home2hero.mp4";
import logo1 from "../assets/1.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.webp";
import logo6 from "../assets/6.png";
import logo7 from "../assets/7.png";
import logo8 from "../assets/8.png";
import logo9 from "../assets/9.png";
import logo10 from "../assets/10.png";

export default function Home2() {
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
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
      };
    }
  }, []);
  const [showRegister, setShowRegister] = React.useState(null); // index of webinar or null
  const [registerForm, setRegisterForm] = React.useState({ name: '', email: '' });

  // Handle registration form input
  const handleRegisterInput = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle registration submit
  const handleRegisterSubmit = (e, webinar) => {
    e.preventDefault();
    if (!registerForm.name || !registerForm.email) return;
    const stored = localStorage.getItem('webinarRegistrations');
    const registrations = stored ? JSON.parse(stored) : [];
    registrations.push({
      ...registerForm,
      webinarTitle: webinar.title,
      webinarDate: webinar.date,
      webinarDescription: webinar.description,
      registeredAt: new Date().toISOString(),
    });
    localStorage.setItem('webinarRegistrations', JSON.stringify(registrations));
    setRegisterForm({ name: '', email: '' });
    setShowRegister(null);
    alert('Registration successful!');
  };
  const [webinars, setWebinars] = React.useState([]);
  React.useEffect(() => {
    const storedWebinars = localStorage.getItem("webinars");
    if (storedWebinars) {
      setWebinars(JSON.parse(storedWebinars));
    }
    const handleStorage = () => {
      const updated = localStorage.getItem("webinars");
      setWebinars(updated ? JSON.parse(updated) : []);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  const offers = [
    {
      title: "50% Off Beginner Courses",
      description: "Kickstart your learning journey with our top beginner courses at half the price.",
      bg: "bg-[#00BFFF]",
    },
    {
      title: "Free Trial for 7 Days",
      description: "Experience our platform for free and explore all features before committing.",
      bg: "bg-[#00BFFF]",
    },
    {
      title: "Certificate Programs",
      description: "Earn recognized certificates for your achievements and boost your resume.",
      bg: "bg-[#00BFFF]",
    },
  ];
  const insights = [
  {
    title: "10K+",
    subtitle: "Students Enrolled",
  },
  {
    title: "500+",
    subtitle: "Expert Instructors",
  },
  {
    title: "120+",
    subtitle: "Courses Available",
  },
  {
    title: "95%",
    subtitle: "Student Satisfaction",
  },
];


  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];
  const scrollRef = React.useRef(null);
  return (
    <div className={
      `${theme === 'dark' ? 'min-h-screen  text-white' : 'min-h-screen  text-white'}`
    }>

      {/* Hero Section */}
      <section
        className="relative w-full h-screen overflow-hidden"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={home2Video}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            Transform Your Future with <span style={{ color: '#00BFFF' }}>Next-Level Learning</span>
          </h1>
          <p className={`mt-4 max-w-4xl text-lg md:text-xl ${theme === 'dark' ? 'text-fff' : 'text-fff'}`}>
            Unlock your potential with our expertly designed courses and interactive learning experiences. 
            Join thousands of learners who are advancing their careers, mastering new skills, and achieving their goals. 
            Our platform combines expert instructors, hands-on projects, flexible schedules, and a supportive community to help you succeed faster. 
            Whether you're looking to start a new career, upskill in your current role, or explore new passions, your learning journey begins here.
          </p>
          <button
            className={
              `mt-6 px-6 py-3 rounded-lg shadow transition font-semibold ` +
              (theme === 'dark' ? 'bg-[#00BFFF] text-white hover:bg-[#00BFFF]' : 'bg-[#00BFFF] text-white hover:bg-[#00BFFF]')
            }
            onClick={() => {
              const el = document.getElementById('upcoming');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Started
          </button>
        </div>
      </section>
      <section
        className={
          `w-full py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00BFFF]'}`
        }
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center" id="upcoming" style={{ color: '#FFF' }}>Upcoming Webinars</h2>
          {webinars.length > 0 ? (
            <div className="grid  lg:grid-cols-3 gap-8">
              {webinars.map((webinar, idx) => (
                <div key={idx} className={
                  `rounded-xl shadow p-6 flex flex-col items-center ` +
                  (theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]')
                }>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#00BFFF' }}>{webinar.title}</h3>
                  <div className={theme === 'dark' ? 'text-gray-400 mb-2' : 'text-gray-600 mb-2'}>{webinar.date}</div>
                  <div className={theme === 'dark' ? 'text-gray-400 mb-2' : 'text-gray-600 mb-2'}>{webinar.time}</div>
                  <div className={theme === 'dark' ? 'text-gray-200 mb-4' : 'text-gray-800 mb-4'}>{webinar.description}</div>
                  <button
                    className={
                      `${theme === 'dark' ? 'bg-[#00BFFF] text-white hover:bg-blue-400' : 'bg-[#00BFFF] text-white hover:bg-blue-500'} px-4 py-2 rounded mb-2 transition-colors`
                    }
                    onClick={() => setShowRegister(idx)}
                  >
                    Register
                  </button>
                  {showRegister === idx && (
                    <form className="w-full mt-2 space-y-2" onSubmit={e => handleRegisterSubmit(e, webinar)}>
                      <input
                        type="text"
                        name="name"
                        value={registerForm.name}
                        onChange={handleRegisterInput}
                        placeholder="Your Name"
                        className={
                          `border rounded px-3 py-2 w-full ` +
                          (theme === 'dark' ? 'bg-[#181818] text-white border-[#00BFFF]' : 'bg-white text-black border-gray-300')
                        }
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={registerForm.email}
                        onChange={handleRegisterInput}
                        placeholder="Your Email"
                        className={
                          `border rounded px-3 py-2 w-full ` +
                          (theme === 'dark' ? 'bg-[#181818] text-white border-[#00BFFF]' : 'bg-white text-black border-gray-300')
                        }
                        required
                      />
                      <div className="flex gap-2">
                        <button type="submit" className={
                          `${theme === 'dark' ? 'bg-[#00BFFF] text-white hover:bg-blue-400' : 'bg-[#00BFFF] text-white hover:bg-blue-500'} rounded px-4 py-2 transition-colors`
                        }>Submit</button>
                        <button type="button" className={
                          `${theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-300 text-black hover:bg-gray-400'} rounded px-4 py-2 transition-colors`
                        } onClick={() => setShowRegister(null)}>Cancel</button>
                      </div>
                    </form>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className={theme === 'dark' ? 'text-gray-400 text-center' : 'text-gray-500 text-center'}>No upcoming webinars at the moment.</p>
          )}
        </div>
      </section>

      {/* Special Offers Section */}
      <section
        className={
          `w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
        }
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#00BFFF' }}>Special Offers</h2>
          <p className={theme === 'dark' ? 'text-gray-200 mb-12' : 'text-gray-700 mb-12'}>
            Grab these limited-time offers to accelerate your learning and make the most of your education journey.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 shadow-lg hover:scale-105 transform transition text-white ` +
                  (theme === 'dark' ? 'bg-[#00BFFF]' : offer.bg)}
              >
                <h3 className="text-2xl font-semibold mb-4">{offer.title}</h3>
                <p className="text-md">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className={
          `w-full py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00bfff]'}`
        }
      >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid text-justify lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div>
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: theme === 'dark' ? '#00BFFF' : '#fff' }}
          >
            Our Impactful Insights
          </h2>
          <p className={theme === 'dark' ? 'text-gray-200 mb-6' : 'text-gray-700 mb-6'} >
            We are proud of the results we deliver for learners worldwide. Our platform is designed to empower students and professionals to achieve their learning goals efficiently.
          </p>
          <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>
            From expert instructors to a wide range of courses, interactive learning, and consistent student satisfaction, our metrics reflect our commitment to quality education.
          </p>
        </div>

        {/* Right Side Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {insights.map((insight, index) => (
            <div key={index} className={`p-6 rounded-2xl shadow hover:shadow-lg transition text-center ` + (theme === 'dark' ? 'bg-[#181818]' : 'bg-white')}>
              <h3 className="text-4xl font-bold" style={{ color: '#00BFFF' }}>{insight.title}</h3>
              <p className={theme === 'dark' ? 'text-gray-200 mt-2' : 'text-gray-700 mt-2'}>{insight.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>




    <section
      className={
        `w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl font-bold text-center mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
        >
          Partnered with <span style={{ color: '#00BFFF' }}>Top Institutions</span> to produce
          <span style={{ color: '#00BFFF' }}> Best Quality Education</span> content for Free
        </h2>
        <p className={theme === 'dark' ? 'text-gray-200 mb-12' : 'text-gray-700 mb-12'}>
          We collaborate with industry-leading organizations to deliver the best learning experience.
        </p>

        <div className="overflow-hidden relative">
          <div
            className="flex animate-logo-scroll"
            style={{ width: `${logos.length * 2 * 120}px` }}
          >
            {/* Duplicate logos for seamless infinite scroll */}
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="flex-shrink-0 px-6" style={{ width: '120px' }}>
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-20 object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes logo-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-logo-scroll {
            animation: logo-scroll 30s linear infinite;
          }
        `}</style>
      </div>

      {/* No animation */}
    </section>


      {/* Upcoming Webinars Section */}
      

      <section
        className={`w-full py-16 flex items-center justify-center ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00BFFF]'}`}
      >
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>Ready to Transform Your Career?</h2>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>Join thousands of learners who have upskilled and advanced their careers with our expert-led online courses. Start your journey today!</p>
          <Link
            to="/contactus"
            className={`inline-block font-semibold px-8 py-4 rounded-lg shadow transition-colors text-xl ${theme === 'dark' ? 'bg-white text-[#00BFFF] hover:bg-gray-200' : 'bg-white text-[#00BFFF] hover:bg-blue-100'}`}
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
