import React, { useState } from "react";
import contactVideo from "../assets/contact.mp4"; 
import contact1 from "../assets/contact1.jpg";
import contact2 from "../assets/contact2.jpg";
import contact3 from "../assets/contact3.webp";
import faqImage from "../assets/faq.jpg";
const faqs = [
  {
    question: "How do I get started with your services?",
    answer: "Simply reach out to our team through the contact form or call us directly — we’ll guide you through every step.",
  },
  {
    question: "What types of businesses do you work with?",
    answer: "We partner with startups, SMEs, and enterprises across various industries.",
  },
  {
    question: "Do you provide custom solutions?",
    answer: "Yes, we tailor our services to meet your specific goals and challenges.",
  },
  {
    question: "How quickly can you respond to urgent matters?",
    answer: "Our team is available for priority support, ensuring quick response times when you need us most.",
  },
  {
    question: "What makes your company different?",
    answer: "We combine deep expertise with personalized service, delivering results you can trust.",
  },
];



const cards = [
  {
    img: contact1,
    title: "Visit Us",
    text: "123 Business Street, Suite 100, YourCity",
  },
  {
    img: contact2,
    title: "Email Us",
    text: "stackly.com",
  },
  {
    img: contact3,
    title: "Customer Care",
    text: "+1 (800) 123-4567",
  },
];

export default function ContactHero() {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    console.log('Toggling FAQ index:', index, 'Current openIndex:', openIndex);
    setOpenIndex(openIndex === index ? null : index);
  };

  // Theme state synced with Header (live update)
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

  return (
    <div className={theme === 'dark' ? 'min-h-screen text-white' : 'min-h-screen  text-black'}>
      {/* Hero Section */}
      <section className={`relative h-screen flex items-center justify-center ${theme === 'dark' ? '' : ''}`}> 
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src={contactVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Optional dark overlay for readability */}
        <div className={theme === 'dark' ? 'absolute inset-0 bg-black/60 -z-10' : 'absolute inset-0 bg-black/40 -z-10'}></div>

        {/* Content */}
        <div className={`relative text-center px-4 max-w-2xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}> 
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Get in <span className="text-[#00bfff]">Touch</span> Today
          </h1>
          <p className="text-lg md:text-2xl font-light mb-6">
            Building <span className="text-[#00bfff] font-semibold">solutions</span>, 
            creating <span className="text-[#00bfff] font-semibold">success</span> — let's make it happen together.
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00bfff]'}`}> 
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-[#00bfff]' : 'text-white'}`}> 
          Meet Our Support Team
        </h2>
        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-black'} rounded-2xl shadow-md hover:shadow-xl transition text-center p-6`}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-56 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold mb-2" style={{ color: '#00bfff' }}>
                {card.title}
              </h3>
              <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>



      <section className={`py-20 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Small Heading */}
        <p className="text-[#00bfff] font-semibold uppercase mb-2">
          Get in Touch
        </p>
        {/* Main Heading */}
        <h2 className={`text-3xl md:text-4xl font-extrabold mb-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}` }>
          Need help? <span className="text-[#00bfff]">Let's get in touch</span>
        </h2>

        {/* Contact Form */}
        <form
          className={`${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'} rounded-2xl shadow-lg p-8 space-y-6`}
          onSubmit={e => {
            e.preventDefault();
            setFormSubmitted(true);
          }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#00bfff] ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
            />
            <input
              type="text"
              placeholder="Last Name"
              className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#00bfff] ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#00bfff] ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
          />
          <input
            type="tel"
            placeholder="Phone"
            className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#00bfff] ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
          />
          <textarea
            rows="5"
            placeholder="Write a Message"
            className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#00bfff] ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#00bfff] text-white font-semibold py-3 rounded-lg hover:bg-[#00a6d6] transition"
            disabled={formSubmitted}
          >
            {formSubmitted ? 'Submitted!' : 'Send Message'}
          </button>
          {formSubmitted && (
            <div className="text-green-500 text-center font-semibold mt-4">Submitted successfully!</div>
          )}
        </form>
      </div>
    </section>


      <section className={`py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00bfff]'}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Small heading */}
        <p className="text-[#fff] font-semibold uppercase mb-2">
          Location
        </p>

        {/* Main heading */}
        <h2 className={`text-3xl md:text-4xl font-extrabold mb-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          How to <span className="text-[#fff]">Reach</span> Our Location
        </h2>

        {/* Map embed */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019826876137!2d-122.40081358468178!3d37.79361197975621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ebcc65e9%3A0x34b3b70f6a64a96f!2s456%20Market%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1692225939182!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>



      <section className={`py-20 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`}>
      <div className="max-w-7xl mx-auto px-6 grid  md:grid-cols-2 gap-12 items-center">
        {/* Left: Image and Heading */}
        <div>
          <p className="text-[#00bfff] font-semibold uppercase mb-2">
            Frequently Asked Questions
          </p>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Got <span className="text-[#00bfff]">Questions?</span> We've Got Answers
          </h2>
          <img 
            src={faqImage} 
            alt="FAQ illustration" 
            className="rounded-xl shadow-lg"
            
          />
        </div>

        {/* Right: Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${theme === 'dark' ? 'bg-[#222] border-gray-700' : 'bg-gray-50 border-gray-100'} rounded-xl shadow-sm border`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center p-6 text-left ${theme === 'dark' ? 'text-white' : ''}`}
              >
                <span className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className="text-[#00bfff] text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className={`px-6 pb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>


      <section className={`py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00bfff]'}`}>
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${theme === 'dark' ? 'text-[#00bfff]' : 'text-gray-900'}`}>
          Stay <span className="text-[#fff]">Updated</span>
        </h2>
        <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
          Subscribe to our newsletter and never miss our latest news, updates, and special offers.
        </p>

        {/* Form */}
        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          onSubmit={e => {
            e.preventDefault();
            setNewsletterSubmitted(true);
          }}
        >
          <input 
            type="email" 
            placeholder="Enter your email" 
            className={`flex-1 px-6 py-4 rounded-xl border w-full sm:w-auto focus:outline-none focus:border-[#00bfff] ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-300 text-gray-800 bg-white'}`}
            disabled={newsletterSubmitted}
          />
          <button 
            type="submit" 
            className="bg-[#000] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#00] transition duration-300 w-full sm:w-auto"
            disabled={newsletterSubmitted}
          >
            {newsletterSubmitted ? 'Subscribed!' : 'Subscribe'}
          </button>
        </form>
        {newsletterSubmitted && (
          <div className="text-green-500 text-center font-semibold mt-4">Subscribed successfully!</div>
        )}
      </div>
    </section>
  
    </div>
  );
}
