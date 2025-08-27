import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import contactVideo from "../assets/contact.mp4"; // Ensure you have a suitable video file
import contact1 from "../assets/contact1.jpg";
import contact2 from "../assets/contact2.jpg";
import contact3 from "../assets/contact3.webp";
import faqImage from "../assets/faq.jpg";
import jcbImage from "../assets/jcb.png"; // Assuming you have a JCB image
import { useTranslation } from "react-i18next";

const faqs = [
	{
		question: "How do I get started with your construction services?",
		answer: "You can contact us through our website, phone, or email. We'll schedule a consultation to understand your project requirements and provide a detailed plan.",
	},
	{
		question: "What types of projects do you handle?",
		answer: "We work on residential, commercial, and industrial projects — including renovations, fit-outs, and new constructions.",
	},
	{
		question: "Do you provide custom designs and plans?",
		answer: "Absolutely. Every project is tailored to match your vision, budget, and functional needs.",
	},
	{
		question: "Can you handle urgent or fast-track projects?",
		answer: "Yes, our team is equipped to manage fast-track timelines without compromising on quality or safety standards.",
	},
	{
		question: "What sets your construction company apart?",
		answer: "We offer end-to-end solutions — from design and planning to flawless execution — ensuring transparency, timely delivery, and superior workmanship.",
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
	const { t } = useTranslation();
	React.useEffect(() => {
		AOS.init({ once: false });
	}, []);
	const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		console.log("Toggling FAQ index:", index, "Current openIndex:", openIndex);
		setOpenIndex(openIndex === index ? null : index);
	};

	// Theme state synced with Header (live update)
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

	return (
		<div
			className={
				theme === "dark"
					? "min-h-screen text-white"
					: "min-h-screen  text-black"
			}
		>
			{/* Hero Section */}
			<section
				className={`relative h-screen flex items-center justify-center ${
					theme === "dark" ? "" : ""
				} overflow-hidden`}
				data-aos="fade-up"
				data-aos-delay="100"
			>
				{/* Background video */}
				<video
					autoPlay
					muted
					loop
					playsInline
					className="absolute inset-0 w-full h-full object-cover -z-10"
					data-aos="fade"
					data-aos-delay="120"
				>
					<source src={contactVideo} type="video/mp4" />
					Your browser does not support HTML5 video.
				</video>

				{/* Optional dark overlay for readability */}
				<div
					className={
						theme === "dark"
							? "absolute inset-0 bg-black/60 text-white -z-10"
							: "absolute inset-0 bg-black/40 text-white -z-10"
					}
					data-aos="fade"
					data-aos-delay="140"
				></div>

				{/* Content */}
				<div
					className="flex flex-col items-center justify-center  text-white text-center"
					data-aos="fade-up"
					data-aos-delay="160"
				>
					<h1
						className="text-3xl md:text-6xl font-extrabold mb-4 leading-tight whitespace-nowrap"
						data-aos="fade-up"
						data-aos-delay="180"
					>
						Plan,{" "}
						<span
							className="text-yellow-400"
							data-aos="zoom-in"
							data-aos-delay="200"
						>
							Design & Build
						</span>{" "}
						— Together
					</h1>
					<p
						className="text-lg md:text-2xl font-light mb-6"
						data-aos="fade-up"
						data-aos-delay="220"
					>
						Designing{" "}
						<span
							className="text-yellow-400 font-semibold"
							data-aos="zoom-in"
							data-aos-delay="240"
						>
							spaces
						</span>
						, delivering{" "}
						<span
							className="text-yellow-400 font-semibold"
							data-aos="zoom-in"
							data-aos-delay="260"
						>
							excellence
						</span>{" "}
						— your vision, our expertise.
					</p>
				</div>
			</section>

			{/* Contact Cards Section */}
			<section
				className={`py-16 ${
					theme === "dark" ? "bg-[#222]" : "bg-white"
				} overflow-hidden`}
				data-aos="fade-up"
				data-aos-delay="280"
			>
				<div
					className="max-w-6xl mx-auto px-6"
					data-aos="fade-up"
					data-aos-delay="300"
				>
					{/* Section Heading */}
					<h2
						className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
							theme === "dark" ? "text-yellow-400" : "text-yellow-400"
						}`}
						data-aos="fade-up"
						data-aos-delay="320"
					>
						Meet Our Support Team
					</h2>
					{/* Cards Grid */}
					<div
						className="grid gap-10 md:grid-cols-3"
						data-aos="fade-up"
						data-aos-delay="340"
					>
						{cards.map((card, index) => (
							<div
								key={index}
								className={`${
									theme === "dark"
										? "bg-[#181818] text-white"
										: "bg-white text-black"
								} rounded-2xl shadow-md hover:shadow-xl transition text-center p-6`}
								data-aos="zoom-in"
								data-aos-delay={360 + index * 20}
							>
								<img
									src={card.img}
									alt={card.title}
									className="w-full h-56 object-cover rounded-xl mb-6"
								/>
								<h3
									className="text-xl font-bold mb-2"
									style={{ color: "#facc15" }}
								>
									{card.title}
								</h3>
								<p
									className={
										theme === "dark"
											? "text-gray-200"
											: "text-gray-600"
									}
								>
									{card.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section
				className={`py-20 ${
					theme === "dark" ? "bg-[#181818]" : "bg-gray-100"
				} overflow-hidden`}
				data-aos="fade-up"
				data-aos-delay="400"
			>
				<div
					className="max-w-4xl mx-auto px-6"
					data-aos="fade-up"
					data-aos-delay="420"
				>
					{/* Small Heading */}
					<p
						className="text-yellow-400 font-semibold uppercase mb-2"
						data-aos="fade-up"
						data-aos-delay="440"
					>
						Get in Touch
					</p>
					{/* Main Heading */}
					<h2
						className={`text-3xl md:text-4xl font-extrabold mb-10 ${
							theme === "dark" ? "text-white" : "text-gray-900"
						}`}
						data-aos="fade-up"
						data-aos-delay="460"
					>
						Need help?{" "}
						<span className="text-yellow-400">Let's get in touch</span>
					</h2>

					{/* Contact Form */}
					<form
						className={`${
							theme === "dark" ? "bg-[#222] text-white" : "bg-white text-black"
						} rounded-2xl shadow-lg p-8 space-y-6`}
						data-aos="fade-up"
						data-aos-delay="480"
						onSubmit={(e) => {
							e.preventDefault();
							setFormSubmitted(true);
						}}
					>
						<div className="grid md:grid-cols-2 gap-6">
							<input
								type="text"
								placeholder="First Name"
								className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
									theme === "dark"
										? "border-gray-700 bg-[#181818] text-white"
										: "border-gray-200 bg-white text-black"
								}`}
							/>
							<input
								type="text"
								placeholder="Last Name"
								className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
									theme === "dark"
										? "border-gray-700 bg-[#181818] text-white"
										: "border-gray-200 bg-white text-black"
								}`}
							/>
						</div>
						<input
							type="email"
							placeholder="Email"
							className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
								theme === "dark"
									? "border-gray-700 bg-[#181818] text-white"
									: "border-gray-200 bg-white text-black"
							}`}
						/>
						<input
							type="tel"
							placeholder="Phone"
							className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
								theme === "dark"
									? "border-gray-700 bg-[#181818] text-white"
									: "border-gray-200 bg-white text-black"
							}`}
						/>
						<textarea
							rows="5"
							placeholder="Write a Message"
							className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
								theme === "dark"
									? "border-gray-700 bg-[#181818] text-white"
									: "border-gray-200 bg-white text-black"
							}`}
						></textarea>
						<button
							type="submit"
							className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition"
							disabled={formSubmitted}
						>
							{formSubmitted ? "Submitted!" : "Send Message"}
						</button>
						{formSubmitted && (
							<div className="text-green-500 text-center font-semibold mt-4">
								Submitted successfully!
							</div>
						)}
					</form>
				</div>
			</section>

			<section
				className={`py-20 ${
					theme === "dark" ? "bg-[#222]" : "bg-white"
				} overflow-hidden`}
				data-aos="fade-up"
				data-aos-delay="500"
			>
				<div
					className="max-w-6xl mx-auto px-6"
					data-aos="fade-up"
					data-aos-delay="520"
				>
					{/* Small heading */}
					<p
						className="text-yellow-400 font-semibold uppercase mb-2"
						data-aos="fade-up"
						data-aos-delay="540"
					>
						Location
					</p>

					{/* Main heading */}
					<h2
						className={`text-3xl md:text-4xl font-extrabold mb-10 ${
							theme === "dark" ? "text-white" : "text-gray-900"
						}`}
						data-aos="fade-up"
						data-aos-delay="560"
					>
						How to{" "}
						<span className="text-yellow-400">Reach</span> Our Location
					</h2>

					{/* Map embed */}
					<div
						className="rounded-2xl overflow-hidden shadow-lg"
						data-aos="fade-up"
						data-aos-delay="580"
					>
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

			<section
				className={`py-20 ${
					theme === "dark" ? "bg-[#181818]" : "bg-gray-100"
				} overflow-hidden`}
				data-aos="fade-up"
				data-aos-delay="600"
			>
				<div
					className="max-w-7xl mx-auto px-6 grid  md:grid-cols-2 gap-12 items-center"
					data-aos="fade-up"
					data-aos-delay="620"
				>
					{/* Left: Image and Heading */}
					<div data-aos="fade-right" data-aos-delay="640">
						<p
							className="text-yellow-400 font-semibold uppercase mb-2"
							data-aos="fade-up"
							data-aos-delay="660"
						>
							Frequently Asked Questions
						</p>
						<h2
							className={`text-4xl md:text-5xl font-extrabold mb-8 ${
								theme === "dark" ? "text-white" : "text-gray-900"
							}`}
							data-aos="fade-up"
							data-aos-delay="680"
						>
							Got{" "}
							<span className="text-yellow-400">Questions?</span> We've Got
							Answers
						</h2>
						<img
							src={faqImage}
							alt="FAQ illustration"
							className="rounded-xl shadow-lg"
							data-aos="zoom-in"
							data-aos-delay="700"
						/>
					</div>

					{/* Right: Accordion */}
					<div
						className="space-y-4"
						data-aos="fade-left"
						data-aos-delay="720"
					>
						{faqs.map((faq, index) => (
							<div
								key={index}
								className={`${
									theme === "dark"
										? "bg-[#222] border-gray-700"
										: "bg-gray-50 border-gray-100"
								} rounded-xl shadow-sm border`}
								data-aos="zoom-in"
								data-aos-delay={740 + index * 20}
							>
								<button
									onClick={() => toggleFAQ(index)}
									className={`w-full flex justify-between items-center p-6 text-left ${
										theme === "dark" ? "text-white" : ""
									}`}
								>
									<span
										className={`font-semibold text-lg ${
											theme === "dark" ? "text-white" : "text-gray-900"
										}`}
									>
										{faq.question}
									</span>
									<span className="text-yellow-400 text-2xl">
										{openIndex === index ? "−" : "+"}
									</span>
								</button>
								{openIndex === index && (
									<div
										className={`px-6 pb-6 ${
											theme === "dark" ? "text-gray-200" : "text-gray-600"
										}`}
									>
										{faq.answer}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			<div
				className={`w-full min-h-[400px] flex items-center justify-center p-4 sm:p-8 font-sans antialiased ${
					theme === "dark" ? "bg-[#000]" : "bg-white"
				}`}
				data-aos="fade-up"
				data-aos-delay="800"
			>
				<div
					className={`rounded-2xl shadow-xl max-w-6xl w-full p-8 md:p-12 grid  lg:grid-cols-2 gap-10 items-center ${
						theme === "dark" ? "bg-[#111]" : "bg-white"
					}`}
					data-aos="fade-up"
					data-aos-delay="820"
				>
					{/* Left side: Text and Form */}
					<div
						className="flex flex-col items-center lg:items-start text-center lg:text-left"
						data-aos="fade-right"
						data-aos-delay="840"
					>
						{/* Main Title with highlighted word */}
						<h2
							className={`text-3xl md:text-4xl font-bold mb-2 ${
								theme === "dark" ? "text-white" : "text-gray-800"
							}`}
							data-aos="fade-up"
							data-aos-delay="860"
						>
							SUBSCRIBE{" "}
							<span
								className="text-yellow-400"
								data-aos="zoom-in"
								data-aos-delay="880"
							>
								NEWSLETTER
							</span>
						</h2>

						{/* Subtitle */}
						<p
							className={`text-base md:text-lg mb-6 ${
								theme === "dark" ? "text-gray-400" : "text-gray-600"
							}`}
							data-aos="fade-up"
							data-aos-delay="900"
						>
							Subscribe our newsletter and get the latest updates directly in your
							inbox.
						</p>

						{/* Form for email input and button */}
						<form
							className="w-full max-w-md flex flex-col sm:flex-row gap-4"
							data-aos="fade-up"
							data-aos-delay="920"
						>
							<input
								type="email"
								placeholder="Email Address"
								className={`flex-grow px-6 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
									theme === "dark"
										? "bg-[#222] border-gray-600 text-white placeholder-gray-400"
										: "bg-white border-gray-300 text-gray-800"
								}`}
							/>
							<button
								type="submit"
								className="px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold transition-colors hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
							>
								SUBSCRIBE NOW
							</button>
						</form>
					</div>

					{/* Right side: Image of the JCB */}
					<div
						className="flex justify-center lg:justify-end"
						data-aos="fade-left"
						data-aos-delay="940"
					>
						<img
							src={jcbImage}
							alt="A large yellow JCB excavator"
							className="w-full max-w-lg h-auto rounded-xl shadow-lg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
