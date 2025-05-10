import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';
import { fadeIn } from '../utils/animations';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkest py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div variants={fadeIn(0.1)} initial="hidden" animate="visible">
            <div className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                <path d="M12 3a6 6 0 0 1-9 9 9 9 0 1 0 9-9Z"/>
              </svg>
              <span className="font-heading font-bold text-xl">SoftSell</span>
            </div>
            <p className="text-gray-400 mb-4">
              The easiest way to sell your unused software licenses and recover value from your IT investments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-primary" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-primary" aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-primary" aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-primary" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeIn(0.2)} initial="hidden" animate="visible">
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-purple-primary">How It Works</a></li>
              <li><a href="#why-choose-us" className="text-gray-400 hover:text-purple-primary">Why Choose Us</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-purple-primary">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-primary">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn(0.3)} initial="hidden" animate="visible">
            <h3 className="font-heading font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-primary">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-primary">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-primary">GDPR</a></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn(0.4)} initial="hidden" animate="visible">
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@softsell.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Tech Plaza, San Francisco, CA 94105</li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          variants={fadeIn(0.5)} 
          initial="hidden" 
          animate="visible"
          className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm"
        >
          <p>&copy; {currentYear} SoftSell, Inc. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;