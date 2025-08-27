import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import blogHero from "../assets/blog.mp4";
import { Brain, Code, BarChart3 } from "lucide-react";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const categories = [
	{
		name: "Residential Construction",
		desc: "Design and build premium homes with modern architecture and durable materials.",
	},
	{
		name: "Commercial Projects",
		desc: "End-to-end solutions for offices, retail spaces, and industrial buildings.",
	},
	{
		name: "Interior Fit-outs",
		desc: "Transform interiors with elegant, functional, and customized designs.",
	},
	{
		name: "Renovation & Remodeling",
		desc: "Upgrade existing spaces with expert planning and flawless execution.",
	},
];
const features = [
	{
		title: "Residential Construction",
		description:
			"We build high-quality homes tailored to your lifestyle—combining superior craftsmanship, innovative design, and timely delivery.",
		image: blog1, // Replace with your construction-related image
		link: "/blog/1",
	},
	{
		title: "Commercial Projects",
		description:
			"Our commercial construction services ensure functional layouts, modern aesthetics, and compliance with industry standards.",
		image: blog2,
		link: "/blog/2",
	},
	{
		title: "Interior Fit-outs",
		description:
			"From planning to execution, we create stunning interiors that maximize space and reflect your unique style.",
		image: blog3,
		link: "/blog/3",
	},
];
const services = [
	{
		name: "Residential Construction",
		features: [
			"Custom Home Design",
			"Structural Excellence",
			"Premium Materials",
			"On-time Delivery",
		],
	},
	{
		name: "Commercial Projects",
		features: [
			"Space Planning",
			"Compliance & Safety",
			"Efficient Execution",
			"Sustainable Solutions",
		],
	},
	{
		name: "Interior Fit-outs",
		features: [
			"Modern Designs",
			"Turnkey Execution",
			"Cost Efficiency",
			"Premium Finishes",
		],
	},
	{
		name: "Renovation & Remodeling",
		features: [
			"Layout Upgrades",
			"Structural Modifications",
			"Quality Assurance",
			"End-to-End Service",
		],
	},
];

