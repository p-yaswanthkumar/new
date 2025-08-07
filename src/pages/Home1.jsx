import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import home1hero from '../assets/home1hero.mp4';
import heroAboutUs from '../assets/hero about us.jpg';
import service1 from '../assets/1.png';
import service2 from '../assets/2.png';
import service3 from '../assets/3.png';

// Placeholder icons (replace with your own SVGs or icon components)
const ServiceIcon = ({ children }) => (
  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-2xl mb-2">
    {children}
  </div>
);

// Impact Metrics Component with animated counters
const ImpactMetrics = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <section className="bg-[#FDF9F4] py-20" data-aos="fade-up" data-aos-duration="1200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" data-aos="fade-up" data-aos-delay="200">
            Our Impact in Numbers
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            Delivering measurable results that drive business growth and financial success
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-4 md:grid-cols-4 gap-8 text-center">
          <div className="" data-aos="fade-up" data-aos-delay="600">
            <div className="text-5xl md:text-6xl font-bold text-black mb-3">
              $<CountUp
                start={0}
                end={2.5}
                duration={4}
                decimals={1}
                decimal="."
                redraw={true}
              />B+
            </div>
            <div className="text-gradient-to-br from-orange-400 to-orange-500 font-medium text-lg">Assets Under</div>
            <div className="text-gradient-to-br from-orange-400 to-orange-500 font-medium text-lg">Management</div>
          </div>

          <div className="" data-aos="fade-up" data-aos-delay="700">
            <div className="text-5xl md:text-6xl font-bold text-black mb-3">
              <CountUp
                start={0}
                end={98.7}
                duration={4}
                decimals={1}
                decimal="."
                redraw={true}
              />%
            </div>
            <div className="text-gradient-to-br from-orange-400 to-orange-500 font-medium text-lg">Accuracy</div>
            <div className="text-gradient-to-br from-orange-400 to-orange-500 font-medium text-lg">Rate</div>
          </div>

          <div className="" data-aos="fade-up" data-aos-delay="800">
            <div className="text-5xl md:text-6xl font-bold text-black mb-3">
              <CountUp
                start={0}
                end={45}
                duration={4}
                redraw={true}
              />%
            </div>
            <div className="text-gradient-to-br from-orange-400 to-orange-500 font-medium text-lg">Average Cost</div>
            <div className="text-gradient-to-br from-orange-400 to-orange-500 font-medium text-lg">Savings</div>
          </div>

          <div className="" data-aos="fade-up" data-aos-delay="900">
            <div className="text-5xl md:text-6xl font-bold text-black mb-3">
              <CountUp
                start={0}
                end={2500}
                duration={4}
                separator=","
                redraw={true}
              />+
            </div>
            <div className="text-gradient-to-br from-orange-400 to-orange-500 font-medium text-lg">Satisfied</div>
            <div className="text-gradient-to-br from-orange-400 to-orange-500 font-medium text-lg">Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Client Reviews Component
