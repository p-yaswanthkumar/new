import React from "react";
import { useParams, Link } from "react-router-dom";
import blog1 from "../assets/blog1.jpeg";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.avif";

export default function BlogDetail() {
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
  const { id } = useParams();

  // Example blog data (you can replace with Admin DB later)
  const blogs = [
  {
    id: "1",
    title: "AI & Machine Learning",
    image: blog1,
    intro:
      "AI and Machine Learning are revolutionizing industries with automation, predictive insights, and smarter systems. From automating repetitive tasks to enabling advanced innovations like self-driving cars and personalized medicine, AI is becoming the backbone of modern technology.",
    sections: [
      {
        heading: "Introduction to AI",
        content:
          "Artificial Intelligence is the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. It covers multiple branches such as computer vision, natural language processing, robotics, and expert systems. AI systems rely on algorithms and models trained on large datasets, allowing them to adapt and improve over time. Unlike traditional programming, AI learns and evolves, creating systems that can make predictions, reason, and even exhibit creativity.",
      },
      {
        heading: "Benefits of Machine Learning",
        content:
          "Machine Learning enables systems to learn from data, improving accuracy and efficiency over time without human intervention. Businesses benefit from predictive analytics, fraud detection, personalized recommendations, and smarter automation. For example, e-commerce platforms use ML to suggest products, streaming services recommend content, and healthcare providers detect diseases earlier. Over time, ML reduces costs, minimizes errors, and adapts to changing environments, ensuring systems remain effective as new challenges arise.",
      },
      {
        heading: "Real-World Applications",
        content:
          "AI is used in healthcare (diagnostics, drug discovery, personalized medicine), finance (risk assessment, fraud detection, algorithmic trading), and education (personalized learning paths, grading automation). Self-driving cars use sensors and ML models to interpret surroundings in real-time, while voice assistants like Alexa and Siri understand natural language to interact with users. AI also plays a critical role in agriculture, cybersecurity, supply chain optimization, and even creative industries such as art and music generation.",
      },
      {
        heading: "Automation Advantages",
        content:
          "Automation reduces costs, minimizes errors, and speeds up processes across various business sectors. In manufacturing, robots handle repetitive and dangerous tasks, reducing human risk. In offices, AI chatbots automate customer support, while Robotic Process Automation (RPA) takes care of invoice processing, HR onboarding, and compliance. The advantages extend to scalability, where businesses can process millions of operations simultaneously with minimal resources. This leads to faster delivery, better efficiency, and increased profits.",
      },
      {
        heading: "Data-Driven Insights",
        content:
          "ML models analyze large datasets to provide predictive and prescriptive analytics that support decision-making. For example, retailers forecast demand and optimize inventory, while governments use AI-driven insights for urban planning and disaster management. Predictive analytics identifies upcoming trends, while prescriptive analytics suggests the best possible actions to achieve goals. As organizations collect massive amounts of structured and unstructured data, AI tools help uncover hidden patterns, customer behavior, and business opportunities that would otherwise remain invisible.",
      },
      {
        heading: "Challenges & Solutions",
        content:
          "Challenges include bias, data privacy, and model transparency. AI systems can unintentionally perpetuate discrimination if trained on biased data. Privacy concerns arise when personal information is used without consent. Additionally, the 'black box' nature of AI makes it difficult to understand why models make certain decisions. Solutions lie in ethical AI frameworks, transparent algorithms, explainable AI models (XAI), and strict data governance policies. Organizations must also ensure regular audits, diverse datasets, and compliance with international regulations like GDPR to build trust.",
      },
      {
        heading: "Future Scope",
        content:
          "AI will continue evolving, driving innovation in robotics, IoT, and smart cities for decades to come. The future of AI lies in Artificial General Intelligence (AGI), where machines could understand and perform tasks across any domain just like humans. Emerging fields like neuromorphic computing, quantum AI, and bio-AI are set to push the boundaries of what machines can do. In healthcare, AI will power advanced genetic engineering and predictive healthcare, while in education, personalized AI tutors will transform learning experiences globally.",
      },
    ],
  },
  {
    id: "2",
    title: "Web Development",
    image: blog2,
    intro:
      "Web Development powers the digital world with responsive websites, scalable applications, and seamless online experiences. From simple static websites to complex enterprise platforms, web development brings businesses, services, and users together on a global scale.",
    sections: [
      {
        heading: "Modern Web Frameworks",
        content:
          "React, Angular, and Vue have transformed frontend development with reusable components and fast rendering. These frameworks encourage modular code, making large applications more maintainable and scalable. Developers also benefit from powerful ecosystems with libraries, community support, and integrations. Progressive frameworks such as Svelte and Next.js are pushing the boundaries even further, enabling faster performance, server-side rendering, and SEO optimization out of the box.",
      },
      {
        heading: "Responsive Design",
        content:
          "Responsive design ensures websites look great on all devices, from mobiles to desktops. With mobile-first development becoming a standard, responsive frameworks like Tailwind CSS and Bootstrap make it easier to adapt layouts for any screen size. Media queries, flexible grids, and adaptive typography ensure a seamless user experience. A well-executed responsive design not only enhances usability but also boosts SEO ranking, as Google prioritizes mobile-friendly websites.",
      },
      {
        heading: "Frontend Technologies",
        content:
          "HTML, CSS, and JavaScript remain the backbone of frontend development. HTML structures content, CSS styles it, and JavaScript adds interactivity. With modern enhancements like CSS Grid, Flexbox, and ES6+ features, developers can now build cleaner, more efficient, and dynamic applications. Frameworks and preprocessors such as Sass, LESS, and TypeScript further enhance productivity, making frontend development faster, cleaner, and more error-resistant.",
      },
      {
        heading: "Backend Systems",
        content:
          "Node.js, Django, and Laravel power backend operations, ensuring scalability and security. The backend is responsible for managing databases, authentication, APIs, and server-side logic. Node.js provides asynchronous processing, making it great for real-time apps like chat platforms, while Django offers security features out-of-the-box, and Laravel simplifies PHP development with elegant syntax. Cloud-native backends with serverless architecture (AWS Lambda, Firebase) are now emerging as the future, reducing server costs and scaling automatically.",
      },
      {
        heading: "API Integrations",
        content:
          "APIs connect systems, enabling apps to share data seamlessly. RESTful APIs and GraphQL are widely used for smooth communication between frontend and backend. Businesses rely on APIs for payment processing, maps, social media integrations, and AI services. With microservices architecture, applications are broken into smaller services communicating via APIs, increasing flexibility and fault tolerance. APIs also open opportunities for third-party developers to build add-ons, boosting product reach and adoption.",
      },
      {
        heading: "Security Practices",
        content:
          "Encryption, authentication, and secure coding keep applications safe from attacks. Developers must guard against threats like SQL injection, XSS, CSRF, and DDoS attacks. SSL certificates, strong password hashing, token-based authentication (JWT), and two-factor authentication are standard practices. Web Application Firewalls (WAF) and automated penetration testing are also becoming essential. As cybercrime increases, businesses must prioritize security at every stage of development instead of treating it as an afterthought.",
      },
      {
        heading: "Scalability Solutions",
        content:
          "Cloud platforms like AWS, Azure, and GCP ensure that applications scale with user demand. Scalability involves both vertical (adding resources to a server) and horizontal (adding more servers) scaling. Load balancers, containerization with Docker, and orchestration with Kubernetes make it easier to handle millions of concurrent users. Serverless computing reduces infrastructure costs by scaling automatically. Companies like Netflix and Spotify rely on microservices and cloud scalability to serve millions of global users without interruptions.",
      },
    ],
  },
  {
    id: "3",
    title: "Data Science",
    image: blog3,
    intro:
      "Data Science empowers organizations to extract insights, predict trends, and drive decision-making with data. It combines mathematics, statistics, computer science, and business knowledge to solve real-world problems and generate value from information.",
    sections: [
      {
        heading: "Introduction to Data Science",
        content:
          "Data Science combines statistics, computer science, and domain expertise to analyze and interpret data. It covers the full pipeline from data collection, cleaning, and preprocessing to advanced modeling and visualization. Unlike traditional analytics, Data Science uses machine learning to uncover hidden patterns and correlations. Its multidisciplinary nature makes it applicable across diverse sectors like healthcare, retail, sports, finance, and government.",
      },
      {
        heading: "Importance of Data",
        content:
          "Data is the new oil; it drives business decisions and strategies in every sector. Organizations rely on structured (databases, spreadsheets) and unstructured data (text, images, videos, social media). Proper use of data enables smarter marketing, better risk management, and improved customer experiences. For example, companies like Amazon use data to optimize logistics, while Google refines search results, and Netflix improves content recommendations. Data empowers organizations to stay competitive in an increasingly digital world.",
      },
      {
        heading: "Visualization Techniques",
        content:
          "Tools like Power BI, Tableau, and D3.js help visualize data clearly for decision-makers. Good visualization transforms complex data into understandable graphs, heatmaps, dashboards, and infographics. This allows decision-makers to spot trends, correlations, and anomalies instantly. Advanced visualization techniques like interactive dashboards and real-time charts help businesses react faster. Choosing the right visualization is key—bar charts for comparison, line graphs for trends, scatterplots for correlations, and geographic maps for regional insights.",
      },
      {
        heading: "Predictive Analytics",
        content:
          "Predictive models forecast outcomes, helping businesses prepare for future challenges. Retailers predict customer churn, finance companies assess credit risk, and hospitals forecast patient admissions. Predictive analytics uses regression models, decision trees, and neural networks trained on historical data to estimate future events. Combined with real-time analytics, it allows organizations to act proactively, reducing risks and capturing new opportunities. Industries like weather forecasting and stock trading heavily depend on predictive analytics for planning.",
      },
      {
        heading: "Machine Learning Role",
        content:
          "ML algorithms enhance predictions, automate analysis, and improve model performance. Supervised learning handles classification and regression tasks, while unsupervised learning uncovers hidden patterns and clusters in data. Reinforcement learning powers robotics and game AI. In Data Science, ML helps detect fraud, recommend products, optimize supply chains, and even generate text or images. The combination of ML with Big Data technologies allows businesses to process petabytes of information in real-time, unlocking new levels of intelligence.",
      },
      {
        heading: "Business Use Cases",
        content:
          "Data Science helps in fraud detection, customer insights, supply chain optimization, and marketing campaigns. In healthcare, predictive models detect early signs of diseases, while in finance, fraud detection systems save billions by catching anomalies. Retailers like Walmart optimize inventory and pricing using advanced analytics. Sports teams use Data Science to analyze player performance and game strategies. Governments rely on data analytics for traffic management, crime prediction, and public health monitoring.",
      },
      {
        heading: "Future Trends",
        content:
          "The future lies in automated data science (AutoML), AI-driven analytics, and real-time data processing. Edge computing will allow faster analysis directly on devices without sending everything to the cloud. AI will make Data Science more accessible through natural language queries, enabling non-technical users to generate insights. Quantum computing promises a revolution in data processing, handling problems impossible for classical systems. As businesses become more data-driven, Data Science will be at the core of every innovation.",
      },
    ],
  },
];

  

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className={
        `text-center py-20 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`
      }>
        <h2 className="text-2xl font-bold">Blog Not Found</h2>
        <Link to="/blog" className="text-[#00bfff] underline mt-4 block">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className={theme === 'dark' ? 'pt-20 min-h-screen bg-black text-white' : 'pt-20 min-h-screen bg-white text-black'}>
      {/* Back Link */}
      <Link to="/blog" className="text-[#00bfff] underline mt-4 block">
        Back to Blogs
      </Link>
      {/* Blog Hero */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </section>

      {/* Blog Content */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <p className={`text-lg md:text-xl max-w-5xl text-center mx-auto ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
          {blog.intro}
        </p>
        {blog.sections.map((sec, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#00bfff' }}>
              {sec.heading}
            </h2>
            <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{sec.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
