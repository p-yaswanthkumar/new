import React from "react";
import blogHero from "../assets/blog.mp4";
import { Brain, Code, BarChart3 } from "lucide-react";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.avif";
import { Link } from "react-router-dom";
const categories = [
  {
    name: "AI & ML",
    desc: "Discover the latest in artificial intelligence and machine learning.",
    
  },
  {
    name: "Web Development",
    desc: "Explore modern frameworks, tools, and best practices.",
   
  },
  {
    name: "Data Science",
    desc: "Learn about data analytics, visualization, and insights.",
    
  },
  {
    name: "Business & Strategy",
    desc: "Insights on innovation, startups, and digital transformation.",
   
  },
];
  const features = [
    {
      title: "AI & Machine Learning",
      description:
        "Harness the power of AI and ML to automate processes, gain predictive insights, and build intelligent applications tailored to your business needs.",
      image: blog1,
      link: "/ai-ml",
    },
    {
      title: "Web Development",
      description:
        "From responsive websites to scalable web apps, our development services ensure seamless user experiences and robust online presence.",
      image: blog2,
      link: "/web-development",
    },
    {
      title: "Data Science",
      description:
        "Transform raw data into meaningful insights with advanced analytics, visualization, and data-driven strategies that boost decision-making.",
      image: blog3,
      link: "/data-science",
    },
  ];
const services = [
    {
      name: "AI & ML",
      features: ["Predictive Analytics", "Automation", "Chatbots", "Personalization"],
    },
    {
      name: "Web Development",
      features: ["Responsive Design", "SEO Friendly", "Modern Frameworks", "Performance Optimized"],
    },
    {
      name: "Data Science",
      features: ["Data Cleaning", "Visualization", "Dashboards", "Advanced Insights"],
    },
    {
      name: "Business Strategy",
      features: ["Market Research", "Growth Planning", "Digital Strategy", "Innovation Support"],
    },
  ];


