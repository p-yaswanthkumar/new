import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import welcomeImage from '../assets/welcome image.webp';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebookF />, url: "https://facebook.com", label: "Facebook" },
  { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
{ icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
  { icon: <FaYoutube />, url: "https://youtube.com", label: "YouTube" },
];


const Welcome = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  // Registration form state
  const [regData, setRegData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  // Default demo accounts
  const defaultUsers = [
    {
      email: 'admin@stackly.com',
      password: 'admin123',
      firstName: 'Admin',
      lastName: 'User'
    },
    {
      email: 'user@stackly.com',
      password: 'user123',
      firstName: 'Demo',
      lastName: 'User'
    },
    {
      email: 'demo@stackly.com',
      password: 'demo123',
      firstName: 'Demo',
      lastName: 'Account'
    }
  ];

  // Load registered users from localStorage or use default
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const savedUsers = localStorage.getItem('registeredUsers');
    return savedUsers ? JSON.parse(savedUsers) : defaultUsers;
  });

  // Save registered users to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showRegister) {
      console.log('Registration attempt:', regData);
      // Check if user already exists
      const userExists = registeredUsers.some(user => user.email === regData.businessEmail);
      if (userExists) {
        setLoginError('User with this email already exists. Please login instead.');
        setShowRegister(false);
        setEmail(regData.businessEmail); // Pre-fill email in login form
        return;
      }
      // Add new user to registered users
      const newUser = {
        email: regData.businessEmail,
        password: regData.password,
        firstName: regData.firstName,
        lastName: regData.lastName
      };
      setRegisteredUsers(prev => [...prev, newUser]);
      // Store firstName and lastName in localStorage for avatar
      localStorage.setItem('firstname', regData.firstName);
      localStorage.setItem('lastname', regData.lastName);
      // After successful registration, show login form
      setShowRegister(false); // Switch to login form
      setEmail(regData.businessEmail); // Pre-fill email in login form
      // Clear registration form
      setRegData({
        firstName: '',
        lastName: '',
        businessEmail: '',
        phone: '',
        company: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
      });
    } else {
      // Admin login check
      if (email === 'admin@enkonix.in' && password === 'admin123') {
        setLoginError('');
        localStorage.setItem('firstname', 'Admin');
        localStorage.setItem('lastname', 'User');
        navigate('/admindashboard');
        return;
      }
      // Check if credentials match any registered user
      const isValidCredential = registeredUsers.some(
        user => user.email === email && user.password === password
      );

      if (isValidCredential) {
        console.log('Login successful:', { email, password, rememberMe });
        setLoginError('');
        navigate('/home1');
      } else {
        console.log('Login failed: Invalid credentials');
        setLoginError('Invalid email or password. Please try again.');
      }
    }
  };

  const handleRegChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLoginChange = (field, value) => {
    if (field === 'email') setEmail(value);
    if (field === 'password') setPassword(value);
    if (field === 'rememberMe') setRememberMe(value);
    
    // Clear error when user starts typing
    if (loginError) {
      setLoginError('');
    }
  };

  return (
    <div
      className="min-h-screen grid  lg:grid-cols-2 relative"
      style={{
        backgroundImage: `url(${welcomeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay with #1E2A38 color and transparency */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#1E2A38',
          opacity: 0.8
        }}
      ></div>

      {/* Left Section - Welcome Information */}
      <div className="relative z-10 flex items-center justify-center px-4 py-8 md:px-8 md:py-0">
        <div className="text-white w-full max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to user
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Your trusted partner for comprehensive financial services. From personal tax preparation to business accounting, we help you achieve your financial goals with expert guidance and professional solutions.
          </p>

          {/* Social Media Icons */}
         <div className="flex gap-6 ">
  {socialLinks.map((item, index) => (
    <a
      key={index}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
    >
      {item.icon}
    </a>
  ))}
</div>
        </div>
      </div>

      {/* Right Section - Login/Register Form */}
      <div className="relative z-10 flex items-center justify-center px-4 py-8 md:px-8 md:py-0">
        <div className="w-full max-w-md bg-white/10 md:bg-transparent rounded-xl md:rounded-none p-4 md:p-0 shadow-none md:shadow-none">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {showRegister ? 'Create Account' : 'Access Your Account'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {!showRegister ? (
              // Login Form
              <>
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => handleLoginChange('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your business email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
                    Secure Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => handleLoginChange('password', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your secure password"
                    required
                  />
                </div>
                
                {/* Login Error Message */}
                {loginError && (
                  <div className="bg-red-900 bg-opacity-30 rounded-lg p-3 border border-red-400 border-opacity-30">
                    <p className="text-red-300 text-sm">{loginError}</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 focus:outline-none transition-all duration-200 transform hover:scale-105 border-0 shadow-none"
                >
                  Login
                </button>
                
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setShowRegister(true)}
                    className="text-white text-sm"
                  >
                    Don't have an account? <span className="text-orange-400 hover:text-orange-300 transition-colors cursor-pointer">Register now</span>
                  </button>
                </div>
              </>
            ) : (
              // Registration Form
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-white text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={regData.firstName}
                      onChange={handleRegChange}
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={regData.lastName}
                      onChange={handleRegChange}
                      className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="businessEmail" className="block text-white text-sm font-medium mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    name="businessEmail"
                    value={regData.businessEmail}
                    onChange={handleRegChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your business email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={regData.phone}
                    onChange={handleRegChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="regPassword" className="block text-white text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="regPassword"
                    name="password"
                    value={regData.password}
                    onChange={handleRegChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Create a secure password"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-white text-sm font-medium mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={regData.confirmPassword}
                    onChange={handleRegChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={regData.agreeTerms}
                    onChange={handleRegChange}
                    className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    required
                  />
                  <label htmlFor="agreeTerms" className="ml-2 text-white text-sm">
                    I agree to the Terms of Service and Privacy Policy
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 focus:outline-none transition-all duration-200 transform hover:scale-105 border-0 shadow-none"
                >
                  Create Account
                </button>
                
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setShowRegister(false)}
                    className="text-white text-sm"
                  >
                    Already have an account? <span className="text-orange-400 hover:text-orange-300 transition-colors cursor-pointer">Sign up</span>
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
