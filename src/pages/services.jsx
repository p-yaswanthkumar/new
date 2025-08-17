import React from "react";
import { Link } from "react-router-dom";
import serviceHeroVideo from "../assets/servicehero.mp4";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpeg";

const services = [
  {
    title: "Artificial Intelligence & Machine Learning",
    description: "Master AI fundamentals, neural networks, deep learning, and real-world applications. Learn to build intelligent systems, predictive models, and automation tools that solve complex problems in industries like healthcare, finance, robotics, and e-commerce. Gain hands-on experience with popular AI frameworks such as TensorFlow and PyTorch, and understand how to implement AI responsibly and ethically. Explore AI-driven projects including chatbots, recommendation engines, computer vision applications, and natural language processing to prepare for high-demand careers in AI and data science.",
    image: s1,
    link: "/Artificial-Intelligence&Machine-Learning",
  },
  {
    title: "Web Development",
    description: "Learn frontend (React, HTML, CSS, JS) and backend (Node.js, Django) development. Build responsive websites, dynamic web applications, and interactive user interfaces while mastering the latest frameworks, libraries, and best practices. Understand full-stack development concepts, database integration, API creation, and deployment to cloud platforms. Gain practical experience by building real-world projects like e-commerce platforms, portfolio websites, and content management systems, equipping yourself for roles as a full-stack or frontend/back-end developer.",
    image: s2,
    link: "/web-development",
  },
  {
    title: "Data Science & Analytics",
    description: "Analyze data, visualize trends, and create predictive models using Python & R. Gain expertise in data wrangling, statistical analysis, and machine learning algorithms to extract actionable insights. Work with real datasets, perform exploratory data analysis, and communicate findings effectively. Learn advanced topics like data mining, big data analytics, and business intelligence. Develop skills for careers as data analysts, data engineers, or data scientists across technology, finance, healthcare, and marketing sectors.",
    image: s3,
    link: "/DataScience&Analytics",
  },
  {
    title: "Blockchain & Cryptocurrency",
    description: "Understand blockchain technology, smart contracts, and cryptocurrency development. Learn how decentralized systems work, develop secure blockchain applications, and explore opportunities in NFTs, DeFi, and digital asset management. Gain practical experience with Ethereum, Solidity, and other blockchain platforms. Explore real-world use cases including supply chain management, voting systems, digital identity verification, and cryptocurrency trading. Prepare for in-demand careers in blockchain development, crypto analysis, and decentralized finance solutions.",
    image: s4,
    link: "/Blockchain&Cryptocurrency",
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    description: "Protect networks, perform penetration testing, and secure applications. Learn to identify vulnerabilities, implement security protocols, and defend against cyber threats to ensure data privacy and integrity. Explore real-world attack simulations, network defense strategies, and compliance standards such as GDPR and ISO. Gain hands-on experience with security tools, intrusion detection, malware analysis, and incident response. Build the expertise required to become a cybersecurity specialist, ethical hacker, or security consultant.",
    image: s5,
    link: "/Cybersecurity&Ethical-Hacking",
  },
  {
    title: "Cloud Computing & DevOps",
    description: "Learn AWS, Azure, CI/CD pipelines, Docker, and Kubernetes for cloud solutions. Gain skills to design scalable cloud architectures, automate deployments, and manage infrastructure efficiently. Understand DevOps culture, monitoring, and continuous delivery practices, enabling you to build reliable, scalable, and high-performance cloud-based applications. Work on real-world cloud projects, implement serverless architectures, and optimize costs. Prepare for roles as cloud engineers, DevOps engineers, or system administrators in modern IT environments.",
    image: s6,
    link: "/CloudComputing&DevOps",
  },
];


