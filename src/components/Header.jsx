import React, { useState, useEffect } from 'react';
import ScrollToTop from '../pages/scroll-top';
import { useTranslation } from 'react-i18next';

import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

// Simple translation object
const translations = {
  en: {
    home: 'Home',
    home1: 'Home 1',
    home2: 'Home 2',
    about: 'About Us',
    services: 'Services',
    allServices: 'All Services',
    commercial: 'Commercial Construction',
    design: 'Design, Planning & Execution',
    residential: 'Residential Construction',
    pmc: 'Project Management & Consultation',
    renovation: 'Renovation & Remodeling',
    interior: 'Interior Fit-outs',
    blog: 'Blog',
    contact: 'Contact Us',
    rtl: 'RTL',
    ltr: 'LTR',
    lang: 'Language',
  },
  ar: {
    home: 'الرئيسية',
    home1: 'الصفحة الرئيسية 1',
    home2: 'الصفحة الرئيسية 2',
    about: 'معلومات عنا',
    services: 'الخدمات',
    allServices: 'كل الخدمات',
    commercial: 'البناء التجاري',
    design: 'التصميم والتخطيط والتنفيذ',
    residential: 'البناء السكني',
    pmc: 'إدارة المشاريع والاستشارات',
    renovation: 'التجديد والتحديث',
    interior: 'تشطيبات داخلية',
    blog: 'مدونة',
    contact: 'اتصل بنا',
    rtl: 'من اليمين لليسار',
    ltr: 'من اليسار لليمين',
    lang: 'اللغة',
  },
  he: {
    home: 'בית',
    home1: 'בית 1',
    home2: 'בית 2',
    about: 'עלינו',
    services: 'שירותים',
    allServices: 'כל השירותים',
    commercial: 'בנייה מסחרית',
    design: 'עיצוב, תכנון וביצוע',
    residential: 'בנייה למגורים',
    pmc: 'ניהול פרויקטים וייעוץ',
    renovation: 'שיפוץ ושדרוג',
    interior: 'גימורים פנימיים',
    blog: 'בלוג',
    contact: 'צור קשר',
    rtl: 'ימין לשמאל',
    ltr: 'שמאל לימין',
    lang: 'שפה',
  },
};

