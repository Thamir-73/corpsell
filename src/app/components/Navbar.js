'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../LanguageContext';
import { FaBars, FaHome, FaInfoCircle, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const isRTL = language === 'ar';
  const pathname = usePathname();
  const isActiveLink = (path) => pathname === path;

  const text = {
    ar: {
      home: 'الرئيسية',
      about: 'من نحن',
      products: 'المنتجات',
      contact: 'تواصل معنا',
      joinWaitlist: 'انضم للقائمة',
      forBusiness: 'للشركات'
    },
    en: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      contact: 'Contact',
      joinWaitlist: 'Join Waitlist',
      forBusiness: 'For Business'
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (window.innerWidth >= 768) { // md breakpoint
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const FlagIcon = ({ country }) => {
    if (country === 'gb') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="24" height="12">
          <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z"/>
          </clipPath>
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
          </clipPath>
          <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
          </g>
        </svg>
      );
    } else if (country === 'sa') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" width="24" height="16">
          <rect width="24" height="16" fill="#007A3D"/>
          <text x="12" y="8" fontFamily="Arial" fontSize="6" fill="white" textAnchor="middle" dominantBaseline="middle">عربي</text>
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="relative z-50">
      <nav className="bg-white bg-opacity-70 backdrop-blur-md border-b border-[#6AADCF] shadow-sm">
        <div className="container px-4 py-4 mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className={`flex items-center cursor-pointer ${isRTL ? 'rtl' : ''}`} onClick={() => window.location.href = '/'}>
            <div className="w-10 h-10 bg-[#4A90E2] rounded-full flex items-center justify-center text-white font-bold">
              C
            </div>
            <h2 className={`font-bold text-[#4A90E2] text-xl ${isRTL ? 'mr-2' : 'ml-2'}`}>CorpSell</h2>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <Link 
              href="/" 
              className={`px-3 py-2 text-gray-700 rounded-lg hover:bg-blue-50 transition-colors flex items-center ${
                isActiveLink('/') ? 'bg-blue-50 text-[#4A90E2]' : ''
              } ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <FaHome className={`${isRTL ? 'ml-2' : 'mr-2'} text-[#4A90E2]`} />
              <span>{text[language].home}</span>
            </Link>
            
            <Link 
              href="/about" 
              className={`px-3 py-2 text-gray-700 rounded-lg hover:bg-blue-50 transition-colors flex items-center ${
                isActiveLink('/about') ? 'bg-blue-50 text-[#4A90E2]' : ''
              } ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <FaInfoCircle className={`${isRTL ? 'ml-2' : 'mr-2'} text-[#4A90E2]`} />
              <span>{text[language].about}</span>
            </Link>
            
            <Link 
              href="/products" 
              className={`px-3 py-2 text-gray-700 rounded-lg hover:bg-blue-50 transition-colors flex items-center ${
                isActiveLink('/products') ? 'bg-blue-50 text-[#4A90E2]' : ''
              } ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <FaShoppingCart className={`${isRTL ? 'ml-2' : 'mr-2'} text-[#4A90E2]`} />
              <span>{text[language].products}</span>
            </Link>
            
            <Link 
              href="/contact" 
              className={`px-3 py-2 text-gray-700 rounded-lg hover:bg-blue-50 transition-colors flex items-center ${
                isActiveLink('/contact') ? 'bg-blue-50 text-[#4A90E2]' : ''
              } ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <FaUserCircle className={`${isRTL ? 'ml-2' : 'mr-2'} text-[#4A90E2]`} />
              <span>{text[language].contact}</span>
            </Link>

            <Link 
              href="/" 
              className="px-4 py-2 bg-[#4A90E2] text-white rounded-lg hover:bg-[#3A80D2] transition-colors"
            >
              {text[language].joinWaitlist}
            </Link>
            
            <button 
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <FlagIcon country={language === 'ar' ? 'gb' : 'sa'} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`flex md:hidden items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
            <button 
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <FlagIcon country={language === 'ar' ? 'gb' : 'sa'} />
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 rounded-lg hover:bg-gray-50 text-lg transition-colors"
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`absolute top-full left-0 right-0 bg-white shadow-lg transform transition-all duration-300 ease-in-out origin-top ${
            isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
        >
          <div className="p-4 space-y-3">
            <Link 
              href="/" 
              className={`block px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50 transition-colors text-center md:${
                isRTL ? 'text-right' : 'text-left'
              } ${isActiveLink('/') ? 'bg-blue-50 text-[#4A90E2]' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {text[language].home}
            </Link>
            
            <Link 
              href="/about" 
              className={`block px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50 transition-colors text-center md:${
                isRTL ? 'text-right' : 'text-left'
              } ${isActiveLink('/about') ? 'bg-blue-50 text-[#4A90E2]' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {text[language].about}
            </Link>
            
            <Link 
              href="/products" 
              className={`block px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50 transition-colors text-center md:${
                isRTL ? 'text-right' : 'text-left'
              } ${isActiveLink('/products') ? 'bg-blue-50 text-[#4A90E2]' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {text[language].products}
            </Link>
            
            <Link 
              href="/contact" 
              className={`block px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50 transition-colors text-center md:${
                isRTL ? 'text-right' : 'text-left'
              } ${isActiveLink('/contact') ? 'bg-blue-50 text-[#4A90E2]' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {text[language].contact}
            </Link>
            
            <Link 
              href="/" 
              className="block w-full px-4 py-2 text-white bg-[#4A90E2] hover:bg-[#3A80D2] rounded-lg transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {text[language].joinWaitlist}
            </Link>
            
            <Link 
              href="/business" 
              className="block w-full px-4 py-2 text-[#4A90E2] border border-[#4A90E2] hover:bg-blue-50 rounded-lg transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {text[language].forBusiness}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
} 