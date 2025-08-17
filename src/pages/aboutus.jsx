import React from "react";
import aboutHero from "../assets/abouthero.mp4";
import missionImg from "../assets/mission.avif";
import e1 from "../assets/e1.avif";
import e2 from "../assets/e2.jpeg";
import e3 from "../assets/e3.jpg";
import e4 from "../assets/e4.jpg";
import e5 from "../assets/e5.jpg";
import e6 from "../assets/e6.jpg";
const communityPrograms = [
  {
    title: "Free Learning Access",
    description:
      "We've provided over 10,000 free course enrollments to students from underprivileged communities, helping bridge the digital education gap.",
    stat: "10,000+ Students Empowered",
  },
  {
    title: "Environmental Awareness",
    description:
      "Our platform promotes eco-friendly practices by using digital-first content delivery, reducing paper usage and carbon footprint by 35%.",
    stat: "35% Carbon Reduction",
  },
  {
    title: "Scholarship & Grants",
    description:
      "We offer scholarships and micro-grants to support talented learners, enabling them to access premium courses and skill-building programs.",
    stat: "$200K+ in Scholarships",
  },
  {
    title: "Diversity & Inclusion",
    description:
      "Our students come from over 40 countries and diverse backgrounds. We are committed to creating an inclusive learning environment for all.",
    stat: "40+ Countries Represented",
  },
  {
    title: "Volunteer Mentorship",
    description:
      "Our educators and alumni have volunteered over 5,000 hours mentoring students, guiding them through career and project challenges.",
    stat: "5,000+ Volunteer Hours",
  },
  {
    title: "Tech for Social Good",
    description:
      "We develop tools and projects that leverage technology to enhance learning accessibility and provide educational resources to underserved communities.",
    stat: "5+ Digital Initiatives",
  },
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
          src={aboutHero}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            Empowering <span style={{ color: '#00BFFF' }}>Minds</span>, Transforming Futures
          </h1>
          <p className={`mt-4 max-w-3xl text-lg md:text-xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            At our core, we are passionate about providing world-class education to learners everywhere.  
            Our mission is to bridge the gap between knowledge and opportunity, creating a platform where curiosity meets achievement and innovation drives success.
          </p>
        </div>
      </section>

    {/* Our Instructors Section */}
    
    {/* CTA Section */}
    
      {/* Vision, Mission, Values Cards Section */}
      

      {/* Vision & Mission Section */}
     
    {/* Our Growth Through Years Timeline Section */}
    <section className={
      `w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
    }>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-14" style={{ color: '#00BFFF' }}>Our Journey Through the Years</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 w-1 bg-[#00BFFF] h-full transform -translate-x-1/2"></div>
          <div className="flex flex-col gap-16">
            {/* 2018 */}
            <div className="relative flex items-center min-h-[180px]">
              <div className="w-1/2 flex justify-end pr-8">
                <div className={
                  `rounded-lg shadow-lg p-8 w-full max-w-md ml-auto ` +
                  (theme === 'dark' ? 'bg-[#222]' : 'bg-white')
                }>
                  <div className="font-bold mb-2" style={{ color: '#00BFFF' }}>2018</div>
                  <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Company Founded</h3>
                  <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>Started with a team of 5 passionate individuals and a vision to revolutionize financial services.</p>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center z-10">
                <span className="bg-[#00BFFF] text-white rounded-full px-4 py-2 font-bold text-lg shadow-lg">2018</span>
              </div>
              <div className="w-1/2"></div>
            </div>
            {/* 2019 */}
            <div className="relative flex items-center min-h-[180px]">
              <div className="w-1/2"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center z-10">
                <span className="bg-[#00BFFF] text-white rounded-full px-4 py-2 font-bold text-lg shadow-lg">2019</span>
              </div>
              <div className="w-1/2 flex justify-start pl-8">
                <div className={
                  `rounded-lg shadow-lg p-8 w-full max-w-md mr-auto ` +
                  (theme === 'dark' ? 'bg-[#222]' : 'bg-white')
                }>
                  <div className="font-bold mb-2" style={{ color: '#00BFFF' }}>2019</div>
                  <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>First 100 Clients</h3>
                  <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>Reached our first milestone of serving 100 satisfied clients with personalized financial solutions.</p>
                </div>
              </div>
            </div>
            {/* 2020 */}
            <div className="relative flex items-center min-h-[180px]">
              <div className="w-1/2 flex justify-end pr-8">
                <div className={
                  `rounded-lg shadow-lg p-8 w-full max-w-md ml-auto ` +
                  (theme === 'dark' ? 'bg-[#222]' : 'bg-white')
                }>
                  <div className="font-bold mb-2" style={{ color: '#00BFFF' }}>2020</div>
                  <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Digital Transformation</h3>
                  <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>Launched our comprehensive digital platform, making financial services more accessible than ever.</p>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center z-10">
                <span className="bg-[#00BFFF] text-white rounded-full px-4 py-2 font-bold text-lg shadow-lg">2020</span>
              </div>
              <div className="w-1/2"></div>
            </div>
            {/* 2021 */}
            <div className="relative flex items-center min-h-[180px]">
              <div className="w-1/2"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center z-10">
                <span className="bg-[#00BFFF] text-white rounded-full px-4 py-2 font-bold text-lg shadow-lg">2021</span>
              </div>
              <div className="w-1/2 flex justify-start pl-8">
                <div className={
                  `rounded-lg shadow-lg p-8 w-full max-w-md mr-auto ` +
                  (theme === 'dark' ? 'bg-[#222]' : 'bg-white')
                }>
                  <div className="font-bold mb-2" style={{ color: '#00BFFF' }}>2021</div>
                  <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Series A Funding</h3>
                  <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>Secured $10M in Series A funding to expand our services and reach more clients globally.</p>
                </div>
              </div>
            </div>
            {/* 2022 */}
            <div className="relative flex items-center min-h-[180px]">
              <div className="w-1/2 flex justify-end pr-8">
                <div className={
                  `rounded-lg shadow-lg p-8 w-full max-w-md ml-auto ` +
                  (theme === 'dark' ? 'bg-[#222]' : 'bg-white')
                }>
                  <div className="font-bold mb-2" style={{ color: '#00BFFF' }}>2022</div>
                  <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>International Expansion</h3>
                  <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>Expanded operations to 5 countries, serving over 10,000 clients worldwide.</p>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center z-10">
                <span className="bg-[#00BFFF] text-white rounded-full px-4 py-2 font-bold text-lg shadow-lg">2022</span>
              </div>
              <div className="w-1/2"></div>
            </div>
            {/* 2023 */}
            <div className="relative flex items-center min-h-[180px]">
              <div className="w-1/2"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center z-10">
                <span className="bg-[#00BFFF] text-white rounded-full px-4 py-2 font-bold text-lg shadow-lg">2023</span>
              </div>
              <div className="w-1/2 flex justify-start pl-8">
                <div className={
                  `rounded-lg shadow-lg p-8 w-full max-w-md mr-auto ` +
                  (theme === 'dark' ? 'bg-[#222]' : 'bg-white')
                }>
                  <div className="font-bold mb-2" style={{ color: '#00BFFF' }}>2023</div>
                  <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>AI Integration</h3>
                  <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>Integrated advanced AI technology to provide smarter, more personalized financial insights.</p>
                </div>
              </div>
            </div>
            {/* 2024 */}
            <div className="relative flex items-center min-h-[180px]">
              <div className="w-1/2 flex justify-end pr-8">
                <div className={
                  `rounded-lg shadow-lg p-8 w-full max-w-md ml-auto ` +
                  (theme === 'dark' ? 'bg-[#222]' : 'bg-white')
                }>
                  <div className="font-bold mb-2" style={{ color: '#00BFFF' }}>2024</div>
                  <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>50,000+ Clients</h3>
                  <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}>Reached the milestone of serving over 50,000 clients with our innovative financial solutions.</p>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center z-10">
                <span className="bg-[#00BFFF] text-white rounded-full px-4 py-2 font-bold text-lg shadow-lg">2024</span>
              </div>
              <div className="w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className={
      `w-full py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00BFFF]'}`
    }>
        <div className="max-w-7xl  text-justify mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-10" style={{ color: '#FFF' }}>Our Vision, Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <div className={
              `rounded-2xl shadow-lg p-8 flex text-justify flex-col items-center ` +
              (theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-50')
            }>
              <div className="bg-[#00BFFF] rounded-full p-4 mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#00BFFF' }}>Our Vision</h3>
              <ul className={`text-left list-disc  text-justify pl-5 space-y-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                <li>To create a world where quality education is accessible to everyone.</li>
                <li>Empowering learners to achieve their personal and professional goals.</li>
              </ul>
            </div>
            {/* Mission Card */}
            <div className={
              `rounded-2xl shadow-lg p-8 flex flex-col items-center ` +
              (theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-50')
            }>
              <div className="bg-[#00BFFF] text-[#00bfff] rounded-full p-4 mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#00BFFF' }}>Our Mission</h3>
              <ul className={`text-left list-disc pl-5 text-justify space-y-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                <li>To provide innovative, engaging, and practical learning experiences.</li>
                <li>Bridge knowledge and opportunity for students globally.</li>
              </ul>
            </div>
            {/* Values Card */}
            <div className={
              `rounded-2xl shadow-lg p-8 flex flex-col items-center ` +
              (theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-50')
            }>
              <div className="bg-[#00BFFF] rounded-full p-4 mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8l-4 4h8l-4-4z" /><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#00BFFF' }}>Our Values</h3>
              <ul className={`text-left list-disc text-justify pl-5 space-y-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                <li>Integrity, innovation, and inclusivity in all we do.</li>
                <li>Commitment to lifelong learning and student success.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    {/* End Timeline Section */}
    {/* Awards & Certificates Section */}
    <section className={
      `w-full py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
    }>
      <div className="max-w-7xl mx-auto px-6 text-justify lg:px-8 grid  lg:grid-cols-2 gap-27 items-center">
        {/* Content Left */}
        <div>
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#00BFFF' }}>Awards & Certificates</h2>
          <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Our commitment to excellence has been recognized by industry leaders and educational organizations. Over the years, we have received numerous awards and certificates for innovation, impact, and quality in financial education and services.</p>
          <ul className={`list-disc pl-5 space-y-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
            <li>Best Financial Education Platform 2022 - Global EdTech Awards</li>
            <li>Innovation in Online Learning 2023 - FinTech Excellence</li>
            <li>Top 100 Fastest Growing Companies 2024 - Business Insights</li>
            <li>Certified by International Financial Education Association</li>
          </ul>
        </div>
        {/* Image Right */}
        <div className="flex justify-center">
          <img src={missionImg} alt="Awards & Certificates" className="rounded-2xl shadow-xl w-full max-w-md object-cover" />
        </div>
      </div>
    </section>


    <section className={
      `w-full py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00BFFF]'}`
    }>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-10" style={{ color: '#FFF' }}>Our Instructors</h2>
        <div className="grid  lg:grid-cols-3 gap-10">
          {/* Row 1 */}
          <div className="flex flex-col items-center">
            <img src={e1} alt="Instructor 1" className="w-40 h-40 object-cover rounded-full shadow-lg mb-4" />
            <h3 className="text-xl font-bold mb-2" style={{ color: '#FFF' }}>Priya Sharma</h3>
            <p className={theme === 'dark' ? 'text-gray-200 text-center' : 'text-gray-700 text-center'}>Expert in Financial Planning & Analysis with 10+ years of experience helping students master budgeting and forecasting.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={e2} alt="Instructor 2" className="w-40 h-40 object-cover rounded-full shadow-lg mb-4" />
            <h3 className="text-xl font-bold mb-2" style={{ color: '#FFF' }}>Rahul Verma</h3>
            <p className={theme === 'dark' ? 'text-gray-200 text-center' : 'text-gray-700 text-center'}>Certified Public Accountant and Bookkeeping specialist, passionate about simplifying accounting for all learners.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={e3} alt="Instructor 3" className="w-40 h-40 object-cover rounded-full shadow-lg mb-4" />
            <h3 className="text-xl font-bold mb-2" style={{ color: '#FFF' }}>Anita Desai</h3>
            <p className={theme === 'dark' ? 'text-gray-200 text-center' : 'text-gray-700 text-center'}>Investment Advisory professional, guiding students in building strong investment portfolios and financial independence.</p>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col items-center">
            <img src={e4} alt="Instructor 4" className="w-40 h-40 object-cover rounded-full shadow-lg mb-4" />
            <h3 className="text-xl font-bold mb-2" style={{ color: '#FFF' }}>Suresh Kumar</h3>
            <p className={theme === 'dark' ? 'text-gray-200 text-center' : 'text-gray-700 text-center'}>Audit & Compliance expert, ensuring students understand the importance of regulatory standards and ethical practices.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={e5} alt="Instructor 5" className="w-40 h-40 object-cover rounded-full shadow-lg mb-4" />
            <h3 className="text-xl font-bold mb-2" style={{ color: '#FFF' }}>Meera Joshi</h3>
            <p className={theme === 'dark' ? 'text-gray-200 text-center' : 'text-gray-700 text-center'}>Budget Management coach, helping learners develop practical skills for personal and business financial success.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={e6} alt="Instructor 6" className="w-40 h-40 object-cover rounded-full shadow-lg mb-4" />
            <h3 className="text-xl font-bold mb-2" style={{ color: '#FFF' }}>Vikram Singh</h3>
            <p className={theme === 'dark' ? 'text-gray-200 text-center' : 'text-gray-700 text-center'}>Tax Preparation & Filing specialist, making complex tax concepts easy and accessible for all students.</p>
          </div>
        </div>
      </div>
    </section>


    <section className={
      `py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`
    }>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className={`text-4xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          Community Impact & <span style={{ color: '#00bfff' }}>Social Responsibility</span>
        </h2>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {communityPrograms.map((program, index) => (
            <div
              key={index}
              className={`pt-3 pb-6 px-6 rounded-lg shadow-md flex flex-col justify-between ` + (theme === 'dark' ? 'bg-[#222]' : 'bg-white')}
            >
              <div>
                <h3 className={`text-xl text-justify font-semibold mb-2 ${theme === 'dark' ? 'text-[#00BFFF]' : ''}`}>{program.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-200 text-justify mb-3' : 'text-gray-700 text-justify mb-3'}>{program.description}</p>
              </div>
              <div className="flex justify-center">
                <span className="inline-block bg-[#00BFFF] rounded-full text-white font-semibold align-middle px-4 py-2">
                  {program.stat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>



    
    </div>
  );
}