export default function BlogHero() {
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
  // Read blogs from localStorage
  const [latestBlogs, setLatestBlogs] = React.useState([]);
  React.useEffect(() => {
    const stored = localStorage.getItem("blogs");
    if (stored) {
      setLatestBlogs(JSON.parse(stored));
    }
  }, []);

  return (
    <div className={theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center" style={{ color: theme === 'dark' ? '#fff' : '#222' }}>
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={blogHero}
          autoPlay
          muted
          loop
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative text-center px-6" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Explore Our <span style={{ color: '#00bfff' }}>Blogs</span>
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            Stay updated with the latest insights, trends, and knowledge in{' '}
            <span className="font-semibold" style={{ color: theme === 'dark' ? '#00bfff' : '#00bfff' }}>
              AI, Web Development
            </span>
            , Data Science, and more. Learn and grow with us!
          </p>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Latest <span className="text-[#00bfff]">Blogs</span>
          </h2>
          {latestBlogs.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {latestBlogs.map((blog, idx) => (
                <article key={idx} className={`rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-gray-50 text-black'}`}>
                  <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{blog.title}</h3>
                    <p className={`text-sm leading-relaxed mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>{blog.description}</p>
                    <div className={`text-xs mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>By {blog.author}</div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>{new Date(blog.createdAt).toLocaleString()}</div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className={`text-center text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>No blogs added yet.</p>
          )}
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00bfff]'}`}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured <span style={{ color: '#fff' }}>Articles</span>
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <article
                key={index}
                className={`rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-gray-50 text-black'}`}
              >
                {/* Image */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                  <Link
                    to={
                      feature.title === "AI & Machine Learning"
                        ? "/blog/1"
                        : feature.title === "Web Development"
                        ? "/blog/2"
                        : feature.title === "Data Science"
                        ? "/blog/3"
                        : feature.link
                    }
                    className="text-[#00bfff] font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`}>
        <div className="max-w-7xl mx-auto px-6 grid  md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore by <span style={{ color: '#00bfff' }}>Categories</span>
            </h2>
            <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
              Our blogs are thoughtfully categorized to help you easily find
              content that matches your interests—whether it's{' '}
              <span className="font-semibold" style={{ color: '#00bfff' }}>
                AI, Web Development, Data Science,
              </span>{' '}
              or practical strategies to grow your business.
            </p>
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
              Browse the categories and dive into articles curated to keep you ahead 
              of the curve in technology and industry trends. Whether you’re a 
              beginner exploring new fields, a professional seeking advanced knowledge, 
              or a business leader looking for growth strategies, our blogs provide 
              practical insights, step-by-step guides, and expert opinions tailored to 
              your journey. Stay inspired, stay informed, and stay connected with the 
              ever-evolving digital world.
            </p>

          </div>

          {/* Right Cards Grid */}
          <div className="grid  sm:grid-cols-2 gap-6">
            {categories.map((cat, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'}`}
              >
                <div className="text-3xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#00bfff' }}>{cat.name}</h3>
                <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#00bfff]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Service <span style={{ color: '#fff' }}>Comparison</span>
            </h2>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className={`w-full border rounded-lg shadow-md text-left ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <thead className={theme === 'dark' ? 'bg-[#111] text-white' : 'bg-[#000] text-white'}>
              <tr>
                <th className="px-6 py-3">Features</th>
                {services.map((service, idx) => (
                  <th key={idx} className="px-6 py-3 text-center">
                    {service.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={theme === 'dark' ? 'bg-[#222] divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}>
              {services[0].features.map((_, i) => (
                <tr key={i}>
                  {/* Feature Name */}
                  <td className={`px-6 py-4 font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    {services[0].features[i]}
                  </td>
                  {/* Features across services */}
                  {services.map((service, j) => (
                    <td
                      key={j}
                      className={`px-6 py-4 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                      {service.features[i] || "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>



  <section className={`py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`}>
    <div className="max-w-6xl mx-auto px-6">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#00bfff' }}>
        Myths & Facts
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Item 1 */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <h3 className="text-red-600 font-bold">Myth:</h3>
            <p className={theme === 'dark' ? 'text-white' : 'text-black'}>You need a lot of money to start investing.</p>
          </div>
          <div className="flex gap-2">
            <h3 className="text-green-600 font-bold">Fact:</h3>
            <p className={theme === 'dark' ? 'text-white' : 'text-black'}>You can start with small amounts thanks to fractional shares and micro-investing apps.</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <h3 className="text-red-600 font-bold">Myth:</h3>
            <p className={theme === 'dark' ? 'text-white' : 'text-black'}>Checking your credit score hurts it.</p>
          </div>
          <div className="flex gap-2">
            <h3 className="text-green-600 font-bold">Fact:</h3>
            <p className={theme === 'dark' ? 'text-white' : 'text-black'}>Checking your own score is a soft inquiry and does not affect your credit.</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <h3 className="text-red-600 font-bold">Myth:</h3>
            <p className={theme === 'dark' ? 'text-white' : 'text-black'}>All debt is bad.</p>
          </div>
          <div className="flex gap-2">
            <h3 className="text-green-600 font-bold">Fact:</h3>
            <p className={theme === 'dark' ? 'text-white' : 'text-black'}>Some debt like mortgages or student loans can be good if managed responsibly.</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <h3 className="text-red-600 font-bold">Myth:</h3>
            <p className={theme === 'dark' ? 'text-white' : 'text-black'}>Investing is the same as gambling.</p>
          </div>
          <div className="flex gap-2">
            <h3 className="text-green-600 font-bold">Fact:</h3>
            <p className={theme === 'dark' ? 'text-white' : 'text-black'}>Investing is based on research and growth, while gambling is based on chance.</p>
          </div>
        </div>

        {/* Item 5 */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <h3 className="text-red-600 font-bold">Myth:</h3>
            <p className={theme === 'dark' ? 'text-white' : 'text-black'}>You should always avoid credit cards.</p>
          </div>
          <div className="flex gap-2">
            <h3 className="text-green-600 font-bold">Fact:</h3>
            <p className={theme === 'dark' ? 'text-white' : 'text-black'}>Credit cards can be useful if used responsibly and paid off monthly.</p>
          </div>
        </div>

        {/* Item 6 */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <h3 className="text-red-600 font-bold">Myth:</h3>
            <p className={theme === 'dark' ? 'text-white' : 'text-black'}>Renting is throwing money away.</p>
          </div>
          <div className="flex gap-2">
            <h3 className="text-green-600 font-bold">Fact:</h3>
            <p className={theme === 'dark' ? 'text-white' : 'text-black'}>Renting can be a smart financial choice depending on your goals.</p>
          </div>
        </div>
      </div>
    </div>
  </section>



    </div>
  );
}