const ClientReviews = () => {
  return (
    <section className="bg-[#FDF9F4] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-aos="slide-down" data-aos-delay="300" data-aos-duration="1000">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            Real stories from satisfied clients who trust us with their financial success
          </p>
        </div>

        {/* First Row - 3 Columns */}
        <div className="grid grid-cols-3 gap-8 mb-12 items-start">
          {/* Left - Single Line */}
          <div className="text-center flex flex-col justify-between h-full" data-aos="fade-right" data-aos-delay="600" data-aos-once="true">
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-gray-700 text-lg italic mb-6">
                "Professional service that saved us $50,000 in taxes!"
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
              <div className="font-semibold text-gray-900">John Smith</div>
              <div className="text-gray-500 text-sm">CEO, TechStart Inc.</div>
            </div>
          </div>

          {/* Center - Detailed Review with slide-up animation */}
          <div className="text-center" data-aos="slide-up" data-aos-delay="700" data-aos-once="true">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 mx-0.5 drop-shadow-sm" viewBox="0 0 20 20" fill="#ea580c">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "Outstanding service! Their financial insights helped us optimize our cash flow and improve profit margins by 35%. The team is knowledgeable, responsive, and truly cares about our success."
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                LR
              </div>
              <div>
                <div className="font-semibold text-gray-900">Lisa Rodriguez</div>
                <div className="text-gray-500 text-sm">CFO, GrowthCorp</div>
              </div>
            </div>
          </div>

          {/* Right - Single Line */}
          <div className="text-center flex flex-col justify-between h-full" data-aos="fade-left" data-aos-delay="800" data-aos-once="true">
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-gray-700 text-lg italic mb-6">
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
              <div className="font-semibold text-gray-900">Michael Lee</div>
              <div className="text-gray-500 text-sm">Founder, InnovateLab</div>
            </div>
          </div>
        </div>

        {/* Second Row - 3 Columns */}
        <div className="grid grid-cols-3 gap-8 items-start">
          {/* Left - Single Line */}
          <div className="text-center flex flex-col justify-between h-full" data-aos="fade-right" data-aos-delay="900" data-aos-once="true">
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-gray-700 text-lg italic mb-6">
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
              <div className="font-semibold text-gray-900">Sarah Kim</div>
              <div className="text-gray-500 text-sm">Operations Director, RetailPlus</div>
            </div>
          </div>

          {/* Center - Detailed Review with slide-up animation */}
          <div className="text-center" data-aos="slide-up" data-aos-delay="1000" data-aos-once="true">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 mx-0.5 drop-shadow-sm" viewBox="0 0 20 20" fill="#ea580c">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "Their investment advisory services have been phenomenal. Portfolio performance improved by 42% under their guidance. Professional, trustworthy, and results-driven team."
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                DW
              </div>
              <div>
                <div className="font-semibold text-gray-900">David Wilson</div>
                <div className="text-gray-500 text-sm">Investment Manager, WealthGroup</div>
              </div>
            </div>
          </div>

          {/* Right - Single Line */}
          <div className="text-center flex flex-col justify-between h-full" data-aos="fade-left" data-aos-delay="1100" data-aos-once="true">
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-gray-700 text-lg italic mb-6">
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
              <div className="font-semibold text-gray-900">Emma Thompson</div>
              <div className="text-gray-500 text-sm">Finance Director, BuildCorp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-[#FDF9F4]">
      {/* Hero + CTA */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" data-aos="fade-in" data-aos-duration="1500">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={home1hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 whitespace-nowrap" data-aos="fade-up" data-aos-delay="300">
            Finance & Accounting Made Simple
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="500">
            Empowering your business with modern financial tools and expert support.
            From bookkeeping to strategic planning, we provide comprehensive solutions
            that drive growth and ensure compliance. Trust our experienced team to
            handle your finances while you focus on what matters most.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-colors duration-200 shadow-lg" data-aos="fade-up" data-aos-delay="700">
            Get Started
          </button>
        </div>
      </section>



      {/* Why Choose Us */}
      <section className="bg-white py-16" data-aos="fade-up" data-aos-duration="1200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Image */}
            <div className="order-2 lg:order-1" data-aos="slide-left" data-aos-delay="200">
              <img
                src={heroAboutUs}
                alt="Why Choose Us - Financial Services"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Right Side Content */}
            <div className="order-1 lg:order-2" data-aos="slide-right" data-aos-delay="400">
              <h2 className="text-3xl font-bold mb-6 text-gray-900" data-aos="fade-up" data-aos-delay="600">
                Why Choose Us for Your Financial Needs?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="700">
                With over 15 years of experience in finance and accounting, we provide comprehensive solutions
                that drive growth and ensure compliance. Our team of certified professionals uses cutting-edge
                technology to deliver accurate, timely, and strategic financial services tailored to your business needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start" data-aos="fade-right" data-aos-delay="800">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Certified accountants and financial advisors</p>
                </div>
                <div className="flex items-start" data-aos="fade-right" data-aos-delay="900">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Modern cloud-based financial solutions</p>
                </div>
                <div className="flex items-start" data-aos="fade-right" data-aos-delay="1000">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Proven track record with 2,500+ satisfied clients</p>
                </div>
                <div className="flex items-start" data-aos="fade-right" data-aos-delay="1100">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">24/7 customer support and consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<ImpactMetrics />

      {/* Our Services Section */}
      <section className="bg-white py-16" data-aos="fade-up" data-aos-duration="1200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive suite of financial services designed to help you and your business thrive. Explore our core offerings below:
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center overflow-hidden transition-shadow duration-300 hover:shadow-2xl group" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute left-0 bottom-0 w-full h-0 group-hover:h-full bg-[#1E2A38] to-transparent transition-all duration-500 z-0"></div>
              <div className="relative z-10 flex flex-col items-center">
                <img src={service1} alt="Business Accounting" className="w-20 h-20 object-contain mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">Business Accounting</h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-200 transition-colors duration-300">Comprehensive bookkeeping, payroll, and tax services for businesses of all sizes. Stay compliant and make informed decisions with accurate financial records.</p>
                {/* <a href="#" className="text-orange-500 font-medium hover:underline">Learn More</a> */}
              </div>
            </div>
            {/* Service 2 */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center overflow-hidden transition-shadow duration-300 hover:shadow-2xl group" data-aos="fade-up" data-aos-delay="400">
              <div className="absolute left-0 bottom-0 w-full h-0 group-hover:h-full bg-[#1E2A38] to-transparent transition-all duration-500 z-0"></div>
              <div className="relative z-10 flex flex-col items-center">
                <img src={service2} alt="Personal Tax Preparation" className="w-20 h-20 object-contain mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">Personal Tax Preparation</h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-200 transition-colors duration-300">Expert tax planning and filing for individuals. Maximize your returns and minimize liabilities with our personalized approach and up-to-date knowledge of tax laws.</p>
                {/* <a href="#" className="text-orange-500 font-medium hover:underline">Learn More</a> */}
              </div>
            </div>
            {/* Service 3 */}
            <div className="relative bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center overflow-hidden transition-shadow duration-300 hover:shadow-2xl group" data-aos="fade-up" data-aos-delay="600">
              <div className="absolute left-0 bottom-0 w-full h-0 group-hover:h-full bg-[#1E2A38] to-transparent transition-all duration-500 z-0"></div>
              <div className="relative z-10 flex flex-col items-center">
                <img src={service3} alt="Financial Consulting" className="w-20 h-20 object-contain mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">Financial Consulting</h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-200 transition-colors duration-300">Strategic financial advice for growth, investments, and risk management. Our consultants help you plan for the future and achieve your financial goals.</p>
                {/* <a href="#" className="text-orange-500 font-medium hover:underline">Learn More</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ClientReviews />


      {/* CTA Section */}
      <section 
        className="relative py-16 bg-gradient-to-r from-[#1E2A38] to-[#23344a] flex items-center justify-center overflow-hidden"
        style={{ backgroundAttachment: 'fixed' }}
      >
        <div 
          className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] bg-repeat"
          style={{ backgroundAttachment: 'fixed' }}
        ></div>
        <div 
          className="relative z-10 max-w-3xl mx-auto text-center px-6"
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          data-aos-once="false"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-aos="fade-up" data-aos-delay="200">Ready to Transform Your Finances?</h2>
          <p className="text-lg text-blue-100 mb-8" data-aos="fade-up" data-aos-delay="300">Partner with us for expert financial guidance, innovative solutions, and a team that cares about your success. Take the next step toward financial clarity and growth today.</p>
          <a 
            href="#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-10 rounded-lg text-lg shadow-lg transition-all duration-200 transform hover:scale-105"
            data-aos="fade-up" 
            data-aos-delay="600"
          >
            Get Your Free Consultation
          </a>
        </div>
      </section>

      {/* Client Reviews */}
      

    </div>
  );
};

export default Home1;