const rtlLangs = ['ar', 'he'];

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const homeDropdownTimeout = React.useRef();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const servicesDropdownTimeout = React.useRef();
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [direction, setDirection] = useState(rtlLangs.includes(localStorage.getItem('language')) ? 'rtl' : 'ltr');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  // Language and RTL/LTR effect
  const [isLangDropdownOpenMobile, setIsLangDropdownOpenMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') || 'en';
      setLanguage(savedLang);
      const dir = rtlLangs.includes(savedLang) ? 'rtl' : 'ltr';
      setDirection(dir);
      document.documentElement.setAttribute('dir', dir);
      localStorage.setItem('direction', dir);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dir = rtlLangs.includes(language) ? 'rtl' : 'ltr';
      setDirection(dir);
      document.documentElement.setAttribute('dir', dir);
      localStorage.setItem('direction', dir);
      localStorage.setItem('language', language);
    }
  }, [language]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang); // Update i18next language globally
    setIsLangDropdownOpen(false);
  };
  // Ensure theme is set only after mount (SSR-safe)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
    }
  }, []);

  // Sync theme with localStorage and document root
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      // Notify other tabs/pages
      window.dispatchEvent(new Event('theme-changed'));
    }
  }, [theme]);

  // Listen for theme changes from other tabs/pages
  useEffect(() => {
    if (typeof window !== 'undefined') {
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

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full !fixed !top-0 !left-0 !right-0 !z-50 transition-colors duration-300
        ${theme === 'dark' ? 'bg-[#000] border-b border-[#141B25]' : 'bg-white border-b border-gray-200'}`}
    >
      <div className="w-full px-4  sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex pl-4 sm:pl-6 lg:pl-14 items-center">
            <button onClick={() => navigate('/home1')} className="focus:outline-none">
              <img src={logo} alt="STACKLY" className="h-6 sm:h-8 w-auto" />
            </button>
          </div>

          {/* Right side - Navigation and Icons */}
          <div className="hidden min-[480px]:flex items-center space-x-8">

            {/* Language Selector */}
            <div className="relative">
              <button
                className={`flex items-center px-2 py-1 rounded ${theme === 'dark' ? 'text-white' : 'text-black'} border border-gray-300 mr-2`}
                aria-haspopup="true"
                aria-expanded={isLangDropdownOpen}
                title={translations[language].lang}
                onClick={() => setIsLangDropdownOpen((v) => !v)}
              >
                {language === 'en' && '🇺🇸'}
                {language === 'ar' && '🇸🇦'}
                {language === 'he' && '🇮🇱'}
                <span className="ml-1">{translations[language].lang}</span>
              </button>
              {isLangDropdownOpen && (
                <div className="absolute left-0 mt-2 w-28 rounded-md shadow-lg border bg-white z-50">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleLanguageChange('en')}>🇺🇸 English</button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleLanguageChange('ar')}>🇸🇦 العربية</button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleLanguageChange('he')}>🇮🇱 עברית</button>
                </div>
              )}
            </div>

            {/* Home Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (homeDropdownTimeout.current) clearTimeout(homeDropdownTimeout.current);
                setIsHomeDropdownOpen(true);
              }}
              onMouseLeave={() => {
                homeDropdownTimeout.current = setTimeout(() => setIsHomeDropdownOpen(false), 200);
              }}
            >
              <button
                onClick={() => navigate('/home1')}
                className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-yellow-400 transition-colors duration-200`}
                aria-haspopup="true"
                aria-expanded={isHomeDropdownOpen}
              >
                {translations[language].home}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isHomeDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg border py-2 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                  <Link to="/home1" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsHomeDropdownOpen(false)}>{translations[language].home1}</Link>
                  <Link to="/home2" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsHomeDropdownOpen(false)}>{translations[language].home2}</Link>
                </div>
              )}
            </div>


            <Link
              to="/aboutus"
              className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-yellow-400 transition-colors duration-200`}
            >
              {translations[language].about}
            </Link>

            {/* User Dashboard link for non-admin users */}
            

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (servicesDropdownTimeout.current) clearTimeout(servicesDropdownTimeout.current);
                setIsServicesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                servicesDropdownTimeout.current = setTimeout(() => setIsServicesDropdownOpen(false), 200);
              }}
            >
              <button
                onClick={() => navigate('/services')}
                className={`flex items-center ${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-yellow-400 transition-colors duration-200`}
                aria-haspopup="true"
                aria-expanded={isServicesDropdownOpen}
              >
                {translations[language].services}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg border py-2 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}>
                    <Link to="/services" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => setIsServicesDropdownOpen(false)}>{translations[language].allServices}</Link>
                    <Link to="/CommercialConstruction" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].commercial}</Link>
                    <Link to="/Design-Planning&Execution" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].design}</Link>
                    <Link to="/ResidentialConstruction" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].residential}</Link>
                    <Link to="/ProjectManagement&Consultation" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].pmc}</Link>
                    <Link to="/Renovation&Remodeling" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].renovation}</Link>
                    <Link to="/InteriorFit-outs" className={`block px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-[#22304a]' : 'text-gray-800 hover:bg-gray-100'}`} onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].interior}</Link>
                </div>
              )}
            </div>
            
          

            <Link
              to="/blog"
              className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-yellow-400 transition-colors duration-200`}
            >
              {translations[language].blog}
            </Link>

            <Link
              to="/contactus"
              className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-yellow-400 transition-colors duration-200`}
            >
              {translations[language].contact}
            </Link>



          {/* Dark Mode Toggle */}
            <button
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-yellow-100 border-yellow-300 hover:bg-yellow-200'}`}
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 4.93l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Avatar with Logout Dropdown */}
             <div className="relative">
              {(() => {
                // Always use first letter of firstname and lastname for initials
                const firstname = (localStorage.getItem('firstname') || '').trim();
                const lastname = (localStorage.getItem('lastname') || '').trim();
                const email = (localStorage.getItem('email') || '').trim();
                let initials = '';
                if (firstname.length > 0) {
                  initials += firstname[0].toUpperCase();
                }
                if (lastname.length > 0) {
                  initials += lastname[0].toUpperCase();
                }
                if (!initials) {
                  initials = '?';
                }
  return (
    <>
      <ScrollToTop />
                    <button
                      className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white font-semibold focus:outline-none"
                      onClick={() => setIsAvatarDropdownOpen((v) => !v)}
                    >
                      {initials}
                    </button>
                    {isAvatarDropdownOpen && (
                      <div className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg border py-2 z-50 ${theme === 'dark' ? 'bg-[#1E2A38] border-[#141B25]' : 'bg-white border-gray-200'}`}> 
                        {email === 'admin@enkonix.in' && (
                          <button
                            className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-yellow-400' : 'text-gray-800 hover:bg-yellow-100'}`}
                            onClick={() => { setIsAvatarDropdownOpen(false); navigate('/admindashboard'); }}
                          >
                            Back to Admin Dashboard
                          </button>
                        )}
                        
                        <button
                          className={`block w-full text-left px-4 py-2 ${theme === 'dark' ? 'text-white hover:bg-yellow-400' : 'text-gray-800 hover:bg-yellow-100'}`}
                          onClick={() => { setIsAvatarDropdownOpen(false); navigate('/welcome'); }}
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>

          {/* Mobile icons - Only visible on very small screens */}
          <div className="flex items-center space-x-4 min-[480px]:hidden">
            <div className="relative ">
                <button
                  className={`flex items-center px-2 py-1 rounded ${theme === 'dark' ? 'text-white' : 'text-black'} border border-gray-300`}
                  aria-haspopup="true"
                  aria-expanded={isLangDropdownOpenMobile}
                  title={translations[language].lang}
                  onClick={() => setIsLangDropdownOpenMobile((v) => !v)}
                >
                  {language === 'en' && '🇺🇸'}
                  {language === 'ar' && '🇸🇦'}
                  {language === 'he' && '🇮🇱'}
                  <span className="ml-1">{translations[language].lang}</span>
                </button>
                {isLangDropdownOpenMobile && (
                  <div className="absolute left-0 mt-2 w-18 rounded-md shadow-lg border bg-white z-50">
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => { handleLanguageChange('en'); setIsLangDropdownOpenMobile(false); }}>🇺🇸 English</button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => { handleLanguageChange('ar'); setIsLangDropdownOpenMobile(false); }}>🇸🇦 العربية</button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => { handleLanguageChange('he'); setIsLangDropdownOpenMobile(false); }}>🇮🇱 עברית</button>
                  </div>
                )}
              </div>


          {/* Dark Mode Toggle (Mobile) */}
            <button
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-yellow-100 border-yellow-300 hover:bg-yellow-200'}`}
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 4.93l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Avatar with Logout Dropdown (Mobile) */}
            <div className="relative">
              {(() => {
                // Always use first letter of firstname and lastname for initials
                const firstname = (localStorage.getItem('firstname') || '').trim();
                const lastname = (localStorage.getItem('lastname') || '').trim();
                const email = (localStorage.getItem('email') || '').trim();
                let initials = '';
                if (firstname.length > 0) {
                  initials += firstname[0].toUpperCase();
                }
                if (lastname.length > 0) {
                  initials += lastname[0].toUpperCase();
                }
                if (!initials) {
                  initials = '?';
                }
                return (
                  <>
                    <button
                      className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white font-semibold focus:outline-none"
                      onClick={() => setIsAvatarDropdownOpen((v) => !v)}
                    >
                      {initials}
                    </button>
                    {isAvatarDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                        {email === 'admin@enkonix.in' && (
                          <button
                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-yellow-100"
                            onClick={() => { setIsAvatarDropdownOpen(false); window.location.href = '/admindashboard'; }}
                          >
                            Back to Admin Dashboard
                          </button>
                        )}
                        <button
                          className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-yellow-100"
                          onClick={() => { setIsAvatarDropdownOpen(false); window.location.href = '/'; }}
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </>
                );
              })()}
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
              {/* Language Selector (Mobile) */}
              

              {/* Mobile Home Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleHomeDropdown}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  <span>{translations[language].home}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isHomeDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isHomeDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <a href="/home1" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => { setIsHomeDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].home1}</a>
                    <a href="/home2" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md" onClick={() => { setIsHomeDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].home2}</a>
                  </div>
                )}
              </div>

              <Link to="/aboutus" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                {translations[language].about}
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  <span>{translations[language].services}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <Link to="/services" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].allServices}</Link>
                    <Link to="/CommercialConstruction" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].commercial}</Link>
                    <Link to="/Design-Planning&Execution" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].design}</Link>
                    <Link to="/ResidentialConstruction" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].residential}</Link>
                    <Link to="/ProjectManagement&Consultation" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].pmc}</Link>
                    <Link to="/Renovation&Remodeling" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].renovation}</Link>
                    <Link to="/InteriorFit-outs" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}>{translations[language].interior}</Link>
                  </div>
                )}
              </div>

              <Link to="/blog" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                {translations[language].blog}
              </Link>

              <Link to="/contactus" className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                {translations[language].contact}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
