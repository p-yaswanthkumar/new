import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import heroVideo from "../assets/home1hero.mp4";
import questions from "../data/questions";
import whyChooseImg from "../assets/whychooseus.avif";
import impactImg from "../assets/impact.jpg";

// Helper for count up animation
function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let startTime = null;
    function animateCountUp(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        ref.current = requestAnimationFrame(animateCountUp);
      } else {
        setCount(target);
      }
    }
    ref.current = requestAnimationFrame(animateCountUp);
    return () => cancelAnimationFrame(ref.current);
  }, [target, duration]);
  return count;
}

// Animated metric card for Our Impact
function ImpactMetric({ value, suffix, label, delay, color }) {
  const [start, setStart] = useState(false);
  const ref = useRef();
  const count = useCountUp(start ? value : 0, 2000);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let observer;
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStart(true);
          } else {
            setStart(false);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(node);
    }
    return () => {
      if (observer && node) observer.unobserve(node);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="p-6 bg-white bg-opacity-80 rounded-lg shadow"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-4xl font-bold" style={{ color }}>{count}{suffix}</h3>
      <p className="mt-2 text-gray-700">{label}</p>
    </div>
  );
}

// Child component for instructor form
function JoinInstructorForm({ instructorForm, instructors, handleInstructorChange, handleInstructorSubmit, showSuccess }) {
  return (
    <>
      <form className="bg-[#e6f7ff] text-black rounded-lg shadow p-6 mb-8 flex flex-col gap-4" onSubmit={handleInstructorSubmit} autoComplete="off">
        <input
          type="text"
          name="name"
          value={instructorForm.name}
          onChange={handleInstructorChange}
          placeholder="Full Name"
          className="px-4 py-3 text-black bg-white rounded border border-[#00BFFF] shadow focus:outline-none focus:ring-2 focus:ring-[#00BFFF] placeholder:text-gray-700"
          required
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          value={instructorForm.email}
          onChange={handleInstructorChange}
          placeholder="Email Address"
          className="px-4 py-3 text-black bg-white rounded border border-[#00BFFF] shadow focus:outline-none focus:ring-2 focus:ring-[#00BFFF] placeholder:text-gray-700"
          required
          autoComplete="off"
        />
        <input
          type="text"
          name="expertise"
          value={instructorForm.expertise}
          onChange={handleInstructorChange}
          placeholder="Area of Expertise"
          className="px-4 py-3 text-black bg-white rounded border border-[#00BFFF] shadow focus:outline-none focus:ring-2 focus:ring-[#00BFFF] placeholder:text-gray-700"
          required
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-[#00BFFF] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-500 transition-colors"
        >
          Submit
        </button>
      </form>
      {showSuccess && (
        <div className="mt-4 text-green-600 font-semibold text-lg">Successfully submitted!</div>
      )}
    </>
  );
}

// MAIN COMPONENT
export default function Home1() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  // Theme state synced with Header
  const [theme, setTheme] = useState('light');
  useEffect(() => {
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
  // Instructor form state and logic (must be at top level, before return)
  const [instructorForm, setInstructorForm] = useState({ name: '', email: '', expertise: '' });
  const [instructors, setInstructors] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem('instructors') || '[]');
    } catch (e) {
      return [];
    }
  });

  const handleInstructorChange = (e) => {
    const { name, value } = e.target;
    setInstructorForm((prev) => ({ ...prev, [name]: value }));
  };

  const [showOverview, setShowOverview] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleInstructorSubmit = (e) => {
    e.preventDefault();
    if (!instructorForm.name || !instructorForm.email || !instructorForm.expertise) return;
    const newList = [...instructors, { ...instructorForm }];
    setInstructors(newList);
    window.localStorage.setItem('instructors', JSON.stringify(newList));
    setInstructorForm({ name: '', email: '', expertise: '' });
    setShowSuccess(true);
    setShowOverview(false);
    setTimeout(() => setShowSuccess(false), 2000);
  };
  // ...existing code...
  const [streak, setStreak] = useState(0);
  const [selected, setSelected] = useState(null);
  const [question, setQuestion] = useState({});
  const [attemptedToday, setAttemptedToday] = useState(false);
  
  // Carousel logic moved to top level
  const testimonials = [
    {
      title: "Outstanding Support",
      text: "The support team is always available and quick to resolve any issues. Their dedication to student satisfaction is unmatched.",
      name: "Michael Chen",
      role: "Data Analyst",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      title: "Great Results, Every Time",
      text: "I have completed multiple courses and always received great results. Highly recommended for anyone looking to upskill.",
      name: "David Lee",
      role: "Marketing Director",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
    },
    {
      title: "Professional & Creative",
      text: "The instructors brought our vision to life. The platform looks amazing and the content is top-notch!",
      name: "Priya Singh",
      role: "Owner, Artistry",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 4,
    },
    {
      title: "Flexible Learning",
      text: "The flexible schedules allowed me to learn at my own pace. I could balance work and study easily.",
      name: "Rahul Sharma",
      role: "Software Engineer",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
      rating: 5,
    },
    {
      title: "Hands-on Projects",
      text: "The hands-on projects helped me gain real-world experience. I feel confident in my new skills.",
      name: "Emily Carter",
      role: "UX Designer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      title: "Expert Instructors",
      text: "The instructors are truly experts in their fields. Their teaching style made complex topics easy to understand.",
      name: "Amit Patel",
      role: "Business Analyst",
      avatar: "https://randomuser.me/api/portraits/men/23.jpg",
      rating: 5,
    },
  ];
  const [carouselIndex, setCarouselIndex] = useState(0);
  const prev = () => setCarouselIndex((i) => (i - 3 + testimonials.length) % testimonials.length);
  const next = () => setCarouselIndex((i) => (i + 3) % testimonials.length);
  let cards = testimonials.slice(carouselIndex, carouselIndex + 3);
  if (cards.length < 3) {
    cards = cards.concat(testimonials.slice(0, 3 - cards.length));
  }

  useEffect(() => {
    const savedStreak = parseInt(localStorage.getItem("dailyStreak")) || 0;
    const lastAttemptDate = localStorage.getItem("lastAttemptDate");
    const savedAnswer = localStorage.getItem("todayAnswer");
    const today = new Date().toDateString();

    // Pick today's question
    const startDate = new Date("2025-01-01");
    const diffDays = Math.floor(
      (new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const index = diffDays % questions.length;
    setQuestion(questions[index]);

    // Handle streak logic
    if (lastAttemptDate === today) {
      setStreak(savedStreak);
      setAttemptedToday(true);
      if (savedAnswer) setSelected(savedAnswer);
    } else {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (lastAttemptDate === yesterday.toDateString()) {
        setStreak(savedStreak);
      } else {
        setStreak(0);
        localStorage.setItem("dailyStreak", 0);
      }
      setAttemptedToday(false);
      setSelected(null);
    }
  }, []);
    const scrollToQuiz = () => {
    const quizSection = document.getElementById("quiz");
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAnswer = (option) => {
    if (attemptedToday) return;

    const today = new Date().toDateString();
    setSelected(option);
    setAttemptedToday(true);

    setStreak((prev) => {
      const newStreak = prev + 1;
      localStorage.setItem("dailyStreak", newStreak);
      return newStreak;
    });

    localStorage.setItem("todayAnswer", option);
    localStorage.setItem("lastAttemptDate", today);

    // Save quiz attempt history
    const quizHistory = JSON.parse(localStorage.getItem("quizAnswers") || "[]");
    quizHistory.push({
      date: today,
      question: question.q,
      options: question.options,
      correctAnswer: question.answer,
      selectedAnswer: option
    });
    localStorage.setItem("quizAnswers", JSON.stringify(quizHistory));
  };

  return (
    <div className={
      `${theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}`
    }>
      
      {/* Hero Section - Full width */}
      <section
        className="relative w-full h-screen overflow-hidden"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
            <span style={{ color: '#00BFFF' }}>Learn </span> Without Limits
          </h1>
          <p className={
            `mt-4 max-w-3xl text-lg md:text-xl ${theme === 'dark' ? 'text-white' : 'text-white'}`
          }>
            Empower your future with top-quality online courses, expert instructors, and 
            hands-on projects designed to help you gain real-world skills. 
            Join thousands of learners worldwide who are transforming their careers, 
            achieving their goals, and unlocking their full potential with our interactive 
            and flexible learning platform.
          </p>
          <button
            onClick={scrollToQuiz}
            className={
              `${theme === 'dark' ? 'bg-[#00BFFF] text-white hover:bg-[#00BFFF]' : 'bg-[#00BFFF] text-white hover:bg-[#00BFFF]'} px-6 py-3 mt-5 rounded-lg transition-colors font-semibold`
            }
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Daily Question - Centered container */}
      <section
        className={
          `py-16 px-6 relative ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-[#e6f7ff] text-black'}`
        }
        id="quiz"
      >
        <div className={`absolute top-4 right-4 px-4 py-2 rounded-full shadow ${theme === 'dark' ? 'bg-[#00BFFF] text-white' : 'bg-[#00BFFF] text-white'}`}>
          🔥 Streak: {streak} days
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="text-lg font-semibold mb-2" style={{ color: '#00BFFF' }}>
            Daily Challenge
          </div>

          <p className={`text-xl font-medium mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{question.q}</p>

          <div className="grid gap-4 max-w-md mx-auto">
            {question.options?.map((opt) => {
              const isCorrect = opt === question.answer;
              const isSelected = selected === opt;

              return (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  disabled={attemptedToday}
                  className={
                    `px-4 py-3 rounded-lg border text-lg transition-colors ` +
                    (
                      attemptedToday
                        ? isCorrect
                          ? 'bg-green-500 text-white'
                          : isSelected
                          ? 'bg-red-500 text-white'
                          : theme === 'dark'
                            ? 'bg-gray-800 text-white'
                            : 'bg-white text-black'
                        : isSelected
                        ? 'bg-blue-500 text-white'
                        : theme === 'dark'
                          ? 'bg-gray-800 text-white hover:bg-gray-700'
                          : 'bg-white text-black hover:bg-gray-200'
                    ) +
                    (attemptedToday ? ' opacity-80 cursor-not-allowed' : '')
                  }
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Full width grid */}
      <section
        className={
          `w-full py-16 ${theme === 'dark' ? 'bg-[#000]' : 'bg-[#00BFFF]'}`
        }
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Image with fadeInLeft */}
          <div>
            <img
              src={whyChooseImg}
              alt="Why Choose Us"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          {/* Right Side Content with fadeInRight */}
          <div>
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-[#00BFFF]' : 'text-white'}`}>Unlock Your Learning Potential</h2>
            <p className={`text-lg text-justify mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
              We provide top-notch educational content tailored to your unique learning needs. 
              Our platform combines expert instructors
              With flexible schedules, and a supportive community of learners, 
              we empower you to reach your goals faster and build skills that stand out in today’s competitive world. 
              Join thousands of students who have transformed their careers and embraced lifelong learning with us.
            </p>
            <ul className={`space-y-3 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
              <li className="flex items-start">
                <span className={theme === 'dark' ? 'text-gray-200 mr-3' : 'text-gray-700 mr-3'}>✔</span> Experienced and certified instructors
              </li>
              <li className="flex items-start">
                <span className={theme === 'dark' ? 'text-gray-200 mr-3' : 'text-gray-700 mr-3'}>✔</span> Flexible learning schedules
              </li>
              <li className="flex items-start">
                <span className={theme === 'dark' ? 'text-gray-200 mr-3' : 'text-gray-700 mr-3'}>✔</span> Hands-on projects and case studies
              </li>
            </ul>
          </div>
        </div>
      </section>

    {/* Join as Instructor Section */}
   

    {/* ...existing code... */}

    {/* CTA Section */}
    

    {/* Testimonial Carousel Section */}
    <section
      className={
        `w-full py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#e6f7ff]'}`
      }
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#00BFFF' }}>What Our Learners Say</h2>
        <p className={`text-center text-lg mb-10 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Real feedback from students who have transformed their careers with us.</p>

        {/* Carousel Logic - Arrows beside cards */}
        <div className="flex items-center justify-center w-full">
          <button
            onClick={prev}
            className={`w-12 h-12 flex items-center justify-center rounded-full shadow transition-colors mr-6 ${theme === 'dark' ? 'bg-[#00BFFF] text-white hover:bg-blue-400' : 'bg-[#00BFFF] text-white hover:bg-blue-500'}`}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <div className="w-full max-w-4xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {cards.map((t, idx) => (
                <div key={idx} className={`rounded-xl shadow-lg p-6 border-t-4 flex flex-col ${theme === 'dark' ? 'bg-[#181818] border-[#00BFFF]' : 'bg-white border-[#00BFFF]'}`} data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="flex items-center mb-3">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-3 border-2 border-[#00BFFF]" />
                    <div>
                      <div className="font-semibold" style={{ color: '#00BFFF' }}>{t.name}</div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{t.role}</div>
                    </div>
                  </div>
                  <div className={`font-semibold mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>{t.title}</div>
                  <div className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{t.text}</div>
                  <div className="flex items-center mt-auto">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5" style={{ color: '#00BFFF' }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" /></svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 gap-2">
              {[0, 1].map((i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full ${carouselIndex === i * 3 ? 'bg-[#00BFFF]' : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}
                ></span>
              ))}
            </div>
          </div>
          <button
            onClick={next}
            className={`w-12 h-12 flex items-center justify-center rounded-full shadow transition-colors ml-6 ${theme === 'dark' ? 'bg-[#00BFFF] text-white hover:bg-blue-400' : 'bg-[#00BFFF] text-white hover:bg-blue-500'}`}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>


<section
  className="w-full relative py-16"
  style={{
    backgroundImage: `url(${impactImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay gradient */}
  <div className="absolute inset-0" style={{ background: theme === 'dark' ? 'rgba(0,191,255,0.25)' : 'rgba(0,191,255,0.3)' }}></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
    <h2 className="text-5xl font-bold text-center mb-12" style={{ color: '#fff' }}>Our Impact</h2>

    <div className="grid lg:grid-cols-4 gap-8 text-center">
      {/* Metric 1 */}
      <ImpactMetric value={10000} suffix="+" label="Students Enrolled" delay={100} color="#00BFFF" />
      {/* Metric 2 */}
      <ImpactMetric value={500} suffix="+" label="Expert Instructors" delay={200} color="#00BFFF" />
      {/* Metric 3 */}
      <ImpactMetric value={120} suffix="+" label="Courses Offered" delay={300} color="#00BFFF" />
      {/* Metric 4 */}
      <ImpactMetric value={95} suffix="%" label="Student Satisfaction" delay={400} color="#00BFFF" />
    </div>
  </div>
</section>




 <section
   className={`w-full py-16 flex items-center justify-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#e6f7ff]'}`}
 >
      <div className="max-w-2xl mx-auto w-full text-center px-6">
        <h2 className="text-4xl font-bold mb-4" style={{ color: '#00BFFF' }}>Join as Instructor</h2>
        <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Share your expertise and inspire learners worldwide. Fill out the form below to join our instructor community.</p>
        <form className={
          `${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-[#e6f7ff] text-black'} rounded-lg shadow p-6 mb-8 flex flex-col gap-4`
        } onSubmit={handleInstructorSubmit} autoComplete="off">
          <input
            type="text"
            name="name"
            value={instructorForm.name}
            onChange={handleInstructorChange}
            placeholder="Full Name"
            className={
              `px-4 py-3 rounded border shadow focus:outline-none focus:ring-2 placeholder:text-gray-700 ` +
              (theme === 'dark'
                ? 'text-white bg-[#181818] border-[#00BFFF] focus:ring-[#00BFFF]'
                : 'text-black bg-white border-[#00BFFF] focus:ring-[#00BFFF]')
            }
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            value={instructorForm.email}
            onChange={handleInstructorChange}
            placeholder="Email Address"
            className={
              `px-4 py-3 rounded border shadow focus:outline-none focus:ring-2 placeholder:text-gray-700 ` +
              (theme === 'dark'
                ? 'text-white bg-[#181818] border-[#00BFFF] focus:ring-[#00BFFF]'
                : 'text-black bg-white border-[#00BFFF] focus:ring-[#00BFFF]')
            }
            required
            autoComplete="off"
          />
          <input
            type="text"
            name="expertise"
            value={instructorForm.expertise}
            onChange={handleInstructorChange}
            placeholder="Area of Expertise"
            className={
              `px-4 py-3 rounded border shadow focus:outline-none focus:ring-2 placeholder:text-gray-700 ` +
              (theme === 'dark'
                ? 'text-white bg-[#181818] border-[#00BFFF] focus:ring-[#00BFFF]'
                : 'text-black bg-white border-[#00BFFF] focus:ring-[#00BFFF]')
            }
            required
            autoComplete="off"
          />
          <button
            type="submit"
            className={
              `${theme === 'dark' ? 'bg-[#00BFFF] text-white hover:bg-blue-400' : 'bg-[#00BFFF] text-white hover:bg-blue-500'} font-semibold px-6 py-3 rounded-lg shadow transition-colors`
            }
          >
            Submit
          </button>
        </form>
        {showSuccess && (
          <div className="mt-4 text-green-600 font-semibold text-lg">Successfully submitted!</div>
        )}
      </div>
    </section>


    

    </div>
  );
}
