import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 w-full">
      <div className="w-full px-4  sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex pl-14 items-center">
            <button onClick={() => navigate('/home1')} className="focus:outline-none">
              <img src={logo} alt="STACKLY" className="h-8 w-auto" />
            </button>
          </div>

          {/* Right side - Navigation and Icons */}
          <div className="hidden min-[480px]:flex items-center space-x-8">
            {/* Home Dropdown */}

            <div className="relative">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/home1');
                  toggleHomeDropdown();
                }}
                onMouseEnter={toggleHomeDropdown}
                onFocus={toggleHomeDropdown}
                className="flex items-center text-black hover:text-orange-400 transition-colors duration-200"
                aria-haspopup="true"
                aria-expanded={isHomeDropdownOpen}
              >
                Home
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isHomeDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2" onMouseLeave={toggleHomeDropdown}>
                  <Link to="/home1" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsHomeDropdownOpen(false)}>Home 1</Link>
                  <Link to="/home2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsHomeDropdownOpen(false)}>Home 2</Link>
                </div>
              )}
            </div>

            <Link to="/aboutus" className="text-black hover:text-orange-400 transition-colors duration-200">
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/service');
                  toggleServicesDropdown();
                }}
                onMouseEnter={toggleServicesDropdown}
                onFocus={toggleServicesDropdown}
                className="flex items-center text-black hover:text-orange-400 transition-colors duration-200"
                aria-haspopup="true"
                aria-expanded={isServicesDropdownOpen}
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2" onMouseLeave={toggleServicesDropdown}>
                  <Link to="/service" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsServicesDropdownOpen(false)}>All Services</Link>
                  <Link to="/Financial%20Planning%20&%20Analysis" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsServicesDropdownOpen(false)}>Financial Planning & Analysis</Link>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsServicesDropdownOpen(false)}>Web Development</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsServicesDropdownOpen(false)}>Mobile Apps</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => setIsServicesDropdownOpen(false)}>Consulting</a>
                </div>
              )}
            </div>
            
            <Link to="/blog" className="text-black hover:text-orange-400 transition-colors duration-200">
              Blog
            </Link>

            <Link to="/contactus" className="text-black hover:text-orange-400 transition-colors duration-200">
              Contact Us
            </Link>

            {/* Dark Mode Toggle */}
            <button className="w-10 h-10 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center hover:bg-orange-200 transition-colors duration-200">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            {/* Avatar with Logout Dropdown */}
            <div className="relative">
              <button
                className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold focus:outline-none"
                onClick={() => setIsAvatarDropdownOpen((v) => !v)}
              >
                YK
              </button>
              {isAvatarDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-orange-100"
                    onClick={() => { setIsAvatarDropdownOpen(false); window.location.href = '/'; }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile icons - Only visible on very small screens */}
          <div className="flex items-center space-x-4 min-[480px]:hidden">
            {/* Dark Mode Toggle */}
            <button className="w-10 h-10 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center hover:bg-orange-200 transition-colors duration-200">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            {/* Avatar with Logout Dropdown (Mobile) */}
            <div className="relative">
              <button
                className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold focus:outline-none"
                onClick={() => setIsAvatarDropdownOpen((v) => !v)}
              >
                YK
              </button>
              {isAvatarDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-orange-100"
                    onClick={() => { setIsAvatarDropdownOpen(false); window.location.href = '/'; }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Only visible on very small screens */}
        {isMobileMenuOpen && (
          <div className="min-[480px]:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Home Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleHomeDropdown}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  <span>Home</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isHomeDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isHomeDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <a href="/home1" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => setIsHomeDropdownOpen(false)}>Home 1</a>
                    <a href="/home2" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => setIsHomeDropdownOpen(false)}>Home 2</a>
                  </div>
                )}
              </div>

              <Link to="/aboutus" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
                About Us
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  <span>Services</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <Link to="/service" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => setIsServicesDropdownOpen(false)}>All Services</Link>
                    <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => setIsServicesDropdownOpen(false)}>Web Development</a>
                    <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => setIsServicesDropdownOpen(false)}>Mobile Apps</a>
                    <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => setIsServicesDropdownOpen(false)}>Consulting</a>
                  </div>
                )}
              </div>


              <Link to="/blog" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
                Blog
              </Link>

              <Link to="/contactus" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

// Industries We Serve Section (10 finance/accounting-related SVGs)
// Place this in your Home2 or main page, not in Header.jsx. Example:
//
// <section className="bg-white py-16">
//   <div className="max-w-6xl mx-auto px-4">
//     <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">Industries We Serve</h2>
//     <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">We empower a wide range of industries with expert finance and accounting solutions.</p>
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
//       {/* Banking & Finance */}
//       <div className="flex flex-col items-center">
//         <span className="bg-lime-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
//           <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"/><path d="M16 11h.01"/><path d="M12 11h.01"/><path d="M8 11h.01"/></svg>
//         </span>
//         <div className="font-semibold text-center">Banking & Finance</div>
//       </div>
//       {/* Insurance */}
//       <div className="flex flex-col items-center">
//         <span className="bg-lime-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
//           <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="10" rx="2"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/></svg>
//         </span>
//         <div className="font-semibold text-center">Insurance</div>
//       </div>
//       {/* Taxation */}
//       <div className="flex flex-col items-center">
//         <span className="bg-lime-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
//           <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 2v4"/><path d="M16 2v4"/><path d="M3 10h18"/></svg>
//         </span>
//         <div className="font-semibold text-center">Taxation</div>
//       </div>
//       {/* Auditing */}
//       <div className="flex flex-col items-center">
//         <span className="bg-lime-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
//           <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/></svg>
//         </span>
//         <div className="font-semibold text-center">Auditing</div>
//       </div>
//       {/* Wealth Management */}
//       <div className="flex flex-col items-center">
//         <span className="bg-lime-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
//           <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"/><path d="M12 7v4l3 3"/></svg>
//         </span>
//         <div className="font-semibold text-center">Wealth Management</div>
//       </div>
//       {/* Real Estate */}
//       <div className="flex flex-col items-center">
//         <span className="bg-lime-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
//           <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="7" y="10" width="10" height="8" rx="2"/><path d="M12 4v6"/><path d="M9 10V4h6v6"/></svg>
//         </span>
//         <div className="font-semibold text-center">Real Estate</div>
//       </div>
//       {/* Healthcare */}
//       <div className="flex flex-col items-center">
//         <span className="bg-lime-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
//           <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
//         </span>
//         <div className="font-semibold text-center">Healthcare</div>
//       </div>
//       {/* Education */}
//       <div className="flex flex-col items-center">
//         <span className="bg-lime-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
//           <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="2"/><path d="M12 8v8"/></svg>
//         </span>
//         <div className="font-semibold text-center">Education</div>
//       </div>
//       {/* Retail & Ecommerce */}
//       <div className="flex flex-col items-center">
//         <span className="bg-lime-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
//           <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="10" rx="2"/><circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/></svg>
//         </span>
//         <div className="font-semibold text-center">Retail & Ecommerce</div>
//       </div>
//       {/* Manufacturing */}
//       <div className="flex flex-col items-center">
//         <span className="bg-lime-400 rounded-full w-20 h-20 flex items-center justify-center mb-3">
//           <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="10" rx="2"/><path d="M8 8v8M16 8v8"/></svg>
//         </span>
//         <div className="font-semibold text-center">Manufacturing</div>
//       </div>
//     </div>
//   </div>
// </section>
