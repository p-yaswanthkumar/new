import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import welcomeImage from '../assets/welcome image.webp';

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
      className="min-h-screen flex"
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
      <div className="relative z-10 flex-1 flex items-center justify-center px-8">
        <div className="text-white max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to user
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Your trusted partner for comprehensive financial services. From personal tax preparation to business accounting, we help you achieve your financial goals with expert guidance and professional solutions.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors cursor-pointer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors cursor-pointer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>
            <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors cursor-pointer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </div>
            <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors cursor-pointer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Login/Register Form */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-md">
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
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
                >
                  Login
                </button>
                
                {/* Demo Credentials Info */}
                
                
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
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
                >
                  Create Account
                </button>
                
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setShowRegister(false)}
                    className="text-white text-sm hover:text-orange-300 transition-colors"
                  >
                    Already have an account? Sign in
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
