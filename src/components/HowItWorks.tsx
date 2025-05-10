import React from 'react';
import { motion } from 'framer-motion';
import { steps } from '../data/data';
import { cardStack, cardStackContainer } from '../utils/animations';
import { useInView } from 'react-intersection-observer';

const HowItWorks: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="how-it-works" className="py-20 bg-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="section-title"
          variants={cardStack}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          How It Works
        </motion.h2>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={cardStackContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className="card hover:bg-darkest border border-gray-800 group transform-gpu"
              variants={cardStack}
              custom={index}
              whileHover={{ 
                y: -10,
                rotateX: "5deg",
                boxShadow: "0 20px 40px -20px rgba(124, 58, 237, 0.3)"
              }}
            >
              <div className="flex flex-col items-center text-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <div className="w-16 h-16 flex items-center justify-center bg-purple-primary/10 rounded-full mb-4 group-hover:bg-purple-primary/20 transition-colors duration-500 relative">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-purple-primary relative z-10"
                  >
                    <step.icon size={28} />
                  </motion.div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-primary/20 to-transparent animate-pulse"></div>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-300 relative z-10">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;