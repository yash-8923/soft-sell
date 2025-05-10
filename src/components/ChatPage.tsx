import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { chatQuestions } from '../data/data';
import { fadeIn, scaleUp } from '../utils/animations';

interface Message {
  id: number;
  type: 'system' | 'user';
  content: string;
  timestamp: Date;
}

const ChatPage: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      type: 'system',
      content: "Hi, how can I help you today?",
      timestamp: new Date()
    }
  ]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleQuestionClick = async (question: string, answerId: number) => {
    // Add user message
    const userMessage: Message = {
      id: messages.length,
      type: 'user',
      content: question,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Add system response
    const answer = chatQuestions.find(q => q.id === answerId)?.answer || "I'm sorry, I couldn't find an answer.";
    const systemMessage: Message = {
      id: messages.length + 1,
      type: 'system',
      content: answer,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, systemMessage]);
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-darkest to-dark">
      {/* Enhanced header with glow */}
      <motion.div 
        className="bg-gradient-to-r from-purple-primary to-purple-secondary p-6 text-white flex items-center gap-4 shadow-lg relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50"></div>
        <button 
          onClick={() => navigate('/')}
          className="relative hover:bg-white/10 p-2 rounded-full transition-colors"
        >
          <FiArrowLeft size={24} />
        </button>
        <div className="relative">
          <h3 className="font-heading font-bold text-xl">Chat with SoftSell</h3>
          <p className="text-sm opacity-90">24/7 Support</p>
        </div>
      </motion.div>

      {/* Enhanced chat container with better scrolling */}
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar"
        style={{ 
          height: 'calc(100vh - 240px)',
          backgroundImage: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.05) 0%, transparent 70%)',
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <AnimatePresence mode="popLayout">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className={`flex gap-4 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.type === 'system' && (
                <div className="w-10 h-10 rounded-full bg-purple-primary/20 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FiMessageCircle className="text-purple-primary" size={20} />
                </div>
              )}
              <motion.div
                className={`max-w-[80%] rounded-2xl p-4 shadow-lg ${
                  message.type === 'user' 
                    ? 'bg-purple-primary text-white ml-auto' 
                    : 'bg-darker border border-gray-800 backdrop-blur-sm'
                }`}
                layout
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-base leading-relaxed">{message.content}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-primary/5 to-transparent rounded-2xl pointer-events-none"></div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Enhanced question buttons with glow */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 p-6 bg-darkest/80 border-t border-gray-800 backdrop-blur-lg"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {chatQuestions.map((chatQuestion) => (
            <motion.button
              key={chatQuestion.id}
              onClick={() => handleQuestionClick(chatQuestion.question, chatQuestion.id)}
              className="relative w-full text-left p-4 rounded-xl text-sm transition-all hover:bg-purple-primary hover:text-white bg-darker border border-gray-800 shadow-lg backdrop-blur-sm group"
              whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(124, 58, 237, 0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              {chatQuestion.question}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ChatPage;