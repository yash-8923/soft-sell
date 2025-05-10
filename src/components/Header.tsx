import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { fadeIn } from '../utils/animations';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-darkest/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={fadeIn(0.2)}
    >
      <div className="container mx-auto px-4">
        <div className="h-20 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full blur group-hover:blur-md transition-all duration-300"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative text-white">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                <path d="M12 3a6 6 0 0 1-9 9 9 9 0 1 0 9-9Z"/>
              </svg>
            </div>
            <span className="font-heading font-bold text-2xl">SoftSell</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#why-choose-us" className="nav-link">Why Choose Us</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2" 
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-darkest absolute top-full left-0 right-0 p-4 shadow-lg border-t border-gray-800"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="flex flex-col gap-4">
            <a href="#how-it-works" onClick={toggleMobileMenu} className="nav-link py-2">How It Works</a>
            <a href="#why-choose-us" onClick={toggleMobileMenu} className="nav-link py-2">Why Choose Us</a>
            <a href="#testimonials" onClick={toggleMobileMenu} className="nav-link py-2">Testimonials</a>
            <a href="#contact" onClick={toggleMobileMenu} className="nav-link py-2">Contact</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;