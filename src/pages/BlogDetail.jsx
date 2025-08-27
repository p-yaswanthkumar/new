import React from "react";
import { useParams, Link } from "react-router-dom";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import { useTranslation } from "react-i18next";

export default function BlogDetail() {
  const { t } = useTranslation();
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
    title: "Residential Construction",
    image: blog1,
    intro:
      "Residential construction focuses on creating functional, comfortable, and aesthetically pleasing living spaces. From single-family homes to luxury villas and apartment complexes, it combines design, planning, and execution to bring dream homes to life.",
    sections: [
      {
        heading: "Planning & Design",
        content:
          "Successful residential projects begin with detailed planning and thoughtful design. This includes understanding the client's lifestyle, budget, and future needs, while integrating architectural aesthetics with practical layouts. Zoning laws, building codes, and environmental considerations are carefully addressed during the planning stage.",
      },
      {
        heading: "Construction Process",
        content:
          "Residential construction involves site preparation, foundation work, framing, plumbing, electrical, and finishing. Each stage must adhere to strict quality standards to ensure durability and safety. Coordination among architects, engineers, and contractors ensures smooth progress.",
      },
      {
        heading: "Material Selection",
        content:
          "Choosing the right materials—whether sustainable timber, energy-efficient windows, or high-grade concrete—affects both cost and long-term performance. Modern projects increasingly incorporate eco-friendly and smart home materials for better energy efficiency.",
      },
      {
        heading: "Cost & Timeline Management",
        content:
          "A key challenge in residential projects is staying on budget and schedule. Using project management tools, contractors track progress, manage resources, and prevent delays caused by weather, labor shortages, or supply chain issues.",
      },
      {
        heading: "Modern Trends",
        content:
          "Smart homes, open layouts, and sustainable building practices dominate modern residential construction. Energy-efficient designs, renewable energy solutions like solar panels, and modular construction are also gaining popularity.",
      },
    ],
  },
  {
    id: "2",
    title: "Commercial Projects",
    image: blog2,
    intro:
      "Commercial construction covers offices, retail spaces, hotels, warehouses, and mixed-use developments. These projects demand scalability, compliance with regulations, and designs that align with a company’s brand and operational goals.",
    sections: [
      {
        heading: "Pre-Construction Planning",
        content:
          "Commercial projects begin with feasibility studies, site surveys, budgeting, and design approvals. Early planning ensures compliance with building codes, fire safety standards, and accessibility requirements.",
      },
      {
        heading: "Structural Design & Engineering",
        content:
          "High-rise buildings, shopping complexes, and industrial facilities require robust structural engineering. Materials like reinforced concrete and structural steel ensure strength, safety, and longevity.",
      },
      {
        heading: "Technology Integration",
        content:
          "Modern commercial spaces incorporate advanced HVAC systems, smart lighting, access control, and IoT devices to enhance efficiency. Green building certifications (LEED, IGBC) are also becoming standard.",
      },
      {
        heading: "Project Execution",
        content:
          "Execution involves coordination between multiple stakeholders—developers, architects, engineers, and subcontractors. Strict adherence to timelines and quality standards is crucial to avoid costly overruns.",
      },
      {
        heading: "Future of Commercial Construction",
        content:
          "Trends include sustainable construction methods, modular office spaces, and high-performance façades. Flexible designs allow companies to adapt spaces quickly as business needs evolve.",
      },
    ],
  },
  {
    id: "3",
    title: "Interior Fit-outs",
    image: blog3,
    intro:
      "Interior fit-outs transform bare structures into functional, fully finished spaces. They focus on design, efficiency, and branding to create workplaces, retail outlets, and residences that reflect unique identities.",
    sections: [
      {
        heading: "Understanding Fit-out Types",
        content:
          "Fit-outs are typically categorized as Shell & Core, Category A, or Category B. While Category A includes basic finishes (ceilings, flooring, lighting), Category B tailors the interior to the client’s specific requirements.",
      },
      {
        heading: "Space Planning",
        content:
          "Effective space planning optimizes layouts for comfort, productivity, and safety. It ensures proper placement of partitions, furniture, and amenities without wasting valuable space.",
      },
      {
        heading: "Material & Finish Selection",
        content:
          "Interior materials—flooring, wall panels, lighting fixtures, and furniture—impact both aesthetics and functionality. Durable, eco-friendly materials are preferred to balance design with sustainability.",
      },
      {
        heading: "Project Coordination",
        content:
          "Fit-out projects require close collaboration among designers, contractors, and suppliers. Managing timelines, budgets, and on-site changes ensures smooth execution without disrupting business operations.",
      },
      {
        heading: "Latest Trends",
        content:
          "Biophilic designs, acoustic solutions, flexible workspaces, and technology-enabled interiors are trending. Businesses are also emphasizing brand-aligned designs that leave a lasting impression on clients.",
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
        <Link to="/blog" className="text-yellow-400 underline mt-4 block">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className={theme === 'dark' ? 'pt-20 min-h-screen bg-black text-white' : 'pt-20 min-h-screen bg-white text-black'}>
      {/* Back Link */}
      <Link to="/blog" className="text-yellow-400 underline mt-4 block">
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
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#fecc15' }}>
              {sec.heading}
            </h2>
            <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{sec.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
