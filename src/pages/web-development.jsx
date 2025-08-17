import React, { useState, useEffect } from "react";
import web from "../assets/web.mp4";
import w1 from "../assets/w1.avif";
import w2 from "../assets/w2.jpeg";
import w3 from "../assets/w3.webp";

export default function WebDevServicePage() {
  const [openIndex, setOpenIndex] = useState(null);
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
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
      };
    }
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of websites do you develop?",
      answer:
        "We build everything from static business websites, dynamic web apps, to complex enterprise solutions tailored to your brand and goals.",
    },
    {
      question: "Do you provide mobile-responsive websites?",
      answer:
        "Absolutely! All of our websites are fully responsive, ensuring a smooth experience across devices and screen sizes.",
    },
    {
      question: "Can you integrate third-party tools and APIs?",
      answer:
        "Yes, we specialize in integrating APIs, payment gateways, CRMs, and other third-party solutions into your web applications.",
    },
    {
      question: "Do you provide SEO-friendly websites?",
      answer:
        "Yes, our websites follow SEO best practices so your business ranks higher and reaches the right audience.",
    },
    {
      question: "Do you offer maintenance and support?",
      answer:
        "Yes, we provide ongoing maintenance, security updates, and performance monitoring to keep your website running smoothly.",
    },
    {
      question: "How long does it take to develop a website?",
      answer:
        "Timelines vary depending on project complexity, but we ensure efficient delivery without compromising quality.",
    },
  ];

  return (
    <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
      {/* Hero Section */}
      <section className={
        `relative w-full h-screen md:h-screen grid place-items-center text-center overflow-hidden ` +
        (theme === 'dark' ? 'text-white' : 'text-white')
      }>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={web}
          autoPlay
          loop
          muted
          playsInline
          aria-label="Web Development Hero Background Video"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug">
            Building the <span className="text-[#00bfff]">Web of Tomorrow</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            We create responsive, scalable, and high-performing web solutions
            that empower businesses to grow, engage, and succeed in the digital
            world.
          </p>
        </div>
      </section>

      {/* Service Includes Section */}
      <section className={theme === 'dark' ? 'bg-[#181818] py-16' : 'bg-[#00bfff] py-16'}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-6">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={w1} alt="Web Development Services" className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full" />
          </div>
          {/* Right Content */}
          <div>
            <h2 className={
              `text-2xl sm:text-3xl md:text-4xl font-bold mb-8 break-words leading-tight ` +
              (theme === 'dark' ? 'text-[#00bfff]' : 'text-[#fff]')
            }>
              What Our Web Development Service Includes
            </h2>
            <ul className="space-y-4 text-base sm:text-lg">
              <li className="flex items-center">
                <span className={theme === 'dark' ? 'w-3 h-3 bg-[#fff] rounded-full mr-3' : 'w-3 h-3 bg-[#000] rounded-full mr-3'}></span>
                Custom Website Design & Development
              </li>
              <li className="flex items-center">
                <span className={theme === 'dark' ? 'w-3 h-3 bg-[#fff] rounded-full mr-3' : 'w-3 h-3 bg-[#000] rounded-full mr-3'}></span>
                E-commerce Solutions
              </li>
              <li className="flex items-center">
                <span className={theme === 'dark' ? 'w-3 h-3 bg-[#fff] rounded-full mr-3' : 'w-3 h-3 bg-[#000] rounded-full mr-3'}></span>
                Web Applications & Portals
              </li>
              <li className="flex items-center">
                <span className={theme === 'dark' ? 'w-3 h-3 bg-[#fff] rounded-full mr-3' : 'w-3 h-3 bg-[#000] rounded-full mr-3'}></span>
                API & Third-Party Integrations
              </li>
              <li className="flex items-center">
                <span className={theme === 'dark' ? 'w-3 h-3 bg-[#fff] rounded-full mr-3' : 'w-3 h-3 bg-[#000] rounded-full mr-3'}></span>
                CMS Development (WordPress, Headless CMS)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className={theme === 'dark' ? 'bg-[#222] py-16' : 'bg-[#e6f7ff] py-16'}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          {/* Left Side Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug">
              Who It's For?
            </h2>
            <p className={(theme === 'dark' ? 'text-lg text-gray-200 mb-6' : 'text-lg text-gray-700 mb-6') + ' text-justify'}>
              Our <span className="font-semibold text-[#00bfff]">Web Development solutions </span>
              go beyond just creating websites — we build powerful, scalable, and
              user-focused platforms that help startups, enterprises, and organizations
              of all sizes thrive in the digital era. From crafting visually stunning
              front-ends to developing secure and high-performing back-end systems,
              we ensure your brand stands out while delivering seamless functionality.
              With our expertise, you can establish a strong online presence, streamline
              operations, enhance customer experiences, and drive long-term business growth.
            </p>
          </div>
          {/* Right Side Cards */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className={theme === 'dark' ? 'p-6 bg-[#181818] rounded-2xl shadow-md hover:shadow-lg transition' : 'p-6 bg-[#fdfcf9] rounded-2xl shadow-md hover:shadow-lg transition'}>
              <h3 className="text-xl font-semibold mb-2 text-[#00bfff]">Startups</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Launch fast, scale quickly with robust websites.
              </p>
            </div>
            <div className={theme === 'dark' ? 'p-6 bg-[#181818] rounded-2xl shadow-md hover:shadow-lg transition' : 'p-6 bg-[#fdfcf9] rounded-2xl shadow-md hover:shadow-lg transition'}>
              <h3 className="text-xl font-semibold mb-2 text-[#00bfff]">Small Businesses</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Boost visibility and attract more customers online.
              </p>
            </div>
            <div className={theme === 'dark' ? 'p-6 bg-[#181818] rounded-2xl shadow-md hover:shadow-lg transition' : 'p-6 bg-[#fdfcf9] rounded-2xl shadow-md hover:shadow-lg transition'}>
              <h3 className="text-xl font-semibold mb-2 text-[#00bfff]">Enterprises</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Custom solutions for scaling and digital transformation.
              </p>
            </div>
            <div className={theme === 'dark' ? 'p-6 bg-[#181818] rounded-2xl shadow-md hover:shadow-lg transition' : 'p-6 bg-[#fdfcf9] rounded-2xl shadow-md hover:shadow-lg transition'}>
              <h3 className="text-xl font-semibold mb-2 text-[#00bfff]">E-commerce</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Seamless shopping experiences for global audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative w-full bg-cover bg-center py-20" style={{ backgroundImage: `url(${w2})` }}>
        <div className={theme === 'dark' ? 'absolute inset-0 bg-[#181818]/80' : 'absolute inset-0 bg-[#00bfff]/70'}></div>
        <div className={theme === 'dark' ? 'relative z-10 max-w-7xl mx-auto px-6 text-center text-white' : 'relative z-10 max-w-7xl mx-auto px-6 text-center text-white'}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 drop-shadow-lg">
            Benefits of Our Web Development Services
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              "Responsive & Mobile-Friendly",
              "Scalable Architecture",
              "Enhanced User Experience",
              "SEO & Performance Optimized",
              "Secure & Reliable",
              "Future-Ready Technologies",
            ].map((benefit, index) => (
              <div key={index} className={theme === 'dark' ? 'bg-[#222] text-white backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition' : 'bg-white text-black backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition'}>
                <h3 className="text-xl font-semibold mb-3">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={theme === 'dark' ? 'bg-[#181818] py-16' : 'bg-gray-50 py-16'}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#00bfff] mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={theme === 'dark' ? 'bg-[#222] text-white rounded-2xl shadow-md p-6 cursor-pointer transition hover:shadow-lg' : 'bg-white text-black rounded-2xl shadow-md p-6 cursor-pointer transition hover:shadow-lg'}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="text-[#00bfff] font-bold text-xl">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className={theme === 'dark' ? 'mt-4 text-gray-300' : 'mt-4 text-gray-600'}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={theme === 'dark' ? 'bg-[#000] py-20' : 'bg-[#00bfff] py-20'}>
        <div className="max-w-7xl mx-auto grid  lg:grid-cols-2 gap-10 items-center px-6">
          {/* Left Content */}
          <div className="space-y-6 flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to <span className="text-[#fff]">Transform</span> Your Business with Web Development?
            </h2>
            <p className={theme === 'dark' ? 'text-lg text-gray-200' : 'text-lg text-gray-700'}>
              Partner with us to unlock innovative web solutions that empower smarter decisions,
              automate workflows, and accelerate growth. Let’s build the future, together.
            </p>
            <button className="px-8 py-4 bg-[#fff] text-black font-semibold rounded-xl shadow-md hover:bg-[#0099cc] transition self-start lg:self-auto">
              Get Started Today
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center h-full">
            <img
              src={w3}
              alt="Web CTA"
              className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
