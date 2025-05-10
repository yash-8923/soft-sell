import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { pulseGlow } from '../utils/animations';

const ChatWidget: React.FC = () => {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate('/chat');
  };

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-40"
      initial="initial"
      animate="animate"
      variants={pulseGlow}
    >
      <motion.button
        className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-primary to-purple-secondary text-white flex items-center justify-center shadow-xl hover:shadow-purple-primary/50 backdrop-blur-sm"
        onClick={handleChatClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-primary/20 to-transparent animate-pulse"></div>
        <FiMessageCircle size={28} className="relative z-10" />
      </motion.button>
    </motion.div>
  );
};

export default ChatWidget;