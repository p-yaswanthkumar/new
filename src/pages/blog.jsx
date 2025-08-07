
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import blogHeroVideo from '../assets/bloghero.mp4';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.webp';
import blog3 from '../assets/blog3.webp';
import exp3 from '../assets/exp3.jpg';
import exp4 from '../assets/exp4.jpg';
import exp5 from '../assets/exp5.jpg';
import exp6 from '../assets/exp6.jpg';
import quizblog from '../assets/blogquiz.webp';

// HERO SECTION
const HeroSection = () => (
  <section className="relative min-h-[400px] mb-20 h-screen md:h-[500px] lg:h-[600px] w-full flex items-center justify-center overflow-hidden">
    {/* Hero Video Background */}
    <div className="absolute inset-0 z-0">
      <video
        src={blogHeroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      {/* Gradient overlay removed */}
    </div>
    {/* Content */}
    <div className="relative z-10 text-center w-full px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
      >
        Financial Wisdom for a Brighter Future
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto mb-8"
      >
        Explore expert articles, practical tips, and the latest trends to help you make confident financial decisions and achieve your goals.
      </motion.p>
    </div>
  </section>
);

// FEATURED ARTICLES
const featuredArticles = [
  {
    id: 1,
    title: '5 Smart Ways to Save for Retirement',
    summary: 'Discover actionable strategies to boost your retirement savings and secure your future.',
    image: blog1,
  },
  {
    id: 2,
    title: 'Understanding Credit Scores',
    summary: 'Learn how credit scores work and how to improve yours for better financial opportunities.',
    image: blog2,
  },
  {
    id: 3,
    title: 'Top 10 Investment Myths Busted',
    summary: 'Separate fact from fiction and make smarter investment decisions.',
    image: blog3,
  },
];

const FeaturedArticles = () => (
  <section className="container mx-auto px-4 mb-32 py-16">
    <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">Featured Articles</h2>
    <div className="grid md:grid-cols-3 mt-8 gap-8">
      {featuredArticles.map((art, i) => (
        <motion.div key={art.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2, duration: 0.6 }} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
          <img src={art.image} alt={art.title} className="h-48 w-full object-cover" />
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="font-bold text-lg text-blue-900 mb-2">{art.title}</h3>
            <p className="text-gray-600 mb-4 flex-1">{art.summary}</p>
            <Link to={`/blog/${art.id}`} className="text-orange-500 font-semibold hover:underline mt-auto">Read More →</Link>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// CATEGORIES
const categories = [
  'Personal Finance',
  'Investing',
  'Tax Planning',
  'Retirement',
  'Insurance',
  'Business Finance',
];

const Categories = () => (
  <section className="container mx-auto mt-20 px-4 py-16">
    <div className="grid grid-row-1 md:grid-cols-2 md:gap-x-20 gap-y-12 items-center">
      {/* Left: Heading and Description */}
      <div>
        <h2 className="text-3xl font-bold text-blue-900 mb-6 md:mb-8 text-left">Categories</h2>
        <p className="text-lg text-gray-700 max-w-md mb-4 md:mb-0 text-left">
          Explore a wide range of financial topics. Whether you're looking to invest, plan for retirement, or manage your business finances, our categories help you find the right advice and insights for your journey.
        </p>
      </div>
      {/* Right: Category Cards */}
      <div className="grid grid-cols-2 mt-20 gap-4 md:gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="bg-orange-100 text-orange-700 px-6 py-6 rounded-xl font-semibold text-lg shadow-sm hover:bg-orange-200 cursor-pointer transition text-center">
            {cat}
          </div>
        ))}
      </div>
    </div>
  </section>
);

// MYTHS & FACTS
const mythsAndFacts = [
  {
    myth: 'You need a lot of money to start investing.',
    fact: 'You can start investing with small amounts thanks to fractional shares and micro-investing apps.'
  },
  {
    myth: 'Checking your credit score hurts it.',
    fact: 'Checking your own credit score is a soft inquiry and does not affect your score.'
  },
  {
    myth: 'All debt is bad.',
    fact: 'Some debt, like mortgages or student loans, can be considered good if managed responsibly.'
  },
  {
    myth: 'Investing is the same as gambling.',
    fact: 'Investing is based on research and long-term growth, while gambling is based on chance.'
  },
  {
    myth: 'You should always avoid credit cards.',
    fact: 'Credit cards can be useful tools if used responsibly and paid off monthly.'
  },
  {
    myth: 'Renting is throwing money away.',
    fact: 'Renting can be a smart financial choice depending on your situation and goals.'
  },
];

const MythsAndFacts = () => {
  // Ensure 6 items for 2 columns x 3 rows
  const mythsFactsGrid = mythsAndFacts.length >= 6
    ? mythsAndFacts.slice(0, 6)
    : [
        ...mythsAndFacts,
        ...Array(6 - mythsAndFacts.length).fill({ myth: '', fact: '' })
      ];
  return (
    <section className="container mx-auto px-4 mt-20 py-16">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 mt-20 text-center">Myths & Facts</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-x-9 gap-y-10 max-w-7xl mx-auto">
        {mythsFactsGrid.map((item, i) => (
          <div key={i} className="flex flex-col   md:last:border-r-0 pb-6 md:pb-0 md:pr-8 h-full min-h-[120px]">
            <div className="flex items-start gap-2">
              <span className="font-bold text-orange-500 min-w-[50px]">Myth:</span>
              <span className="text-gray-800">{item.myth}</span>
            </div>
            <div className="flex items-start gap-2 mt-2">
              <span className="font-bold text-blue-900 min-w-[50px]">Fact:</span>
              <span className="text-gray-700">{item.fact}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// COMPARISON
const comparisonData = [
  { label: 'Traditional Savings', risk: 'Low', liquidity: 'High', return: '1-2% annual', minInvestment: '$1', taxBenefit: 'No' },
  { label: 'Stock Market', risk: 'High', liquidity: 'Medium', return: '7-10% annual', minInvestment: '$10', taxBenefit: 'No' },
  { label: 'Real Estate', risk: 'Medium', liquidity: 'Low', return: '4-8% annual', minInvestment: '$5,000', taxBenefit: 'Yes' },
  { label: 'Fixed Deposits', risk: 'Low', liquidity: 'Low', return: '5-7% annual', minInvestment: '$100', taxBenefit: 'Yes' },
  { label: 'Mutual Funds', risk: 'Medium', liquidity: 'Medium', return: '6-12% annual', minInvestment: '$50', taxBenefit: 'Sometimes' },
  { label: 'Gold', risk: 'Medium', liquidity: 'Medium', return: '4-7% annual', minInvestment: '$10', taxBenefit: 'No' },
];

const Comparison = () => (
  <section className="container mx-auto mt-20 px-4 py-16">
    <h2 className="text-3xl font-bold text-blue-900 mt-20 mb-8 text-center">Comparison</h2>
    <div className="overflow-x-auto">
      <table className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <thead className="bg-blue-900">
          <tr>
            <th className="text-white px-6 py-4 text-left font-semibold text-lg">Type</th>
            <th className="text-white px-6 py-4 text-left font-semibold text-lg">Risk Level</th>
            <th className="text-white px-6 py-4 text-left font-semibold text-lg">Liquidity</th>
            <th className="text-white px-6 py-4 text-left font-semibold text-lg">Average Return</th>
            <th className="text-white px-6 py-4 text-left font-semibold text-lg">Min. Investment</th>
            <th className="text-white px-6 py-4 text-left font-semibold text-lg">Tax Benefit</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((item, i) => (
            <tr key={i} className="border-b last:border-b-0">
              <td className="px-6 py-4 font-semibold text-blue-900">{item.label}</td>
              <td className="px-6 py-4 text-gray-700">{item.risk}</td>
              <td className="px-6 py-4 text-gray-700">{item.liquidity}</td>
              <td className="px-6 py-4 text-gray-700">{item.return}</td>
              <td className="px-6 py-4 text-gray-700">{item.minInvestment}</td>
              <td className="px-6 py-4 text-gray-700">{item.taxBenefit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

// QUIZ
const quizQuestions = [
  {
    question: 'What is a good credit score?',
    options: ['300-500', '600-750', '800-850'],
    answer: 1,
  },
  {
    question: 'Which investment is typically considered the riskiest?',
    options: ['Savings Account', 'Stocks', 'Bonds'],
    answer: 1,
  },
  {
    question: 'What does ROI stand for?',
    options: ['Rate of Interest', 'Return on Investment', 'Revenue on Income'],
    answer: 1,
  },
  {
    question: 'Which is NOT a type of insurance?',
    options: ['Health', 'Travel', 'Shopping'],
    answer: 2,
  },
  {
    question: 'What is diversification in investing?',
    options: ['Putting all money in one stock', 'Spreading investments across assets', 'Investing only in real estate'],
    answer: 1,
  },
  {
    question: 'Which is a tax-advantaged retirement account?',
    options: ['401(k)', 'Savings Account', 'Checking Account'],
    answer: 0,
  },
  {
    question: 'What is a budget?',
    options: ['A type of loan', 'A spending plan', 'A credit score'],
    answer: 1,
  },
  {
    question: 'Which is a fixed expense?',
    options: ['Rent', 'Groceries', 'Entertainment'],
    answer: 0,
  },
  {
    question: 'What is compound interest?',
    options: ['Interest on principal only', 'Interest on principal and previous interest', 'Interest on taxes'],
    answer: 1,
  },
  {
    question: 'Which is a liquid asset?',
    options: ['Real Estate', 'Stocks', 'Savings Account'],
    answer: 2,
  },
];

const Quiz = () => {
  const [quizIndex, setQuizIndex] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [showResult, setShowResult] = React.useState(false);
  const currentQ = quizQuestions[quizIndex];

  const handleQuiz = (idx) => {
    setSelected(idx);
    setShowResult(true);
    setTimeout(() => {
      setShowResult(false);
      setSelected(null);
    }, 1200);
  };

  const handlePrev = () => {
    setShowResult(false);
    setSelected(null);
    setQuizIndex((prev) => (prev - 1 + quizQuestions.length) % quizQuestions.length);
  };

  const handleNext = () => {
    setShowResult(false);
    setSelected(null);
    setQuizIndex((prev) => (prev + 1) % quizQuestions.length);
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 mt-20 text-center">Finance Quiz</h2>
      <div className="flex flex-row md:flex-row items-center gap-12 max-w-full mx-auto min-h-[420px] md:min-h-[500px] lg:min-h-[600px]">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <img src={quizblog} alt="Quiz Visual" className="w-full max-w-md h-[320px] md:h-[400px] object-cover rounded-xl shadow-lg" />
        </div>
        {/* Right: Quiz */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="flex items-center justify-between w-full mb-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-200 hover:bg-orange-200 text-2xl font-bold mr-2"
              aria-label="Previous Question"
            >
              &#8592;
            </button>
            <span className="font-semibold text-lg flex-1 text-center">{currentQ.question}</span>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-200 hover:bg-orange-200 text-2xl font-bold ml-2"
              aria-label="Next Question"
            >
              &#8594;
            </button>
          </div>
          <div className="flex flex-col gap-4 w-full">
            {currentQ.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleQuiz(idx)}
                disabled={showResult}
                className={`px-6 py-3 rounded-lg border text-left font-medium transition-all duration-200 w-full ${selected === idx ? (idx === currentQ.answer ? 'bg-green-100 border-green-500 text-green-700' : 'bg-red-100 border-red-500 text-red-700') : 'bg-gray-50 border-gray-200 hover:bg-orange-100'}`}
              >
                {opt}
              </button>
            ))}
          </div>
          {showResult && (
            <div className={`mt-4 font-bold ${selected === currentQ.answer ? 'text-green-600' : 'text-red-600'}`}>
              {selected === currentQ.answer ? 'Correct!' : 'Incorrect'}
            </div>
          )}
          <div className="mt-6 text-gray-500 text-sm">Question {quizIndex + 1} of {quizQuestions.length}</div>
        </div>
      </div>
    </section>
  );
};

// MAIN BLOG PAGE
const Blog = () => (
  <div className="bg-gray-50 min-h-screen">
    <HeroSection />
    <FeaturedArticles />
    <Categories />
    <MythsAndFacts />
    <Comparison />
    <Quiz />
  </div>
);

export default Blog;
