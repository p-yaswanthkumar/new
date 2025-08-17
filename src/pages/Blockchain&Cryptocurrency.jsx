import React, { useState } from "react";
import cryptoHero from "../assets/crypto.mp4";
import b1 from "../assets/b1.avif";
import b2 from "../assets/b2.jpeg";
import b3 from "../assets/b3.jpeg";

export default function BlockchainPage() {
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
      question: "What is Blockchain?",
      answer:
        "Blockchain is a decentralized digital ledger that records transactions securely and transparently across a network of computers.",
    },
    {
      question: "Do you build custom blockchain solutions?",
      answer:
        "Yes, we design and develop custom blockchain platforms, smart contracts, and decentralized applications tailored to your needs.",
    },
    {
      question: "Can blockchain improve business security?",
      answer:
        "Absolutely! Blockchain enhances data integrity, reduces fraud, and provides secure, tamper-proof records for your business.",
    },
    {
      question: "Do you offer crypto wallet and exchange development?",
      answer:
        "Yes, we create secure crypto wallets, exchanges, and payment solutions for seamless digital asset management.",
    },
    {
      question: "Is blockchain suitable for my industry?",
      answer:
        "Blockchain benefits industries like finance, supply chain, healthcare, real estate, and more by improving transparency and efficiency.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "We offer continuous support, upgrades, and maintenance to keep your blockchain solutions secure and up-to-date.",
    },
  ];

  return (
    <div className={
      `${theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}`
    }>
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-screen grid place-items-center text-center overflow-hidden" style={{ color: theme === 'dark' ? '#fff' : '#222' }}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={cryptoHero}
          autoPlay
          loop
          muted
          playsInline
          aria-label="Blockchain Hero Background Video"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            Empowering Innovation with <span style={{ color: '#00bfff' }}>Blockchain Technology</span>
          </h1>
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            We deliver secure, scalable, and transparent blockchain solutions to help organizations transform operations and unlock new opportunities.
          </p>
        </div>
      </section>

      {/* Service Includes Section */}
      <section className={
        `py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00bfff]'}`
      }>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-6">
          {/* Left Image */}
          <div className="flex justify-center">
            <img src={b1} alt="Blockchain Services" className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full" />
          </div>
          {/* Right Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 break-words leading-tight" style={{ color: '#fff' }}>
              What Our Blockchain Service Includes
            </h2>
            <ul className="space-y-4 text-base sm:text-lg">
              {[
                'Custom Blockchain Development',
                'Smart Contracts & DApps',
                'Crypto Wallet & Exchange Solutions',
                'Supply Chain & Asset Tracking',
                'Security & Compliance',
                'Ongoing Support & Maintenance',
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
      <section className={
        `py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
      }>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
          {/* Left Side Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug" style={{ color: theme === 'dark' ? '#00bfff' : '#222' }}>
              Who It's For?
            </h2>
            <p className={`text-lg mb-6 text-justify ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
              Our <span className="font-semibold" style={{ color: '#00bfff' }}>Blockchain solutions</span> empower organizations to innovate, secure transactions, and streamline operations. From finance to healthcare, supply chain to real estate, we help you harness the power of blockchain.
            </p>
          </div>
          {/* Right Side Cards */}
          <div className="grid lg:grid-cols-2 gap-6">
            {[
              { title: 'Finance', desc: 'Secure transactions and digital assets.' },
              { title: 'Healthcare', desc: 'Protect patient data and streamline records.' },
              { title: 'Supply Chain', desc: 'Track assets and improve transparency.' },
              { title: 'Real Estate', desc: 'Simplify property transactions and records.' },
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
      <section className="relative w-full bg-cover bg-center py-20" style={{ backgroundImage: `url(${b2})` }}>
        <div className="absolute inset-0" style={{ background: theme === 'dark' ? 'rgba(0,191,255,0.7)' : 'rgba(0,191,255,0.7)' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center" style={{ color: '#fff' }}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 drop-shadow-lg">
            Benefits of Our Blockchain Services
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              "Decentralization & Transparency",
              "Enhanced Security",
              "Fraud Prevention",
              "Efficient Transactions",
              "Cost Reduction",
              "Future-Ready Solutions",
            ].map((benefit, index) => (
              <div key={index} className={`backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition ` + (theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black')}>
                <h3 className="text-xl font-semibold mb-3">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={
        `py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-50'}`
      }>
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
      <section className={
        `py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00bfff]'}`
      }>
        <div className="max-w-7xl mx-auto grid  lg:grid-cols-2 gap-10 items-center px-6">
          {/* Left Content */}
          <div className="space-y-6 flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to <span style={{ color: '#fff' }}>Innovate</span> with Blockchain?
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
          >
            Partner with us to build secure, scalable, and future-ready blockchain solutions. Let’s transform your business, together.
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
              src={b3}
              alt="Blockchain CTA"
              className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
