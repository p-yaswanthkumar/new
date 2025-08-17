import React, { useState } from "react";
import cloudHero from "../assets/cloud.mp4";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.avif";

export default function CloudComputingPage() {
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

  const faqs = [
    {
      question: "What is Cloud Computing?",
      answer:
        "Cloud computing delivers scalable IT resources and services over the internet, enabling flexibility, efficiency, and cost savings.",
    },
    {
      question: "Do you offer DevOps automation?",
      answer:
        "Yes, we implement CI/CD pipelines, infrastructure as code, and automated deployments for faster, reliable software delivery.",
    },
    {
      question: "Can you migrate my business to the cloud?",
      answer:
        "Absolutely! We provide seamless cloud migration, modernization, and optimization for businesses of all sizes.",
    },
    {
      question: "Do you support multi-cloud and hybrid environments?",
      answer:
        "Yes, we architect and manage multi-cloud and hybrid solutions for maximum flexibility and resilience.",
    },
    {
      question: "Is security and compliance included?",
      answer:
        "We ensure robust security, monitoring, and compliance for all cloud and DevOps solutions.",
    },
    {
      question: "Do you provide ongoing cloud management?",
      answer:
        "We offer continuous monitoring, optimization, and support to keep your cloud infrastructure running smoothly.",
    },
  ];

  return (
    <div className={theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}>
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-screen grid place-items-center text-center overflow-hidden" style={{ color: theme === 'dark' ? '#fff' : '#222' }}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={cloudHero}
          autoPlay
          loop
          muted
          playsInline
          aria-label="Cloud Computing Hero Background Video"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            Accelerate Innovation with <span style={{ color: '#00bfff' }}>Cloud Computing & DevOps</span>
          </h1>
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            We deliver scalable cloud solutions and DevOps automation to help organizations innovate, optimize, and grow in the digital era.
          </p>
        </div>
      </section>

      {/* Service Includes Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00bfff]'}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-6">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={c1} alt="Cloud Computing Services" className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full" />
          </div>
          {/* Right Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 break-words leading-tight" style={{ color: '#fff' }}>
              What Our Cloud & DevOps Service Includes
            </h2>
            <ul className="space-y-4 text-base sm:text-lg">
              {[
                'Cloud Migration & Modernization',
                'DevOps Automation & CI/CD',
                'Infrastructure as Code',
                'Multi-Cloud & Hybrid Solutions',
                'Security & Compliance',
                'Ongoing Cloud Management',
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

      {/* Who It's For Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          {/* Left Side Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug" style={{ color: theme === 'dark' ? '#00bfff' : '#222' }}>
              Who It's For?
            </h2>
            <p className={`text-lg mb-6 text-justify ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
              Our <span className="font-semibold" style={{ color: '#00bfff' }}>Cloud Computing & DevOps solutions</span> empower organizations to scale, innovate, and deliver faster. From startups to enterprises, we help you leverage the cloud for agility and growth.
            </p>
          </div>
          {/* Right Side Cards */}
          <div className="grid lg:grid-cols-2 gap-6">
            {[
              { title: 'Startups', desc: 'Launch and scale quickly with cloud agility.' },
              { title: 'Enterprises', desc: 'Optimize operations and accelerate delivery.' },
              { title: 'E-commerce', desc: 'Deliver seamless shopping experiences at scale.' },
              { title: 'Healthcare', desc: 'Secure patient data and enable remote care.' },
            ].map((card, idx) => (
              <div key={card.title} className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition ` + (theme === 'dark' ? 'bg-[#222]' : 'bg-[#fdfcf9]')}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#00bfff' }}>{card.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative w-full bg-cover bg-center py-20" style={{ backgroundImage: `url(${c2})` }}>
        <div className="absolute inset-0" style={{ background: theme === 'dark' ? 'rgba(0,191,255,0.7)' : 'rgba(0,191,255,0.7)' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center" style={{ color: '#fff' }}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 drop-shadow-lg">
            Benefits of Our Cloud & DevOps Services
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              "Scalability & Flexibility",
              "Faster Time-to-Market",
              "Cost Optimization",
              "Enhanced Security",
              "Continuous Delivery",
              "Future-Ready Infrastructure",
            ].map((benefit, index) => (
              <div key={index} className={`backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition ` + (theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black')}>
                <h3 className="text-xl font-semibold mb-3">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#00bfff' }}>
            Frequently Asked Questions
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-md p-6 cursor-pointer transition hover:shadow-lg ` + (theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black')}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="font-bold text-xl" style={{ color: '#00bfff' }}>
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className={theme === 'dark' ? 'mt-4 text-gray-200' : 'mt-4 text-gray-600'}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00bfff]'}`}>
        <div className="max-w-7xl mx-auto grid  lg:grid-cols-2 gap-10 items-center px-6">
          {/* Left Content */}
          <div className="space-y-6 flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to <span style={{ color: '#fff' }}>Scale</span> with Cloud & DevOps?
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
          >
            Partner with us to unlock cloud agility, automate delivery, and future-proof your business. Let’s build your cloud journey, together.
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
              src={c3}
              alt="Cloud Computing CTA"
              className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
