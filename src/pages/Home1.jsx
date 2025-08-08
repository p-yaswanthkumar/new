import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import home1hero from '../assets/home1hero.mp4';
import heroAboutUs from '../assets/hero about us.jpg';
import service1 from '../assets/1.png';
import service2 from '../assets/2.png';
import service3 from '../assets/3.png';

// Impact Metrics Component
const ImpactMetrics = ({ theme }) => {
  const { ref } = useInView({ threshold: 0.3, triggerOnce: false });
  const sectionBg = theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-[#FDF9F4] text-black';

  return (
    <section className={`${sectionBg} py-20`} data-aos="fade-up" data-aos-duration="1200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4" 
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto" 
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            Delivering measurable results that drive business growth and financial success
          </motion.p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-4 gap-8 text-center">
          {/* Assets Under Management */}
          <motion.div 
            data-aos="fade-up" data-aos-delay="600" whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-5xl md:text-6xl font-bold mb-3">
              $<CountUp start={0} end={2.5} duration={4} decimals={1} decimal="." redraw={true} />B+
            </div>
            <div className="font-medium text-lg">Assets Under</div>
            <div className="font-medium text-lg">Management</div>
          </motion.div>

          {/* Accuracy Rate */}
          <motion.div 
            data-aos="fade-up" data-aos-delay="700" whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="text-5xl md:text-6xl font-bold mb-3">
              <CountUp start={0} end={98.7} duration={4} decimals={1} decimal="." redraw={true} />%
            </div>
            <div className="font-medium text-lg">Accuracy</div>
            <div className="font-medium text-lg">Rate</div>
          </motion.div>

          {/* Average Cost Savings */}
          <motion.div 
            data-aos="fade-up" data-aos-delay="800" whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-5xl md:text-6xl font-bold mb-3">
              <CountUp start={0} end={45} duration={4} redraw={true} />%
            </div>
            <div className="font-medium text-lg">Average Cost</div>
            <div className="font-medium text-lg">Savings</div>
          </motion.div>

          {/* Satisfied Clients */}
          <motion.div 
            data-aos="fade-up" data-aos-delay="900" whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="text-5xl md:text-6xl font-bold mb-3">
              <CountUp start={0} end={2500} duration={4} separator="," redraw={true} />+
            </div>
            <div className="font-medium text-lg">Satisfied</div>
            <div className="font-medium text-lg">Clients</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Client Reviews Component
const ClientReviews = ({ theme }) => {
  const sectionBg = theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-[#FDF9F4] text-black';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-700';
  const secondaryText = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <section className={`${sectionBg} py-20`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${secondaryText}`}>
            Real stories from satisfied clients who trust us with their financial success
          </p>
        </div>

        {/* First Row */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12 items-start">
          {/* Left - Single Line */}
          <div className="text-center flex flex-col justify-between h-full" data-aos="fade-right" data-aos-delay="600" data-aos-once="true">
            <div className="flex-1 flex flex-col justify-center">
              <p className={`${textColor} text-lg italic mb-6`}>
                "Professional service that saved us $50,000 in taxes!"
              </p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 mx-0.5 drop-shadow-sm" viewBox="0 0 20 20" fill="#ea580c" >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold text-white">John Smith</div>
              <div className={`${secondaryText} text-sm`}>CEO, TechStart Inc.</div>
            </div>
          </div>

          {/* Center - Detailed Review */}
          <div className="text-center" data-aos="slide-up" data-aos-delay="700" data-aos-once="true">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 mx-0.5 drop-shadow-sm" viewBox="0 0 20 20" fill="#ea580c">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className={`${textColor} text-lg leading-relaxed mb-6`}>
                "Outstanding service! Their financial insights helped us optimize our cash flow and improve profit margins by 35%. The team is knowledgeable, responsive, and truly cares about our success."
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                LR
              </div>
              <div>
                <div className="font-semibold text-white">Lisa Rodriguez</div>
                <div className={`${secondaryText} text-sm`}>CFO, GrowthCorp</div>
              </div>
            </div>
          </div>

          {/* Right - Single Line */}
          <div className="text-center flex flex-col justify-between h-full" data-aos="fade-left" data-aos-delay="800" data-aos-once="true">
            <div className="flex-1 flex flex-col justify-center">
              <p className={`${textColor} text-lg italic mb-6`}>
                "Best financial partner we've ever worked with!"
              </p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 mx-0.5 drop-shadow-sm" viewBox="0 0 20 20" fill="#ea580c">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold text-white">Michael Lee</div>
              <div className={`${secondaryText} text-sm`}>Founder, InnovateLab</div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left - Single Line */}
          <div className="text-center flex flex-col justify-between h-full" data-aos="fade-right" data-aos-delay="900" data-aos-once="true">
            <div className="flex-1 flex flex-col justify-center">
              <p className={`${textColor} text-lg italic mb-6`}>
                "Reduced our accounting workload by 60%!"
              </p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 mx-0.5 drop-shadow-sm" viewBox="0 0 20 20" fill="#ea580c">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold text-white">Sarah Kim</div>
              <div className={`${secondaryText} text-sm`}>Operations Director, RetailPlus</div>
            </div>
          </div>

          {/* Center - Detailed Review */}
          <div className="text-center" data-aos="slide-up" data-aos-delay="1000" data-aos-once="true">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 mx-0.5 drop-shadow-sm" viewBox="0 0 20 20" fill="#ea580c">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className={`${textColor} text-lg leading-relaxed mb-6`}>
                "Their investment advisory services have been phenomenal. Portfolio performance improved by 42% under their guidance. Professional, trustworthy, and results-driven team."
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                DW
              </div>
              <div>
                <div className="font-semibold text-white">David Wilson</div>
                <div className={`${secondaryText} text-sm`}>Investment Manager, WealthGroup</div>
              </div>
            </div>
          </div>

          {/* Right - Single Line */}
          <div className="text-center flex flex-col justify-between h-full" data-aos="fade-left" data-aos-delay="1100" data-aos-once="true">
            <div className="flex-1 flex flex-col justify-center">
              <p className={`${textColor} text-lg italic mb-6`}>
                "Exceptional compliance expertise and support!"
              </p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 mx-0.5 drop-shadow-sm" viewBox="0 0 20 20" fill="#ea580c">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold text-white">Emma Thompson</div>
              <div className={`${secondaryText} text-sm`}>Finance Director, BuildCorp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home1 = () => {
  // Read theme from localStorage (button in Header controls it)
  const getTheme = () => localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    const syncTheme = () => setTheme(getTheme());

    window.addEventListener('storage', syncTheme);
    window.addEventListener('focus', syncTheme);
    window.addEventListener('theme-changed', syncTheme); // Added listener for custom event

    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100,
    });

    return () => {
      window.removeEventListener('storage', syncTheme);
      window.removeEventListener('focus', syncTheme);
      window.removeEventListener('theme-changed', syncTheme); // Cleanup listener
    };
  }, []);

  // Helper classes based on theme
  const sectionWhite = theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-white text-black';

  return (
    <div className={theme === 'dark' ? 'bg-[#141B25] text-white' : 'bg-[#FDF9F4] text-black'}>
      {/* Hero section (no theme change) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" data-aos="fade-in" data-aos-duration="1500">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
          <source src={home1hero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 whitespace-nowrap"
            data-aos="fade-up" data-aos-delay="300"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Finance & Accounting Made Simple
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up" data-aos-delay="500"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Empowering your business with modern financial tools and expert support.
            From bookkeeping to strategic planning, we provide comprehensive solutions
            that drive growth and ensure compliance. Trust our experienced team to
            handle your finances while you focus on what matters most.
          </motion.p>
          <motion.button 
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-colors duration-200 shadow-lg"
            data-aos="fade-up" data-aos-delay="700"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={sectionWhite + " py-16"} data-aos="fade-up" data-aos-duration="1200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div 
              className="order-2 lg:order-1"
              data-aos="slide-left" data-aos-delay="200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={heroAboutUs}
                alt="Why Choose Us - Financial Services"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </motion.div>

            {/* Text Content */}
            <div className="order-1 lg:order-2" data-aos="slide-right" data-aos-delay="400">
              <motion.h2 
                className="text-3xl font-bold mb-6" 
                data-aos="fade-up" data-aos-delay="600"
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Why Choose Us for Your Financial Needs?
              </motion.h2>

              <motion.p 
                className="text-lg mb-8 text-justify leading-relaxed opacity-90"
                style={{ color: theme === 'dark' ? '#ddd' : '#4B5563' }}
                data-aos="fade-up" data-aos-delay="700"
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                With over 15 years of experience in finance and accounting, we provide comprehensive solutions
                that drive growth and ensure compliance. Our team of certified professionals uses cutting-edge
                technology to deliver accurate, timely, and strategic financial services tailored to your business needs.
              </motion.p>

              <div className="space-y-4">
                {[ 
                  "Certified accountants and financial advisors",
                  "Modern cloud-based financial solutions",
                  "Proven track record with 2,500+ satisfied clients",
                  "24/7 customer support and consultation"
                ].map((text, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-start"
                    data-aos="fade-right" data-aos-delay={800 + i * 100}
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p style={{ color: theme === 'dark' ? '#ddd' : '#4B5563' }}>{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <ImpactMetrics theme={theme} />

      {/* Our Services Section */}
      <section className={sectionWhite + " py-16"} data-aos="fade-up" data-aos-duration="1200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: theme === 'dark' ? '#ccc' : '#4B5563' }}>
              We offer a comprehensive suite of financial services designed to help you and your business thrive. Explore our core offerings below:
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[{
              img: service1,
              alt: "Business Accounting",
              title: "Business Accounting",
              desc: "Comprehensive bookkeeping, payroll, and tax services for businesses of all sizes. Stay compliant and make informed decisions with accurate financial records."
            },{
              img: service2,
              alt: "Personal Tax Preparation",
              title: "Personal Tax Preparation",
              desc: "Expert tax planning and filing for individuals. Maximize your returns and minimize liabilities with our personalized approach and up-to-date knowledge of tax laws."
            },{
              img: service3,
              alt: "Financial Consulting",
              title: "Financial Consulting",
              desc: "Strategic financial advice for growth, investments, and risk management. Our consultants help you plan for the future and achieve your financial goals."
            }].map(({img, alt, title, desc}, idx) => (
              <div key={idx} className={`relative rounded-xl shadow-lg p-8 flex flex-col items-center text-center overflow-hidden transition-shadow duration-300 hover:shadow-2xl group`}
                style={{backgroundColor: theme==='dark' ? '#1E2A38' : 'white', color: theme==='dark' ? 'white' : 'black'}}>
                <div className="absolute left-0 bottom-0 w-full h-0 group-hover:h-full bg-[#1E2A38] to-transparent transition-all duration-500 z-0"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <img src={img} alt={alt} className="w-20 h-20 object-contain mb-4" />
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">{title}</h3>
                  <p className="mb-4 group-hover:text-gray-300 transition-colors duration-300" style={{color: theme==='dark' ? '#ccc' : '#6B7280'}}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <ClientReviews theme={theme} />

      {/* CTA Section */}
      <section 
        className="relative py-16 flex items-center justify-center overflow-hidden"
        style={{
          backgroundColor: theme === 'dark' ? '#1E2A38' : '#fff'
        }}
      >
        <div 
          className="relative z-10 max-w-3xl mx-auto text-center px-6"
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          data-aos-once="false"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4`} style={{color: theme === 'dark' ? 'white' : '#1F2937'}}>
            Ready to Transform Your Finances?
          </h2>
          <p className="text-lg mb-8" style={{color: theme === 'dark' ? '#BBF7D0' : '#4B5563'}}>
            Partner with us for expert financial guidance, innovative solutions, and a team that cares about your success. Take the next step toward financial clarity and growth today.
          </p>
          <a 
            href="/contactus" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-lg text-lg shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Get Your Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home1;