export default function BlogHero() {
	const { t } = useTranslation();
	React.useEffect(() => {
		AOS.init({ once: false });
	}, []);
	// Theme state synced with Header
	const [theme, setTheme] = React.useState("light");
	React.useEffect(() => {
		if (typeof window !== "undefined") {
			const storedTheme = localStorage.getItem("theme") || "light";
			setTheme(storedTheme);
			const handleThemeChange = () => {
				const newTheme = localStorage.getItem("theme") || "light";
				setTheme(newTheme);
			};
			window.addEventListener("theme-changed", handleThemeChange);
			window.addEventListener("storage", handleThemeChange);
			return () => {
				window.removeEventListener("theme-changed", handleThemeChange);
				window.removeEventListener("storage", handleThemeChange);
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
		<div
			className={
				theme === "dark"
					? "min-h-screen bg-black text-white"
					: "min-h-screen bg-white text-black"
			}
		>
			{/* Hero Section */}
			<section
				className="relative w-full h-screen flex items-center justify-center overflow-hidden"
				style={{ color: theme === "dark" ? "#fff" : "#222" }}
				data-aos="fade-up"
				data-aos-delay="100"
			>
				{/* Background Video */}
				<video
					className="absolute inset-0 w-full h-full object-cover"
					src={blogHero}
					autoPlay
					muted
					loop
					data-aos="fade"
					data-aos-delay="120"
				/>

				{/* Overlay */}
				<div
					className="absolute inset-0 bg-black/50"
					data-aos="fade"
					data-aos-delay="140"
				></div>

				{/* Content */}
				<div
					className="relative text-center px-6"
					data-aos="fade-up"
					data-aos-delay="160"
				>
					<h1
						className={`text-4xl md:text-6xl font-bold mb-4 ${
							theme === "dark" ? "text-white" : "text-white"
						}`}
						data-aos="fade-up"
						data-aos-delay="180"
					>
						Discover Our{" "}
						<span
							className={
								theme === "dark"
									? "text-yellow-400"
									: "text-yellow-400"
							}
							data-aos="zoom-in"
							data-aos-delay="200"
						>
							Insights
						</span>
					</h1>
					<p
						className={`text-lg md:text-xl max-w-2xl mx-auto ${
							theme === "dark" ? "text-white" : "text-white"
						}`}
						data-aos="fade-up"
						data-aos-delay="220"
					>
						Explore expert articles on{" "}
						<span
							className={
								theme === "dark"
									? "text-yellow-400"
									: "text-yellow-400"
							}
							style={{ fontWeight: "600" }}
							data-aos="zoom-in"
							data-aos-delay="240"
						>
							Residential, Commercial, and Industrial Construction
						</span>
						— insights, trends, and tips to help you build smarter and
						stronger.
					</p>
				</div>
			</section>

			{/* Latest Blogs Section */}
			<section
				className={`py-16 ${
					theme === "dark" ? "bg-[#181818]" : "bg-gray-100"
				} overflow-hidden`}
				data-aos="fade-up"
				data-aos-delay="260"
			>
				<div
					className="max-w-7xl mx-auto px-6"
					data-aos="fade-up"
					data-aos-delay="280"
				>
					<h2
						className="text-4xl md:text-5xl font-bold text-center mb-12"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						Latest <span className="text-yellow-500">Blogs</span>
					</h2>
					<style>{`
			.flip-card { perspective: 1000px; }
			.flip-card-inner { transition: transform 0.6s; transform-style: preserve-3d; position: relative; }
			.flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
			.flip-card-front, .flip-card-back {
			  position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 1rem;
			}
			.flip-card-front { z-index: 2; }
			.flip-card-back { transform: rotateY(180deg); z-index: 3; }
		  `}</style>
					{latestBlogs.length > 0 ? (
						<div
							className="grid md:grid-cols-3 gap-8"
							data-aos="fade-up"
							data-aos-delay="320"
						>
							{latestBlogs.map((blog, idx) => (
								<div
									key={idx}
									className="flip-card w-full h-80"
									data-aos="zoom-in"
									data-aos-delay={340 + idx * 20}
								>
									<div className="flip-card-inner w-full h-full">
										<div
											className={`flip-card-front w-full h-full overflow-hidden rounded-2xl shadow flex items-center justify-center ${
												theme === "dark" ? "bg-[#222]" : "bg-gray-50"
											}`}
										>
											<img
												src={blog.image}
												alt={blog.title}
												className="w-full h-full object-cover rounded-2xl"
											/>
										</div>
										<div
											className={`flip-card-back w-full h-full p-6 flex flex-col justify-center items-center rounded-2xl shadow ${
												theme === "dark"
													? "bg-[#222] text-white"
													: "bg-gray-50 text-black"
											}`}
										>
											<h3
												className={`text-xl font-semibold mb-3 ${
													theme === "dark"
														? "text-white"
														: "text-gray-900"
												}`}
											>
												{blog.title}
											</h3>
											<p
												className={`text-sm leading-relaxed mb-2 ${
													theme === "dark"
														? "text-gray-200"
														: "text-gray-600"
												}`}
											>
												{blog.description}
											</p>
											<div
												className={`text-xs mb-2 ${
													theme === "dark"
														? "text-gray-400"
														: "text-gray-500"
												}`}
											>
												By {blog.author}
											</div>
											<div
												className={`text-xs ${
													theme === "dark"
														? "text-gray-500"
														: "text-gray-400"
												}`}
											>
												{new Date(blog.createdAt).toLocaleString()}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						<p
							className={`text-center text-lg ${
								theme === "dark" ? "text-gray-400" : "text-gray-500"
							}`}
							data-aos="fade-up"
							data-aos-delay="340"
						>
							No blogs added yet.
						</p>
					)}
				</div>
			</section>

			{/* Featured Articles Section */}
			<section
				className={`py-16 ${
					theme === "dark" ? "bg-[#222]" : "bg-white"
				} overflow-hidden`}
				data-aos="fade-up"
				data-aos-delay="360"
			>
				<div
					className="max-w-7xl mx-auto px-6"
					data-aos="fade-up"
					data-aos-delay="380"
				>
					{/* Heading */}
					<h2
						className="text-4xl md:text-5xl font-bold text-center mb-12"
						data-aos="fade-up"
						data-aos-delay="400"
					>
						Featured{" "}
						<span style={{ color: "#fecc15" }}>Articles</span>
					</h2>

					{/* Grid */}
					<div
						className="grid md:grid-cols-3 gap-8"
						data-aos="fade-up"
						data-aos-delay="420"
					>
						{features.map((feature, index) => (
							<article
								key={index}
								className={`rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden ${
									theme === "dark" ? "bg-[#222] text-white" : "bg-gray-50 text-black"
								}`}
								data-aos="zoom-in"
								data-aos-delay={440 + index * 20}
							>
								{/* Image */}
								<img
									src={feature.image}
									alt={feature.title}
									className="w-full h-48 object-cover"
								/>

								{/* Content */}
								<div className="p-6">
									<h3
										className={`text-xl font-semibold mb-3 ${
											theme === "dark" ? "text-white" : "text-gray-900"
										}`}
									>
										{feature.title}
									</h3>
									<p
										className={`text-sm leading-relaxed mb-4 ${
											theme === "dark" ? "text-gray-200" : "text-gray-600"
										}`}
									>
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
										className="text-yellow-400 font-semibold hover:underline"
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
			<section
				className={`py-16 ${
					theme === "dark" ? "bg-[#181818]" : "bg-gray-100"
				} overflow-hidden`}
				data-aos="fade-up"
				data-aos-delay="500"
			>
				<div
					className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
					data-aos="fade-up"
					data-aos-delay="520"
				>
					{/* Left Content */}
					<div data-aos="fade-right" data-aos-delay="540">
						<h2
							className="text-4xl md:text-5xl font-bold mb-6"
							data-aos="fade-up"
							data-aos-delay="560"
						>
							Explore{" "}
							<span style={{ color: "#FFD700" }}>Construction Services</span>
						</h2>
						<p
							className={`text-lg mb-6 ${
								theme === "dark" ? "text-gray-200" : "text-gray-700"
							}`}
							data-aos="fade-up"
							data-aos-delay="580"
						>
							We provide comprehensive solutions for every phase of your
							construction journey— from{" "}
							<span
								className="font-semibold"
								style={{ color: "#FFD700" }}
							>
								residential builds, commercial projects, interior design,
							</span>{" "}
							to complete project management and turnkey execution.
						</p>
						<p
							className={
								theme === "dark" ? "text-gray-400" : "text-gray-600"
							}
							data-aos="fade-up"
							data-aos-delay="600"
						>
							Whether you're planning a dream home, renovating an existing
							space, or managing large-scale developments, our expertise
							ensures precision, efficiency, and high-quality results every
							step of the way.
						</p>
					</div>

					{/* Right Cards Grid */}
					<div className="grid sm:grid-cols-2 gap-6" data-aos="fade-left" data-aos-delay="620">
						{categories.map((cat, index) => (
							<div
								key={index}
								className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition ${
									theme === "dark" ? "bg-[#222] text-white" : "bg-white text-black"
								}`}
								data-aos="zoom-in" data-aos-delay={640 + index * 20}
							>
								<div className="text-3xl mb-4">{cat.icon}</div>
								<h3 className="text-xl font-semibold mb-2" style={{ color: '#FFD700' }}>{cat.name}</h3>
								<p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}>
									{cat.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section
				className={`py-16 ${
					theme === "dark" ? "bg-[#222]" : "bg-[#fff]"
				} overflow-hidden`}
				data-aos="fade-up"
				data-aos-delay="700"
			>
				<div
					className="max-w-7xl mx-auto px-6"
					data-aos="fade-up"
					data-aos-delay="720"
				>
					{/* Heading */}
					<h2
						className={`text-4xl md:text-5xl font-bold text-center mb-12 ${
							theme === "dark" ? "text-white" : "text-black"
						}`}
						data-aos="fade-up"
						data-aos-delay="740"
					>
						Service{" "}
						<span className="text-yellow-400">Comparison</span>
					</h2>

					{/* Responsive Table */}
			   <div
				   className="overflow-x-auto"
				   data-aos="fade-up"
				   data-aos-delay="760"
			   >
				   <table
					   className={`w-full border rounded-lg shadow-md text-left ${
						   theme === "dark" ? "border-gray-700" : "border-gray-200"
					   }`}
				   >
					   <thead
						   className={
							   theme === "dark"
								   ? "bg-[#111] text-white"
								   : "bg-black text-white"
						   }
					   >
						   <tr>
							   <th className="px-6 py-3 font-semibold">Features</th>
							   {services.map((service, idx) => (
								   <th
									   key={idx}
									   className="px-6 py-3 text-center font-semibold"
								   >
									   {service.name}
								   </th>
							   ))}
						   </tr>
					   </thead>
					   <tbody
						   className={
							   theme === "dark"
								   ? "bg-[#222] divide-y divide-gray-700"
								   : "bg-white divide-y divide-gray-200"
						   }
					   >
						   {services[0].features.map((feature, i) => (
							   <tr key={i}>
								   {/* Feature Name */}
								   <td
									   className={`px-6 py-4 font-semibold ${
										   theme === "dark" ? "text-gray-200" : "text-gray-700"
									   }`}
								   >
									   {feature}
								   </td>
								   {/* Features across services */}
								   {services.map((service, j) => (
									   <td
										   key={j}
										   className={`px-6 py-4 text-center ${
											   theme === "dark" ? "text-gray-400" : "text-gray-600"
										   }`}
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

			<section
				className={`py-16 ${
					theme === "dark" ? "bg-[#181818]" : "bg-gray-100"
				} overflow-hidden`}
				data-aos="fade-up"
				data-aos-delay="800"
			>
				<div
					className="max-w-6xl mx-auto px-6"
					data-aos="fade-up"
					data-aos-delay="820"
				>
					{/* Heading */}
				   <h2
					   className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-400"
					   data-aos="fade-up"
					   data-aos-delay="840"
				   >
					   Construction Myths & Facts
				   </h2>

					{/* Grid */}
					<div
						className="grid md:grid-cols-2 gap-10"
						data-aos="fade-up"
						data-aos-delay="860"
					>
						{/* Item 1 */}
						<div
							className="space-y-4"
							data-aos="fade-right"
							data-aos-delay="880"
						>
							<div className="flex gap-2">
								<h3 className="text-red-500 font-bold">Myth:</h3>
								<p
									className={
										theme === "dark"
											? "text-gray-300"
											: "text-gray-800"
									}
								>
									Building a home always exceeds the budget.
								</p>
							</div>
							<div className="flex gap-2">
								<h3 className="text-green-500 font-bold">Fact:</h3>
								<p
									className={
										theme === "dark"
											? "text-gray-300"
											: "text-gray-800"
									}
								>
									With proper planning and transparent pricing, costs can
									stay on track.
								</p>
							</div>
						</div>

						{/* Item 2 */}
						<div
							className="space-y-4"
							data-aos="fade-left"
							data-aos-delay="900"
						>
							<div className="flex gap-2">
								<h3 className="text-red-500 font-bold">Myth:</h3>
								<p
									className={
										theme === "dark"
											? "text-gray-300"
											: "text-gray-800"
									}
								>
									All contractors cut corners.
								</p>
							</div>
							<div className="flex gap-2">
								<h3 className="text-green-500 font-bold">Fact:</h3>
								<p
									className={
										theme === "dark"
											? "text-gray-300"
											: "text-gray-800"
									}
								>
									Professional builders follow strict quality checks and
									standards.
								</p>
							</div>
						</div>

						{/* Item 3 */}
						<div
							className="space-y-4"
							data-aos="fade-right"
							data-aos-delay="920"
						>
							<div className="flex gap-2">
								<h3 className="text-red-500 font-bold">Myth:</h3>
								<p
									className={
										theme === "dark"
											? "text-gray-300"
											: "text-gray-800"
									}
								>
									Custom homes take forever to complete.
								</p>
							</div>
							<div className="flex gap-2">
								<h3 className="text-green-500 font-bold">Fact:</h3>
								<p
									className={
										theme === "dark"
											? "text-gray-300"
											: "text-gray-800"
									}
								>
									Modern project management keeps timelines predictable and
									efficient.
								</p>
							</div>
						</div>

						{/* Item 4 */}
						<div
							className="space-y-4"
							data-aos="fade-left"
							data-aos-delay="940"
						>
							<div className="flex gap-2">
								<h3 className="text-red-500 font-bold">Myth:</h3>
								<p
									className={
										theme === "dark"
											? "text-gray-300"
											: "text-gray-800"
									}
								>
									Green building is too expensive.
								</p>
							</div>
							<div className="flex gap-2">
								<h3 className="text-green-500 font-bold">Fact:</h3>
								<p
									className={
										theme === "dark"
											? "text-gray-300"
											: "text-gray-800"
									}
								>
									Energy-efficient designs save costs in the long run.
								</p>
							</div>
						</div>

						{/* Item 5 */}
						<div
							className="space-y-4"
							data-aos="fade-right"
							data-aos-delay="960"
						>
							<div className="flex gap-2">
								<h3 className="text-red-500 font-bold">Myth:</h3>
								<p
									className={
										theme === "dark"
											? "text-gray-300"
											: "text-gray-800"
									}
								>
									Prefabricated homes are low quality.
								</p>
							</div>
							<div className="flex gap-2">
								<h3 className="text-green-500 font-bold">Fact:</h3>
							   <p
								   className={
									   theme === "dark"
										   ? "text-gray-300"
										   : "text-gray-800"
								   }
							   >
								   Modern prefab technology ensures precision and durability.
							   </p>
							</div>
						</div>

						{/* Item 6 */}
						<div
							className="space-y-4"
							data-aos="fade-left"
							data-aos-delay="980"
						>
							<div className="flex gap-2">
								<h3 className="text-red-500 font-bold">Myth:</h3>
								<p
									className={
										theme === "dark"
											? "text-gray-300"
											: "text-gray-800"
									}
								>
									You can't customize affordable housing.
								</p>
							</div>
							<div className="flex gap-2">
								<h3 className="text-green-500 font-bold">Fact:</h3>
								<p
									className={
										theme === "dark"
											? "text-gray-300"
											: "text-gray-800"
									}
								>
									Smart design choices allow personalization without high
									costs.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