export default function ServiceHero() {
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
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            Elevate Your <span style={{ color: '#00bfff' }}>Experience</span>
          </h1>
          <p className={`mt-6 text-xl md:text-2xl max-w-3xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}
          >
            Explore our curated services in Artificial Intelligence, Web Development, Data Science, Blockchain, Cybersecurity, and Cloud Computing. 
            Tailored solutions that empower your learning journey and help you achieve your career goals.
          </p>
        </div>
      </section>
      {/* Service Steps Section */}
      

      {/* Services Section */}
      <section className={
        `py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
      }>
        <div className="container mx-auto px-4">
<h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#00BFFF' }}>Explore Our Expertise</h2>
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 items-center gap-6"
              >
                {/* Image */}
                <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 rounded-lg shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: '#00BFFF' }}>{service.title}</h3>
                  <p className={(theme === 'dark' ? 'text-gray-200 mb-6' : 'text-gray-700 mb-6') + ' text-justify'}>{service.description}</p>
                  <Link
                    to={service.link}
                    className={
                      `px-6 py-2 font-semibold rounded transition inline-block ` +
                      (theme === 'dark' ? 'bg-[#00BFFF] text-white hover:bg-blue-400' : 'bg-[#00BFFF] text-white hover:bg-blue-600')
                    }
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
        `py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00BFFF]'}`
      }>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#FFF' }}>How to Get Started</h2>
          <div className="grid md:grid-cols-4 gap-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center hover:scale-105 transition smooth text-center">
              <div className={
                `rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ` +
                (theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]')
              }>
                <span className="text-3xl font-bold" style={{ color: '#00BFFF' }}>1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#FFF' }}>Browse Services</h3>
              <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>Explore our range of technology and career-focused services to find what fits your goals.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center hover:scale-105 transition smooth text-center">
              <div className={
                `rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ` +
                (theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]')
              }>
                <span className="text-3xl font-bold" style={{ color: '#00BFFF' }}>2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#FFF' }}>Connect with Experts</h3>
              <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>Reach out to our instructors and advisors for guidance and personalized recommendations.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center hover:scale-105 transition smooth text-center">
              <div className={
                `rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ` +
                (theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]')
              }>
                <span className="text-3xl font-bold" style={{ color: '#00BFFF' }}>3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#FFF' }}>Enroll & Learn</h3>
              <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>Sign up for courses, workshops, or consulting sessions and start your learning journey.</p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center hover:scale-105 transition smooth text-center">
              <div className={
                `rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg ` +
                (theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]')
              }>
                <span className="text-3xl font-bold" style={{ color: '#00BFFF' }}>4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#FFF' }}>Achieve Success</h3>
              <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>Apply your new skills, earn certificates, and advance your career with our support.</p>
            </div>
          </div>
        </div>
      </section>



      <section className={
        `w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
      }>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#00BFFF' }}>Our Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className={`rounded-2xl shadow-lg p-8 flex flex-col items-center ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'}`}>
              <h3 className="text-2xl font-semibold mb-2">Basic</h3>
              <div className="text-4xl font-bold mb-4" style={{ color: '#00BFFF' }}>$19<span className="text-lg font-normal">/mo</span></div>
              <ul className="mb-6 space-y-2 text-left">
                <li>✔️ Access to 3 courses</li>
                <li>✔️ Community Support</li>
                <li>✔️ Certificate of Completion</li>
              </ul>
              <button className={`px-6 py-2 rounded font-semibold transition ${theme === 'dark' ? 'bg-[#00BFFF] text-white hover:bg-blue-400' : 'bg-[#00BFFF] text-white hover:bg-blue-600'}`}>Choose Basic</button>
            </div>
            {/* Pro Plan */}
            <div className={`rounded-2xl shadow-lg p-8 flex flex-col items-center border-4 ${theme === 'dark' ? 'bg-[#181818] border-[#00BFFF] text-white' : 'bg-[#e6f7ff] border-[#00BFFF] text-black'}`}>
              <h3 className="text-2xl font-semibold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-4" style={{ color: '#00BFFF' }}>$49<span className="text-lg font-normal">/mo</span></div>
              <ul className="mb-6 space-y-2 text-left">
                <li>✔️ Access to all courses</li>
                <li>✔️ Priority Support</li>
                <li>✔️ Certificate & Projects</li>
                <li>✔️ Monthly Webinars</li>
              </ul>
              <button className={`px-6 py-2 rounded font-semibold transition ${theme === 'dark' ? 'bg-[#00BFFF] text-white hover:bg-blue-400' : 'bg-[#00BFFF] text-white hover:bg-blue-600'}`}>Choose Pro</button>
            </div>
            {/* Enterprise Plan */}
            <div className={`rounded-2xl shadow-lg p-8 flex flex-col items-center ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'}`}>
              <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-4" style={{ color: '#00BFFF' }}>$99<span className="text-lg font-normal">/mo</span></div>
              <ul className="mb-6 space-y-2 text-left">
                <li>✔️ Unlimited Users</li>
                <li>✔️ Dedicated Account Manager</li>
                <li>✔️ Custom Integrations</li>
                <li>✔️ All Pro Features</li>
              </ul>
              <button className={`px-6 py-2 rounded font-semibold transition ${theme === 'dark' ? 'bg-[#00BFFF] text-white hover:bg-blue-400' : 'bg-[#00BFFF] text-white hover:bg-blue-600'}`}>Contact Sales</button>
            </div>
          </div>
        </div>
      </section>


      {/* Technology & Tools Section */}
      <section className={`w-full py-16 ${theme === 'dark' ? 'bg-[#000]' : 'bg-[#00BFFF]'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#FFF' }}>Technology & Tools</h2>
          <div className="flex  md:flex-row md:items-start gap-10">
            {/* Left: Paragraph */}
            <div className="md:w-1/2 w-full flex items-center justify-center md:justify-start mb-8 md:mb-0">
              <p
  className={`text-lg text-justify ${
    theme === "dark" ? "text-gray-200" : "text-gray-700"
  }`}
  style={{ maxWidth: "400px" }}
>
  We empower your learning with the latest industry-standard technologies and tools, 
  ensuring you gain hands-on experience that truly matters. 
  Our programs go beyond theory, focusing on practical application through real projects, 
  case studies, and interactive challenges. 
  Every course is designed in collaboration with industry experts, so you learn the 
  exact skills companies are looking for today. 
  With dedicated mentorship and continuous feedback, we help you build confidence 
  alongside your technical expertise. 
  Whether you are starting your career or upgrading your skills. </p>

            </div>
            {/* Right: 2x2 Grid of 4 boxes */}
            <div className="md:w-1/2 w-full grid  sm:grid-cols-2 gap-6">
              {/* AI/ML */}
              <div className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-black'}`}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#00BFFF' }}>AI & Machine Learning</h3>
                <ul className="list-disc ml-5">
                  <li>TensorFlow</li>
                  <li>PyTorch</li>
                </ul>
              </div>
              {/* Web Dev */}
              <div className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-black'}`}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#00BFFF' }}>Web Development</h3>
                <ul className="list-disc ml-5">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Django</li>
                </ul>
              </div>
              {/* Data Science */}
              <div className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-black'}`}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#00BFFF' }}>Data Science & Analytics</h3>
                <ul className="list-disc ml-5">
                  <li>Python</li>
                  <li>R</li>
                  <li>Tableau</li>
                </ul>
              </div>
              {/* Blockchain & Cloud */}
              <div className={`p-6 rounded-xl shadow-md ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-black'}`}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#00BFFF' }}>Blockchain & Cloud</h3>
                <ul className="list-disc ml-5">
                  <li>Ethereum</li>
                  <li>Solidity</li>
                  <li>AWS</li>
                  <li>Docker</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={
        `w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
      }>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6" style={{ color: '#00BFFF' }}>Ready to Join Our Journey?</h2>
        <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Become part of our award-winning community and unlock new opportunities for growth, learning, and success. Connect with us today to start your journey!</p>
        <a href="/contactus" className={
          `inline-block font-bold py-3 px-8 rounded-full shadow-lg transition ` +
          (theme === 'dark' ? 'bg-[#00BFFF] text-white hover:bg-blue-400' : 'bg-[#00BFFF] text-white hover:bg-[#0099cc]')
        }>Contact Us</a>
      </div>
    </section>
    </div>
  );
}
